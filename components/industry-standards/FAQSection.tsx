"use client";

import React from "react";
import { Minus } from "lucide-react";
import { FAQ_DATA as F } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] pt-0">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{F.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{F.title}</h2>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {F.items.map((item, i) => (
          <Reveal key={item.question} delay={0.02 * i}>
            <div className="border-t border-[#D8CEDD] py-7 flex flex-col sm:flex-row gap-3 sm:gap-14">
              <div className="sm:w-[380px] shrink-0 flex items-start justify-between gap-4">
                <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.35] text-[#18141B]">{item.question}</h3>
                <Minus className="h-[18px] w-[18px] shrink-0 text-[#18141B] sm:hidden" aria-hidden="true" />
              </div>
              <p className="flex-1 text-base leading-[1.55] text-[#665F69]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
