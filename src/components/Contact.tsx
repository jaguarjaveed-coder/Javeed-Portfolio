import { contact } from "@/content";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Contact
      </h2>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <p className="max-w-md text-md leading-relaxed text-ink-muted">{contact.note}</p>
        <dl className="flex flex-col gap-3 font-mono text-sm">
          <div className="flex gap-3">
            <dt className="text-ink-muted">Email</dt>
            <dd>
              <a
                href={`mailto:${contact.email}`}
                className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-ink-muted">LinkedIn</dt>
            <dd>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
              >
                {contact.linkedin.replace("https://", "")}
              </a>
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-ink-muted">GitHub</dt>
            <dd>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
              >
                {contact.github.replace("https://", "")}
              </a>
            </dd>
          </div>
          <div className="flex gap-3">
            <dt className="text-ink-muted">Based in</dt>
            <dd className="text-ink">{contact.city}</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
