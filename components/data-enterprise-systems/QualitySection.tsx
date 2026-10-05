"use client";

import React from "react";
import { CircleAlert } from "lucide-react";
import { BG, QUALITY_DATA } from "./data-enterprise-systems-data";
import { DataTable, Notice, Reveal, SectionContainer, SectionHeader, patternBg } from "./shared";

export default function QualitySection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]" style={patternBg(BG.quality)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={QUALITY_DATA.eyebrow} title={QUALITY_DATA.title} description={QUALITY_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="w-full rounded-3xl bg-[#F1E8F8] p-5 sm:p-7 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase text-[#B4561E]">{QUALITY_DATA.statesLabel}</span>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {QUALITY_DATA.states.map((s) => (
                <li key={s.title} className="rounded-2xl border border-[#D8CEDD] bg-white p-4 sm:p-5 flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-base font-semibold text-[#18141B]">
                    <CircleAlert className="h-4 w-4 shrink-0 text-[#B4561E]" strokeWidth={1.8} aria-hidden="true" />
                    {s.title}
                  </span>
                  <span className="text-sm leading-5 text-[#665F69]">{s.description}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-5 text-[#665F69]">{QUALITY_DATA.statesNote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <DataTable headers={QUALITY_DATA.headers} rows={QUALITY_DATA.rows} columns="md:grid-cols-[1fr_1.6fr_1.6fr]" />
        </Reveal>

        <Reveal delay={0.08}>
          <Notice title={QUALITY_DATA.notice.title} description={QUALITY_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
