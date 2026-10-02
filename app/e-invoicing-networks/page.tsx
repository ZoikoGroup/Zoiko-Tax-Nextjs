import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  SystemBoundarySection,
  AdapterOperatingModelSection,
  DocumentLifecycleSection,
  StatusAcknowledgementSection,
  IdentifiersSection,
  RetriesRecoverySection,
  EvidenceReplaySection,
  CoverageSection,
  SandboxReadinessSection,
  SecurityTrustSection,
  ImplementationJourneySection,
  UiStatesSection,
  FaqSection,
  NextStepsSection,
} from "@/components/e-invoicing-networks";

export const metadata: Metadata = {
  title: "E-Invoicing Networks | ZoikoTax",
  description:
    "Connect governed fiscal documents to supported networks and authorities through approved adapter architecture. Production support varies by country, network and capability.",
};

export default function EInvoicingNetworksPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* Hero + architecture notice */}
      <HeroSection />

      {/* Direct Answer */}
      <DirectAnswerSection />

      {/* 01. System boundary & responsibility */}
      <SystemBoundarySection />

      {/* 02. Adapter operating model */}
      <AdapterOperatingModelSection />

      {/* 03. Document lifecycle & pattern variants */}
      <DocumentLifecycleSection />

      {/* 04. Status & acknowledgement model */}
      <StatusAcknowledgementSection />

      {/* 05. Identifiers & correlation */}
      <IdentifiersSection />

      {/* 06. Retries, duplicate prevention & recovery */}
      <RetriesRecoverySection />

      {/* 08. Evidence, traceability & replay */}
      <EvidenceReplaySection />

      {/* 09. Coverage, network & authority availability */}
      <CoverageSection />

      {/* 10. Sandbox, testing & readiness */}
      <SandboxReadinessSection />

      {/* 11. Security, credentials & trust */}
      <SecurityTrustSection />

      {/* 12. Implementation journey & ownership */}
      <ImplementationJourneySection />

      {/* 13. UI states & safe recovery */}
      <UiStatesSection />

      {/* 14. Frequently asked questions */}
      <FaqSection />

      {/* 15. Next steps */}
      <NextStepsSection />
    </div>
  );
}
