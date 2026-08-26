"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CONSENT_REOPEN_EVENT, getConsent, setConsent } from "@/lib/consent";

// Fixed width (not flex-1) so "Ablehnen" and "Akzeptieren" are pixel-identical
// regardless of their different text lengths — flex-1 alone only equalises
// width when the row is stretched wider than its content, which it isn't here.
const BUTTON_CLASS =
  "w-36 border border-ink px-5 py-2.5 text-center font-mono text-xs uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false);

  useEffect(() => {
    // One-time, client-only localStorage read: must happen after mount since
    // localStorage isn't available during SSR, so the initial render (server
    // and first client pass) always renders nothing, then this may reveal
    // the banner a tick later.
    if (getConsent() === null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }

    function handleReopen() {
      setAnalyticsChecked(getConsent()?.analytics ?? false);
      setDetailsOpen(true);
      setVisible(true);
    }

    window.addEventListener(CONSENT_REOPEN_EVENT, handleReopen);
    return () => window.removeEventListener(CONSENT_REOPEN_EVENT, handleReopen);
  }, []);

  if (!visible) return null;

  function reject() {
    setConsent(false);
    setVisible(false);
  }

  function accept() {
    setConsent(true);
    setVisible(false);
  }

  function saveSelection() {
    setConsent(analyticsChecked);
    setVisible(false);
  }

  return (
    <div
      lang="de"
      role="region"
      aria-label="Cookie-Einwilligung"
      aria-live="polite"
      className="animate-fade-in fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper"
    >
      <div className="mx-auto max-w-[68rem] px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
              Cookies und Analyse
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              Diese Website nutzt Google Analytics, um die Nutzung zu verstehen. Die
              Verarbeitung erfolgt nur mit Ihrer Einwilligung. Sie können Ihre
              Entscheidung jederzeit über den Link „Cookie-Einstellungen&quot; am Ende
              jeder Seite ändern. Mehr dazu in der{" "}
              <Link
                href="/datenschutz"
                className="underline decoration-rule underline-offset-4 hover:decoration-ink"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>

            <button
              type="button"
              onClick={() => setDetailsOpen((open) => !open)}
              aria-expanded={detailsOpen}
              aria-controls="consent-details"
              className="mt-3 font-mono text-xs text-ink-muted underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
            >
              Details
            </button>

            {detailsOpen && (
              <div
                id="consent-details"
                className="mt-4 flex flex-col gap-3 border-t border-rule pt-4"
              >
                <label className="flex items-center gap-3 font-mono text-xs text-ink">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    className="h-4 w-4 accent-[var(--ink)]"
                  />
                  Notwendig
                </label>
                <label className="flex items-center gap-3 font-mono text-xs text-ink">
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                    className="h-4 w-4 accent-[var(--ink)]"
                  />
                  Analyse
                </label>
                <button
                  type="button"
                  onClick={saveSelection}
                  className="mt-1 w-fit border border-ink px-5 py-2 font-mono text-xs uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper"
                >
                  Auswahl speichern
                </button>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button type="button" onClick={reject} className={BUTTON_CLASS}>
              Ablehnen
            </button>
            <button type="button" onClick={accept} className={BUTTON_CLASS}>
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
