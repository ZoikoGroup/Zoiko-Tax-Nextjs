import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  RealitiesSection,
  LifecycleSection,
  SchemaSection,
  ClassificationSection,
  ResponsibilitySection,
  ComplianceSection,
  ReconciliationSection,
  EvidenceSection,
  ShadowSection,
  AISection,
  WorkspaceSection,
  IntegrationsSection,
  OutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/mvne-mvna";

export const metadata: Metadata = {
  title: "MVNEs & MVNAs | Multi-Tenant Fiscal Control | ZoikoTax",
  description:
    "ZoikoTax is telecom fiscal-control infrastructure for MVNEs and MVNAs, keeping service classification, legal-entity context, fiscal responsibility, obligations, reconciliation, and evidence attributable and isolated per tenant.",
};

export default function MvneMvnaPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <RealitiesSection />
      <LifecycleSection />
      <SchemaSection />
      <ClassificationSection />
      <ResponsibilitySection />
      <ComplianceSection />
      <ReconciliationSection />
      <EvidenceSection />
      <ShadowSection />
      <AISection />
      <WorkspaceSection />
      <IntegrationsSection />
      <OutcomesSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
