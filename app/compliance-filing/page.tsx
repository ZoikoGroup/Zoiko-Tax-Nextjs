import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhyHardSection,
  LifecycleSection,
  ProductProofSection,
  PrepWorkpaperSection,
  ReviewDutiesSection,
  SubmissionTrackingSection,
  NoticesAmendmentsSection,
  ObligationsInterlockSection,
  RemittanceBoundarySection,
  EInvoicingBoundarySection,
  EvidenceReplaySection,
  OperatingModelsSection,
  CoverageSection,
  AIBoundarySection,
  TrustSection,
  BuyerOutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/compliance-filing";

export const metadata: Metadata = {
  title: "Compliance & Filing | Telecom Fiscal Compliance | ZoikoTax",
  description:
    "ZoikoTax connects governed regulatory obligations to supported return and filing workflows, bringing preparation, validation, review, approval, submission tracking and evidence into one controlled operating path.",
};

export default function ComplianceFilingPage() {
  return (
    <div className="bg-[#faf3ff]">
      <HeroSection />
      <DirectAnswerSection />
      <WhyHardSection />
      <LifecycleSection />
      <ProductProofSection />
      <PrepWorkpaperSection />
      <ReviewDutiesSection />
      <SubmissionTrackingSection />
      <NoticesAmendmentsSection />
      <ObligationsInterlockSection />
      <RemittanceBoundarySection />
      <EInvoicingBoundarySection />
      <EvidenceReplaySection />
      <OperatingModelsSection />
      <CoverageSection />
      <AIBoundarySection />
      <TrustSection />
      <BuyerOutcomesSection />
      <FAQSection />
      <ConversionSection />
    </div>
  );
}
