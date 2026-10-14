import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  CurrentnessSection,
  CapabilityMatrixSection,
  PackContextSection,
  GovernedScopeSection,
  ChangeHistorySection,
  SpecialistBoundariesSection,
  FAQSection,
  CapabilityDiscussionSection,
} from "@/components/european-union";

export const metadata: Metadata = {
  title: "Coverage: European Union | ZoikoTax",
  description:
    "Review governed public readiness for ZoikoTax capabilities in the European Union market context. Each capability carries its own state, scope and currentness; a market label is not a blanket support claim.",
};

export default function EuropeanUnionPage() {
  return (
    <div className="bg-[#FAF3FF] w-full overflow-x-clip flex flex-col">
      <HeroSection />
      <DirectAnswerSection />
      <CurrentnessSection />
      <CapabilityMatrixSection />
      <PackContextSection />
      <GovernedScopeSection />
      <ChangeHistorySection />
      <SpecialistBoundariesSection />
      <FAQSection />
      <CapabilityDiscussionSection />
    </div>
  );
}
