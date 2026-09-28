"use client";

import React from "react";
import { ASSURANCE_MODULES_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function AssuranceModulesSection() {
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
        <SectionHeader eyebrow={ASSURANCE_MODULES_DATA.eyebrow} title={ASSURANCE_MODULES_DATA.title} />
      </Reveal>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
        {ASSURANCE_MODULES_DATA.cards.map((card, i) => (
          <Reveal key={card.title} delay={0.05 * i}>
            <div className="h-full min-h-[240px] flex flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-6">
              <div className="space-y-2">
                <span className="inline-block rounded bg-[#F5F2F9] px-2 py-1 text-[11px] font-bold uppercase text-[#D65A2C]">
                  {card.tag}
                </span>
                <h3 className="text-xl font-bold text-[#18141B]">{card.title}</h3>
                <p className="text-sm leading-[1.5] text-[#665F69]">{card.description}</p>
              </div>
              <p className="mt-4 text-[11px] italic text-[#665F69]">{ASSURANCE_MODULES_DATA.footnote}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
