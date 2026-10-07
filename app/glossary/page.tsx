import type { Metadata } from "next";
import {
  HeroSection,
  CanonicalNoticeSection,
  SearchAndIndexSection,
  DefinitionStructureSection,
  MeaningJurisdictionSection,
  AliasesSection,
  CurrentnessGovernanceSection,
  SearchStatesSection,
  ReferenceDestinationsSection,
  NextStepSection,
} from "@/components/glossary";

export const metadata: Metadata = {
  title: "Glossary | Resources | ZoikoTax",
  description:
    "Look up approved ZoikoTax and telecom-tax terms, acronyms and aliases with clear definitions, scope notes and links to the authoritative detail behind each concept.",
};

export default function GlossaryPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <CanonicalNoticeSection />
      <SearchAndIndexSection />
      <DefinitionStructureSection />
      <MeaningJurisdictionSection />
      <AliasesSection />
      <CurrentnessGovernanceSection />
      <SearchStatesSection />
      <ReferenceDestinationsSection />
      <NextStepSection />
    </div>
  );
}
