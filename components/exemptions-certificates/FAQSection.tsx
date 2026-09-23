"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { faqData } from "./exemptions-data";

export default function FAQSection() {
  return (
    <SectionContainer
      id="faq"
      className="relative bg-white bg-[url('/home/pattern-faq.webp')] bg-repeat bg-center overflow-hidden"
    >
      <Reveal>
        <SectionHeader
          eyebrow={faqData.eyebrow}
          title={faqData.title}
        />
      </Reveal>

      <div className="mt-8 sm:mt-12 w-full">
        {faqData.faqs.map((faq, idx) => (
          <Reveal key={idx} delay={idx * 0.02}>
            <div className="border-b border-[#E8E4EC] pb-5 sm:pb-6 mb-5 sm:mb-6">
              <h3 className="text-base sm:text-lg font-bold text-[#18141B] leading-snug mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#535055]">
                {faq.a}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
