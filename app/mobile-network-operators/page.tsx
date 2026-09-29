import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ChallengesSection,
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
} from "@/components/mobile-network-operators";

export const metadata: Metadata = {
  title: "Mobile Network Operators | ZoikoTax",
  description:
    "ZoikoTax is designed for national and multinational mobile operators managing high transaction volumes, complex service portfolios, multiple legal entities and multiple fiscal authorities. Connect supported tax determination, regulatory obligations, compliance, reconciliation and evidence through one governed telecom-specific control layer.",
};

export default function MobileNetworkOperatorsPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Direct Answer: What does ZoikoTax do for Mobile Network Operators? */}
      <DirectAnswerSection />

      {/* 03. Telecom-native by design: Carrier tax is more than high-volume calculation */}
      <ChallengesSection />

      {/* 04. Governed control chain: Connect the fiscal decision chain */}
      <ControlChainSection />

      {/* 05. At-scale determination: Deterministic outcomes */}
      <DeterminationSection />

      {/* 06. Responsibility architecture: Make entity, authority and responsibility explicit */}
      <ResponsibilitySection />

      {/* 07. Obligations and compliance: Carry supported outcomes into compliance */}
      <ObligationsSection />

      {/* 08. Financial control: Connect invoice, remittance and reconciliation */}
      <FinancialControlSection />

      {/* 09. Evidence and replay: Preserve why the outcome was authoritative */}
      <EvidenceSection />

      {/* 10. Modernization paths: Modernize without forcing a big-bang cutover */}
      <ModernizationPathsSection />

      {/* 11. Integrations and developers: Fit governed fiscal control into carrier systems */}
      <IntegrationsSection />

      {/* 12. Coverage: Relevant to MNOs. Explicit about what is live */}
      <CoverageSection />

      {/* 13. Trust and procurement: Built for consequential fiscal work */}
      <TrustSection />

      {/* 14. FAQ: Direct answers. No inflated claims */}
      <FAQSection />

      {/* 15. Conversion CTA: See how ZoikoTax fits your operating model */}
      <ConversionSection />
    </div>
  );
}
