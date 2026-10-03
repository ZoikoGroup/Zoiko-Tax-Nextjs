import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhyCoexistenceSection,
  FederatedArchitectureSection,
  ShadowAssuranceSection,
  AdapterPatternSection,
  ComparisonModelSection,
  InvestigationSection,
  ReadinessGatesSection,
  CutoverRecoverySection,
  EvidenceSection,
  SandboxSection,
  SecuritySection,
  SafeStatesSection,
  FaqSection,
  ConversionSection,
} from "@/components/existing-tax-engines";

export const metadata: Metadata = {
  title: "Existing Tax Engines | Federated Coexistence & Migration | ZoikoTax",
  description:
    "Migrate tax engines without making cutover the first step. Use federated integration and Shadow Assurance patterns to compare ZoikoTax with an incumbent engine before governed production transition.",
};

export default function ExistingTaxEnginesPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* Hero + architecture notice */}
      <HeroSection />

      {/* Direct Answer */}
      <DirectAnswerSection />

      {/* 01 · Why coexistence before cutover */}
      <WhyCoexistenceSection />

      {/* 02 · Federated architecture */}
      <FederatedArchitectureSection />

      {/* 03 · Shadow Assurance */}
      <ShadowAssuranceSection />

      {/* 04 · Adapter pattern & lifecycle */}
      <AdapterPatternSection />

      {/* 05 · Comparison & discrepancy model */}
      <ComparisonModelSection />

      {/* 06 · Investigation & resolution */}
      <InvestigationSection />

      {/* 07 · Migration readiness gates */}
      <ReadinessGatesSection />

      {/* 08 · Approval-driven cutover + 09 · Rollback, fallback & recovery */}
      <CutoverRecoverySection />

      {/* 10 · Evidence, replay & migration audit trail */}
      <EvidenceSection />

      {/* 11 · Sandbox, validation & readiness */}
      <SandboxSection />

      {/* 12 · Security / privacy / trust */}
      <SecuritySection />

      {/* 13 · Safe state patterns */}
      <SafeStatesSection />

      {/* 14 · FAQ */}
      <FaqSection />

      {/* Conversion CTA */}
      <ConversionSection />
    </div>
  );
}
