import React from "react";
import { Section, SectionHeading, PatternBackground, Reveal } from "./shared";
import { timelineModel } from "./regulatory-obligations-data";

/**
 * Figma 233:11838 (desktop) / 233:12861 (mobile): diamond line-art pattern background.
 * White "Core Control Lanes" panel + fixed 420px dark blocked-rail panel (stacked on mobile).
 */
export default function TimelineModelSection() {
  const { blocked } = timelineModel;
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={timelineModel.eyebrow} title={timelineModel.title} description={timelineModel.description} />
      </Reveal>

      <div className="flex w-full flex-col items-stretch gap-7 lg:flex-row lg:items-start lg:gap-6">
        <Reveal delay={0.05} className="w-full lg:min-w-0 lg:flex-1">
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-[#fffafa] p-5 leading-[normal] lg:rounded-[24px] lg:bg-white lg:p-8">
            <h3 className="w-full text-[16px] font-bold text-[#18141b] lg:text-[18px]">{timelineModel.lanesTitle}</h3>
            {timelineModel.lanes.map((lane) => (
              <div
                key={lane.title}
                className="flex w-full flex-col items-start gap-[6px] rounded-[8px] border border-[#d8cedd] bg-[#fafbfd] p-3 lg:gap-2 lg:rounded-[12px] lg:p-4"
              >
                <p className="w-full text-[13px] font-semibold text-[#18141b] lg:text-[14px]">{lane.title}</p>
                <p className="w-full text-[12px] font-normal leading-[1.4] text-[#535055] lg:leading-[normal]">{lane.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:w-[420px] lg:shrink-0">
          <div className="flex w-full flex-col items-start gap-3 rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#1d033b] p-5 lg:gap-4 lg:rounded-[24px] lg:p-8">
            <h3 className="text-[14px] font-bold leading-[normal] text-white lg:text-[16px]">{blocked.title}</h3>
            <p className="text-[12px] font-normal leading-[1.4] text-[#d9d0df] lg:text-[13px] lg:leading-[1.5]">{blocked.desc}</p>
            <div className="flex w-full flex-col items-start gap-1 rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[#100031] p-3 leading-[normal] lg:flex-row lg:flex-wrap lg:gap-x-2 lg:rounded-[12px] lg:p-4">
              <span className="font-mono text-[11px] font-bold text-[#f4a261] lg:text-[12px]">{blocked.itemLabel}</span>
              <span className="text-[12px] font-normal text-white lg:text-[13px]">{blocked.itemValue}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
