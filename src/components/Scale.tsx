import { scale } from "@/content";
import { Section } from "./Section";

export function Scale() {
  return (
    <Section ground="ink-deep">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Scale
      </h2>
      <ul className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
        {scale.map((item, i) => (
          <li
            key={item.label}
            className="animate-fade-rise border-t border-rule pt-6 first:border-t-0 first:pt-0 md:border-t-0 md:border-l md:pl-6 md:pt-0 md:first:border-l-0 md:first:pl-0"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <p className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
              {item.figure}
            </p>
            <p className="mt-4 font-mono text-sm leading-snug text-ink-muted">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
