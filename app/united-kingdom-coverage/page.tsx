import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  CurrentnessSection,
  CapabilityStatusSection,
  PackContextSection,
  ScopeExclusionsSection,
  ChangeHistorySection,
  SpecialistBoundariesSection,
  FAQSection,
  CapabilityDiscussionSection,
} from "@/components/united-kingdom-coverage";

export const metadata: Metadata = {
  title: "Coverage: United Kingdom | ZoikoTax",
  description:
    "Review governed public readiness for ZoikoTax capabilities in the United Kingdom market context. Each capability carries its own state, scope and currentness; a market label is not a blanket support claim.",
};

export default function UnitedKingdomCoveragePage() {
  return (
    <div className="bg-[#FAF3FF] w-full overflow-x-clip flex flex-col gap-2">
      <HeroSection />
      <DirectAnswerSection />
      <CurrentnessSection />
      <CapabilityStatusSection />
      <PackContextSection />
      <ScopeExclusionsSection />
      <ChangeHistorySection />
      <SpecialistBoundariesSection />
      <FAQSection />
      <CapabilityDiscussionSection />
    </div>
  );
}
