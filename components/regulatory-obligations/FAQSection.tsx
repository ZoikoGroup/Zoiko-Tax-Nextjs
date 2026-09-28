import React from "react";
import clsx from "clsx";
import { Section, SectionHeading, Icon, Reveal } from "./shared";
import { faqData } from "./regulatory-obligations-data";

/**
 * Figma 233:12125 (desktop, flat #faf3ff, no image): nine always-expanded Q&As with bottom rules.
 * Figma 233:13138 (mobile, on page #faf3ff): first four Q&As only, each with an orange chevron.
 */
export default function FAQSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-12">
      <Reveal>
        <SectionHeading eyebrow={faqData.eyebrow} title={faqData.title} />
      </Reveal>
      <Reveal delay={0.05}>
        <dl className="flex w-full flex-col lg:gap-4">
          {faqData.items.map((item, idx) => (
            <div
              key={item.q}
              className={clsx(
                "w-full flex-col items-start gap-[10px] border-b border-[#d8cedd] p-4 lg:flex lg:p-5",
                idx < faqData.mobileCount ? "flex" : "hidden"
              )}
            >
              <dt className="flex w-full items-center justify-between gap-4">
                <span className="text-[14px] font-bold leading-[normal] text-[#18141b] lg:text-[16px]">{item.q}</span>
                <Icon src="/regulatory-obligations/icon-chevron-down.svg" className="size-[14px] lg:hidden" />
              </dt>
              <dd className="w-full text-[13px] font-normal leading-[1.4] text-[#535055] lg:text-[14px] lg:leading-[1.5]">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
