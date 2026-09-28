import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ChallengesSection,
  LifecycleSection,
  ContextModelSection,
  OntologySection,
  GeographySection,
  LegalEntitySection,
  DeterminationSection,
  ObligationsSection,
  ExemptionsSection,
  ReconciliationSection,
  EvidenceSection,
  MigrationSection,
  IntegrationsSection,
  CoverageSection,
  FAQSection,
  BannerSection,
} from "@/components/iot-m2m-satellite";

export const metadata: Metadata = {
  title: "IoT, M2M & Satellite | Connected-Product Tax Compliance | ZoikoTax",
  description:
    "ZoikoTax helps communications businesses with IoT, M2M, and satellite models govern product ontology, device and connectivity facts, jurisdiction, responsibility, fiscal determination, obligations, reconciliation, and evidence.",
};

export default function IoTSatellitePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ChallengesSection />
      <LifecycleSection />
      <ContextModelSection />
      <OntologySection />
      <GeographySection />
      <LegalEntitySection />
      <DeterminationSection />
      <ObligationsSection />
      <ExemptionsSection />
      <ReconciliationSection />
      <EvidenceSection />
      <MigrationSection />
      <IntegrationsSection />
      <CoverageSection />
      <FAQSection />
      <BannerSection />
    </div>
  );
}
