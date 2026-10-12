import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  DoctrineComparisonSection,
  ProductionScopeAnatomySection,
  CurrentCoverageHandoffSection,
  StatusRecordAnatomySection,
  PreconditionsBoundariesSection,
  ProofCurrentnessSection,
  DegradedStatesSection,
  EvaluationJourneysSection,
  FAQSection,
  ConversionBannerSection,
} from "@/components/coverage-production";

export const metadata: Metadata = {
  title:
    "Production Coverage Doctrine | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "What Production means for ZoikoTax coverage. Production identifies an approved capability within a defined scope. Confirm current market records, conditions and governed authority.",
};

export default function CoverageProductionPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <DoctrineComparisonSection />
      <ProductionScopeAnatomySection />
      <CurrentCoverageHandoffSection />
      <StatusRecordAnatomySection />
      <PreconditionsBoundariesSection />
      <ProofCurrentnessSection />
      <DegradedStatesSection />
      <EvaluationJourneysSection />
      <FAQSection />
      <ConversionBannerSection />
    </div>
  );
}
