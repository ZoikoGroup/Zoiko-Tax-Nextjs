import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ContextSection,
  ControlChainSection,
  DeterminationSection,
  AttributionSection,
  ObligationsSection,
  FinancialPositionsSection,
  EvidenceSection,
  ModernizationPathsSection,
  IntegrationsSection,
  CoverageSection,
  TrustSection,
  FAQSection,
  ConversionSection,
} from "@/components/wholesale-carriers-and-aggregators";

export const metadata: Metadata = {
  title: "Wholesale Carriers & Aggregators | Inter-Provider Fiscal Control | ZoikoTax",
  description:
    "ZoikoTax is designed for wholesale carriers and aggregators operating across inter-provider communications relationships where provider/counterparty context, legal-entity separation and fiscal responsibility must remain explicit.",
};

export default function WholesaleCarriersPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer Section */}
      <DirectAnswerSection />

      {/* 03. Wholesale Fiscal Context */}
      <ContextSection />

      {/* 04. Wholesale Fiscal-Control Chain */}
      <ControlChainSection />

      {/* 05. Counterparty-Aware Determination */}
      <DeterminationSection />

      {/* 06. Provider, Legal-Entity & Responsibility */}
      <AttributionSection />

      {/* 07. Obligations + Compliance */}
      <ObligationsSection />

      {/* 08. Invoice / Remittance / Reconciliation */}
      <FinancialPositionsSection />

      {/* 09. Evidence + Replay */}
      <EvidenceSection />

      {/* 10. Modernization Paths */}
      <ModernizationPathsSection />

      {/* 11. Integrations + Developer Fit */}
      <IntegrationsSection />

      {/* 12. Coverage */}
      <CoverageSection />

      {/* 13. Trust + Procurement */}
      <TrustSection />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Final Conversion */}
      <ConversionSection />
    </div>
  );
}
