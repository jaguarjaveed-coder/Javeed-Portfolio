"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { meta } from "@/content";

// Leading "/" so these resolve correctly from every route, not just when
// already on the homepage — /background and /datenschutz share this header.
// href without a "#" is a route link (Link, client-navigated); href with a
// "#" is a same-page anchor on the homepage (plain <a>, no client nav needed).
const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Campaign Reviewer", href: "/#campaign-reviewer" },
  { label: "Background", href: "/background" },
  { label: "Contact", href: "/#contact" },
] as const;

function routeOf(href: string): string {
  const hashIndex = href.indexOf("#");
  return hashIndex === -1 ? href : href.slice(0, hashIndex);
}

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[68rem] items-center justify-between px-6 sm:px-8">
        <p className="font-display text-sm font-semibold tracking-tight text-ink">
          {meta.name}
        </p>
        <nav aria-label="Section" className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === routeOf(link.href);
              const className = `font-mono text-sm ${isActive ? "text-ink" : "text-ink-muted"} hover:text-ink focus-visible:text-ink`;
              return (
                <li key={link.href}>
                  {link.href.includes("#") ? (
                    <a href={link.href} className={className}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className={className}>
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
