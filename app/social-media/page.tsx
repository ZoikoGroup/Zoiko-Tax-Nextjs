import type { Metadata } from "next";
import {
  HeroSection,
  DirectorySection,
  ChannelPurposeSection,
  VerificationGuidanceSection,
  CurrentnessSection,
  VisitorChoiceSection,
  FAQSection,
  RelatedResourcesSection,
  NextStepSection,
} from "@/components/social-media";

export const metadata: Metadata = {
  title: "Social Media | Resources | ZoikoTax",
  description:
    "A public verified social-profile directory that helps visitors find official ZoikoTax accounts and understand each channel's purpose.",
};

export default function SocialMediaPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectorySection />
      <ChannelPurposeSection />
      <VerificationGuidanceSection />
      <CurrentnessSection />
      <VisitorChoiceSection />
      <FAQSection />
      <RelatedResourcesSection />
      <NextStepSection />
    </div>
  );
}
