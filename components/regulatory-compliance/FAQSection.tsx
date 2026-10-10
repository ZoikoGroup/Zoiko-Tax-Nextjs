"use client";

import React from "react";
import { Minus } from "lucide-react";
import { FAQ_DATA as F } from "./regulatory-compliance-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/regulatory-compliance/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{F.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{F.title}</h2>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {F.items.map((item, i) => (
            <Reveal key={item.question} delay={0.02 * i}>
              <div className="border-b border-[#D8CEDD] py-7 flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.3] text-[#18141B]">{item.question}</h3>
                  <Minus className="h-[18px] w-[18px] shrink-0 text-[#18141B]" aria-hidden="true" />
                </div>
                <p className="text-base sm:text-[17px] leading-[1.55] text-[#665F69]">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
