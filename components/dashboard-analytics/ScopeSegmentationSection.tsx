"use client";

import React from "react";
import { CalendarRange, ScanLine } from "lucide-react";
import { SCOPE_SEGMENTATION_DATA as S } from "./dashboard-analytics-data";
import { SectionContainer, Reveal, AuthorityNoticeBox } from "./shared";

const ICONS: Record<string, typeof CalendarRange> = { "calendar-range": CalendarRange, "scan-line": ScanLine };

export default function ScopeSegmentationSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{S.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{S.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{S.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-5 mb-6">
          <p className="text-sm text-[#D65A2C]">{S.barLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {S.fields.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-[#665F69]">{f.label}</span>
                <span className="text-base text-[#18141B]">{f.value}</span>
              </div>
            ))}
          </div>
          <p className="text-sm leading-[1.5] text-[#665F69]">{S.barFootnote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {S.cards.map((c) => {
            const Icon = ICONS[c.icon];
            return (
              <div key={c.title} className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                <h3 className="text-xl font-normal leading-[1.2] text-[#18141B]">{c.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{c.description}</p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <AuthorityNoticeBox>{S.notice}</AuthorityNoticeBox>
      </Reveal>
    </SectionContainer>
  );
}
