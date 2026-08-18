import { capabilities } from "@/content";
import { Label, Section } from "./Section";

type CapabilityItem = { name: string; detail: string };

// Every tier1 item must land in exactly one group — this is a display
// grouping over the existing content.ts list, not new data.
const TIER1_GROUPS = [
  {
    label: "Paid platforms",
    names: ["Google Ads", "Microsoft Ads", "LinkedIn Campaign Manager", "Meta Ads Manager"],
  },
  { label: "Measurement", names: ["GA4", "Google Tag Manager"] },
  { label: "Marketing operations", names: ["HubSpot"] },
  {
    label: "Reporting and bid management",
    names: ["Looker Studio, Datorama, TapClicks", "Acquisio"],
  },
] as const;

function CapabilityGrid({ items }: { items: readonly CapabilityItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.name}>
          <p className="font-display text-base font-semibold text-ink">{item.name}</p>
          <p className="mt-1 text-base leading-relaxed text-ink">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function TierHeading({ children }: { children: string }) {
  return (
    <h3 className="border-b border-rule pb-4 font-mono text-lg uppercase tracking-[0.03em] text-ink md:text-xl">
      {children}
    </h3>
  );
}

function Tier1({ label, items }: { label: string; items: readonly CapabilityItem[] }) {
  const byName = new Map(items.map((item) => [item.name, item]));

  return (
    <div>
      <TierHeading>{label}</TierHeading>
      <div className="mt-8 flex flex-col gap-10">
        {TIER1_GROUPS.map((group) => {
          const groupItems = group.names
            .map((name) => byName.get(name))
            .filter((item): item is CapabilityItem => item !== undefined);
          return (
            <div key={group.label}>
              <Label>{group.label}</Label>
              <div className="mt-4">
                <CapabilityGrid items={groupItems} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tier2({ label, items }: { label: string; items: readonly CapabilityItem[] }) {
  return (
    <div>
      <TierHeading>{label}</TierHeading>
      <div className="mt-8">
        <CapabilityGrid items={items} />
      </div>
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
        <Tier1 label={capabilities.tier1.label} items={capabilities.tier1.items} />
        <Tier2 label={capabilities.tier2.label} items={capabilities.tier2.items} />
      </div>
    </Section>
  );
}
