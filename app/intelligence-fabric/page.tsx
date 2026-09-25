import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  BoundaryMatrixSection,
  LifecycleSection,
  ChangeMonitoringSection,
  DocumentExtractionSection,
  ClassificationSection,
  AnomalySection,
  ForecastingSection,
  OutcomeExplanationSection,
  AuthorityModelSection,
  WorkspaceProofSection,
  DetailDrawerSection,
  ReviewProcessSection,
  ConfidenceModelSection,
  PlatformInterlocksSection,
  EvidenceInterlockSection,
  RolesMatrixSection,
  OperatingModelsSection,
  CoverageSection,
  TrustCenterSection,
  FAQSection,
  ConversionSection,
} from "@/components/intelligence-fabric";

export const metadata: Metadata = {
  title: "Intelligence Fabric™ | Governed AI Layer | ZoikoTax",
  description:
    "ZoikoTax Intelligence Fabric™ is a governed, multi-model AI layer that monitors regulatory change, extracts documents, proposes classifications, investigates anomalies, and explains outcomes—without taking execution authority.",
};

export default function IntelligenceFabricPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <BoundaryMatrixSection />
      <LifecycleSection />
      <ChangeMonitoringSection />
      <DocumentExtractionSection />
      <ClassificationSection />
      <AnomalySection />
      <ForecastingSection />
      <OutcomeExplanationSection />
      <AuthorityModelSection />
      <WorkspaceProofSection />
      <DetailDrawerSection />
      <ReviewProcessSection />
      <ConfidenceModelSection />
      <PlatformInterlocksSection />
      <EvidenceInterlockSection />
      <RolesMatrixSection />
      <OperatingModelsSection />
      <CoverageSection />
      <TrustCenterSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
