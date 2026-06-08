"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

type AnalyticsEventName = "pageview" | "click" | "cta_click" | "form_submit" | "heartbeat" | "page_exit" | "scroll_depth";

type AnalyticsPayload = {
  event: AnalyticsEventName;
  path: string;
  title?: string;
  referrer?: string;
  target?: string;
  label?: string;
  durationMs?: number;
  scrollDepth?: number;
  ctaType?: string;
  isExit?: boolean;
};

type PageTrackingState = {
  path: string;
  startedAt: number;
  activeStartedAt: number | null;
  activeDurationMs: number;
  reachedScrollDepths: Set<number>;
  exitSent: boolean;
};

const sessionKey = "resilium.analytics.sessionId";
const visitorKey = "resilium.analytics.visitorId";
const heartbeatMs = 15000;
const scrollDepthMilestones = [25, 50, 75, 100];

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const path = `${pathname}${query ? `?${query}` : ""}`;

    if (shouldSkipTracking(path)) {
      return;
    }

    const state: PageTrackingState = {
      path,
      startedAt: Date.now(),
      activeStartedAt: document.visibilityState === "visible" ? Date.now() : null,
      activeDurationMs: 0,
      reachedScrollDepths: new Set(),
      exitSent: false
    };

    sendAnalyticsEvent({
      event: "pageview",
      path,
      title: document.title,
      referrer: document.referrer
    });

    function sendHeartbeat() {
      if (document.visibilityState !== "visible") {
        return;
      }

      sendAnalyticsEvent({
        event: "heartbeat",
        path: state.path,
        title: document.title,
        durationMs: getActiveDuration(state)
      });
    }

    function sendExit() {
      if (state.exitSent) {
        return;
      }

      state.exitSent = true;
      closeActiveWindow(state);

      sendAnalyticsEvent({
        event: "page_exit",
        path: state.path,
        title: document.title,
        durationMs: getActiveDuration(state),
        scrollDepth: getCurrentScrollDepth(),
        isExit: true
      });
    }

    function handleVisibilityChange() {
      if (document.visibilityState === "hidden") {
        closeActiveWindow(state);
        sendExit();
        return;
      }

      state.exitSent = false;
      state.activeStartedAt = Date.now();
    }

    function handleScroll() {
      const currentDepth = getCurrentScrollDepth();

      for (const milestone of scrollDepthMilestones) {
        if (currentDepth >= milestone && !state.reachedScrollDepths.has(milestone)) {
          state.reachedScrollDepths.add(milestone);
          sendAnalyticsEvent({
            event: "scroll_depth",
            path: state.path,
            title: document.title,
            scrollDepth: milestone,
            durationMs: getActiveDuration(state)
          });
        }
      }
    }

    const heartbeatTimer = window.setInterval(sendHeartbeat, heartbeatMs);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("pagehide", sendExit);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    handleScroll();

    return () => {
      window.clearInterval(heartbeatTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("pagehide", sendExit);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      sendExit();
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target.closest("a,button") : null;

      if (!target) {
        return;
      }

      const href = target instanceof HTMLAnchorElement ? target.href : undefined;
      const label = getElementLabel(target);
      const ctaType = getCtaType(label, href);
      const basePayload = {
        path: getCurrentPath(),
        target: href || target.getAttribute("type") || target.tagName.toLowerCase(),
        label
      };

      sendAnalyticsEvent(
        ctaType
          ? {
              ...basePayload,
              event: "cta_click",
              ctaType
            }
          : {
              ...basePayload,
              event: "click"
            }
      );
    }

    function handleSubmit(event: SubmitEvent) {
      const form = event.target instanceof HTMLFormElement ? event.target : null;

      if (!form) {
        return;
      }

      sendAnalyticsEvent({
        event: "form_submit",
        path: getCurrentPath(),
        target: form.action,
        label: form.id || form.getAttribute("aria-label") || "Kontaktní formulář",
        ctaType: "form_submit"
      });
    }

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
    };
  }, []);

  return null;
}

function sendAnalyticsEvent(payload: AnalyticsPayload) {
  if (typeof window === "undefined" || shouldSkipTracking(payload.path)) {
    return;
  }

  if (navigator.doNotTrack === "1") {
    return;
  }

  const body = JSON.stringify({
    ...payload,
    sessionId: getSessionId(),
    visitorId: getVisitorId(),
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics", new Blob([body], { type: "application/json" }));
    return;
  }

  fetch("/api/analytics", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
    keepalive: true
  }).catch(() => undefined);
}

function getSessionId() {
  try {
    const existingValue = window.sessionStorage.getItem(sessionKey);

    if (existingValue) {
      return existingValue;
    }

    const value = `s_${crypto.randomUUID()}`;
    window.sessionStorage.setItem(sessionKey, value);
    return value;
  } catch {
    return `s_${Math.random().toString(36).slice(2)}`;
  }
}

function getVisitorId() {
  try {
    const existingValue = window.localStorage.getItem(visitorKey);

    if (existingValue) {
      return existingValue;
    }

    const value = `v_${crypto.randomUUID()}`;
    window.localStorage.setItem(visitorKey, value);
    return value;
  } catch {
    return `v_${Math.random().toString(36).slice(2)}`;
  }
}

function closeActiveWindow(state: PageTrackingState) {
  if (!state.activeStartedAt) {
    return;
  }

  state.activeDurationMs += Date.now() - state.activeStartedAt;
  state.activeStartedAt = null;
}

function getActiveDuration(state: PageTrackingState) {
  if (!state.activeStartedAt) {
    return state.activeDurationMs;
  }

  return state.activeDurationMs + Date.now() - state.activeStartedAt;
}

function getCurrentPath() {
  return `${window.location.pathname}${window.location.search}`;
}

function getCurrentScrollDepth() {
  const documentElement = document.documentElement;
  const scrollableHeight = documentElement.scrollHeight - window.innerHeight;

  if (scrollableHeight <= 0) {
    return 100;
  }

  return Math.min(100, Math.round(((window.scrollY + window.innerHeight) / documentElement.scrollHeight) * 100));
}

function getElementLabel(element: Element) {
  return (
    element.getAttribute("aria-label") ||
    element.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) ||
    element.getAttribute("href") ||
    element.tagName.toLowerCase()
  );
}

function getCtaType(label: string, href?: string) {
  const normalizedLabel = label.toLowerCase();
  const normalizedHref = href?.toLowerCase() ?? "";

  if (normalizedHref.startsWith("mailto:")) {
    return "email";
  }

  if (normalizedHref.includes("check.resilium.cz") || normalizedLabel.includes("readiness check")) {
    return "readiness_check";
  }

  if (normalizedHref.includes("#contact") || normalizedLabel.includes("kontakt") || normalizedLabel.includes("poptávku")) {
    return "contact";
  }

  if (normalizedLabel.includes("vybrat") || normalizedLabel.includes("program") || normalizedLabel.includes("konzultaci")) {
    return "program";
  }

  if (normalizedHref.includes("/metodika") || normalizedLabel.includes("metodiku") || normalizedLabel.includes("metodika")) {
    return "methodology";
  }

  return undefined;
}

function shouldSkipTracking(path: string) {
  return path.startsWith("/analytics") || path.startsWith("/api/");
}
