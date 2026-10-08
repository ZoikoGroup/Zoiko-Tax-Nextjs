import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ComplexitySection,
  ContextModelSection,
  LifecycleSection,
  DeterminationSection,
  ObligationsSection,
  ContinuationSection,
  EvidenceSection,
  ModernizationSection,
  IntegrationsSection,
  CoverageSection,
  TrustSection,
  FAQSection,
  ConversionSection,
} from "@/components/ucaas-ccaas-cpaas";

export const metadata: Metadata = {
  title: "UCaaS, CCaaS & CPaaS | Cloud Communications Tax Compliance | ZoikoTax",
  description:
    "ZoikoTax connects governed service and bundle classification, jurisdiction, fiscal responsibility, obligations, compliance, reconciliation, and replayable evidence across UCaaS, CCaaS & CPaaS service models.",
};

export default function UcaasCcaasCpaasPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ComplexitySection />
      <ContextModelSection />
      <LifecycleSection />
      <DeterminationSection />
      <ObligationsSection />
      <ContinuationSection />
      <EvidenceSection />
      <ModernizationSection />
      <IntegrationsSection />
      <CoverageSection />
      <TrustSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
