import type { Metadata } from "next";
import {
  HeroSection,
  SubscribeUpdatesSection,
  PotentialReaderInterestsSection,
  SubscriptionSection,
  VerificationSection,
  ManagePreferencesSection,
  PrivacyConsciousSection,
  TroubleshootingSection,
  NewsletterFaqSection,
  ContinueExploringSection,
  FinalCtaSection,
} from "@/components/newsletter";

export const metadata: Metadata = {
  title: "Newsletter | ZoikoTax",
  description:
    "Choose the ZoikoTax updates you want - with clear consent and easy control. A consent-led public subscription and preference-management destination for approved ZoikoTax updates.",
};

export default function NewsletterPage() {
  return (
    <div className="w-full bg-[#FAF3FF] overflow-x-clip">
      <HeroSection />
      <SubscribeUpdatesSection />
      <PotentialReaderInterestsSection />
      <SubscriptionSection />
      <VerificationSection />
      <ManagePreferencesSection />
      <PrivacyConsciousSection />
      <TroubleshootingSection />
      <NewsletterFaqSection />
      <ContinueExploringSection />
      <FinalCtaSection />
    </div>
  );
}
