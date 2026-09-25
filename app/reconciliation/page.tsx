import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  HardProblemsSection,
  LifecycleSection,
  ProofSystemSection,
  WorkspaceRegistrySection,
  CaseDetailSection,
  BalanceModelSection,
  MatchingTolerancesSection,
  ExceptionQueueSection,
  PeriodCloseSection,
  TaxBillingInterlockSection,
  ComplianceFilingInterlockSection,
  RemittanceInterlockSection,
  AccountingExportSection,
  EvidenceReplaySection,
  ShadowAssuranceSection,
  OperatingModelsSection,
  CoverageTruthSection,
  AIBoundarySection,
  TrustSection,
  ValuePropsSection,
  FAQSection,
  ConversionBannerSection,
} from "@/components/reconciliation";

export const metadata: Metadata = {
  title: "Reconciliation | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "Connect calculated, billed, collected, reported, paid, and exported positions dynamically. Trace alignment and highlight tax or regulatory variance automatically with complete replayable evidence files.",
};

export default function ReconciliationPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <HardProblemsSection />
      <LifecycleSection />
      <ProofSystemSection />
      <WorkspaceRegistrySection />
      <CaseDetailSection />
      <BalanceModelSection />
      <MatchingTolerancesSection />
      <ExceptionQueueSection />
      <PeriodCloseSection />
      <TaxBillingInterlockSection />
      <ComplianceFilingInterlockSection />
      <RemittanceInterlockSection />
      <AccountingExportSection />
      <EvidenceReplaySection />
      <ShadowAssuranceSection />
      <OperatingModelsSection />
      <CoverageTruthSection />
      <AIBoundarySection />
      <TrustSection />
      <ValuePropsSection />
      <FAQSection />
      <ConversionBannerSection />
    </div>
  );
}
