import { promises as fs } from "fs";
import path from "path";
import { createHash } from "crypto";

export type AnalyticsEventName = "pageview" | "click" | "cta_click" | "form_submit" | "heartbeat" | "page_exit" | "scroll_depth";

export type AnalyticsEventInput = {
  event: AnalyticsEventName;
  path: string;
  title?: string;
  referrer?: string;
  target?: string;
  label?: string;
  sessionId?: string;
  visitorId?: string;
  durationMs?: number;
  scrollDepth?: number;
  ctaType?: string;
  isExit?: boolean;
  viewport?: {
    width?: number;
    height?: number;
  };
};

export type AnalyticsEvent = AnalyticsEventInput & {
  id: string;
  timestamp: string;
  host: string;
  ipHash: string;
  userAgent: string;
  device: "desktop" | "mobile" | "tablet" | "bot" | "unknown";
  country?: string;
};

export type AnalyticsSummary = {
  totals: {
    pageviews: number;
    visits: number;
    visitors: number;
    clicks: number;
    ctaClicks: number;
    formSubmits: number;
    avgTimeOnPageMs: number;
    bounceRate: number;
    conversionRate: number;
  };
  windowDays: number;
  topPages: MetricRow[];
  topReferrers: MetricRow[];
  topEvents: MetricRow[];
  topCtas: MetricRow[];
  devices: MetricRow[];
  daily: MetricRow[];
  longestPages: MetricRow[];
  scrollDepthByPage: MetricRow[];
  entryPages: MetricRow[];
  exitPages: MetricRow[];
  recentEvents: AnalyticsEvent[];
};

export type MetricRow = {
  label: string;
  value: number;
};

type PageVisit = {
  sessionId: string;
  path: string;
  startedAt: number;
  durationMs: number;
  maxScrollDepth: number;
  isExit: boolean;
};

const analyticsDirectory = path.join(process.cwd(), ".analytics");
const analyticsFile = path.join(analyticsDirectory, "events.json");
const maxStoredEvents = 10000;

export function isAnalyticsDashboardAuthorized(token?: string) {
  const expectedToken = process.env.ANALYTICS_DASHBOARD_TOKEN;
  return !expectedToken || token === expectedToken;
}

export async function recordAnalyticsEvent(
  input: AnalyticsEventInput,
  context: {
    host: string;
    ip?: string;
    userAgent?: string;
    country?: string;
  }
) {
  const event: AnalyticsEvent = {
    ...input,
    id: createHash("sha256").update(`${Date.now()}-${Math.random()}-${input.path}`).digest("hex").slice(0, 16),
    timestamp: new Date().toISOString(),
    host: context.host,
    ipHash: hashIp(context.ip),
    userAgent: context.userAgent ?? "",
    device: getDeviceType(context.userAgent ?? ""),
    country: context.country
  };

  const events = await readAnalyticsEvents();
  events.push(event);
  const trimmedEvents = events.slice(-maxStoredEvents);

  await fs.mkdir(analyticsDirectory, { recursive: true });
  await fs.writeFile(analyticsFile, JSON.stringify(trimmedEvents, null, 2), "utf8");

  return event;
}

export async function readAnalyticsEvents() {
  try {
    const file = await fs.readFile(analyticsFile, "utf8");
    const events = JSON.parse(file) as AnalyticsEvent[];
    return Array.isArray(events) ? events : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function getAnalyticsSummary(windowDays = 30): Promise<AnalyticsSummary> {
  const events = await readAnalyticsEvents();
  const now = Date.now();
  const windowStart = now - windowDays * 24 * 60 * 60 * 1000;
  const filteredEvents = events.filter((event) => new Date(event.timestamp).getTime() >= windowStart);
  const pageviews = filteredEvents.filter((event) => event.event === "pageview");
  const clicks = filteredEvents.filter((event) => event.event === "click" || event.event === "cta_click");
  const ctaClicks = filteredEvents.filter((event) => event.event === "cta_click");
  const formSubmits = filteredEvents.filter((event) => event.event === "form_submit");
  const pageVisits = buildPageVisits(filteredEvents);
  const visitorIds = new Set(filteredEvents.map((event) => event.visitorId || event.ipHash).filter(Boolean));
  const sessionIds = new Set(pageviews.map((event) => getEventSessionId(event)).filter(Boolean));
  const bouncedSessions = countBouncedSessions(pageviews, pageVisits);
  const avgTimeOnPageMs = average(pageVisits.map((visit) => visit.durationMs).filter((duration) => duration > 0));

  return {
    totals: {
      pageviews: pageviews.length,
      visits: sessionIds.size,
      visitors: visitorIds.size,
      clicks: clicks.length,
      ctaClicks: ctaClicks.length,
      formSubmits: formSubmits.length,
      avgTimeOnPageMs,
      bounceRate: sessionIds.size ? Math.round((bouncedSessions / sessionIds.size) * 100) : 0,
      conversionRate: sessionIds.size ? Math.round((formSubmits.length / sessionIds.size) * 100) : 0
    },
    windowDays,
    topPages: countBy(pageviews, (event) => event.path, 10),
    topReferrers: countBy(pageviews, (event) => normalizeReferrer(event.referrer), 10),
    topEvents: countBy(
      filteredEvents.filter((event) => event.event === "click" || event.event === "cta_click" || event.event === "form_submit"),
      (event) => event.label || event.target || event.event,
      10
    ),
    topCtas: countBy(ctaClicks, (event) => formatCtaLabel(event.ctaType, event.label), 10),
    devices: countBy(filteredEvents, (event) => event.device, 5),
    daily: countBy(pageviews, (event) => event.timestamp.slice(0, 10), windowDays).sort((a, b) => a.label.localeCompare(b.label)),
    longestPages: averageBy(pageVisits, (visit) => visit.path, (visit) => visit.durationMs, 10),
    scrollDepthByPage: averageBy(
      pageVisits.filter((visit) => visit.maxScrollDepth > 0),
      (visit) => visit.path,
      (visit) => visit.maxScrollDepth,
      10
    ),
    entryPages: getEntryPages(pageviews, 10),
    exitPages: getExitPages(pageviews, pageVisits, 10),
    recentEvents: filteredEvents.slice(-20).reverse()
  };
}

function buildPageVisits(events: AnalyticsEvent[]) {
  const pageVisits = new Map<string, PageVisit>();

  for (const event of events) {
    const sessionId = getEventSessionId(event);

    if (!sessionId || !event.path) {
      continue;
    }

    const key = `${sessionId}:${event.path}`;
    const timestamp = new Date(event.timestamp).getTime();
    const existingVisit = pageVisits.get(key);

    if (event.event === "pageview" && !existingVisit) {
      pageVisits.set(key, {
        sessionId,
        path: event.path,
        startedAt: timestamp,
        durationMs: 0,
        maxScrollDepth: 0,
        isExit: false
      });
      continue;
    }

    const visit =
      existingVisit ??
      {
        sessionId,
        path: event.path,
        startedAt: timestamp,
        durationMs: 0,
        maxScrollDepth: 0,
        isExit: false
      };

    if (typeof event.durationMs === "number") {
      visit.durationMs = Math.max(visit.durationMs, event.durationMs);
    }

    if (typeof event.scrollDepth === "number") {
      visit.maxScrollDepth = Math.max(visit.maxScrollDepth, event.scrollDepth);
    }

    if (event.event === "page_exit" || event.isExit) {
      visit.isExit = true;
    }

    pageVisits.set(key, visit);
  }

  return Array.from(pageVisits.values());
}

function countBouncedSessions(pageviews: AnalyticsEvent[], pageVisits: PageVisit[]) {
  const pageviewsBySession = groupBy(pageviews, getEventSessionId);
  const visitsBySession = groupBy(pageVisits, (visit) => visit.sessionId);
  let bouncedSessions = 0;

  for (const [sessionId, sessionPageviews] of pageviewsBySession.entries()) {
    const visits = visitsBySession.get(sessionId) ?? [];
    const maxDuration = Math.max(...visits.map((visit) => visit.durationMs), 0);

    if (sessionPageviews.length <= 1 && maxDuration < 15000) {
      bouncedSessions += 1;
    }
  }

  return bouncedSessions;
}

function getEntryPages(pageviews: AnalyticsEvent[], limit: number) {
  const pageviewsBySession = groupBy(pageviews, getEventSessionId);
  const entries: AnalyticsEvent[] = [];

  for (const sessionPageviews of pageviewsBySession.values()) {
    const firstPageview = sessionPageviews.sort(sortEventsByTime)[0];

    if (firstPageview) {
      entries.push(firstPageview);
    }
  }

  return countBy(entries, (event) => event.path, limit);
}

function getExitPages(pageviews: AnalyticsEvent[], pageVisits: PageVisit[], limit: number) {
  const exitVisits = pageVisits.filter((visit) => visit.isExit);

  if (exitVisits.length) {
    return countVisitsBy(exitVisits, (visit) => visit.path, limit);
  }

  const pageviewsBySession = groupBy(pageviews, getEventSessionId);
  const exits: AnalyticsEvent[] = [];

  for (const sessionPageviews of pageviewsBySession.values()) {
    const lastPageview = sessionPageviews.sort(sortEventsByTime).at(-1);

    if (lastPageview) {
      exits.push(lastPageview);
    }
  }

  return countBy(exits, (event) => event.path, limit);
}

function countBy(events: AnalyticsEvent[], getKey: (event: AnalyticsEvent) => string | undefined, limit: number): MetricRow[] {
  const counts = new Map<string, number>();

  for (const event of events) {
    const key = getKey(event)?.trim() || "Neznámé";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return mapCounts(counts, limit);
}

function countVisitsBy(events: PageVisit[], getKey: (event: PageVisit) => string | undefined, limit: number): MetricRow[] {
  const counts = new Map<string, number>();

  for (const event of events) {
    const key = getKey(event)?.trim() || "Neznámé";
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  return mapCounts(counts, limit);
}

function averageBy<T>(items: T[], getKey: (item: T) => string | undefined, getValue: (item: T) => number, limit: number): MetricRow[] {
  const groups = new Map<string, number[]>();

  for (const item of items) {
    const key = getKey(item)?.trim() || "Neznámé";
    const value = getValue(item);
    groups.set(key, [...(groups.get(key) ?? []), value]);
  }

  return Array.from(groups.entries())
    .map(([label, values]) => ({
      label,
      value: Math.round(average(values))
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
}

function mapCounts(counts: Map<string, number>, limit: number) {
  return Array.from(counts.entries())
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
}

function groupBy<T>(items: T[], getKey: (item: T) => string | undefined) {
  const groups = new Map<string, T[]>();

  for (const item of items) {
    const key = getKey(item);

    if (!key) {
      continue;
    }

    groups.set(key, [...(groups.get(key) ?? []), item]);
  }

  return groups;
}

function average(values: number[]) {
  if (!values.length) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function sortEventsByTime(a: AnalyticsEvent, b: AnalyticsEvent) {
  return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
}

function getEventSessionId(event: AnalyticsEvent) {
  return event.sessionId || `${event.ipHash}-${event.timestamp.slice(0, 10)}`;
}

function formatCtaLabel(ctaType?: string, label?: string) {
  const type = ctaType ? ctaType.replaceAll("_", " ") : "cta";
  return label ? `${type}: ${label}` : type;
}

function normalizeReferrer(referrer?: string) {
  if (!referrer) {
    return "Přímá návštěva";
  }

  try {
    const url = new URL(referrer);
    return url.hostname.replace(/^www\./, "");
  } catch {
    return referrer;
  }
}

function hashIp(ip?: string) {
  const salt = process.env.ANALYTICS_HASH_SALT ?? "resilium-analytics";
  return createHash("sha256").update(`${salt}:${ip ?? "unknown"}`).digest("hex").slice(0, 24);
}

function getDeviceType(userAgent: string): AnalyticsEvent["device"] {
  const value = userAgent.toLowerCase();

  if (!value) {
    return "unknown";
  }

  if (/bot|crawl|spider|slurp|facebookexternalhit|preview/.test(value)) {
    return "bot";
  }

  if (/ipad|tablet/.test(value)) {
    return "tablet";
  }

  if (/mobile|iphone|android/.test(value)) {
    return "mobile";
  }

  return "desktop";
}
