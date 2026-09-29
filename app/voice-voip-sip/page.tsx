import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ComplexitySection,
  LifecycleSection,
  ContextModelSection,
  ClassificationSection,
  GeographySection,
  ResponsibilitySection,
  DeterminationSection,
  ObligationsSection,
  ReconciliationSection,
  EvidenceSection,
  ShadowSection,
  AISection,
  ArchitectureSection,
  TeamsSection,
  FAQSection,
  ConversionSection,
} from "@/components/voice-voip-sip";

export const metadata: Metadata = {
  title: "Voice, VoIP & SIP | Governed Telecom Tax Compliance | ZoikoTax",
  description:
    "ZoikoTax connects voice and IP communications facts to governed classification, jurisdiction, responsibility, tax determination, obligations, reconciliation, and evidence — without reducing complex voice models to a rate lookup.",
};

export default function VoiceVoipSipPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ComplexitySection />
      <LifecycleSection />
      <ContextModelSection />
      <ClassificationSection />
      <GeographySection />
      <ResponsibilitySection />
      <DeterminationSection />
      <ObligationsSection />
      <ReconciliationSection />
      <EvidenceSection />
      <ShadowSection />
      <AISection />
      <ArchitectureSection />
      <TeamsSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
