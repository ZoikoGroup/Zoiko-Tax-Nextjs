import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  HardProblemsSection,
  LifecycleSection,
  ProofSystemSection,
  RegistryMockupSection,
  EvidenceDrawerSection,
  ResponsibilityModelSection,
  TimelineModelSection,
  FilingRelationshipSection,
  ExceptionSection,
  FilingInterlockSection,
  TaxInterlockSection,
  AuditReplaySection,
  CoexistenceSection,
  CoverageTruthSection,
  AIBoundarySection,
  TrustSecuritySection,
  BuyerOutcomesSection,
  FAQSection,
  FinalCTABanner,
} from "@/components/regulatory-obligations";

export const metadata: Metadata = {
  title: "Regulatory Obligations | Telecom Fiscal Compliance | ZoikoTax",
  description:
    "ZoikoTax connects governed fiscal decisions to responsibility, registrations, reporting triggers, regulatory revenue and due-dated obligations.",
};

/**
 * Figma desktop frame 233:11402 / mobile frame 233:12494. Header and Footer come from the root layout.
 * Page base is white on desktop (pattern sections sit on it) and #faf3ff on mobile.
 */
export default function RegulatoryObligationsPage() {
  return (
    <div className="bg-[#faf3ff] lg:bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <HardProblemsSection />
      <LifecycleSection />
      <ProofSystemSection />
      <RegistryMockupSection />
      <EvidenceDrawerSection />
      <ResponsibilityModelSection />
      <TimelineModelSection />
      <FilingRelationshipSection />
      <ExceptionSection />
      <FilingInterlockSection />
      <TaxInterlockSection />
      <AuditReplaySection />
      <CoexistenceSection />
      <CoverageTruthSection />
      <AIBoundarySection />
      <TrustSecuritySection />
      <BuyerOutcomesSection />
      <FAQSection />
      <FinalCTABanner />
    </div>
  );
}
