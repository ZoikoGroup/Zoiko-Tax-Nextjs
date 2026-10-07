"use client";

import React from "react";
import Image from "next/image";
import { ClipboardList } from "lucide-react";
import { SOURCE_MODEL_DATA as S, EXPERT_REVIEW_DATA as E } from "./telecom-tax-insights-data";
import { SectionContainer, Reveal } from "./shared";

export default function SourceModelSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/telecom-tax-insights/evidence-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
        </div>

        <SectionContainer className="relative">
          <Reveal>
            <div className="flex flex-col gap-4 mb-10">
              <span className="text-xs font-bold uppercase text-[#F4A261]">{S.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-white">{S.title}</h2>
              <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF] max-w-[960px]">{S.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="rounded-[10px] bg-white/[0.04] overflow-x-auto">
              <div className="hidden lg:grid grid-cols-[230px_1fr_260px] gap-6 px-6 py-3.5 text-xs font-bold text-[#F4A261]">
                {S.legend.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
              {S.rows.map((row) => (
                <div key={row.type} className="border-t border-white/15 grid grid-cols-1 lg:grid-cols-[230px_1fr_260px] gap-3 lg:gap-6 px-6 py-5">
                  <span className="text-[17px] text-white">{row.type}</span>
                  <span className="text-[15px] leading-[1.6] text-[#D9D0DF]">{row.need}</span>
                  <span className="text-sm leading-[1.6] text-[#D9D0DF]">{row.state}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="w-full mt-8">
            <p className="text-[15px] leading-[1.6] text-[#D9D0DF]">{S.footnote}</p>
          </Reveal>
        </SectionContainer>
      </section>

      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-xs font-bold uppercase text-[#D65A2C]">{E.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{E.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[960px]">{E.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-[#F8F5FA] p-7 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <ClipboardList className="h-[26px] w-[26px] text-[#18141B]" aria-hidden="true" />
                <h3 className="text-xl sm:text-[22px] leading-[1.25] text-[#18141B] flex-1">{E.identity.title}</h3>
              </div>
              {E.identity.fields.map((f) => (
                <div key={f.label} className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[#665F69]">{f.label}</span>
                  <span className="text-sm text-[#18141B]">{f.value}</span>
                </div>
              ))}
              <div className="h-px bg-[#D8CEDD]" />
              <p className="text-sm leading-[1.6] text-[#665F69]">{E.identity.footnote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="h-full rounded-[26px] bg-[#F2EAF7] p-7 sm:p-8 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase text-[#D65A2C]">{E.dependencies.label}</span>
              <h3 className="text-xl sm:text-[22px] leading-[1.25] text-[#18141B]">{E.dependencies.title}</h3>
              {E.dependencies.paragraphs.map((p) => (
                <p key={p} className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">
                  {p}
                </p>
              ))}
              <p className="text-sm leading-[1.6] text-[#665F69]">{E.dependencies.footnote}</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
