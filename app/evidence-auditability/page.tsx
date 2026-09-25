import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  PrinciplesSection,
  AnatomySection,
  TraceabilitySection,
  HierarchySection,
  VersioningSection,
  ReplaySection,
  StateModelSection,
  WorkspaceSection,
  DrawerSection,
  LifecycleContractSection,
  InterlockSection,
  AIGovernanceSection,
  AssuranceModulesSection,
  PermissionsSection,
  SecurityBandSection,
  ExceptionsSection,
  ProcurementClaimsSection,
  SalesJourneySection,
  FAQSection,
  FinalBannerSection,
} from "@/components/evidence-auditability";

export const metadata: Metadata = {
  title: "Evidence & Auditability | ZoikoTax",
  description:
    "ZoikoTax Evidence & Auditability preserves replayable facts, rules, and approvals behind every fiscal outcome, establishing comprehensive audit certainty without replacing qualified tax counsel.",
};

export default function EvidenceAuditabilityPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <PrinciplesSection />
      <AnatomySection />
      <TraceabilitySection />
      <HierarchySection />
      <VersioningSection />
      <ReplaySection />
      <StateModelSection />
      <WorkspaceSection />
      <DrawerSection />
      <LifecycleContractSection />
      <InterlockSection />
      <AIGovernanceSection />
      <AssuranceModulesSection />
      <PermissionsSection />
      <SecurityBandSection />
      <ExceptionsSection />
      <ProcurementClaimsSection />
      <SalesJourneySection />
      <FAQSection />
      <FinalBannerSection />
    </div>
  );
}
