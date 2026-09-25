"use client";

import React from "react";
import { VALUE_PROPS_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ValuePropsSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA] border-b border-[#D8CEDD]/60"
      style={{
        backgroundImage: "url('/reconciliation/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={VALUE_PROPS_DATA.eyebrow}
          title={VALUE_PROPS_DATA.title}
          description={VALUE_PROPS_DATA.description}
        />
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mt-10 sm:mt-12">
        {VALUE_PROPS_DATA.cards.map((card, idx) => (
          <Reveal key={card.title} delay={0.04 * (idx + 1)}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white/95 backdrop-blur-xs p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-[#D65A2C]/40 hover:shadow-sm transition-all duration-200">
              <div>
                <span className="text-xs font-bold text-[#D65A2C] uppercase tracking-wider block">
                  Outcome 0{idx + 1}
                </span>
                <h3 className="text-lg sm:text-[19px] font-bold text-[#18141B] mt-2 leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] font-normal text-[#665F69] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
