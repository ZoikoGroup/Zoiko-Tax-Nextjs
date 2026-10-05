"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Minus } from "lucide-react";
import { SAFE_STATES_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, DataTable, Notice, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function SafeStatesSection() {
  const { affordances, expanded } = SAFE_STATES_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={SAFE_STATES_DATA.eyebrow} title={SAFE_STATES_DATA.title} description={SAFE_STATES_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <DataTable headers={SAFE_STATES_DATA.headers} rows={SAFE_STATES_DATA.rows} columns="md:grid-cols-[1fr_1.9fr_1fr]" />
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          <Reveal className="w-full lg:w-[340px] xl:w-[410px] shrink-0">
            <div className="rounded-3xl bg-[#F1E8F8] p-6 sm:p-7 flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#18141B]">{affordances.title}</h3>
              <span className="text-xs font-bold uppercase text-[#B4561E]">{affordances.focusLabel}</span>
              <Link
                href={affordances.focusLink.href}
                className="self-start inline-flex items-center gap-3 rounded-full border-2 border-[#301153] bg-white px-5 py-3 text-base font-semibold text-[#18141B] hover:bg-[#FAF5FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#301153]"
              >
                {affordances.focusLink.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <span className="text-xs font-bold uppercase text-[#B4561E]">{affordances.hoverLabel}</span>
              <Link
                href={affordances.hoverLink.href}
                className="self-start inline-flex items-center gap-1.5 rounded-xl border border-[#B4561E] bg-[#FFF0E7] px-3.5 py-3 text-base font-semibold text-[#B4561E] hover:bg-[#FDE3D3]"
              >
                {affordances.hoverLink.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="text-sm leading-[22px] text-[#665F69]">{affordances.note}</p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex-1 min-w-0">
            <div className="rounded-3xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#18141B]">{expanded.title}</h3>
                <Minus className="h-5 w-5 shrink-0 mt-1 text-[#301153]" aria-hidden="true" />
              </div>
              <span className="text-xs font-bold uppercase text-[#B4561E]">{expanded.tag}</span>
              <p className="text-base sm:text-lg leading-7 text-[#665F69]">{expanded.description}</p>
              <ArrowLink href={expanded.link.href}>{expanded.link.label}</ArrowLink>
              <p className="text-sm leading-[22px] text-[#665F69]">{expanded.note}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <Notice title={SAFE_STATES_DATA.notice.title} description={SAFE_STATES_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
