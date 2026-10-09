"use client";

import React from "react";
import { Minus } from "lucide-react";
import { EVENTS_FAQ_DATA as F } from "./events-data";
import { SectionContainer, Reveal } from "./shared";

export default function EventsFAQSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/events/pattern-bg.png)",
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
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{F.description}</p>
          </div>
        </Reveal>

        <div className="flex flex-col">
          {F.items.map((item, i) => (
            <Reveal key={item.question} delay={0.02 * i}>
              <div className="border-b border-[#D8CEDD] py-6 flex flex-col sm:flex-row gap-3 sm:gap-12">
                <div className="sm:w-[380px] shrink-0 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-[1.4] text-[#18141B]">{item.question}</h3>
                  <Minus className="h-[18px] w-[18px] shrink-0 text-[#18141B] sm:hidden" aria-hidden="true" />
                </div>
                <p className="flex-1 text-base leading-[1.6] text-[#665F69]">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
