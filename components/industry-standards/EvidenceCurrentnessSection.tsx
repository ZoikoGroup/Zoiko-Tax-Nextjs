"use client";

import React from "react";
import { CalendarClock, Info, LockKeyhole } from "lucide-react";
import { EVIDENCE_CURRENTNESS_DATA as E } from "./industry-standards-data";
import { SectionContainer, Reveal } from "./shared";

export default function EvidenceCurrentnessSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/industry-standards/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{E.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{E.title}</h2>
            <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{E.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-5">
              <CalendarClock className="h-6 w-6 text-[#301153]" aria-hidden="true" />
              <h3 className="text-xl sm:text-2xl font-bold leading-[1.1] text-[#18141B]">{E.publicConfirmation.title}</h3>
              <div className="flex flex-col gap-4">
                {E.publicConfirmation.fields.map((f) => (
                  <div key={f.label} className="flex items-center justify-between">
                    <span className="text-[15px] text-[#665F69]">{f.label}</span>
                    <span className="text-[15px] font-semibold text-[#18141B]">{f.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm leading-[1.55] text-[#665F69]">{E.publicConfirmation.footnote}</p>
            </div>

            <div className="h-full rounded-[26px] bg-[#301153] p-7 sm:p-8 flex flex-col gap-5">
              <LockKeyhole className="h-6 w-6 text-[#D9D0DF]" aria-hidden="true" />
              <h3 className="text-xl sm:text-2xl font-bold leading-[1.1] text-white">{E.restrictedAccess.title}</h3>
              <p className="text-base leading-[1.55] text-[#D9D0DF]">{E.restrictedAccess.description}</p>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-white">{E.restrictedAccess.destination.title}</span>
                <span className="text-xs text-[#D9D0DF]">{E.restrictedAccess.destination.note}</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col">
            {E.states.map((s) => (
              <div key={s.title} className="border-t border-[#D8CEDD] py-5 flex flex-col sm:flex-row gap-3 sm:gap-8">
                <h4 className="text-base font-semibold text-[#18141B] sm:w-[290px] shrink-0">{s.title}</h4>
                <div className="flex-1 flex flex-col gap-1.5">
                  <span className="text-[17px] font-semibold text-[#301153]">{s.status}</span>
                  <p className="text-sm leading-[1.55] text-[#665F69]">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-[#EEE5F5] p-5 flex gap-3.5">
            <Info className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
            <p className="text-sm leading-[1.55] text-[#665F69]">{E.scopeNote}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
