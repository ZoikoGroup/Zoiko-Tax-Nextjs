import React from "react";
import { Section, SectionHeading, SecondaryButton, Reveal } from "./shared";
import { coexistence } from "./regulatory-obligations-data";

/** Figma 233:12030 (desktop, flat #faf3ff, no image) / 233:13048 (mobile, on page #faf3ff). */
export default function CoexistenceSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={coexistence.eyebrow} title={coexistence.title} description={coexistence.description} />
      </Reveal>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-4">
        {coexistence.models.map((model, idx) => (
          <Reveal key={model.title} delay={0.04 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-[#fafbfd] p-5 lg:min-h-[139px] lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="text-[15px] font-bold leading-[normal] text-[#18141b] lg:text-[16px]">{model.title}</h3>
              <p className="text-[12px] font-normal leading-[1.4] text-[#535055] lg:text-[13px] lg:leading-[1.5]">{model.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <div className="flex w-full flex-col items-stretch gap-7 lg:items-start lg:gap-10">
          <p className="text-[12px] font-semibold leading-[normal] text-[#535055] lg:text-[13px]">{coexistence.note}</p>
          <SecondaryButton href={coexistence.cta.href} className="lg:self-start">
            {coexistence.cta.label}
          </SecondaryButton>
        </div>
      </Reveal>
    </Section>
  );
}
