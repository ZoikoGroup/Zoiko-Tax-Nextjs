"use client";

import React from "react";
import { FAQ_DATA as F } from "./regulatory-change-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs font-bold text-[#B65326]">{F.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{F.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[1040px]">{F.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {F.items.map((item, i) => (
          <Reveal key={item.question} delay={0.03 * i}>
            <div className="border-b border-[#D8CEDD] py-6 flex flex-col sm:flex-row gap-3 sm:gap-12">
              <p className="text-lg sm:text-xl font-semibold leading-[1.4] text-[#18141B] sm:w-[420px] shrink-0">{item.question}</p>
              <p className="flex-1 text-base leading-[1.6] text-[#665F69]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="w-full mt-8">
        <span className="text-xs font-bold text-[#B65326]">{F.footnote}</span>
      </Reveal>
    </SectionContainer>
  );
}
