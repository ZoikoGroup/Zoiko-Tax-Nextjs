import type { Metadata } from "next";
import {
  HeroSection,
  PublicationStandardSection,
  DiscoverySection,
  TopicArchitectureSection,
  ReadingAnatomySection,
  SourceIntegritySection,
  AccessPrivacySection,
  LifecycleSection,
  FAQSection,
  NextJourneysSection,
} from "@/components/guides-reports";

export const metadata: Metadata = {
  title: "Guides & Reports | Resources | ZoikoTax",
  description:
    "Explore source-backed guides, reports and implementation resources designed to stand on their own for evaluating and operating telecom tax.",
};

export default function GuidesReportsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <PublicationStandardSection />
      <DiscoverySection />
      <TopicArchitectureSection />
      <ReadingAnatomySection />
      <SourceIntegritySection />
      <AccessPrivacySection />
      <LifecycleSection />
      <FAQSection />
      <NextJourneysSection />
    </div>
  );
}
