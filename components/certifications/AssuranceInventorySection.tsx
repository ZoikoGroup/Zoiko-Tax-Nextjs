"use client";

import React from "react";
import { FileText } from "lucide-react";
import { ASSURANCE_INVENTORY_DATA as A } from "./certifications-data";
import { SectionContainer, Reveal, SecondaryButton } from "./shared";

export default function AssuranceInventorySection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/certifications/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{A.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{A.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-6">
            <div className="flex gap-6 items-start">
              <FileText className="h-8 w-8 shrink-0 text-[#301153]" aria-hidden="true" />
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{A.pending.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{A.pending.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <SecondaryButton className="!bg-transparent">{A.pending.action}</SecondaryButton>
              <span className="text-sm text-[#665F69]">{A.pending.note}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{A.reading.title}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{A.reading.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold text-[#301153]">{A.statusVocab.label}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {A.statusVocab.items.map((s) => (
                <div key={s.title} className="rounded-2xl border border-[#D8CEDD] bg-[#FFFAFA] p-5 flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-[#18141B]">{s.title}</h4>
                  <p className="text-sm leading-[1.6] text-[#665F69]">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-lg bg-[#EEE5F4] p-5">
            <p className="text-sm leading-[1.6] text-[#665F69]">{A.scopeNote}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
