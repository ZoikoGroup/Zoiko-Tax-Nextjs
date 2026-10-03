import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  SystemBoundarySection,
  QuoteCommitSection,
  TransactionPatternsSection,
  InvoiceIntegrationSection,
  DataMappingSection,
  ErrorsRecoverySection,
  WebhooksSection,
  EvidenceReplaySection,
  CoexistenceSection,
  SandboxSection,
  SecuritySection,
  ImplementationJourneySection,
  FAQSection,
  NextStepsSection,
} from "@/components/billing-bss";

export const metadata: Metadata = {
  title: "Billing & BSS | Developer Integrations | ZoikoTax",
  description:
    "Connect billing decisions without rebuilding your BSS. Integrate ZoikoTax into quote, commit, transaction and invoice flows while preserving clear system ownership and governed fiscal evidence.",
};

export default function BillingBssPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <SystemBoundarySection />
      <QuoteCommitSection />
      <TransactionPatternsSection />
      <InvoiceIntegrationSection />
      <DataMappingSection />
      <ErrorsRecoverySection />
      <WebhooksSection />
      <EvidenceReplaySection />
      <CoexistenceSection />
      <SandboxSection />
      <SecuritySection />
      <ImplementationJourneySection />
      <FAQSection />
      <NextStepsSection />
    </div>
  );
}
