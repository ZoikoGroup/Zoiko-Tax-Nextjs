import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ArchitectureSection,
  ControlDomainsSection,
  IdentityAccessSection,
  DataProtectionSection,
  PlatformInfraSection,
  SecureDevSection,
  VulnerabilitySection,
  MonitoringSection,
  ResilienceSection,
  ThirdPartySection,
  EvidenceSection,
  CurrentnessSection,
  SafeStatesSection,
  FAQSection,
  NextStepsSection,
} from "@/components/trust-center-security";

export const metadata: Metadata = {
  title: "Security | ZoikoTax Trust",
  description:
    "ZoikoTax Trust Security defines an evidence-bound publication approach: verified security architecture and control summaries grounded in current, scoped sources — not inflated assurance claims.",
};

export default function TrustCenterSecurityPage() {
  return (
    <div className="w-full overflow-x-clip bg-purple-50">
      <HeroSection />
      <DirectAnswerSection />
      <ArchitectureSection />
      <ControlDomainsSection />
      <IdentityAccessSection />
      <DataProtectionSection />
      <PlatformInfraSection />
      <SecureDevSection />
      <VulnerabilitySection />
      <MonitoringSection />
      <ResilienceSection />
      <ThirdPartySection />
      <EvidenceSection />
      <CurrentnessSection />
      <SafeStatesSection />
      <FAQSection />
      <NextStepsSection />
    </div>
  );
}
