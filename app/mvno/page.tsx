import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ComplexitySection,
  LifecycleSection,
  ContextModelSection,
  DeterminationSection,
  ObligationsSection,
  ComplianceSection,
  ReconciliationSection,
  EvidenceSection,
  ShadowSection,
  AISection,
  WorkspaceSection,
  ArchitectureSection,
  CoverageSection,
  OutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/mvno";

export const metadata: Metadata = {
  title: "MVNOs | Governed Tax, Responsibility & Obligations | ZoikoTax",
  description:
    "ZoikoTax helps MVNO brands govern service classification, commercial-chain context, operator dependencies, and downstream tax and regulatory obligations across full, light, and hybrid operating models.",
};

export default function MvnoPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ComplexitySection />
      <LifecycleSection />
      <ContextModelSection />
      <DeterminationSection />
      <ObligationsSection />
      <ComplianceSection />
      <ReconciliationSection />
      <EvidenceSection />
      <ShadowSection />
      <AISection />
      <WorkspaceSection />
      <ArchitectureSection />
      <CoverageSection />
      <OutcomesSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
