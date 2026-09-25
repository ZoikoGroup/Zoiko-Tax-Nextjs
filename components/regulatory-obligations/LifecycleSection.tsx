import React from "react";
import { Section, SectionHeading, Icon, Reveal } from "./shared";
import { lifecycleData } from "./regulatory-obligations-data";

/**
 * Figma 233:11556 (desktop, flat #faf3ff, no image): eight white stage tiles in one row.
 * Figma 233:12591 (mobile, on page #faf3ff): stacked #fffafa rows with number / icon / label.
 */
export default function LifecycleSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-12">
      <Reveal>
        <SectionHeading
          eyebrow={lifecycleData.eyebrow}
          title={lifecycleData.title}
          description={lifecycleData.description}
          titleClassName="lg:text-[#0a2029]"
          descriptionClassName="lg:text-[#878c95]"
        />
      </Reveal>
      <Reveal delay={0.05}>
        <ol className="flex w-full flex-col gap-[10px] lg:flex-row lg:items-stretch lg:gap-2">
          {lifecycleData.stages.map((stage) => (
            <li
              key={stage.number}
              className="flex w-full items-center gap-3 rounded-[8px] border border-[#d8cedd] bg-[#fffafa] p-3 lg:min-w-0 lg:flex-1 lg:flex-col lg:items-start lg:rounded-[12px] lg:border-white lg:bg-white lg:p-4"
            >
              {/* Desktop header row: number left, icon right */}
              <div className="hidden w-full items-center justify-between lg:flex">
                <span className="font-mono text-[11px] font-normal leading-[normal] text-[#f4a261]">{stage.number}</span>
                <Icon src={stage.icon} className="size-4" />
              </div>
              {/* Mobile: number + icon inline */}
              <span className="w-5 shrink-0 font-mono text-[11px] font-normal leading-[normal] text-[#f4a261] lg:hidden">{stage.number}</span>
              <span className="flex size-4 shrink-0 items-center justify-center lg:hidden">
                <Icon src={stage.iconMobile} className="size-[14px]" />
              </span>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px] whitespace-nowrap lg:gap-1">
                <span className="text-[13px] font-semibold leading-[normal] text-[#100031] lg:text-[14px] lg:text-[#0a2029]">{stage.name}</span>
                <span className="text-[11px] font-normal leading-[normal] text-[#535055] lg:leading-[1.3] lg:text-[#0a2029]">{stage.desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
