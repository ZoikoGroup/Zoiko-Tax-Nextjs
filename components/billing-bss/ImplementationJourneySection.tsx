"use client";

import React from "react";
import { Minus, ArrowUpRight } from "lucide-react";
import { IMPLEMENTATION_JOURNEY_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, AuthorityNotice, Reveal } from "./shared";

export default function ImplementationJourneySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={IMPLEMENTATION_JOURNEY_DATA.eyebrow}
          title={IMPLEMENTATION_JOURNEY_DATA.title}
          description={IMPLEMENTATION_JOURNEY_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {IMPLEMENTATION_JOURNEY_DATA.pathways.map((pathway, i) => (
          <Reveal key={pathway.role} delay={0.05 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase text-[#D65A2C]">{pathway.role}</span>
              <h3 className="text-[22px] font-bold leading-[1.2] text-[#18141B]">{pathway.title}</h3>
              <p className="text-[15px] leading-[1.55] text-[#665F69]">{pathway.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between gap-4 flex-wrap">
        <h3 className="text-2xl font-bold text-[#18141B]">{IMPLEMENTATION_JOURNEY_DATA.safeStatesTitle}</h3>
        <span className="text-xs font-semibold text-[#665F69]">{IMPLEMENTATION_JOURNEY_DATA.safeStatesTag}</span>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {IMPLEMENTATION_JOURNEY_DATA.safeStates.map((state, i) => (
          <Reveal key={state.title} delay={0.03 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <p className="text-lg text-[#301153]">{state.title}</p>
                <Minus className="h-[18px] w-[18px] shrink-0 text-[#D65A2C]" aria-hidden="true" />
              </div>
              <p className="text-sm leading-[1.55] text-[#665F69]">{state.description}</p>
              <p className="text-xs font-semibold text-[#D65A2C]">{state.action}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.18}>
        <div className="mt-8 rounded-2xl bg-[#F1E8F8] p-6 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#665F69]">{IMPLEMENTATION_JOURNEY_DATA.affordances.hover.tag}</span>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D65A2C] bg-[#BF6735] px-[22px] py-[15px] text-sm font-semibold text-white">
              {IMPLEMENTATION_JOURNEY_DATA.affordances.hover.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-[#665F69]">{IMPLEMENTATION_JOURNEY_DATA.affordances.focus.tag}</span>
            <span className="inline-flex w-fit items-center gap-2.5 rounded-full bg-white px-[22px] py-3.5 text-sm font-semibold text-[#18141B] min-h-[48px]">
              {IMPLEMENTATION_JOURNEY_DATA.affordances.focus.label}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <span className="text-xs font-bold text-[#665F69]">{IMPLEMENTATION_JOURNEY_DATA.affordances.expanded.tag}</span>
            <p className="text-sm leading-[1.55] text-[#665F69]">{IMPLEMENTATION_JOURNEY_DATA.affordances.expanded.description}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.22} className="w-full mt-8">
        <AuthorityNotice title={IMPLEMENTATION_JOURNEY_DATA.notice.title} description={IMPLEMENTATION_JOURNEY_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}
