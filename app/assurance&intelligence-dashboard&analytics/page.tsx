import type { Metadata } from "next";
import {
  HeroSection,
  WhatMeansSection,
  TruthModelSection,
  DashboardAnatomySection,
  MetricRegistrySection,
  ScopeSegmentationSection,
  ExceptionVarianceSection,
  EvidenceReplaySection,
  ShadowAssuranceSection,
  MigrationReadinessSection,
  AiBoundarySection,
  TrustBoundariesSection,
  FAQSection,
  ClosingCTASection,
} from "@/components/dashboard-analytics";

export const metadata: Metadata = {
  title: "Dashboard & Analytics | ZoikoTax",
  description:
    "Explore how governed metrics, exceptions and evidence context can support operational review across approved ZoikoTax workflows.",
};

export default function DashboardAnalyticsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <WhatMeansSection />
      <TruthModelSection />
      <DashboardAnatomySection />
      <MetricRegistrySection />
      <ScopeSegmentationSection />
      <ExceptionVarianceSection />
      <EvidenceReplaySection />
      <ShadowAssuranceSection />
      <MigrationReadinessSection />
      <AiBoundarySection />
      <TrustBoundariesSection />
      <FAQSection />
      <ClosingCTASection />
    </div>
  );
}
