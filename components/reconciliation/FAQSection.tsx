"use client";

import React, { useState } from "react";
import { FAQ_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);

  const toggle = (idx: number) => {
    setOpenItems((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={FAQ_DATA.eyebrow}
          title={FAQ_DATA.title}
          description={FAQ_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="flex flex-col">
          {FAQ_DATA.faqs.map((faq, idx) => {
            const isOpen = openItems.includes(idx);
            return (
              <div
                key={faq.q}
                className="py-5 sm:py-6 border-b border-[#D8CEDD] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-semibold text-base sm:text-[18px] text-[#18141B] cursor-pointer group"
                >
                  <span className="group-hover:text-[#D65A2C] transition-colors">
                    {faq.q} &nbsp;{isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-2 text-xs sm:text-[14px] text-[#665F69] leading-relaxed">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Reveal>
    </SectionContainer>
  );
}
