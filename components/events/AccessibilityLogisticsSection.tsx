"use client";

import React from "react";
import { Accessibility, CalendarPlus, LockKeyhole } from "lucide-react";
import { ACCESSIBILITY_LOGISTICS_DATA as A } from "./events-data";
import { SectionContainer, Reveal } from "./shared";

export default function AccessibilityLogisticsSection() {
  return (
    <SectionContainer className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{A.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{A.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{A.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal delay={0.04}>
          <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-6">
            <Accessibility className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
            <h3 className="text-2xl sm:text-[28px] font-semibold text-[#18141B]">{A.accessibility.title}</h3>
            {A.accessibility.fields.map((f) => (
              <div key={f.label} className="border-b border-[#D8CEDD] py-3 flex items-center justify-between gap-5">
                <span className="text-sm font-semibold text-[#18141B]">{f.label}</span>
                <span className="text-[13px] text-[#665F69] whitespace-nowrap">{f.value}</span>
              </div>
            ))}
            <p className="text-sm leading-[1.6] text-[#665F69]">{A.accessibility.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-6">
            <CalendarPlus className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
            <h3 className="text-2xl sm:text-[28px] font-semibold text-[#18141B]">{A.calendar.title}</h3>
            <span className="inline-flex w-fit items-center rounded-full bg-[#F3EEF7] border border-[#D8CEDD] px-3 py-1.5 text-xs font-mono text-[#301153]">
              {A.calendar.badge}
            </span>
            <p className="text-base leading-[1.6] text-[#665F69]">{A.calendar.description}</p>
            <div className="flex flex-wrap gap-3">
              {A.calendar.actions.map((action) => (
                <span
                  key={action}
                  className="inline-flex items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#EBE5EF] px-[22px] h-[48px] text-sm font-semibold text-[#665F69]"
                >
                  {action}
                  <LockKeyhole className="h-[14px] w-[14px]" aria-hidden="true" />
                </span>
              ))}
            </div>
            <div className="rounded-2xl bg-[#F3EEF7] p-6 flex flex-col gap-2.5">
              <h4 className="text-base font-bold text-[#1D033B]">{A.calendar.guidance.title}</h4>
              <p className="text-sm leading-[1.6] text-[#665F69]">{A.calendar.guidance.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
