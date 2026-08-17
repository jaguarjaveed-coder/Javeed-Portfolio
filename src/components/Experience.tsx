import { roles } from "@/content";
import { highlightFigures } from "@/lib/figures";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" ground="paper-alt">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Experience
      </h2>
      <div className="mt-4 flex flex-col divide-y divide-rule">
        {roles.map((role) => (
          <div
            key={role.company}
            className="grid gap-4 py-10 first:pt-8 last:pb-0 md:grid-cols-[14rem_1fr] md:gap-10"
          >
            <div>
              <p className="font-mono text-xs text-ink-muted">{role.period}</p>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                {role.company}
              </h3>
              <p className="mt-1 font-mono text-sm text-ink-muted">{role.title}</p>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-relaxed text-ink">
                {highlightFigures(role.summary)}
              </p>
              <ul className="mt-4 flex max-w-2xl flex-col gap-2">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-base leading-relaxed text-ink">
                    <span aria-hidden="true" className="text-ink-muted">
                      —
                    </span>
                    <span>{highlightFigures(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
