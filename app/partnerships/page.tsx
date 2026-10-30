import type { Metadata } from "next";
import {
  HeroSection,
  RoutingMatrixSection,
  RelationshipTaxonomySection,
  PartnershipInquirySection,
  HonestStatesSection,
  FAQSection,
  RelatedRoutesSection,
} from "@/components/partnerships";

export const metadata: Metadata = {
  title: "Partnerships | Offices & Connect | ZoikoTax",
  description:
    "Explore technology, implementation, advisory, and ecosystem partnerships with ZoikoTax. Review our routing matrix, relationship taxonomy, and submit qualified inquiries.",
};

export default function PartnershipsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <RoutingMatrixSection />
      <RelationshipTaxonomySection />
      <PartnershipInquirySection />
      <HonestStatesSection />
      <FAQSection />
      <RelatedRoutesSection />
    </div>
  );
}
