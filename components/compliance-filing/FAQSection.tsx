import React from "react";
import { CONTAINER, Reveal } from "./shared";
import { complianceFilingFaqs, faqHeader } from "./compliance-filing-data";

/**
 * Figma 233:10104 (desktop) / 233:11082 (mobile): flat #faf3ff with #d8cedd top/bottom rules,
 * no image. Both frames show every answer expanded; mobile adds a decorative chevron.
 */
export default function FAQSection() {
  return (
    <section className="relative w-full border-y border-[#d8cedd] bg-[#faf3ff] py-12 lg:py-[104px]">
      <div className={`${CONTAINER} flex flex-col gap-8 lg:gap-12`}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-2 leading-[normal] lg:gap-4">
            <p className="font-manrope text-[12px] font-bold text-[#bf6735] lg:text-[14px]">{faqHeader.eyebrow}</p>
            <h2 className="font-sora text-[24px] font-extrabold text-[#18141b] lg:text-[36px]">{faqHeader.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="flex w-full flex-col">
            {complianceFilingFaqs.map((faq) => (
              <div
                key={faq.question}
                className="flex w-full flex-col items-start gap-2 border-b border-[#d8cedd] py-4 lg:border lg:py-[19px]"
              >
                <dt className="flex w-full items-center justify-between gap-2">
                  <span className="font-sora text-[14px] font-bold leading-[normal] text-[#18141b] lg:text-[16px]">{faq.question}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/compliance-filing/icon-chevron-down.svg" alt="" aria-hidden className="size-[10px] shrink-0 lg:hidden" />
                </dt>
                <dd className="w-full font-manrope text-[13px] font-normal leading-[1.4] text-[#665f69] lg:text-[14px] lg:leading-[1.5]">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
