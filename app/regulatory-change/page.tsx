import type { Metadata } from "next";
import {
  HeroSection,
  AuthorityNoticeSection,
  CurrentChangesSection,
  ReadingAnatomySection,
  LifecycleSection,
  ImpactTaxonomySection,
  CurrentnessSection,
  FAQSection,
  RelatedResourcesSection,
  NextRoutesBandSection,
} from "@/components/regulatory-change";

export const metadata: Metadata = {
  title: "Regulatory Change | Resources | ZoikoTax",
  description:
    "Follow source-backed telecom tax and regulatory developments with clear jurisdiction, status, publication/effective dates and expert-reviewed context. Not legal advice.",
};

export default function RegulatoryChangePage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <AuthorityNoticeSection />
      <CurrentChangesSection />
      <ReadingAnatomySection />
      <LifecycleSection />
      <ImpactTaxonomySection />
      <CurrentnessSection />
      <FAQSection />
      <RelatedResourcesSection />
      <NextRoutesBandSection />
    </div>
  );
}
