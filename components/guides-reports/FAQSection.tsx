"use client";

import React from "react";
import { FAQ_DATA as F } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/guides-reports/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-xs font-bold text-[#A64B22]">{F.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{F.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{F.description}</p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {F.items.map((item, i) => (
            <Reveal key={item.question} delay={0.03 * i}>
              <div className="border-t border-[#D8CEDD] py-7 flex flex-col sm:flex-row gap-3 sm:gap-12">
                <p className="text-lg sm:text-xl leading-[1.4] text-[#18141B] sm:w-[388px] shrink-0">{item.question}</p>
                <p className="flex-1 text-base leading-[1.65] text-[#665F69]">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
