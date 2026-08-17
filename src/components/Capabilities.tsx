import { capabilities } from "@/content";
import { Section } from "./Section";

function Tier({ label, items }: { label: string; items: readonly { name: string; detail: string }[] }) {
  return (
    <div>
      <h3 className="border-b border-rule pb-4 font-mono text-lg uppercase tracking-[0.03em] text-ink md:text-xl">
        {label}
      </h3>
      <dl className="mt-8 flex flex-col divide-y divide-rule">
        {items.map((item) => (
          <div
            key={item.name}
            className="grid gap-2 py-6 first:pt-0 last:pb-0 md:grid-cols-[16rem_1fr] md:gap-10"
          >
            <dt className="font-display text-base font-semibold text-ink">{item.name}</dt>
            <dd className="text-base leading-relaxed text-ink">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function Capabilities() {
  return (
    <Section id="capabilities">
      <h2 className="font-mono text-xs uppercase tracking-[0.08em] text-ink-muted">
        Capabilities
      </h2>
      <div className="mt-10 flex flex-col gap-16">
        <Tier label={capabilities.tier1.label} items={capabilities.tier1.items} />
        <Tier label={capabilities.tier2.label} items={capabilities.tier2.items} />
      </div>
    </Section>
  );
}
