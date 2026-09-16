import {
  CoverageSection,
  DirectAnswerSection,
  EvidenceSection,
  FaqSection,
  FinalCtaSection,
  HeroSection,
  InsightsSection,
  IntegrationsSection,
  LifecycleCapabilitiesSection,
  ShadowAssuranceSection,
  SolutionsSection,
  TelecomNativeSection,
  TrustArchitectureSection,
} from "@/components/home";

export default function Home() {
  return (
    <div className="bg-purple-50">
      <HeroSection />
      <DirectAnswerSection />
      <TelecomNativeSection />
      <LifecycleCapabilitiesSection />
      <ShadowAssuranceSection />
      <EvidenceSection />
      <CoverageSection />
      <IntegrationsSection />
      <SolutionsSection />
      <TrustArchitectureSection />
      <InsightsSection />
      <FaqSection />
      <FinalCtaSection />
    </div>
  );
}
