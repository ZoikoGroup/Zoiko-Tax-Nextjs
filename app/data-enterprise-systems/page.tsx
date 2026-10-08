import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  BoundarySection,
  DomainsSection,
  OwnershipSection,
  MappingSection,
  CommercialSection,
  IdentitySection,
  PatternsSection,
  QualitySection,
  LineageSection,
  MigrationSection,
  SecuritySection,
  SafeStatesSection,
  FAQSection,
  NextStepsSection,
  CtaSection,
} from "@/components/data-enterprise-systems";

export const metadata: Metadata = {
  title: "Data & Enterprise Systems | Developers | ZoikoTax",
  description:
    "Connect CPQ, CRM, product catalogue and approved data-platform context to ZoikoTax through governed integration patterns that preserve source-of-truth ownership, mappings and traceability.",
};

export default function DataEnterpriseSystemsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <BoundarySection />
      <DomainsSection />
      <OwnershipSection />
      <MappingSection />
      <CommercialSection />
      <PatternsSection />
      <IdentitySection />
      <QualitySection />
      <LineageSection />
      <MigrationSection />
      <SecuritySection />
      <SafeStatesSection />
      <FAQSection />
      <NextStepsSection />
      <CtaSection />
    </div>
  );
}
