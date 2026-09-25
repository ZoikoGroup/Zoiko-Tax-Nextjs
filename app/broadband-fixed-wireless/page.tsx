import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ChallengesSection,
  LoopSection,
  ContextModelSection,
  ClassificationSection,
  GeographySection,
  LegalEntitySection,
  DeterminationSection,
  ObligationsSection,
  ExemptionsSection,
  ReconciliationSection,
  EvidenceSection,
  ShadowSection,
  AISection,
  WorkspaceSection,
  CoverageSection,
  OutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/broadband-fixed-wireless";

export const metadata: Metadata = {
  title: "Broadband & Fixed Wireless | Recurring Connectivity Tax Compliance | ZoikoTax",
  description:
    "ZoikoTax helps broadband, ISP, and fixed-wireless providers connect service classification, service-geography context, fiscal determination, regulatory obligations, compliance, reconciliation, and evidence across recurring billing operations.",
};

export default function BroadbandFixedWirelessPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ChallengesSection />
      <LoopSection />
      <ContextModelSection />
      <ClassificationSection />
      <GeographySection />
      <LegalEntitySection />
      <DeterminationSection />
      <ObligationsSection />
      <ExemptionsSection />
      <ReconciliationSection />
      <EvidenceSection />
      <ShadowSection />
      <AISection />
      <WorkspaceSection />
      <CoverageSection />
      <OutcomesSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
