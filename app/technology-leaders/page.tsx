import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  PrinciplesSection,
  ComparisonSection,
  LifecycleSection,
  BoundariesSection,
  PlatformFitSection,
  IsolationSection,
  ResidencySection,
  DeploymentsSection,
  HandoffsSection,
  ResilienceSection,
  ObservabilitySection,
  ChangeSection,
  CoverageSection,
  MigrationSection,
  ShadowSection,
  OperatingModelsSection,
  EvidenceSection,
  AISection,
  ProofSection,
  RolesSection,
  ExceptionsSection,
  FAQSection,
  ConversionSection,
} from "@/components/technology-leaders";

export const metadata: Metadata = {
  title: "Technology Leaders | Governed Telecom Fiscal Architecture | ZoikoTax",
  description:
    "Evaluate how ZoikoTax fits enterprise architecture through governed APIs, regional execution, data-domain controls, tenant and legal-entity isolation, evidence-led operations, and measured migration.",
};

export default function TechnologyLeadersPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <PrinciplesSection />
      <ComparisonSection />
      <LifecycleSection />
      <BoundariesSection />
      <PlatformFitSection />
      <IsolationSection />
      <ResidencySection />
      <DeploymentsSection />
      <HandoffsSection />
      <ResilienceSection />
      <ObservabilitySection />
      <ChangeSection />
      <CoverageSection />
      <MigrationSection />
      <ShadowSection />
      <OperatingModelsSection />
      <EvidenceSection />
      <AISection />
      <ProofSection />
      <RolesSection />
      <ExceptionsSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
