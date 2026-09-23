"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { determinationFaqs } from "./determination-data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <SectionContainer id="faq" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow="COMMON ENQUIRIES"
          title="FAQ: Direct answers, no inflated claims."
          className="max-w-3xl"
        />
      </Reveal>

      <div className="mt-12 rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-10 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)]">
        <div className="divide-y divide-[#D8CEDD]/60">
          {determinationFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 text-left font-sans transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-[#18141B] hover:text-[#D65A2C]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FAF8FA] border border-[#D8CEDD]/60 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#FAF3FF] text-[#D65A2C]" : "text-[#535055]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm leading-relaxed text-[#535055] pr-10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
