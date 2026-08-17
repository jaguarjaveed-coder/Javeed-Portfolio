import type { CaseStudy } from "@/content";

// Every number below is parsed out of the case study's own `result` string
// at render time — nothing here is a hardcoded data point. If a parse
// fails, the caller gets null and falls back to the prose-only result.
const LABEL_STYLE = { fontFamily: "var(--font-mono)", fontWeight: 500 } as const;

function parseBeforeAfter(result: string): { before: number; after: number } | null {
  const m = result.match(/from\s+(\d+(?:\.\d+)?)%\s+to\s+(\d+(?:\.\d+)?)%/i);
  if (!m) return null;
  return { before: Number(m[1]), after: Number(m[2]) };
}

function parseTwoRanges(
  result: string
): { b2c: readonly [number, number]; b2b: readonly [number, number] } | null {
  const m = result.match(
    /B2C[^\d]*(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)%[\s\S]*?B2B[^\d]*(\d+(?:\.\d+)?)\s*[–—-]\s*(\d+(?:\.\d+)?)%/i
  );
  if (!m) return null;
  return { b2c: [Number(m[1]), Number(m[2])], b2b: [Number(m[3]), Number(m[4])] };
}

function BeforeAfterChart({ before, after }: { before: number; after: number }) {
  const baselineY = 56;
  const plotHeight = 40;
  const domainMax = Math.max(before, after) * 1.25;
  const slots = [
    { label: "Before", value: before, cx: 60 },
    { label: "After", value: after, cx: 180 },
  ];

  return (
    <svg viewBox="0 0 240 80" className="w-full max-w-[240px]" aria-hidden="true">
      <line x1={0} y1={baselineY} x2={240} y2={baselineY} className="stroke-rule" strokeWidth={1} />
      <line x1={0} y1={16} x2={0} y2={baselineY} className="stroke-rule" strokeWidth={1} />
      {slots.map((slot) => {
        const height = (slot.value / domainMax) * plotHeight;
        const y = baselineY - height;
        return (
          <g key={slot.label}>
            <rect x={slot.cx - 22} y={y} width={44} height={height} className="fill-signal" />
            <text x={slot.cx} y={y - 6} textAnchor="middle" fontSize={12} style={LABEL_STYLE} className="fill-signal">
              {slot.value}%
            </text>
            <text x={slot.cx} y={72} textAnchor="middle" fontSize={12} style={LABEL_STYLE} className="fill-ink-muted">
              {slot.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function RangeChart({
  b2c,
  b2b,
}: {
  b2c: readonly [number, number];
  b2b: readonly [number, number];
}) {
  const left = 44;
  const right = 210;
  const domainMax = Math.max(b2c[1], b2b[1]) * 1.2;
  const pxPerPct = (right - left) / domainMax;
  const rows = [
    { label: "B2C", range: b2c, cy: 24 },
    { label: "B2B", range: b2b, cy: 50 },
  ];

  return (
    <svg viewBox="0 0 240 80" className="w-full max-w-[240px]" aria-hidden="true">
      <line x1={left} y1={10} x2={left} y2={62} className="stroke-rule" strokeWidth={1} />
      {rows.map((row) => {
        const rx1 = left + row.range[0] * pxPerPct;
        const rx2 = left + row.range[1] * pxPerPct;
        return (
          <g key={row.label}>
            <text x={0} y={row.cy + 4} fontSize={12} style={LABEL_STYLE} className="fill-ink-muted">
              {row.label}
            </text>
            <rect x={rx1} y={row.cy - 7} width={rx2 - rx1} height={14} className="fill-signal" />
            <text x={rx2 + 6} y={row.cy + 4} fontSize={12} style={LABEL_STYLE} className="fill-signal">
              {row.range[0]}–{row.range[1]}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function ResultChart({ study }: { study: CaseStudy }) {
  if (study.result === null) return null;

  if (study.slug === "tvs-supply-chain-landing-page") {
    const parsed = parseBeforeAfter(study.result);
    if (!parsed) return null;
    return (
      <div
        role="img"
        aria-label={`Conversion rate before ${parsed.before}%, after ${parsed.after}%.`}
        className="mt-4"
      >
        <BeforeAfterChart before={parsed.before} after={parsed.after} />
      </div>
    );
  }

  if (study.slug === "publisher-multi-channel-acquisition") {
    const parsed = parseTwoRanges(study.result);
    if (!parsed) return null;
    return (
      <div
        role="img"
        aria-label={`B2C conversion rate ${parsed.b2c[0]} to ${parsed.b2c[1]} percent. B2B conversion rate ${parsed.b2b[0]} to ${parsed.b2b[1]} percent.`}
        className="mt-4"
      >
        <RangeChart b2c={parsed.b2c} b2b={parsed.b2b} />
      </div>
    );
  }

  return null;
}
