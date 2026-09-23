"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { buyerOutcomesData } from "./exemptions-data";

export default function BuyerOutcomesSection() {
  return (
    <SectionContainer id="buyer-outcomes" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow={buyerOutcomesData.eyebrow}
          title={buyerOutcomesData.title}
          description={buyerOutcomesData.description}
        />
      </Reveal>

      {/* 6-Card Grid */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {buyerOutcomesData.outcomes.map((item, idx) => (
          <Reveal key={item.title} delay={idx * 0.04}>
            <div className="flex h-full flex-col rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-7 transition-all duration-200 hover:border-[#D65A2C]/30">
              <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
                {item.title}
              </h3>
              <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#535055]">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
