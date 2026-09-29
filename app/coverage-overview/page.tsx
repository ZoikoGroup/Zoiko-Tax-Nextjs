import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  CoverageDoctrineSection,
  HowToReadCoverageSection,
  StateVocabularySection,
  ExploreCoverageSection,
  MarketDetailSection,
  CapabilityCoverageSection,
  RegistryHandoffsSection,
  DegradedStatesSection,
  ProvenanceSection,
  FAQSection,
  ConversionBannerSection,
} from "@/components/coverage-overview";

export const metadata: Metadata = {
  title: "Coverage Overview | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "Check current ZoikoTax availability by market and capability. Coverage is governed at the capability level, so a market may be production-ready for one fiscal workflow and still be in research, validation, pilot, suspended or unavailable state for another.",
};

export default function CoverageOverviewPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <CoverageDoctrineSection />
      <HowToReadCoverageSection />
      <StateVocabularySection />
      <ExploreCoverageSection />
      <MarketDetailSection />
      <CapabilityCoverageSection />
      <RegistryHandoffsSection />
      <DegradedStatesSection />
      <ProvenanceSection />
      <FAQSection />
      <ConversionBannerSection />
    </div>
  );
}
