import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  DecisionModelSection,
  IngressContractSection,
  RunDefinitionSection,
  ComparisonDimensionsSection,
  OperationsWorkspaceSection,
  CrossLifecycleSection,
  CutoverGatesSection,
  GovernanceRulesSection,
  SystemArchitectureSection,
  AIBoundarySection,
  TrustSecuritySection,
  FAQSection,
  ConversionSection,
} from "@/components/shadow-assurance";

export const metadata: Metadata = {
  title: "Shadow Assurance | ZoikoTax",
  description:
    "ZoikoTax Shadow Assurance performs governed compliance comparison against incumbent or source outcomes without altering production billing or filing pipelines. Compare before you change production.",
};

export default function ShadowAssurancePage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer: What is Shadow Assurance? */}
      <DirectAnswerSection />

      {/* 03. Operational Decision Model: Connect, Compare, Decide */}
      <DecisionModelSection />

      {/* 04. Ingress Contract: Source Payload & Ingestion Metadata */}
      <IngressContractSection />

      {/* 05. Run Definition: Assurance Run Scope & Sampling */}
      <RunDefinitionSection />

      {/* 06. Comparison Dimensions: Multi-Tier Discrepancy Breakdown */}
      <ComparisonDimensionsSection />

      {/* 07. Operations Workspace: Assurance Operations Workspace */}
      <OperationsWorkspaceSection />

      {/* 08. Cross-Lifecycle Interlocks: Replay Outcomes Across Every Stage */}
      <CrossLifecycleSection />

      {/* 09. Migration Readiness: Governed Cutover Gates */}
      <CutoverGatesSection />

      {/* 10. Governance Rules: Access Control & Responsibility */}
      <GovernanceRulesSection />

      {/* 11. System Architecture: Isolated Assurance Processing */}
      <SystemArchitectureSection />

      {/* 12. Responsible AI Policy: Governed AI Boundary */}
      <AIBoundarySection />

      {/* 13. Trust & Security: Security, privacy & non-impact controls */}
      <TrustSecuritySection />

      {/* 14. FAQ: Direct answers. No inflated claims. */}
      <FAQSection />

      {/* 15. Conversion CTA: See how ZoikoTax fits your telecom architecture */}
      <ConversionSection />
    </div>
  );
}
