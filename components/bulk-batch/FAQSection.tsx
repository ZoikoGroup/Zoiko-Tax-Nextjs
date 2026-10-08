"use client";

import React from "react";
import { SectionContainer, SectionHeader } from "./shared";
import { FAQS } from "./types";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="13 / FAQ"
          title="Direct answers. No inferred mechanics."
          description="The essentials for engineers and operators evaluating governed asynchronous integration."
        />

        <div className="w-full flex flex-col items-start">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.question}
              className={`w-full flex flex-col items-start gap-3 py-6 ${
                idx < FAQS.length - 1 ? "border-b border-[#D8CEDD]" : ""
              }`}
            >
              <h3 className="text-xl text-[#18141B] font-['Inter',sans-serif]">{faq.question}</h3>
              <p className="text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
