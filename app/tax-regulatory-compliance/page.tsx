import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  OutcomeModelSection,
  PolicyClassificationSection,
  JurisdictionEntitySection,
  CapabilityMapSection,
  ActionStatesSection,
  ComplianceWorkflowsSection,
  RemittanceReconciliationSection,
  EvidenceReplaySection,
  ChangeProductionSection,
  OperatingModelsSection,
  CoverageBuyingGateSection,
  TrustAiSection,
  FAQSection,
  ConversionSection,
} from "@/components/tax-regulatory-compliance";

export const metadata: Metadata = {
  title: "Tax & Regulatory Compliance | Know What Applies. Manage What Is Due. | ZoikoTax",
  description:
    "ZoikoTax connects telecom policy and service classification with jurisdiction, responsibility, supported tax determination, regulatory obligations, filing, reconciliation and evidence.",
};

export default function TaxRegulatoryCompliancePage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer Section */}
      <DirectAnswerSection />

      {/* 03. Outcome Model */}
      <OutcomeModelSection />

      {/* 04. Policy, Classification and Taxability */}
      <PolicyClassificationSection />

      {/* 05. Jurisdiction, Authority, Entity and Responsibility */}
      <JurisdictionEntitySection />

      {/* 06. Platform Capability Map */}
      <CapabilityMapSection />

      {/* 07. Regulatory Action States */}
      <ActionStatesSection />

      {/* 08. Compliance Workflows */}
      <ComplianceWorkflowsSection />

      {/* 09. Remittance & Reconciliation */}
      <RemittanceReconciliationSection />

      {/* 10. Evidence & Replay */}
      <EvidenceReplaySection />

      {/* 11. Controlled Content Release Path */}
      <ChangeProductionSection />

      {/* 12. Operating Models & Migration Paths */}
      <OperatingModelsSection />

      {/* 13. Coverage Buying Gate */}
      <CoverageBuyingGateSection />

      {/* 14. Coverage + Trust + AI */}
      <TrustAiSection />

      {/* 15. FAQ */}
      <FAQSection />

      {/* 16. Final Conversion Band */}
      <ConversionSection />
    </div>
  );
}
