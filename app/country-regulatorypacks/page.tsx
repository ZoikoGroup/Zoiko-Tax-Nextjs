import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  PackFinderDirectorySection,
  PackDetailCapabilityMatrixSection,
  ActivationModelSection,
  StatusLegendSection,
  EvidenceFreshnessSection,
  RelatedCoverageSection,
  FAQSection,
  ExactMarketScopeCalloutSection,
} from "@/components/country-regulatorypacks";

export const metadata: Metadata = {
  title: "Country & Regulatory Packs | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "See how ZoikoTax organizes jurisdiction-specific fiscal content and activates supported capabilities market by market. A pack is not a blanket country supported claim: each capability retains its own readiness state and scope.",
};

export default function CountryRegulatoryPacksPage() {
  return (
    <div className="bg-[#FAF3FF] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <PackFinderDirectorySection />
      <PackDetailCapabilityMatrixSection />
      <ActivationModelSection />
      <StatusLegendSection />
      <EvidenceFreshnessSection />
      <RelatedCoverageSection />
      <FAQSection />
      <ExactMarketScopeCalloutSection />
    </div>
  );
}
