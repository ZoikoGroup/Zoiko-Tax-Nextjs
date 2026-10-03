import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  LatestReleaseSection,
  ChangesSection,
  ExpandedRecordSection,
  CompatibilityActionSection,
  DeprecationsSection,
  SurfaceMatrixSection,
  MigrationReferencesSection,
  ArchiveSection,
  RecoverySection,
  FAQSection,
  RelatedResourcesSection,
  NextStepsSection,
} from "@/components/api-changelog";

export const metadata: Metadata = {
  title: "API Changelog | Developers | ZoikoTax",
  description:
    "Track ZoikoTax API changes with compatibility context. Review approved developer-facing version and compatibility changes across ZoikoTax integration surfaces.",
};

export default function ApiChangelogPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <LatestReleaseSection />
      <ChangesSection />
      <ExpandedRecordSection />
      <CompatibilityActionSection />
      <DeprecationsSection />
      <SurfaceMatrixSection />
      <MigrationReferencesSection />
      <ArchiveSection />
      <RecoverySection />
      <FAQSection />
      <RelatedResourcesSection />
      <NextStepsSection />
    </div>
  );
}
