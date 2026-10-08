"use client";

import React from "react";
import { Minus } from "lucide-react";
import { FAQ_DATA as F } from "./telecom-tax-insights-data";
import { SectionContainer, Reveal } from "./shared";

export default function FAQSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs font-bold uppercase text-[#D65A2C]">{F.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{F.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[960px]">{F.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {F.items.map((item, i) => (
          <Reveal key={item.question} delay={0.03 * i}>
            <div className="border-b border-[#D8CEDD] py-7 flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl sm:text-[22px] leading-[1.3] text-[#18141B]">{item.question}</h3>
                <Minus className="h-5 w-5 shrink-0 text-[#18141B]" aria-hidden="true" />
              </div>
              <div className="max-w-[1000px] flex flex-col gap-3.5">
                <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{item.answer}</p>
                {item.route && (
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-semibold text-[#BF6735]">{item.route.label}</span>
                    <span className="text-xs text-[#665F69]">{item.route.path}</span>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
