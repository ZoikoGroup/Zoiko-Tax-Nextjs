import type { Metadata } from "next";
import {
  HeroSection,
  FamilyOverviewSection,
  CatalogueSection,
  DetailStructureSection,
  EvidenceRelationshipsSection,
  TelecomTaxRelevanceSection,
  InteroperabilitySection,
  AssuranceBoundariesSection,
  EvidenceCurrentnessSection,
  ReviewMethodologySection,
  BuyerPathwaysSection,
  FAQSection,
  ClosingCTASection,
} from "@/components/industry-standards";

export const metadata: Metadata = {
  title: "Industry Standards | ZoikoTax",
  description:
    "Explore how approved telecom, tax, security and interoperability references inform ZoikoTax design, controls and operating practices.",
};

export default function IndustryStandardsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <FamilyOverviewSection />
      <CatalogueSection />
      <DetailStructureSection />
      <EvidenceRelationshipsSection />
      <TelecomTaxRelevanceSection />
      <InteroperabilitySection />
      <AssuranceBoundariesSection />
      <EvidenceCurrentnessSection />
      <ReviewMethodologySection />
      <BuyerPathwaysSection />
      <FAQSection />
      <ClosingCTASection />
    </div>
  );
}
