import { meta } from "@/content";

// Leading "/" so these resolve correctly from every route, not just when
// already on the homepage — /impressum and /datenschutz share this header.
const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Campaign Reviewer", href: "/#campaign-reviewer" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[68rem] items-center justify-between px-6 sm:px-8">
        <p className="font-display text-sm font-semibold tracking-tight text-ink">
          {meta.name}
        </p>
        <nav aria-label="Section" className="hidden md:block">
          <ul className="flex items-center gap-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm text-ink-muted hover:text-ink focus-visible:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
