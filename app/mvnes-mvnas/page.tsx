import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ComplexitySection,
  ControlChainSection,
  DeterminationSection,
  ResponsibilitySection,
  ObligationsSection,
  FinancialControlSection,
  EvidenceSection,
  ModernizationPathsSection,
  IntegrationsSection,
  CoverageSection,
  TrustSection,
  FAQSection,
  ConversionSection,
} from "@/components/mvne-mvna";

export const metadata: Metadata = {
  title: "MVNEs & MVNAs | Multi-Tenant Enablement & Aggregation Tax Control | ZoikoTax",
  description:
    "ZoikoTax provides multi-tenant tax determination, wholesale-to-retail attribution, regulatory fee aggregation, and auditable partner reconciliation for MVNE and MVNA platforms.",
};

export default function MVNEsMVNAsPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer Section */}
      <DirectAnswerSection />

      {/* 03. Complexity Section */}
      <ComplexitySection />

      {/* 04. MVNA Fiscal-Control Chain */}
      <ControlChainSection />

      {/* 05. Tax Determination */}
      <DeterminationSection />

      {/* 06. MVNE vs MVNA Responsibility Matrix */}
      <ResponsibilitySection />

      {/* 07. Obligations & Surcharge Programs */}
      <ObligationsSection />

      {/* 08. Financial Control & Settlement */}
      <FinancialControlSection />

      {/* 09. Evidence & Replay */}
      <EvidenceSection />

      {/* 10. Modernization Paths */}
      <ModernizationPathsSection />

      {/* 11. Integrations & BSS/OSS Fit */}
      <IntegrationsSection />

      {/* 12. Geographic Coverage */}
      <CoverageSection />

      {/* 13. Trust & Security */}
      <TrustSection />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Final Conversion */}
      <ConversionSection />
    </div>
  );
}
