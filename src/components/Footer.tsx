"use client";

import Link from "next/link";
import { contact, meta } from "@/content";
import { reopenConsentBanner } from "@/lib/consent";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[68rem] flex-col gap-4 px-6 py-10 font-mono text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {meta.name} · {contact.city}
        </p>
        <div className="flex gap-6">
          <Link
            href="/datenschutz"
            className="underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
          >
            Datenschutz
          </Link>
          <button
            type="button"
            onClick={reopenConsentBanner}
            className="cursor-pointer border-0 bg-transparent p-0 underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
          >
            Cookie-Einstellungen
          </button>
        </div>
      </div>
    </footer>
  );
}
