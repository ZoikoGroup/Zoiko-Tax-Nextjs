import type { Metadata } from "next";
import {
  HeroSection,
  AssuranceTaxonomySection,
  AssuranceInventorySection,
  AssuranceScopeSection,
  RecordDetailSection,
  ReviewMethodologySection,
  MaterialsRequestSection,
  TrustBoundariesSection,
  RegulatorySeparationSection,
  FAQSection,
  TeamEvidenceSection,
} from "@/components/certifications";

export const metadata: Metadata = {
  title: "Certifications | ZoikoTax",
  description:
    "Review the types of independent assurance and security evidence relevant to ZoikoTax. Availability, scope and access are confirmed against current approved records.",
};

export default function CertificationsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <AssuranceTaxonomySection />
      <AssuranceInventorySection />
      <AssuranceScopeSection />
      <RecordDetailSection />
      <ReviewMethodologySection />
      <MaterialsRequestSection />
      <TrustBoundariesSection />
      <RegulatorySeparationSection />
      <FAQSection />
      <TeamEvidenceSection />
    </div>
  );
}
