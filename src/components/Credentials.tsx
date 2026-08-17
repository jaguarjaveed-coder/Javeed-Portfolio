import { credentials } from "@/content";
import { Label, Section } from "./Section";

export function Credentials() {
  return (
    <Section ground="paper-alt">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Credentials and languages
      </h2>
      <div className="mt-10 grid gap-12 md:grid-cols-3 md:gap-8">
        <div>
          <Label>Education</Label>
          <p className="mt-3 font-display text-base font-semibold text-ink">
            {credentials.degree.qualification}
          </p>
          <p className="mt-1 text-sm text-ink-muted">{credentials.degree.institution}</p>
          <p className="mt-1 font-mono text-xs text-ink-muted">{credentials.degree.note}</p>
        </div>

        <div>
          <Label>Certifications</Label>
          <ul className="mt-3 flex flex-col gap-2.5">
            {credentials.certifications.map((cert) => (
              <li key={cert} className="text-sm leading-relaxed text-ink">
                {cert}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Label>Languages</Label>
          <ul className="mt-3 flex flex-col gap-3.5">
            {credentials.languages.map((lang) => (
              <li key={lang.language}>
                <p className="font-display text-base font-semibold text-ink">{lang.language}</p>
                <p className="mt-0.5 font-mono text-xs text-ink-muted">{lang.level}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
