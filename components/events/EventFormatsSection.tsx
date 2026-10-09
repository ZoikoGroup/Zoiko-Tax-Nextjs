"use client";

import React from "react";
import { Video, Users2, Wrench } from "lucide-react";
import { EVENT_FORMATS_DATA as F } from "./events-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [Video, Users2, Wrench];

export default function EventFormatsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{F.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{F.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{F.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {F.formats.map((f, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={f.title} delay={0.03 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.25] text-[#18141B]">{f.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{f.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="flex-1 flex flex-col gap-3.5">
            <h3 className="text-2xl sm:text-[28px] font-semibold leading-[1.1] text-[#18141B]">{F.guidance.title}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{F.guidance.description}</p>
          </div>
          <div className="flex-1 flex flex-col gap-3.5">
            <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#F3EEF7] px-3.5 py-2 text-xs font-mono text-[#301153]">
              {F.currentness.badge}
            </span>
            <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{F.currentness.title}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{F.currentness.description}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
