import type { ReactNode } from "react";

// Matches measured quantities — currency, percentage ranges (as one token,
// so "5–10%" reads as a single figure rather than two), multipliers,
// plus-counts, bare numbers — while skipping digits embedded in
// alphanumeric tokens like "B2B" or "C1" via the lookaround guards.
const FIGURE_PATTERN =
  /(?<![A-Za-z])(?:EUR|€)\s?\d[\d,.]*k?(?![A-Za-z])|(?<![A-Za-z])\d+(?:[.,]\d+)?\s*[–—-]\s*\d+(?:[.,]\d+)?%(?![A-Za-z])|(?<![A-Za-z])[−–—-]?\d+(?:[.,]\d+)?(?:%|×|\+)?(?![A-Za-z])/g;

// Wraps every measured quantity in a string with the signal-colour mono
// treatment. Scope this to copy that is known to contain only genuine
// metrics — case study figures, scale labels, role stats — never to
// dates, certification years or CEFR levels, which read as figures to
// the regex but are not "measured quantities" in the page's own rule.
export function highlightFigures(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(FIGURE_PATTERN)) {
    const index = match.index;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }
    nodes.push(
      <span key={key++} className="font-mono text-signal tabular-nums">
        {match[0]}
      </span>
    );
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

function escapeRegExp(term: string): string {
  return term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Wraps only the exact literal terms given — no pattern matching. Use this
// where a string has numbers that read as compound modifiers rather than
// standalone quantities (e.g. "a 56-account portfolio"), so the blanket
// FIGURE_PATTERN pass would over-highlight.
export function highlightOnly(text: string, terms: string[]): ReactNode[] {
  if (terms.length === 0) {
    return [text];
  }

  const pattern = new RegExp(terms.map(escapeRegExp).join("|"), "g");
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of text.matchAll(pattern)) {
    const index = match.index;
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index));
    }
    nodes.push(
      <span key={key++} className="font-mono text-signal tabular-nums">
        {match[0]}
      </span>
    );
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
