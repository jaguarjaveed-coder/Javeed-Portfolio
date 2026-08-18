import Image from "next/image";
import Link from "next/link";
import { buildTrack } from "@/content";
import { findPublicAsset } from "@/lib/assets";
import { highlightFigures } from "@/lib/figures";
import { Section } from "./Section";

export function BuildTrack() {
  const screenshotSrc = findPublicAsset("campaign-reviewer.png");

  return (
    <Section id="campaign-reviewer" ground="ink-deep">
      <h2 className="font-display text-lg font-semibold tracking-tight text-ink md:text-xl">
        {buildTrack.headline}
      </h2>
      <p className="mt-4 max-w-2xl text-md leading-relaxed text-ink-muted">
        {highlightFigures(buildTrack.standfirst)}
      </p>
      <ul className="mt-6 flex max-w-2xl flex-col gap-2">
        {buildTrack.what.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed text-ink">
            <span aria-hidden="true" className="text-ink-muted">
              —
            </span>
            <span>{highlightFigures(item)}</span>
          </li>
        ))}
      </ul>

      {screenshotSrc ? (
        <Image
          src={screenshotSrc}
          alt="Campaign Reviewer scoring a piece of ad copy"
          width={2052}
          height={1465}
          sizes="(min-width: 68rem) 68rem, 100vw"
          className="mt-8 w-full border border-rule"
        />
      ) : (
        <div
          className="mt-8 aspect-[2052/1465] w-full border border-rule"
          aria-hidden="true"
        />
      )}

      <p className="mt-6 font-mono text-xs uppercase tracking-[0.06em] text-ink-muted">
        {buildTrack.stack}
      </p>
      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
        <a
          href={buildTrack.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
        >
          Live app ↗
        </a>
        <a
          href={buildTrack.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
        >
          Repository ↗
        </a>
      </div>

      <p className="mt-10 font-mono text-sm">
        <Link
          href="/background"
          className="text-ink underline decoration-rule underline-offset-4 hover:decoration-ink"
        >
          Full experience, capabilities and credentials →
        </Link>
      </p>
    </Section>
  );
}
