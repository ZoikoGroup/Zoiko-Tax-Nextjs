import React from "react";
import { SectionContainer, SectionHeader, SecondaryButton, PatternBackground, Reveal } from "./shared";
import { operatingModels, operatingModelsHeader } from "./compliance-filing-data";

/**
 * Figma 233:9963 (desktop): white section with the diamond line pattern.
 * Figma 233:10949 (mobile): flat #f5f6fa, no image.
 */
export default function OperatingModelsSection() {
  return (
    <SectionContainer
      className="bg-[#f5f6fa] lg:bg-white"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={<PatternBackground className="hidden lg:block" />}
    >
      <Reveal>
        <SectionHeader
          eyebrow={operatingModelsHeader.eyebrow}
          title={operatingModelsHeader.title}
          description={operatingModelsHeader.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-6">
        {operatingModels.map((model, idx) => (
          <Reveal key={model.title} delay={0.05 * idx}>
            <div className="flex flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-white p-4 leading-[normal] lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="font-sora text-[15px] font-bold whitespace-nowrap text-[#18141b] lg:text-[18px]">{model.title}</h3>
              <p className="font-manrope text-[13px] font-normal leading-[1.4] text-[#665f69] lg:leading-[normal]">{model.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="flex w-full flex-col items-stretch gap-[10px] lg:flex-row lg:items-start lg:justify-center lg:gap-3 lg:pt-4">
        {operatingModelsHeader.actions.map((action) => (
          <SecondaryButton
            key={action.label}
            href={action.href}
            className="w-full px-5 text-[13px] shadow-none lg:w-auto lg:px-[22px] lg:text-[14px] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]"
          >
            {action.label}
          </SecondaryButton>
        ))}
      </div>
    </SectionContainer>
  );
}
