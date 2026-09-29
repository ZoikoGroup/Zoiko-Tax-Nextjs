import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ChallengesSection,
  LifecycleSection,
  ContextModelSection,
  ClassificationSection,
  JurisdictionSection,
  ResponsibilitySection,
  DeterminationSection,
  ObligationsSection,
  ReconciliationSection,
  EvidenceSection,
  WorkspaceSection,
  IntegrationsSection,
  CoverageSection,
  TeamsSection,
  FAQSection,
  ConversionSection,
} from "@/components/ucaas-ccaas-cpaas";

export const metadata: Metadata = {
  title: "UCaaS, CCaaS & CPaaS | Cloud Communications Tax Compliance | ZoikoTax",
  description:
    "ZoikoTax connects governed service classification, jurisdiction, fiscal responsibility, obligations, reconciliation, and evidence across cloud communications platforms that combine voice, messaging, APIs, software, and bundled services.",
};

export default function UcaasCcaasCpaasPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ChallengesSection />
      <LifecycleSection />
      <ContextModelSection />
      <ClassificationSection />
      <JurisdictionSection />
      <ResponsibilitySection />
      <DeterminationSection />
      <ObligationsSection />
      <ReconciliationSection />
      <EvidenceSection />
      <WorkspaceSection />
      <IntegrationsSection />
      <CoverageSection />
      <TeamsSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
