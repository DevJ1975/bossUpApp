import { Hero } from "@/components/sections/Hero";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { Opportunity } from "@/components/sections/Opportunity";
import { Solution } from "@/components/sections/Solution";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { VideoSection } from "@/components/sections/VideoSection";
import { Outcomes } from "@/components/sections/Outcomes";
import { BuiltForATL } from "@/components/sections/BuiltForATL";
import { Partnership } from "@/components/sections/Partnership";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ClientsMarquee />
        <Opportunity />
        <Solution />
        <Features />
        <HowItWorks />
        <VideoSection />
        <Outcomes />
        <BuiltForATL />
        <Partnership />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
