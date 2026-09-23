import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WhyHardSection,
  DecisionChainSection,
  ProductProofSection,
  ApplicabilityMatrixSection,
  LifecycleSection,
  InterlockSection,
  HistoricalReplaySection,
  OperatingModelsSection,
  CoverageSection,
  AIBoundarySection,
  TrustSection,
  BuyerOutcomesSection,
  FAQSection,
  ConversionSection,
} from "@/components/exemptions-certificates";

export const metadata: Metadata = {
  title: "Exemptions & Certificates | Telecom Fiscal Compliance | ZoikoTax",
  description:
    "ZoikoTax is designed to manage supported exemption evidence, certificates and applicability controls so telecom fiscal workflows can evaluate the right context for the right subject, scope and period — with traceable evidence behind consequential use.",
};

export default function ExemptionsCertificatesPage() {
  return (
    <div className="bg-[#FAF8FA] w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <WhyHardSection />
      <DecisionChainSection />
      <ProductProofSection />
      <ApplicabilityMatrixSection />
      <LifecycleSection />
      <InterlockSection />
      <HistoricalReplaySection />
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
