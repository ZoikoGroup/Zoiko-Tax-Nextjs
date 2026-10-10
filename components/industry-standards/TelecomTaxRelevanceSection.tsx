"use client";

import React from "react";
import { ArrowRight, Info } from "lucide-react";
import { TELECOM_TAX_RELEVANCE_DATA as T } from "./industry-standards-data";
import { SectionContainer, Reveal, SecondaryButton } from "./shared";

export default function TelecomTaxRelevanceSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{T.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{T.title}</h2>
          <p className="text-base sm:text-lg leading-[1.55] text-[#665F69]">{T.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] bg-[#301153] p-7 sm:p-8 flex flex-col gap-7 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {T.stages.map((s) => (
              <div key={s.title} className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-base leading-[1.55] text-[#D9D0DF]">{s.description}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-[1.55] text-[#D9D0DF]">{T.sequenceLine}</p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="rounded-2xl bg-white border border-[#D8CEDD] p-5 flex gap-3.5 mb-6">
          <Info className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
          <p className="text-sm leading-[1.55] text-[#665F69]">{T.scopeNote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="flex-1 text-base leading-[1.55] text-[#665F69]">{T.coverageHandoff.description}</p>
          <SecondaryButton>
            <span className="inline-flex items-center gap-2">
              {T.coverageHandoff.action}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </SecondaryButton>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
