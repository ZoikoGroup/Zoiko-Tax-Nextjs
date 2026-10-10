import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  RequirementSourceSection,
  MarketCoverageSection,
  ObligationsLifecycleSection,
  ResponsibilitySection,
  RegulatoryChangeSection,
  ExceptionsSection,
  IntegrationsSection,
  AdjacentAssuranceSection,
  FAQSection,
  ScopedEvaluationSection,
} from "@/components/regulatory-compliance";

export const metadata: Metadata = {
  title: "Regulatory Compliance | ZoikoTax",
  description:
    "See how ZoikoTax is designed to connect telecom regulatory obligations, accountable workflows and evidence to governed fiscal decisions.",
};

export default function RegulatoryCompliancePage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <RequirementSourceSection />
      <MarketCoverageSection />
      <ObligationsLifecycleSection />
      <ResponsibilitySection />
      <RegulatoryChangeSection />
      <ExceptionsSection />
      <IntegrationsSection />
      <AdjacentAssuranceSection />
      <FAQSection />
      <ScopedEvaluationSection />
    </div>
  );
}
