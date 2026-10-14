import type { Metadata } from "next";
import {
  HeroSection,
  StartHereSection,
  ResourcesSection,
  IntegrationPathsSection,
  VersionSection,
  BoundarySection,
  FAQSection,
  CTASection,
} from "@/components/developers-portal";

export const metadata: Metadata = {
  title: "Developer Portal | ZoikoTax",
  description:
    "Explore source-governed ZoikoTax resources for APIs, SDKs, events, batch workflows, implementation guides, sandbox testing and enterprise integration paths.",
};

export default function DevelopersPortalPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <StartHereSection />
      <ResourcesSection />
      <IntegrationPathsSection />
      <VersionSection />
      <BoundarySection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
