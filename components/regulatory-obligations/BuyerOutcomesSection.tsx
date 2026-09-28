import React from "react";
import { Section, SectionHeading, PatternBackground, Reveal } from "./shared";
import { buyerOutcomes } from "./regulatory-obligations-data";

/** Figma 233:12111 (desktop) / 233:13124 (mobile): diamond line-art pattern background, three outcome cards. */
export default function BuyerOutcomesSection() {
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={buyerOutcomes.eyebrow} title={buyerOutcomes.title} />
      </Reveal>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {buyerOutcomes.outcomes.map((item, idx) => (
          <Reveal key={item.title} delay={0.05 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-[10px] rounded-[16px] border border-[#d8cedd] bg-[#fffafa] p-5 lg:gap-[14px] lg:rounded-[24px] lg:bg-white lg:p-8">
              <h3 className="text-[16px] font-bold leading-[normal] text-[#18141b] lg:text-[18px]">{item.title}</h3>
              <p className="text-[13px] font-normal leading-[1.4] text-[#535055] lg:leading-[1.5]">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
