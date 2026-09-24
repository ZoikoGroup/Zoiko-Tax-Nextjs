import React from "react";
import { Section, SectionHeading, PatternBackground, Reveal } from "./shared";
import { hardProblems } from "./regulatory-obligations-data";

/**
 * Figma 233:11519 (desktop) / 233:12554 (mobile): diamond line-art pattern background
 * (desktop 100% on white; mobile 12% over rgba(250,243,255,0.9)). 4×2 card grid → stacked list.
 */
export default function HardProblemsSection() {
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={hardProblems.eyebrow} title={hardProblems.title} />
      </Reveal>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4">
        {hardProblems.cards.map((card, idx) => (
          <Reveal key={card.number} delay={0.03 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-[#fffafa] p-4 lg:gap-3 lg:rounded-[16px] lg:bg-white lg:p-6">
              <p className="font-mono text-[12px] font-bold leading-[normal] text-[#d65a2c] lg:text-[14px]">{card.number}</p>
              <h3 className="text-[15px] font-bold leading-[normal] text-[#18141b] lg:text-[18px]">{card.title}</h3>
              <p className="text-[13px] font-normal leading-[1.4] text-[#535055] lg:leading-[1.5]">{card.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
