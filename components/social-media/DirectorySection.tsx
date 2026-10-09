"use client";

import React from "react";
import { ShieldAlert, ContactRound, LockKeyhole } from "lucide-react";
import { VERIFICATION_NOTICE, DIRECTORY_DATA as D } from "./social-media-data";
import { SectionContainer, Reveal } from "./shared";

export default function DirectorySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="rounded-[26px] bg-[#301153] p-7 flex flex-col sm:flex-row items-start gap-6 mb-10">
          <ShieldAlert className="h-10 w-10 shrink-0 text-white" aria-hidden="true" />
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-white">{VERIFICATION_NOTICE.title}</h2>
            <p className="text-base leading-[1.6] text-[#D9D0DF]">{VERIFICATION_NOTICE.description}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{D.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{D.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{D.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-[560px] shrink-0 p-8 sm:p-10 flex flex-col gap-6">
            <span className="inline-flex w-fit items-center rounded-full bg-[#F3EEF7] px-3.5 py-2 text-xs font-bold text-[#301153]">
              {D.unavailable.badge}
            </span>
            <ContactRound className="h-[52px] w-[52px] text-[#301153]" aria-hidden="true" />
            <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.12] text-[#18141B]">{D.unavailable.title}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{D.unavailable.description}</p>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#F3EEF7] px-[22px] h-12 text-sm font-semibold text-[#665F69]">
              {D.unavailable.action}
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="text-[13px] leading-[1.6] text-[#665F69]">{D.unavailable.actionNote}</p>
          </div>

          <div className="flex-1 bg-[#FCF9FF] p-8 sm:p-10 flex flex-col gap-4">
            <h4 className="text-xl font-bold text-[#18141B]">{D.fields.title}</h4>
            <p className="text-[13px] leading-[1.6] text-[#665F69]">{D.fields.description}</p>
            {D.fields.items.map((f) => (
              <div key={f.label} className="border-b border-[#D8CEDD] py-3 flex items-start justify-between gap-5">
                <span className="text-sm text-[#18141B]">{f.label}</span>
                <span className="text-[13px] text-[#665F69] whitespace-nowrap">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="w-full mt-8">
        <p className="text-[13px] leading-[1.6] text-[#665F69]">{D.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
