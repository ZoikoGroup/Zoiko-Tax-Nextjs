"use client";

import React from "react";
import { FAQ_DATA as F } from "./united-states-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold text-[#D65A2C]">{F.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{F.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{F.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {F.items.map((item, i) => (
          <Reveal key={item.question} delay={0.02 * i}>
            <div className="border-t border-[#D8CEDD] py-7 flex flex-col gap-3.5">
              <h3 className="text-xl sm:text-[22px] font-bold leading-[1.35] text-[#18141B]">{item.question}</h3>
              <p className="text-base leading-[1.55] text-[#665F69]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
