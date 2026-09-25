import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  BottleneckSection,
  LifecycleSection,
  WorkbenchSection,
  InspectionSection,
  LiabilityContextSection,
  TreasuryBoundarySection,
  ValidationGatesSection,
  ReviewApprovalSection,
  HandoffSection,
  TrackingSection,
  ExceptionsSection,
  ComplianceInterlockSection,
  ReconciliationSection,
  HistoricalReplaySection,
  OperatingModelsSection,
  IntegrationsSection,
  CoverageSection,
  AIBoundarySection,
  TrustSection,
  BuyerOutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/remittance-orchestration";

export const metadata: Metadata = {
  title: "Telecom Remittance Orchestration | ZoikoTax",
  description:
    "Govern remittance instructions and approvals without losing control. ZoikoTax connects approved telecom fiscal liabilities to governed remittance instructions, readiness checks, approvals, supported external handoff and evidence.",
};

export default function RemittanceOrchestrationPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Direct Answer */}
      <DirectAnswerSection />

      {/* 03. The Telecom Bottleneck */}
      <BottleneckSection />

      {/* 04. The Remittance Lifecycle */}
      <LifecycleSection />

      {/* 05. System Proof: Workbench & Registry */}
      <WorkbenchSection />

      {/* 06. In-Depth Inspection: Drawer */}
      <InspectionSection />

      {/* 07. Liability / Amount / Source Context */}
      <LiabilityContextSection />

      {/* 08. Payee, Channel & Treasury Boundary */}
      <TreasuryBoundarySection />

      {/* 09. Validation & Readiness Gates */}
      <ValidationGatesSection />

      {/* 10. Review, Approval & Segregation of Duties */}
      <ReviewApprovalSection />

      {/* 11. Execution / Handoff Boundary */}
      <HandoffSection />

      {/* 12. Acknowledgement & Settlement-Confirmation Tracking */}
      <TrackingSection />

      {/* 13. Exceptions, Rejections, Cancellations & Supersession */}
      <ExceptionsSection />

      {/* 14. Compliance & Filing Interlock */}
      <ComplianceInterlockSection />

      {/* 15. Reconciliation Interlock */}
      <ReconciliationSection />

      {/* 16. Evidence, Auditability & Historical Replay */}
      <HistoricalReplaySection />

      {/* 17. Operating Models */}
      <OperatingModelsSection />

      {/* 18. Integrations & Coexistence */}
      <IntegrationsSection />

      {/* 19. Coverage & Availability Truth */}
      <CoverageSection />

      {/* 20. Governed Cognition Boundary (AI) */}
      <AIBoundarySection />

      {/* 21. Trust, Security, Privacy & Sensitive Payment Data */}
      <TrustSection />

      {/* 22. Sales / Buyer Outcomes / Retention Logic */}
      <BuyerOutcomesSection />

      {/* 23. FAQ */}
      <FAQSection />

      {/* 24. Control The Handoff Conversion CTA */}
      <ConversionSection />
    </div>
  );
}
