"use client";

import React from "react";
import { PRINCIPLES_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function PrinciplesSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/evidence-auditability/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={PRINCIPLES_DATA.eyebrow}
          title={PRINCIPLES_DATA.title}
          description={PRINCIPLES_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRINCIPLES_DATA.cards.map((card, i) => (
          <Reveal key={card.number} delay={0.04 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 space-y-3">
              <span className="text-sm font-bold text-[#D65A2C]">{card.number}</span>
              <h3 className="text-lg font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-[13px] leading-[1.5] text-[#665F69]">{card.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
