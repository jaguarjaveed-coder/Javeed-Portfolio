import { caseStudies, type CaseStudy } from "@/content";
import { highlightFigures } from "@/lib/figures";
import { Label, Section } from "./Section";
import { ResultChart } from "./charts/ResultChart";

// The one figure worth surfacing in the index, distilled from the study's
// own result string — never a number that isn't already there. Returns
// null (and the index entry just omits the line) if the shape of the
// result text ever changes and the pattern stops matching.
function getIndexFigure(study: CaseStudy): string | null {
  if (study.result === null) return null;

  switch (study.slug) {
    case "tvs-supply-chain-landing-page": {
      const m = study.result.match(/from\s+(\d+(?:\.\d+)?)%\s+to\s+(\d+(?:\.\d+)?)%/i);
      return m ? `${m[1]}% to ${m[2]}%` : null;
    }
    case "soti-linkedin-abm": {
      const m = study.result.match(/^Ten\s+qualified\s+first\s+conversations\s+in\s+(\d+)\s+days/i);
      return m ? `10 conversations in ${m[1]} days` : null;
    }
    case "eu-multi-market-test-rides": {
      const m = study.result.match(/(\d+(?:\.\d+)?%\s+conversion rate)/i);
      return m ? m[1] : null;
    }
    case "publisher-multi-channel-acquisition": {
      const m = study.result.match(
        /B2C[^\d]*(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)%[\s\S]*?B2B[^\d]*(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)%/i
      );
      return m ? `B2C ${m[1]}–${m[2]}% · B2B ${m[3]}–${m[4]}%` : null;
    }
    default:
      return null;
  }
}

export function CaseStudies() {
  return (
    <Section id="work">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Case studies
      </h2>

      <nav aria-label="Case study index">
        <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
          {caseStudies.map((study) => {
            const figure = getIndexFigure(study);
            return (
              <li key={study.slug} className="border-t border-rule pt-6">
                <a href={`#${study.slug}`} className="block">
                  <p className="font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
                    {study.client}
                  </p>
                  <p className="mt-2 font-display text-sm font-semibold leading-snug tracking-tight text-ink">
                    {study.headline}
                  </p>
                  {figure && (
                    <p className="mt-3 font-mono text-sm text-signal">{figure}</p>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-12 flex flex-col divide-y divide-rule">
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            id={study.slug}
            className="case-study-grid scroll-mt-[var(--header-h)] py-12 first:pt-8 last:pb-0"
          >
            <p className="[grid-area:client] font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
              {study.client}
            </p>

            <h3 className="[grid-area:headline] max-w-3xl font-display text-lg font-semibold leading-snug tracking-tight text-ink md:text-xl">
              {study.headline}
            </h3>

            <div className="[grid-area:meta] flex flex-col gap-1 font-mono text-xs text-ink-muted md:mt-1">
              <p>{study.employer}</p>
              <p>{study.period}</p>
              <p>{study.markets}</p>
            </div>

            <div className="[grid-area:body] flex max-w-3xl flex-col gap-7">
              <div>
                <Label>Problem</Label>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {study.problem}
                </p>
              </div>

              <div>
                <Label>Approach</Label>
                <ul className="mt-2 flex flex-col gap-2">
                  {study.approach.map((step) => (
                    <li key={step} className="flex gap-3 text-base leading-relaxed text-ink">
                      <span aria-hidden="true" className="text-ink-muted">
                        —
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {study.result !== null && (
                <div>
                  <Label>Result</Label>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    {highlightFigures(study.result)}
                  </p>
                  <ResultChart study={study} />
                </div>
              )}

              <div>
                <Label>Constraint</Label>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  {study.constraint}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
