// Single source of truth for the tracking IDs and the consent contract shared
// between the inline bootstrap script (src/app/layout.tsx), the GTM snippet,
// the consent banner and the footer's reopen link. See
// _incoming/CONSENT_TRACKING.md, stage 2, for the full spec this implements.

export const GA_MEASUREMENT_ID = "G-E6ER0E3PMX";
export const GTM_CONTAINER_ID = "GTM-WG429J5P";

export const CONSENT_KEY = "consent-v1";
export const CONSENT_REOPEN_EVENT = "consent-banner:reopen";

export type ConsentDecision = {
  analytics: boolean;
  ts: number;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Returns null if absent or malformed — both cases mean "no decision yet",
// which is what tells the banner to show itself.
export function getConsent(): ConsentDecision | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed === "object" &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.ts === "number"
    ) {
      return parsed as ConsentDecision;
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): void {
  if (typeof window === "undefined") return;
  try {
    const decision: ConsentDecision = { analytics, ts: Date.now() };
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(decision));
  } catch {
    // Storage unavailable (private browsing, quota, disabled). The consent
    // update still fires below — it just won't persist across reloads.
  }
  window.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
  });
}

// Lets the footer's "Cookie-Einstellungen" link reopen the banner without a
// shared ancestor to lift state into — the banner listens for this on window.
export function reopenConsentBanner(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_REOPEN_EVENT));
}
