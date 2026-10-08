import type { Metadata } from "next";
import {
  HeroSection,
  DefinitionNavSection,
  RoleAuthoritySection,
  UseCaseTaxonomySection,
  HumanOversightSection,
  ModelInventorySection,
  InputOutputSafetySection,
  EvaluationEvidenceSection,
  MonitoringDriftSection,
  ChangeReleaseSection,
  ThirdPartyBoundariesSection,
  PrivacySecurityDataSection,
  TransparencyExplainabilitySection,
  CurrentnessSafeStatesSection,
  FAQSection,
  NextRoutesSection,
} from "@/components/ai-governance";

export const metadata: Metadata = {
  title: "AI Governance | Trust Center | ZoikoTax",
  description:
    "Understand the role of approved AI assistance, the governance of its scope and the evidence required to support public claims. Assistance is not autonomous fiscal authority.",
};

export default function AIGovernancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DefinitionNavSection />
      <RoleAuthoritySection />
      <UseCaseTaxonomySection />
      <HumanOversightSection />
      <ModelInventorySection />
      <InputOutputSafetySection />
      <EvaluationEvidenceSection />
      <MonitoringDriftSection />
      <ChangeReleaseSection />
      <ThirdPartyBoundariesSection />
      <PrivacySecurityDataSection />
      <TransparencyExplainabilitySection />
      <CurrentnessSafeStatesSection />
      <FAQSection />
      <NextRoutesSection />
    </div>
  );
}
