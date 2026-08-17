import { BuildTrack } from "@/components/BuildTrack";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Credentials } from "@/components/Credentials";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Scale } from "@/components/Scale";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Scale />
        <CaseStudies />
        <BuildTrack />
        <Experience />
        <Capabilities />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
