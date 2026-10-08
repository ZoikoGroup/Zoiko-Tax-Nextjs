import React from 'react';
import DisclosureHero from "@/components/responsible-disclosure/DisclosureHero";
import DisclosurePath from "@/components/responsible-disclosure/DisclosurePath";
import DisclosureScopeAssets from "@/components/responsible-disclosure/DisclosureScopeAssets";
import DisclosureSafeBoundaries from "@/components/responsible-disclosure/DisclosureSafeBoundaries";
import DisclosureHowToReport from "@/components/responsible-disclosure/DisclosureHowToReport";
import DisclosureTriage from "@/components/responsible-disclosure/DisclosureTriage";
import DisclosureReviewPrinciples from "@/components/responsible-disclosure/DisclosureReviewPrinciples";
import DisclosureCoordinated from "@/components/responsible-disclosure/DisclosureCoordinated";
import DisclosureLegalBoundaries from "@/components/responsible-disclosure/DisclosureLegalBoundaries";
import DisclosurePolicyAuthority from "@/components/responsible-disclosure/DisclosurePolicyAuthority";
import DisclosureStatesRecovery from "@/components/responsible-disclosure/DisclosureStatesRecovery";
import DisclosureCommonQuestions from "@/components/responsible-disclosure/DisclosureCommonQuestions";
import DisclosureRightIntent from "@/components/responsible-disclosure/DisclosureRightIntent";

export default function ResponsibleDisclosurePage() {
  return (
    <main className="w-full bg-[#FAF3FF] flex flex-col items-center">
      <div className="w-full bg-[#FAF3FF] inline-flex flex-col justify-start items-start overflow-hidden">
        <DisclosureHero />
        <DisclosurePath />
        <DisclosureScopeAssets />
        <DisclosureSafeBoundaries />
        <DisclosureHowToReport />
        <DisclosureTriage />
        <DisclosureReviewPrinciples />
        <DisclosureCoordinated />
        <DisclosureLegalBoundaries />
        <DisclosurePolicyAuthority />
        <DisclosureStatesRecovery />
        <DisclosureCommonQuestions />
        <DisclosureRightIntent />
      </div>
    </main>
  );
}
