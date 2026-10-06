import type { Metadata } from "next";
import {
  HeroSection,
  TrustPostureSection,
  EvidenceStatusSection,
  QuestionRoutingSection,
  DataProcessingSection,
  BusinessContinuitySection,
  AiGovernanceSection,
  EvidenceAuditabilitySection,
  AccessibilitySection,
  ConditionalRequestSection,
  CurrentnessSection,
  FAQSection,
  NextStepsSection,
} from "@/components/trust-center";

export const metadata: Metadata = {
  title: "Trust Center | ZoikoTax",
  description: "Review ZoikoTax’s approved trust posture across security, privacy, data processing and residency, continuity, AI governance, evidence, accessibility and responsible disclosure.",
};

export default function TrustCenterPage() {
  return (
    <div className="w-full overflow-x-clip bg-purple-50">
      <HeroSection />
      <TrustPostureSection />
      <EvidenceStatusSection />
      <QuestionRoutingSection />
      <DataProcessingSection />
      <BusinessContinuitySection />
      <AiGovernanceSection />
      <EvidenceAuditabilitySection />
      <AccessibilitySection />
      <ConditionalRequestSection />
      <CurrentnessSection />
      <FAQSection />
      <NextStepsSection />
    </div>
  );
}
