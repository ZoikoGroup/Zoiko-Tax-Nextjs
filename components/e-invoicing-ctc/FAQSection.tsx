"use client";

import React from "react";
import { FAQ_ITEMS } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <SectionHeader
        eyebrow="FAQ"
        title="Direct answers. No inflated claims."
        description="Detailed answers to complex questions regarding telecom transaction compliance."
        className="mb-10 sm:mb-12"
      />

      <div className="w-full divide-y divide-[#D8CEDD]">
        {FAQ_ITEMS.map((item, idx) => (
          <Reveal key={item.question} delay={0.03 * idx}>
            <div className="py-5 sm:py-6 first:pt-0">
              <h3 className="text-base sm:text-lg font-bold text-[#18141B] mb-2">
                {item.question}
              </h3>
              <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
                {item.answer}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
