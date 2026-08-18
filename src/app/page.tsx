import { BuildTrack } from "@/components/BuildTrack";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Scale } from "@/components/Scale";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Scale />
        <Logos />
        <CaseStudies />
        <BuildTrack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
