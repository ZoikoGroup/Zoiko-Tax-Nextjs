import React from "react";
import clsx from "clsx";
import { Section, SectionHeading, Icon, Reveal } from "./shared";
import { responsibilityModel } from "./regulatory-obligations-data";

/** Figma 233:11811 (desktop, flat #faf3ff, no image) / 233:12837 (mobile, on page #faf3ff). */
export default function ResponsibilityModelSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading
          eyebrow={responsibilityModel.eyebrow}
          title={responsibilityModel.title}
          description={responsibilityModel.description}
        />
      </Reveal>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {responsibilityModel.states.map((state, idx) => (
          <Reveal key={state.title} delay={0.05 * idx} className="h-full">
            <div
              className={clsx(
                "flex h-full flex-col items-start gap-[10px] rounded-[12px] border bg-[#fafbfd] p-5 lg:gap-[14px] lg:rounded-[16px] lg:p-8",
                state.border
              )}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <h3 className={clsx("text-[14px] font-bold leading-[normal] lg:text-[16px]", state.color)}>{state.title}</h3>
                <Icon src={state.iconMobile} className="size-[18px] lg:hidden" />
                <Icon src={state.icon} className="hidden size-5 lg:block" />
              </div>
              <p className="w-full text-[12px] font-normal leading-[1.4] text-[#535055] lg:text-[13px] lg:leading-[1.5]">{state.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
