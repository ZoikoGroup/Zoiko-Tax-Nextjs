"use client";

import React from "react";
import { Minus } from "lucide-react";
import { FAQ_DATA } from "./billing-bss-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/billing-bss/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-4">
          <span className="text-xs sm:text-[13px] font-bold uppercase text-[#D65A2C]">{FAQ_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B]">
            {FAQ_DATA.title}
          </h2>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {FAQ_DATA.items.map((item, idx) => (
          <Reveal key={item.question} delay={0.03 * idx}>
            <div className="border-t border-[#D8CEDD] py-6 flex flex-col gap-3.5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg sm:text-[21px] text-[#18141B]">{item.question}</h3>
                <Minus className="h-5 w-5 shrink-0 text-[#D65A2C]" aria-hidden="true" />
              </div>
              <p className="text-base leading-[1.55] text-[#665F69]">{item.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
