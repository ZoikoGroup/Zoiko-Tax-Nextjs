import type { Metadata } from "next";
import {
  HeroSection,
  AnswerDiscoverySection,
  FaqCategorySection,
  CurrentnessOwnershipSection,
  UncertaintySection,
  NextRoutesSection,
  EvaluationBandSection,
  FAQ_CATEGORIES,
} from "@/components/resources-faq";

export const metadata: Metadata = {
  title: "FAQ | Resources | ZoikoTax",
  description:
    "Plain-language answers about the ZoikoTax platform, telecom-tax coverage, integrations, trust and evaluation — with links to the authoritative detail behind each answer.",
};

export default function ResourcesFaqPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <AnswerDiscoverySection />
      {FAQ_CATEGORIES.map((category) => (
        <FaqCategorySection key={category.id} category={category} />
      ))}
      <CurrentnessOwnershipSection />
      <UncertaintySection />
      <NextRoutesSection />
      <EvaluationBandSection />
    </div>
  );
}
