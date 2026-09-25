import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  LifecycleSection,
  ProfileInventorySection,
  SemanticMappingSection,
  CommandCenterSection,
  ReconciliationSection,
  ShadowAssuranceSection,
  ReadinessGatesSection,
  DecisionPathsSection,
  CutoverProtocolSection,
  RollbackSection,
  TraceabilitySection,
  ArchitectureSection,
  OperatingMatrixSection,
  RolesAlignmentSection,
  AIBoundarySection,
  TrustSection,
  FAQSection,
  ConversionSection,
} from "@/components/migration-onboarding";

export const metadata: Metadata = {
  title: "Migration & Onboarding | ZoikoTax",
  description:
    "ZoikoTax provides a governed operational model for evaluating transition readiness across telecom fiscal workflows. Profile current systems, map controlled semantics, reconcile source positions, run non-impact Shadow comparisons, and review independent gates before any authority transition.",
};

export default function MigrationOnboardingPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer Section */}
      <DirectAnswerSection />

      {/* 03. Lifecycle Stages Section */}
      <LifecycleSection />

      {/* 04. Current-State Profile Inventory */}
      <ProfileInventorySection />

      {/* 05. Immutable Semantic Mapping Framework */}
      <SemanticMappingSection />

      {/* 06. Migration Command Center Workspace */}
      <CommandCenterSection />

      {/* 07. Legacy Baseline Comparison Reconciliation */}
      <ReconciliationSection />

      {/* 08. Shadow Assurance Pipeline Interlock */}
      <ShadowAssuranceSection />

      {/* 09. Independent Operational Readiness Gates */}
      <ReadinessGatesSection />

      {/* 10. Four Governed Decision Paths */}
      <DecisionPathsSection />

      {/* 11. Operational Cutover Transition Contract */}
      <CutoverProtocolSection />

      {/* 12. Fail-Safe & Rollback Protocols */}
      <RollbackSection />

      {/* 13. Verifiable Compliance Traceability Flow */}
      <TraceabilitySection />

      {/* 14. Fits the Architecture You Operate */}
      <ArchitectureSection />

      {/* 15. Onboarding Readiness vs. Active Market Coverage */}
      <OperatingMatrixSection />

      {/* 16. Roles & Responsibility Alignment */}
      <RolesAlignmentSection />

      {/* 17. The Governed AI Boundary: Advisory, Not Authoritative */}
      <AIBoundarySection />

      {/* 18. Secure-by-Design Compliance Architecture */}
      <TrustSection />

      {/* 19. FAQ: Direct Answers. No Inflated Claims. */}
      <FAQSection />

      {/* 20. Conversion CTA: Plan your transition */}
      <ConversionSection />
    </div>
  );
}
