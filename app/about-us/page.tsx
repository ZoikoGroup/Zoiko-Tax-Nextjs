import type { Metadata } from "next";
import FaqSection from "@/components/home/FaqSection";
import {
  BrokenTodaySection,
  BuildingSection,
  CompanySection,
  CoverageSection,
  DecisionChainSection,
  DirectAnswerSection,
  FinalCtaSection,
  GovernedAiSection,
  HeroSection,
  IntendedDifferenceSection,
  MarketSection,
  MissionVisionSection,
  OperatingModelsSection,
  PrinciplesSection,
  ScopeSection,
  TrustSection,
} from "@/components/about";
import { aboutFaqs } from "@/components/about/about-data";

export const metadata: Metadata = {
  title: "About Us | ZoikoTax",
  description:
    "ZoikoTax is building connected fiscal infrastructure for global telecommunications - determination, obligations, compliance, reconciliation and evidence within one governed platform.",
};

export default function AboutUsPage() {
  return (
    <div className="bg-mauve">
      <HeroSection />
      <DirectAnswerSection />
      <BuildingSection />
      <ScopeSection />
      <MarketSection />
      <BrokenTodaySection />
      <DecisionChainSection />
      <IntendedDifferenceSection />
      <MissionVisionSection />
      <PrinciplesSection />
      <OperatingModelsSection />
      <CoverageSection />
      <GovernedAiSection />
      <CompanySection />
      <TrustSection />
      <FaqSection items={aboutFaqs} background="/about-us/pattern-faq.webp" />
      <FinalCtaSection />
    </div>
  );
}
