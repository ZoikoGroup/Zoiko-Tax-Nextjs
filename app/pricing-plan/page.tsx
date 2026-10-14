import type { Metadata } from "next";
import {
  HeroSection,
  PricingPlanMenuSection,
  PricingModelGlanceSection,
  TaskNavigatorSection,
  PriceDriversSection,
  EstimatorSection,
  QuoteComponentsSection,
  RegionalCommercialTermsSection,
  SpecialProgramsSection,
  CustomerPathsSection,
  FaqAuthoritySection,
  ConversionSection,
} from "@/components/pricing-plan";

export const metadata: Metadata = {
  title: "Pricing Plan | Telecom Fiscal Compliance | ZoikoTax",
  description:
    "Understand how ZoikoTax pricing is structured — without hidden assumptions. Explore commercial dimensions including platform access, usage, capabilities, and approved terms.",
};

export default function PricingPlanPage() {
  return (
    <div className="bg-[#FAF3FF] w-full overflow-x-clip">
      <HeroSection />
      <PricingPlanMenuSection />
      <PricingModelGlanceSection />
      <TaskNavigatorSection />
      <PriceDriversSection />
      <EstimatorSection />
      <QuoteComponentsSection />
      <RegionalCommercialTermsSection />
      <SpecialProgramsSection />
      <CustomerPathsSection />
      <FaqAuthoritySection />
      <ConversionSection />
    </div>
  );
}
