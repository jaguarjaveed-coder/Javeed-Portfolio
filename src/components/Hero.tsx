import Image from "next/image";
import { hero, meta } from "@/content";
import { findPublicAsset } from "@/lib/assets";
import { highlightOnly } from "@/lib/figures";
import { Section } from "./Section";

export function Hero() {
  const portraitSrc = findPublicAsset("javeed.jpg", "javeed.jpeg");

  return (
    <Section className="pt-20 pb-16 md:pt-28">
      <div className="hero-grid">
        <p className="[grid-area:eyebrow] font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
          {hero.eyebrow}
        </p>
        <h1 className="[grid-area:headline] max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl">
          {hero.headline}
        </h1>
        <p className="[grid-area:standfirst] max-w-2xl text-md leading-relaxed text-ink-muted">
          {highlightOnly(hero.standfirst, ["EUR 450,000"])}
        </p>

        <div className="[grid-area:portrait] w-full max-w-sm md:max-w-none">
          {portraitSrc ? (
            <div className="aspect-[4/5] w-full overflow-hidden">
              <Image
                src={portraitSrc}
                alt={`Portrait of ${meta.name}`}
                width={800}
                height={1000}
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[4/5] w-full bg-paper-alt" aria-hidden="true" />
          )}
        </div>

        <div className="[grid-area:meta] flex max-w-2xl flex-col gap-3 border-t border-rule pt-6 font-mono sm:flex-row sm:gap-10">
          <p className="text-xs text-ink-muted">{hero.availability}</p>
          <p className="text-sm text-ink">{hero.authorisation}</p>
        </div>
      </div>
    </Section>
  );
}
