import React from "react";
import { SectionContainer, SectionHeader, PatternBackground, Reveal } from "./shared";
import { buyerOutcomes, buyerOutcomesHeader } from "./compliance-filing-data";

/**
 * Figma 233:10089 (desktop): white section with the diamond line pattern.
 * Figma 233:11067 (mobile): flat white, no image.
 */
export default function BuyerOutcomesSection() {
  return (
    <SectionContainer
      className="bg-white"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={<PatternBackground className="hidden lg:block" />}
    >
      <Reveal>
        <SectionHeader
          eyebrow={buyerOutcomesHeader.eyebrow}
          title={buyerOutcomesHeader.title}
          description={buyerOutcomesHeader.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-[14px] lg:grid-cols-3 lg:gap-6">
        {buyerOutcomes.map((o, idx) => (
          <Reveal key={o.title} delay={0.05 * idx}>
            <div className="flex flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-white p-4 leading-[normal] lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="font-sora text-[15px] font-bold whitespace-nowrap text-[#18141b] lg:text-[18px]">{o.title}</h3>
              <p className="font-manrope text-[13px] font-normal leading-[1.4] text-[#665f69] lg:leading-[normal]">{o.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
