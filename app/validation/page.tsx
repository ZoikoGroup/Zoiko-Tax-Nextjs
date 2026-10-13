import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  AreasSection,
  RecordSection,
  CurrentCoverageSection,
  GovernanceSection,
  EvidenceSection,
  UnavailableSection,
  NextStepSection,
  FAQSection,
  CTASection,
} from "@/components/validation";

export const metadata: Metadata = {
  title: "Coverage — Validation | ZoikoTax",
  description:
    "Validation is the stage in which a defined ZoikoTax capability or market scope is under formal validation. It does not establish production approval, deployment eligibility or a release date.",
};

export default function ValidationPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <AreasSection />
      <RecordSection />
      <CurrentCoverageSection />
      <GovernanceSection />
      <EvidenceSection />
      <UnavailableSection />
      <NextStepSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
