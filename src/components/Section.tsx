import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

const GROUND_CLASSES = {
  paper: "bg-paper",
  "paper-alt": "bg-paper-alt",
  "ink-deep": "bg-ink-deep on-dark",
} as const;

export function Section({
  id,
  children,
  divider = false,
  ground = "paper",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  divider?: boolean;
  ground?: keyof typeof GROUND_CLASSES;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-[var(--header-h)] ${GROUND_CLASSES[ground]} ${divider ? "border-t border-rule" : ""}`}
    >
      <Reveal className={`mx-auto max-w-[68rem] px-6 py-16 sm:px-8 md:py-24 ${className}`}>
        {children}
      </Reveal>
    </section>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
      {children}
    </span>
  );
}
