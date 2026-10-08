import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  WorkspaceSection,
  AuthoritySection,
  ErrorsSection,
  CodeSamplesSection,
  AccessSection,
  StatesSection,
  RelatedRoutesSection,
  JourneysSection,
  FAQSection,
  CtaSection,
} from "@/components/api-reference";

export const metadata: Metadata = {
  title: "API Reference | Developers | ZoikoTax",
  description:
    "Explore verified ZoikoTax API contracts: published versions, resources, operation contracts, schemas and error documentation from governed technical sources.",
};

export default function ApiReferencePage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <WorkspaceSection />
      <AuthoritySection />
      <ErrorsSection />
      <CodeSamplesSection />
      <AccessSection />
      <StatesSection />
      <RelatedRoutesSection />
      <JourneysSection />
      <FAQSection />
      <CtaSection />
    </div>
  );
}
