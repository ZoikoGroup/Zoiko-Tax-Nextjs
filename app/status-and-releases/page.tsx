import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  HowToReadSection,
  StateVocabularySection,
  LatestChangesSection,
  ExpandedEventSpecimenSection,
  EdgeAndDegradedStatesSection,
  CurrentCoverageHandoffSection,
  PacksHandoffSection,
  CapabilityCoverageLinksSection,
  ProofAndBoundariesSection,
  FourPublicSurfacesSection,
  FAQSection,
  ConversionBannerSection,
} from "@/components/status-and-releases";

export const metadata: Metadata = {
  title: "Coverage Status & Releases | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "Track governed public changes to capability readiness and pack/release context by market and scope. Status & Releases explains the chronology; Coverage Overview remains the source for current public availability.",
};

export default function StatusAndReleasesPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <HowToReadSection />
      <StateVocabularySection />
      <LatestChangesSection />
      <ExpandedEventSpecimenSection />
      <EdgeAndDegradedStatesSection />
      <CurrentCoverageHandoffSection />
      <PacksHandoffSection />
      <CapabilityCoverageLinksSection />
      <ProofAndBoundariesSection />
      <FourPublicSurfacesSection />
      <FAQSection />
      <ConversionBannerSection />
    </div>
  );
}
