import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Javeed Ahamed",
};

// TODO: Legal content for this page must be drafted and reviewed
// (§5 TMG requirements) before deploy. Do not ship this placeholder.
export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-[68rem] px-6 py-16 sm:px-8 md:py-24">
      <Link
        href="/"
        className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted underline decoration-rule underline-offset-4 hover:decoration-ink"
      >
        ← Back
      </Link>
      <h1 className="mt-8 font-display text-2xl font-semibold tracking-tight text-ink">
        Impressum
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
        TODO — legal notice content pending review. Not for deployment in this state.
      </p>
    </main>
  );
}
