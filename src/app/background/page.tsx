import type { Metadata } from "next";
import Link from "next/link";
import { meta } from "@/content";
import { Capabilities } from "@/components/Capabilities";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: `${meta.name} — Background`,
  description: meta.description,
};

export default function BackgroundPage() {
  return (
    <>
      <main>
        <Section>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Background
          </h1>
        </Section>
        <Experience />
        <Capabilities />
        <Credentials />
      </main>
      <footer className="border-t border-rule">
        <div className="mx-auto max-w-[68rem] px-6 py-10 font-mono text-xs text-ink-muted sm:px-8">
          <Link
            href="/"
            className="underline decoration-rule underline-offset-4 hover:decoration-ink hover:text-ink"
          >
            ← Back to homepage
          </Link>
        </div>
      </footer>
    </>
  );
}
