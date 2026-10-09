"use client";

import React from "react";
import HeroSection from "./HeroSection";
import RelationshipTypesSection from "./RelationshipTypesSection";
import RegistryDiscoverySection from "./RegistryDiscoverySection";
import PartnerRecordAnatomySection from "./PartnerRecordAnatomySection";
import TechnologyScopeSection from "./TechnologyScopeSection";
import AccountabilityModelSection from "./AccountabilityModelSection";
import RelationshipLifecycleSection from "./RelationshipLifecycleSection";
import InquiryBoundarySection from "./InquiryBoundarySection";
import DirectAnswersSection from "./DirectAnswersSection";
import VerificationNextStepsSection from "./VerificationNextStepsSection";

export function ResourcesPartnersContent() {
  return (
    <main className="w-full min-h-screen bg-[#FAF3FF]">
      {/* Section 1: Header and introduction / Partners hero */}
      <HeroSection />

      {/* Section 2: Relationship types */}
      <RelationshipTypesSection />

      {/* Section 3: Registry and discovery */}
      <RegistryDiscoverySection />

      {/* Section 4: Partner record anatomy */}
      <PartnerRecordAnatomySection />

      {/* Section 5: Technology and implementation scope */}
      <TechnologyScopeSection />

      {/* Section 6: Accountability model */}
      <AccountabilityModelSection />

      {/* Section 7: Relationship lifecycle and rights */}
      <RelationshipLifecycleSection />

      {/* Section 8: Inquiry and program boundary */}
      <InquiryBoundarySection />

      {/* Section 9: Direct answers */}
      <DirectAnswersSection />

      {/* Section 10: Verification and next steps */}
      <VerificationNextStepsSection />
    </main>
  );
}

export default ResourcesPartnersContent;
