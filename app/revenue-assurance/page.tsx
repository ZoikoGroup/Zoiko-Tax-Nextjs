import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ControlModelSection,
  StagesSection,
  BaselineSection,
  ArchitectureSection,
  FiscalLayersSection,
  ShadowAssuranceSection,
  RecoverySection,
  StateGrammarSection,
  CapabilityMapSection,
  EvidenceReplaySection,
  ContinuitySection,
  OperatingModelsSection,
  CoverageSection,
  AIAssistanceSection,
  FAQSection,
  CTASection,
} from "@/components/revenue-assurance";

export const metadata: Metadata = {
  title: "Revenue Assurance | ZoikoTax",
  description:
    "ZoikoTax helps Revenue Assurance teams identify missing tax/fees, classification anomalies and reconciliation breaks by connecting governed comparison, investigation, reconciliation and replayable evidence.",
};

export default function RevenueAssurancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ControlModelSection />
      <StagesSection />
      <BaselineSection />
      <ArchitectureSection />
      <FiscalLayersSection />
      <ShadowAssuranceSection />
      <RecoverySection />
      <StateGrammarSection />
      <CapabilityMapSection />
      <EvidenceReplaySection />
      <ContinuitySection />
      <OperatingModelsSection />
      <CoverageSection />
      <AIAssistanceSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
