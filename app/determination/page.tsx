import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhyHardSection,
  DecisionModelSection,
  ContextContractSection,
  ResultExplanationSection,
  ExemptionsSection,
  EvidenceReplaySection,
  OperatingModelsSection,
  CoverageSection,
  DeveloperSection,
  AIBoundarySection,
  TrustSection,
  BuyerOutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/determination";

export const metadata: Metadata = {
  title: "Tax Determination | Telecom Fiscal Compliance | ZoikoTax",
  description:
    "ZoikoTax determines supported telecom taxes, fees, levies, and fiscal charges from governed transaction facts, service classification, jurisdiction, and responsibility while preserving rule, version, and trace evidence.",
};

export default function DeterminationPage() {
  return (
    <div className="bg-[#FAF8FA]">
      <HeroSection />
      <DirectAnswerSection />
      <WhyHardSection />
      <DecisionModelSection />
      <ContextContractSection />
      <ResultExplanationSection />
      <ExemptionsSection />
      <EvidenceReplaySection />
      <OperatingModelsSection />
      <CoverageSection />
      <DeveloperSection />
      <AIBoundarySection />
      <TrustSection />
      <BuyerOutcomesSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
