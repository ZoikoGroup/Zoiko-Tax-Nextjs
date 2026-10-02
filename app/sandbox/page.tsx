import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  GuidedJourneySection,
  ScenarioFinderSection,
  SelectedScenarioSection,
  DataSafetySection,
  ResultDiagnosticsSection,
  EnvironmentSection,
  ProductionReadinessSection,
  RelatedDocsSection,
  RelatedGuidanceSection,
  FaqSection,
  ConversionSection,
} from "@/components/sandbox";

export const metadata: Metadata = {
  title: "Sandbox | ZoikoTax",
  description: "Test ZoikoTax integration patterns in a governed non-production context.",
};

export default function SandboxPage() {
  return (
    <main className="w-full flex flex-col items-stretch overflow-hidden">
      {/* 01. Hero */}
      <HeroSection />

      {/* 02. Direct Answer */}
      <DirectAnswerSection />

      {/* 03. Guided Testing Journey */}
      <GuidedJourneySection />

      {/* 04. Scenario Finder */}
      <ScenarioFinderSection />

      {/* 05. Selected Scenario */}
      <SelectedScenarioSection />

      {/* 06. Data Safety */}
      <DataSafetySection />

      {/* 07. Result & Diagnostics */}
      <ResultDiagnosticsSection />

      {/* 08. Environment, Access & Authentication */}
      <EnvironmentSection />

      {/* 09. Production Readiness Boundary */}
      <ProductionReadinessSection />

      {/* 10. Related Docs */}
      <RelatedDocsSection />

      {/* 11. Related Guidance · Safe Continuity */}
      <RelatedGuidanceSection />

      {/* 12. FAQ */}
      <FaqSection />

      {/* 13. Conversion CTA */}
      <ConversionSection />
    </main>
  );
}
