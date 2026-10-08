import type { Metadata } from "next";
import {
  HeroSection,
  AuthoritySection,
  CurrentInsightsSection,
  DiscoverySection,
  ReadingAnatomySection,
  SourceModelSection,
  CurrentnessSection,
  FAQSection,
  ContinueLearningSection,
  NextRoutesSection,
} from "@/components/telecom-tax-insights";

export const metadata: Metadata = {
  title: "Telecom Tax Insights | Resources | ZoikoTax",
  description:
    "Explore expert-reviewed, source-backed analysis of telecom tax, regulatory and fiscal-control topics, with clear dates, sources and operational context.",
};

export default function TelecomTaxInsightsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <AuthoritySection />
      <CurrentInsightsSection />
      <DiscoverySection />
      <ReadingAnatomySection />
      <SourceModelSection />
      <CurrentnessSection />
      <FAQSection />
      <ContinueLearningSection />
      <NextRoutesSection />
    </div>
  );
}
