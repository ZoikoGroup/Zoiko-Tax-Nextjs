import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  ControlModelSection,
  CapabilityMapSection,
  StatesSection,
  FilingSection,
  ErpHandoffSection,
  EvidenceReplaySection,
  ContinuitySection,
  OperatingModelsSection,
  CoverageSection,
  TrustAISection,
  FAQSection,
  CTASection,
} from "@/components/cfo-finance";

export const metadata: Metadata = {
  title: "CFO & Finance | ZoikoTax",
  description:
    "ZoikoTax connects governed telecom fiscal outcomes with liability, recovery, accrual, filing/remittance positions, reconciliation, accounting-control outputs and replayable evidence.",
};

export default function CfoFinancePage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <ControlModelSection />
      <CapabilityMapSection />
      <StatesSection />
      <FilingSection />
      <ErpHandoffSection />
      <EvidenceReplaySection />
      <ContinuitySection />
      <OperatingModelsSection />
      <CoverageSection />
      <TrustAISection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
