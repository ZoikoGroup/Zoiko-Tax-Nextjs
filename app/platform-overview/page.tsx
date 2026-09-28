import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  LifecycleSection,
  CapabilitiesSection,
  OperatingModelsSection,
  ShadowAssuranceSection,
  EvidenceSection,
  AIBoundarySection,
  CoverageSection,
  IntegrationsSection,
  TrustSection,
  FAQSection,
  ConversionSection,
} from "@/components/platform-overview";

export const metadata: Metadata = {
  title: "Platform Overview | Telecom Fiscal Compliance | ZoikoTax",
  description:
    "ZoikoTax connects telecom tax determination, regulatory obligations, compliance, reconciliation, and evidence in one telecom-specific fiscal platform designed to integrate with enterprise systems.",
};

export default function PlatformOverviewPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <LifecycleSection />
      <CapabilitiesSection />
      <OperatingModelsSection />
      <ShadowAssuranceSection />
      <EvidenceSection />
      <AIBoundarySection />
      <CoverageSection />
      <IntegrationsSection />
      <TrustSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
