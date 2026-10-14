import type { Metadata } from "next";
import {
  HeroSection,
  RouteSection,
  DiligenceSection,
  IntentionsSection,
  OwnersSection,
  IntakeSection,
  StatesSection,
  FAQSection,
  CTASection,
} from "@/components/sales-inquiry";

export const metadata: Metadata = {
  title: "Sales Inquiry | ZoikoTax",
  description:
    "Have a commercial question about evaluating ZoikoTax? Start here, or use Book a Demo and the specialist routes for support, status, documentation, coverage and security.",
};

export default function SalesInquiryPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <RouteSection />
      <DiligenceSection />
      <IntentionsSection />
      <OwnersSection />
      <IntakeSection />
      <StatesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
