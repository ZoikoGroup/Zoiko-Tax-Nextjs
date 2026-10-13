import type { Metadata } from "next";
import {
  HeroSection,
  CurrentnessSection,
  CapabilityStatusSection,
  PackContextSection,
  ScopeExclusionsSection,
  ChangeHistorySection,
  SpecialistBoundariesSection,
  FAQSection,
  ScenarioDiscussionSection,
} from "@/components/united-states";

export const metadata: Metadata = {
  title: "Coverage: United States | ZoikoTax",
  description:
    "Review governed public readiness for ZoikoTax capabilities in the United States market context. Each capability carries its own state, scope and currentness.",
};

export default function UnitedStatesCoveragePage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <CurrentnessSection />
      <CapabilityStatusSection />
      <PackContextSection />
      <ScopeExclusionsSection />
      <ChangeHistorySection />
      <SpecialistBoundariesSection />
      <FAQSection />
      <ScenarioDiscussionSection />
    </div>
  );
}
