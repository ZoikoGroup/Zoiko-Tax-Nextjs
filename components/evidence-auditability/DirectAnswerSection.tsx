"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={DIRECT_ANSWER_DATA.eyebrow} title={DIRECT_ANSWER_DATA.title} />
      </Reveal>

      <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-10">
        <Reveal delay={0.06}>
          <div className="flex flex-col gap-4">
            <p className="text-lg leading-[1.6] text-[#535055]">{DIRECT_ANSWER_DATA.paragraph1}</p>
            <p className="text-[15px] leading-[1.5] text-[#665F69]">{DIRECT_ANSWER_DATA.paragraph2}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 space-y-3">
            <h3 className="text-sm font-bold text-[#18141B]">{DIRECT_ANSWER_DATA.card.title}</h3>
            <p className="text-[13px] leading-[1.4] text-[#665F69]">{DIRECT_ANSWER_DATA.card.description}</p>
            <div className="flex flex-col gap-2 pt-1">
              {DIRECT_ANSWER_DATA.card.points.map((point) => (
                <div key={point.text} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: point.color }} />
                  <span className="text-[13px] font-semibold text-[#18141B]">{point.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
