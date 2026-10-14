import type { Metadata } from "next";
import {
  HeroSection,
  ReasonRouterSection,
  InquiryFormSection,
  TruthfulStatesSection,
  FAQSection,
  RelatedRoutesSection,
} from "@/components/general-contact";

export const metadata: Metadata = {
  title: "General Contact | Offices & Connect | ZoikoTax",
  description:
    "Choose the reason you are contacting ZoikoTax. Use the dedicated route for sales, support, technical help, partnerships, privacy, press, careers or security. Use the general business form only when none of those options fit.",
};

export default function ContactPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <ReasonRouterSection />
      <InquiryFormSection />
      <TruthfulStatesSection />
      <FAQSection />
      <RelatedRoutesSection />
    </div>
  );
}
