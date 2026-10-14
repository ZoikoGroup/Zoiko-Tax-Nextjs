import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  StatesSection,
  BoundariesSection,
  DimensionsSection,
  GovernanceSection,
  StatusDecisionsSection,
  VerifyCoverageSection,
  NextStepSection,
  TrustSection,
  FreshnessSection,
  FAQSection,
  CTASection,
} from "@/components/research";

export const metadata: Metadata = {
  title: "Coverage — Research | ZoikoTax",
  description:
    "Research is a stage of evaluation in ZoikoTax Coverage Doctrine. It is not marketed as production and does not guarantee a pilot, release, customer access, tax result, or geographic availability.",
};

export default function ResearchPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <StatesSection />
      <BoundariesSection />
      <DimensionsSection />
      <GovernanceSection />
      <StatusDecisionsSection />
      <VerifyCoverageSection />
      <NextStepSection />
      <TrustSection />
      <FreshnessSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
