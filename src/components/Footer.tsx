import Link from "next/link";
import { meta } from "@/content";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[68rem] flex-col gap-4 px-6 py-10 font-mono text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {meta.name} · {meta.location}
        </p>
        <div className="flex gap-6">
          <Link
            href="/impressum"
            className="underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
