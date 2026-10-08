"use client";

import React from "react";
import { LayoutTemplate, Link as LinkIcon } from "lucide-react";
import { DEFINITION_STRUCTURE_DATA as D } from "./glossary-data";
import { SectionContainer, Reveal } from "./shared";

export default function DefinitionStructureSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold text-[#AC4F25]">{D.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{D.title}</h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{D.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-xl bg-[#F3EBF8] px-5 py-3.5 flex items-center gap-2.5 mb-6">
          <LayoutTemplate className="h-[18px] w-[18px] shrink-0 text-[#301153]" aria-hidden="true" />
          <p className="text-sm font-semibold text-[#301153]">{D.specimenLabel}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-8">
        <Reveal delay={0.06} className="w-full lg:w-[400px] shrink-0">
          <div className="flex flex-col gap-7">
            <div className="rounded-2xl border border-[#CABFCF] p-7 flex flex-col gap-5">
              <span className="text-xs font-bold text-[#AC4F25]">{D.compactEntry.label}</span>
              <h3 className="text-2xl sm:text-[28px] font-bold leading-[1.15] text-[#18141B]">{D.compactEntry.term}</h3>
              <p className="text-lg text-[#18141B]">{D.compactEntry.definition}</p>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-[#AC4F25]">{D.compactEntry.scopeLabel}</span>
                <span className="text-base leading-[1.6] text-[#665F69]">{D.compactEntry.scope}</span>
              </div>
              <p className="text-sm text-[#665F69]">{D.compactEntry.aliases}</p>
              <span className="text-sm font-semibold text-[#AC4F25]">{D.compactEntry.cta}</span>
              <div className="flex flex-col text-xs text-[#665F69] leading-[1.6]">
                {D.compactEntry.metadata.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-[22px] font-bold leading-[1.15] text-[#18141B]">{D.recordContract.title}</h3>
              <p className="text-sm leading-[1.6] text-[#665F69]">{D.recordContract.description}</p>
              <div className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-[#AC4F25]">{D.recordContract.termTypeLabel}</span>
                <span className="text-base leading-[1.6] text-[#665F69]">{D.recordContract.termTypes}</span>
              </div>
              <p className="text-sm leading-[1.6] text-[#665F69]">{D.recordContract.note1}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{D.recordContract.note2}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex-1 min-w-0">
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-[#AC4F25]">{D.expandedEntry.label}</span>
              <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#AC4F25]">
                <LinkIcon className="h-4 w-4" aria-hidden="true" />
                {D.expandedEntry.copyLink}
              </span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold leading-[1.15] text-[#18141B]">{D.expandedEntry.term}</h3>
            <p className="text-xl sm:text-[22px] font-medium leading-[1.5] text-[#18141B]">{D.expandedEntry.definition}</p>
            <div className="border-y border-[#D8CEDD] py-5 flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#18141B]">{D.expandedEntry.moreDetailLabel}</span>
              <p className="text-base leading-[1.6] text-[#665F69]">{D.expandedEntry.moreDetail}</p>
            </div>
            {D.expandedEntry.fields.map((f) => (
              <div key={f.label} className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-[#AC4F25]">{f.label}</span>
                <span className="text-base leading-[1.6] text-[#665F69]">{f.value}</span>
              </div>
            ))}
            <div className="rounded-xl bg-white border border-[#EFE7F3] p-5 flex flex-col gap-2.5">
              <span className="text-sm font-semibold text-[#18141B]">{D.expandedEntry.currentness.title}</span>
              <div className="flex flex-col text-[13px] text-[#665F69] leading-[1.6]">
                {D.expandedEntry.currentness.rows.map((r) => (
                  <span key={r}>{r}</span>
                ))}
              </div>
            </div>
            <p className="text-sm leading-[1.6] text-[#665F69]">{D.expandedEntry.footnote}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
