import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  StartHereSection,
  CoreResourcesSection,
  GuidanceSection,
  FamiliesSection,
  ContractSection,
  PublicControlledSection,
  SecuritySection,
  SourcesSection,
  JourneysSection,
  ResilientSection,
  FAQSection,
  CtaSection,
} from "@/components/developer-overview";

export const metadata: Metadata = {
  title: "Developer Overview | Developers | ZoikoTax",
  description:
    "Build with ZoikoTax through governed integration paths: public APIs, SDKs, events, bulk patterns and integration guidance that preserve fiscal authority, evidence and security boundaries.",
};

export default function DeveloperOverviewPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <StartHereSection />
      <CoreResourcesSection />
      <GuidanceSection />
      <FamiliesSection />
      <ContractSection />
      <PublicControlledSection />
      <SourcesSection />
      <JourneysSection />
      <ResilientSection />
      <SecuritySection />
      <FAQSection />
      <CtaSection />
    </div>
  );
}
