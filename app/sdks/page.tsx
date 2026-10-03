import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  FinderSection,
  CompatibilitySection,
  InstallUsageSection,
  ErrorsAuthoritySection,
  LifecycleSection,
  TrustSection,
  JourneysSection,
  RelatedRoutesSection,
  FAQSection,
  NextStepsSection,
} from "@/components/sdks";

export const metadata: Metadata = {
  title: "SDKs | Developers | ZoikoTax",
  description:
    "Find verified ZoikoTax client-library options and their approved contract relationships. SDK details appear only when published by governed sources.",
};

export default function SdksPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <FinderSection />
      <CompatibilitySection />
      <InstallUsageSection />
      <ErrorsAuthoritySection />
      <LifecycleSection />
      <TrustSection />
      
      <RelatedRoutesSection />
      <JourneysSection />
      <FAQSection />
      <NextStepsSection />
    </div>
  );
}
