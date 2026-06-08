import { NextResponse } from "next/server";
import { recordAnalyticsEvent, type AnalyticsEventInput } from "@/lib/analytics";

export const dynamic = "force-dynamic";

const allowedEvents = new Set(["pageview", "click", "cta_click", "form_submit", "heartbeat", "page_exit", "scroll_depth"]);

export async function POST(request: Request) {
  if (process.env.DISABLE_ANALYTICS === "true") {
    return NextResponse.json({ ok: true, disabled: true });
  }

  try {
    const body = (await request.json()) as Partial<AnalyticsEventInput>;

    const eventName = typeof body.event === "string" && allowedEvents.has(body.event) ? body.event : undefined;
    const eventPath = sanitizeValue(body.path, 250);

    if (!eventName || !eventPath) {
      return NextResponse.json({ ok: false, error: "Invalid analytics event." }, { status: 400 });
    }

    const headers = request.headers;
    const host = headers.get("host") ?? "unknown";
    const ip =
      headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headers.get("x-real-ip") ||
      headers.get("cf-connecting-ip") ||
      undefined;

    await recordAnalyticsEvent(
      {
        event: eventName,
        path: eventPath,
        title: sanitizeValue(body.title, 160),
        referrer: sanitizeValue(body.referrer, 300),
        target: sanitizeValue(body.target, 250),
        label: sanitizeValue(body.label, 160),
        sessionId: sanitizeValue(body.sessionId, 80),
        visitorId: sanitizeValue(body.visitorId, 80),
        durationMs: sanitizeNumber(body.durationMs, 0, 24 * 60 * 60 * 1000),
        scrollDepth: sanitizeNumber(body.scrollDepth, 0, 100),
        ctaType: sanitizeValue(body.ctaType, 80),
        isExit: body.isExit === true,
        viewport: sanitizeViewport(body.viewport)
      },
      {
        host,
        ip,
        userAgent: headers.get("user-agent") ?? "",
        country: headers.get("x-vercel-ip-country") ?? undefined
      }
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Analytics event could not be recorded." }, { status: 500 });
  }
}

function sanitizeValue(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.slice(0, maxLength) : undefined;
}

function sanitizeNumber(value: unknown, min: number, max: number) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return undefined;
  }

  return Math.min(max, Math.max(min, Math.round(value)));
}

function sanitizeViewport(value: unknown) {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const viewport = value as { width?: unknown; height?: unknown };
  const width = sanitizeNumber(viewport.width, 0, 10000);
  const height = sanitizeNumber(viewport.height, 0, 10000);

  if (!width || !height) {
    return undefined;
  }

  return { width, height };
}
