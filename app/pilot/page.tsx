import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  DoctrineSection,
  ScopeSection,
  DeploymentSection,
  RequirementsSection,
  EvidenceSection,
  VerifyCoverageSection,
  EvaluationSection,
  ResponsibilitySection,
  TransitionsSection,
  FAQSection,
  CTASection,
} from "@/components/pilot";

export const metadata: Metadata = {
  title: "Coverage — Pilot | ZoikoTax",
  description:
    "Pilot identifies a restricted deployment stage for a specifically defined ZoikoTax capability. It does not establish general availability or production readiness.",
};

export default function PilotPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <DoctrineSection />
      <ScopeSection />
      <DeploymentSection />
      <RequirementsSection />
      <EvidenceSection />
      <VerifyCoverageSection />
      <EvaluationSection />
      <ResponsibilitySection />
      <TransitionsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
