import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ComplexitySection,
  DeterminationSection,
  ComplianceSection,
  ObligationsSection,
  ReconciliationSection,
  EvidenceSection,
  LifecycleSection,
  ArchitectureSection,
  CoverageSection,
  WorkspaceSection,
  FAQSection,
  ConversionSection,
} from "@/components/mvno";

export const metadata: Metadata = {
  title: "MVNOs | ZoikoTax",
  description:
    "ZoikoTax is designed for virtual operators operating across full, light and hybrid models where service classification, commercial-chain relationships, operator dependencies and downstream fiscal responsibility must remain explicit. Connect supported tax determination, regulatory obligations, compliance, reconciliation and evidence through one governed telecom-specific control layer.",
};

export default function MVNOsPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer: What does ZoikoTax do for MVNOs? */}
      <DirectAnswerSection />

      {/* 03. MVNO Fiscal Complexity */}
      <ComplexitySection />

      {/* 04. Tax Determination */}
      <DeterminationSection />

      {/* 05. Compliance & Responsibility */}
      <ComplianceSection />

      {/* 06. Obligations */}
      <ObligationsSection />

      {/* 07. Reconciliation */}
      <ReconciliationSection />

      {/* 08. Evidence + Replay */}
      <EvidenceSection />

      {/* 09. Lifecycle */}
      <LifecycleSection />

      {/* 10. Architecture */}
      <ArchitectureSection />

      {/* 11. Coverage */}
      <CoverageSection />

      {/* 12. Workspace / Trust */}
      <WorkspaceSection />

      {/* 13. FAQ */}
      <FAQSection />

      {/* 14. Conversion / CTA */}
      <ConversionSection />
    </div>
  );
}
