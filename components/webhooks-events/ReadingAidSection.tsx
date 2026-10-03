"use client";

import React from "react";
import { BG, READING_AID_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, patternBg } from "./shared";

export default function ReadingAidSection() {
  return (
    <SectionContainer className="bg-[#25024D]" style={patternBg(BG.readingAid)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={READING_AID_DATA.eyebrow}
            title={READING_AID_DATA.title}
            description={READING_AID_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-3xl border border-[#4C2470] bg-[#160B22]/95 p-5 sm:p-8 flex flex-col gap-4">
            <p className="text-sm sm:text-base font-bold uppercase text-[#F4A261]">{READING_AID_DATA.label}</p>
            <dl>
              {READING_AID_DATA.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 sm:grid-cols-[160px_1fr] lg:grid-cols-[280px_1fr] sm:gap-4 border-b border-[#3A3340] py-4"
                >
                  <dt className="text-base font-semibold text-white">{row.label}</dt>
                  <dd className="font-mono text-[15px] text-[#D9D0DF] break-words">{row.value}</dd>
                </div>
              ))}
            </dl>
            <p className="pt-2 text-[15px] leading-6 text-[#D9D0DF]">{READING_AID_DATA.footnote}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
