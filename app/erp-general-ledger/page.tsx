import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  SystemBoundariesSection,
  AccountingBridgeSection,
  InterfacePatternsSection,
  MappingDimensionsSection,
  EnterpriseScopeSection,
  CorrectionsSection,
  ReconciliationSection,
  BatchAsyncSection,
  EvidenceControlsSection,
  CoexistenceMigrationSection,
  SandboxReadinessSection,
  SafeUiStatesSection,
  FaqSection,
  ConversionSection,
} from "@/components/erp-general-ledger";

export const metadata: Metadata = {
  title: "ERP & General Ledger | Fiscal-to-Finance Accounting Bridge | ZoikoTax",
  description:
    "Bridge approved ZoikoTax fiscal outcomes into enterprise accounting and reconciliation workflows while preserving the ERP or general ledger as the finance system of record.",
};

export default function ErpGeneralLedgerPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* Hero + architecture notice */}
      <HeroSection />

      {/* Direct Answer */}
      <DirectAnswerSection />

      {/* 01. System Boundaries */}
      <SystemBoundariesSection />

      {/* 02. Accounting Bridge */}
      <AccountingBridgeSection />

      {/* 03. Interface Patterns */}
      <InterfacePatternsSection />

      {/* 04. Mapping & Dimensions */}
      <MappingDimensionsSection />

      {/* 05. Enterprise Scope */}
      <EnterpriseScopeSection />

      {/* 06. Corrections & Reprocessing */}
      <CorrectionsSection />

      {/* 07. Reconciliation Interfaces */}
      <ReconciliationSection />

      {/* 08. Batch, Async & Recovery */}
      <BatchAsyncSection />

      {/* 09. Evidence & Approval Controls */}
      <EvidenceControlsSection />

      {/* 10. Coexistence & Migration */}
      <CoexistenceMigrationSection />

      {/* 11. Sandbox & Readiness */}
      <SandboxReadinessSection />

      {/* 13. Safe UI States */}
      <SafeUiStatesSection />

      {/* 14. FAQ */}
      <FaqSection />

      {/* Conversion CTA */}
      <ConversionSection />
    </div>
  );
}
