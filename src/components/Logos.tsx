import Image from "next/image";
import { publicAssetExists } from "@/lib/assets";
import { Section } from "./Section";

// Shared treatment: grayscale + this opacity lands close to --ink-muted for
// a solid-ink mark. Checked against --paper-alt at render size — legible for
// all five; override per-logo here if a future asset needs more or less.
const DEFAULT_OPACITY = "opacity-80";

type Logo = { file: string; alt: string; width: number; height: number; opacity?: string; blend?: string };

// Intrinsic pixel dimensions of each source file, for next/image's aspect
// ratio — display size is fixed separately via the h-8 md:h-10 w-auto classes
// below. tvs.jpg has a white background baked into the source file (no
// alpha channel); mix-blend-multiply drops that white out against the
// section's ground instead of rendering it as a pale box. Verified against
// the actual ink colour sampled from the file: multiply darkens the mark
// itself by only ~3-5% versus the non-blended logos, well under a visible
// threshold, so it's safe to apply.
const LOGOS: readonly Logo[] = [
  { file: "tvs.jpg", alt: "TVS Supply Chain Solutions", width: 370, height: 269, blend: "mix-blend-multiply" },
  { file: "warner-bros.webp", alt: "Warner Bros. Pictures", width: 1920, height: 1774 },
  { file: "fox.webp", alt: "Fox", width: 3840, height: 1622 },
  { file: "20th-century.webp", alt: "20th Century Studios", width: 1920, height: 1595 },
  { file: "soti.svg", alt: "SOTI", width: 512, height: 512 },
];

export function Logos() {
  const logos = LOGOS.filter((logo) => publicAssetExists(`logos/${logo.file}`));
  if (logos.length === 0) return null;

  return (
    <Section ground="paper-alt" className="pt-10 pb-10 md:pt-14 md:pb-14">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Brands worked on
      </h2>
      {/* bg-paper-alt here (matching the section's own ground) gives
          mix-blend-multiply a same-stacking-context backdrop to key against —
          Reveal's scroll-in animation puts a transform on an ancestor once
          revealed, which would otherwise isolate the blend from the section
          background and neutralise it. */}
      <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 bg-paper-alt md:flex md:flex-nowrap md:items-center md:justify-center md:gap-x-16 md:gap-y-0">
        {logos.map((logo) => (
          <li key={logo.file} className="flex items-center justify-center">
            <Image
              src={`/logos/${logo.file}`}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className={`h-8 w-auto grayscale md:h-10 ${logo.opacity ?? DEFAULT_OPACITY} ${logo.blend ?? ""}`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
