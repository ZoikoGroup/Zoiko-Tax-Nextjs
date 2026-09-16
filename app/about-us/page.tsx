import type { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  MissionSection,
  ScopeSection,
  BusinessModelSection,
  WhoWeServeSection,
  GeographicSection,
  InfrastructureSection,
  GovernanceSection,
  TrustStandardSection,
  TrustAssetSection,
  FeatureGridSection,
  CorporateInfoSection,
  AboutFaqSection,
  AboutFinalCtaSection,
} from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | ZoikoTax",
  description:
    "ZoikoTax is a governed tax determination and compliance platform built for telecom operators, MVNOs and MVNEs worldwide.",
};

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <MissionSection />
      <ScopeSection />
      <BusinessModelSection />
      <WhoWeServeSection />
      <GeographicSection />
      <InfrastructureSection />
      <GovernanceSection />
      <TrustStandardSection />
      <TrustAssetSection />
      <FeatureGridSection />
      <CorporateInfoSection />
      <AboutFaqSection />
      <AboutFinalCtaSection />
    </>
  );
}
