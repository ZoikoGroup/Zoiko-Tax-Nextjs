import React from "react";
import { Section, SectionHeading, SecondaryButton, Reveal } from "./shared";
import { trustSecurity } from "./regulatory-obligations-data";

/** Figma 233:12094 (desktop, flat #faf3ff, no image) / 233:13108 (mobile, on page #faf3ff). */
export default function TrustSecuritySection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={trustSecurity.eyebrow} title={trustSecurity.title} />
      </Reveal>
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {trustSecurity.principles.map((item, idx) => (
          <Reveal key={item.title} delay={0.05 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-[#fafbfd] p-5 lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="text-[15px] font-bold leading-[normal] text-[#18141b] lg:text-[16px]">{item.title}</h3>
              <p className="text-[12px] font-normal leading-[1.4] text-[#535055] lg:text-[13px] lg:leading-[1.5]">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.05}>
        <div className="flex w-full flex-col items-stretch lg:items-start">
          <SecondaryButton href={trustSecurity.cta.href}>{trustSecurity.cta.label}</SecondaryButton>
        </div>
      </Reveal>
    </Section>
  );
}
