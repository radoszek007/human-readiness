import type { Metadata } from "next";
import AudienceSection from "@/components/AudienceSection";
import CoreMethodSection from "@/components/CoreMethodSection";
import DifferenceSection from "@/components/DifferenceSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import ProgramsSection from "@/components/ProgramsSection";
import TrustSection from "@/components/TrustSection";
import WhatIsResiliumSection from "@/components/WhatIsResiliumSection";

export const metadata: Metadata = {
  title: "Resilium pro organizace – systém připravenosti pro tlak, konflikt a riziko",
  description:
    "Praktický trénink pro firmy, týmy a organizace. Resilium rozvíjí schopnost lidí zachovat orientaci, komunikovat a jednat profesionálně v situacích tlaku, konfliktu a rizika."
};

export default function OrganizacePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <WhatIsResiliumSection />
        <CoreMethodSection />
        <DifferenceSection />
        <ProgramsSection />
        <AudienceSection />
        <ProcessSection />
        <TrustSection />
        <FounderSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
