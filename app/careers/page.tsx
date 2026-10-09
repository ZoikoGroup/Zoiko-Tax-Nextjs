import type { Metadata } from "next";
import {
  HeroSection,
  WorkContextSection,
  CurrentRolesSection,
  RoleDecisionSection,
  HiringExpectationsSection,
  ApplyingSection,
  FAQSection,
  GovernanceSection,
  RelatedInfoSection,
  ClosingBandSection,
} from "@/components/careers";

export const metadata: Metadata = {
  title: "Careers | ZoikoTax",
  description:
    "ZoikoTax connects telecom tax determination, regulatory obligations, compliance workflows and replayable evidence. Explore current roles and approved employer information.",
};

export default function CareersPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <WorkContextSection />
      <CurrentRolesSection />
      <RoleDecisionSection />
      <HiringExpectationsSection />
      <ApplyingSection />
      <FAQSection />
      <GovernanceSection />
      <RelatedInfoSection />
      <ClosingBandSection />
    </div>
  );
}
