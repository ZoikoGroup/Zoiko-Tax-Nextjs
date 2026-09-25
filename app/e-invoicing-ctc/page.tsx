import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhyHardSection,
  LifecycleSection,
  ProductProofSection,
  WorkspaceSection,
  DetailPanelSection,
  ContextContractSection,
  ValidationSection,
  ResolutionSection,
  HandoffBoundarySection,
  ResponseStatesSection,
  StateModelSection,
  ComplianceInterlockSection,
  DeterminationInterlockSection,
  ReconciliationInterlockSection,
  EvidenceReplaySection,
  DeveloperSection,
  OperatingModelsSection,
  CoverageSection,
  AIBoundarySection,
  TrustSection,
  BuyerOutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/e-invoicing-ctc";

export const metadata: Metadata = {
  title: "E-Invoicing & CTC | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "ZoikoTax introduces deterministic compliance validation, jurisdiction-specific e-invoice schemas, and direct reporting handoffs for complex telecom transaction streams without replacing billing/ERP systems.",
};

export default function EInvoicingCTCPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <WhyHardSection />
      <LifecycleSection />
      <ProductProofSection />
      <WorkspaceSection />
      <DetailPanelSection />
      <ContextContractSection />
      <ValidationSection />
      <ResolutionSection />
      <HandoffBoundarySection />
      <ResponseStatesSection />
      <StateModelSection />
      <ComplianceInterlockSection />
      <DeterminationInterlockSection />
      <ReconciliationInterlockSection />
      <EvidenceReplaySection />
      <DeveloperSection />
      <OperatingModelsSection />
      <CoverageSection />
      <AIBoundarySection />
      <TrustSection />
      <BuyerOutcomesSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
