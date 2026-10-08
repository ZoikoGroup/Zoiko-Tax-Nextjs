"use client";

import React from "react";
import { RESILIENT_DATA } from "./developer-overview-data";
import { FileCode2 } from "lucide-react";
import { ArrowLink, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function ResilientSection() {
  const { card, states } = RESILIENT_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={RESILIENT_DATA.eyebrow} title={RESILIENT_DATA.title} description={RESILIENT_DATA.description} />
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <Reveal className="w-full lg:w-80 shrink-0">
            <div className="rounded-3xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col gap-4">
              <FileCode2 className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-2xl font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
              <div className="flex flex-col gap-[5px]">
                <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
                <span className="text-xs leading-4 text-[#665F69]">{card.path}</span>
              </div>
              <div className="mt-2 pt-5 border-t border-[#D8CEDD] flex flex-col gap-4">
                <span className="text-xs font-bold uppercase text-[#665F69]">{card.dynamicLabel}</span>
                <div className="flex flex-col gap-4" aria-hidden="true">
                  <span className="block h-2.5 w-3/5 rounded-full bg-[#F1E8F8]" />
                  <span className="block h-2.5 w-4/5 rounded-full bg-[#F1E8F8]" />
                </div>
                <p className="text-sm leading-[22px] text-[#665F69]">{card.dynamicNote}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex-1">
            <dl className="flex flex-col">
              {states.map((s) => (
                <div key={s.title} className="border-t border-[#D8CEDD] py-4 flex flex-col sm:flex-row gap-1.5 sm:gap-8">
                  <dt className="sm:w-60 shrink-0 flex flex-col gap-1">
                    <span className="text-base font-semibold text-[#18141B]">{s.title}</span>
                    <span className="text-xs font-semibold text-[#D65A2C]">{s.status}</span>
                  </dt>
                  <dd className="flex-1 text-sm leading-6 text-[#665F69]">{s.description}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
