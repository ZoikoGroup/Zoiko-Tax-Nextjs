import type { Metadata } from "next";
import {
  HeroSection,
  AuthoritySection,
  DataCategoriesSection,
  RoleModelSection,
  LifecycleSection,
  RequestRoutingSection,
  SubprocessorsSection,
  ResidencySecuritySection,
  DocumentsSection,
  CurrentnessSection,
  FAQSection,
  NextStepsSection,
} from "@/components/privacy-data-protection";

export const metadata: Metadata = {
  title: "Privacy & Data Protection | ZoikoTax Trust",
  description:
    "Review approved ZoikoTax privacy, processing and data-protection disclosures, with direct routes to authoritative policies, processing terms, residency information and governed request channels.",
};

export default function PrivacyDataProtectionPage() {
  return (
    <div className="w-full overflow-x-clip bg-purple-50">
      <HeroSection />
      <AuthoritySection />
      <DataCategoriesSection />
      <RoleModelSection />
      <LifecycleSection />
      <RequestRoutingSection />
      <SubprocessorsSection />
      <ResidencySecuritySection />
      <DocumentsSection />
      <CurrentnessSection />
      <FAQSection />
      <NextStepsSection />
    </div>
  );
}
