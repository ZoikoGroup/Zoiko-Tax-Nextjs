"use client";

import React from "react";
import { ArrowDown, ShieldCheck } from "lucide-react";
import { BG, BOUNDARY_DATA } from "./data-enterprise-systems-data";
import { IconTile, Notice, Reveal, SectionContainer, SectionHeader, patternBg } from "./shared";

const cardClass =
  "h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 shadow-[0px_5px_18px_0px_rgba(48,17,83,0.04)] flex flex-col gap-4";

export default function BoundarySection() {
  const { sources, gate, outcomes } = BOUNDARY_DATA;

  return (
    <SectionContainer className="bg-[#FAF8FA]" style={patternBg(BG.boundary)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={BOUNDARY_DATA.eyebrow} title={BOUNDARY_DATA.title} description={BOUNDARY_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <figure className="w-full rounded-3xl bg-[#F3F2F4] p-5 sm:p-8 flex flex-col gap-6">
            <span className="text-xs font-bold uppercase text-[#301153]">{BOUNDARY_DATA.panelLabel}</span>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {sources.map((s) => (
                <div key={s.title} className={cardClass}>
                  <IconTile icon={s.icon} />
                  <h3 className="text-xl font-semibold leading-7 text-[#18141B]">{s.title}</h3>
                  <p className="text-base leading-7 text-[#665F69]">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="w-full rounded-2xl bg-[#301153] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <ShieldCheck className="h-8 w-8 shrink-0 text-[#F4A261]" strokeWidth={1.6} aria-hidden="true" />
              <div className="flex-1 flex flex-col gap-2">
                <p className="text-xl sm:text-2xl font-semibold text-white">{gate.title}</p>
                <p className="text-base leading-6 text-[#D9D0DF]">{gate.description}</p>
              </div>
              <span className="sm:w-52 text-xs font-semibold uppercase leading-5 text-[#F4A261]">{gate.tag}</span>
            </div>

            <ArrowDown className="h-5 w-5 self-center text-[#B4561E]" aria-hidden="true" />

            <div className="grid gap-4 md:grid-cols-2">
              {outcomes.map((o) => (
                <div key={o.title} className={cardClass}>
                  <span className="text-xs font-bold uppercase leading-4 text-[#B4561E]">{o.tag}</span>
                  <h3 className="text-xl font-semibold leading-7 text-[#18141B]">{o.title}</h3>
                  <p className="text-base leading-7 text-[#665F69]">{o.description}</p>
                </div>
              ))}
            </div>
          </figure>
        </Reveal>

        <p className="text-base leading-7 text-[#665F69]">{BOUNDARY_DATA.diagram}</p>

        <Reveal delay={0.06}>
          <Notice title={BOUNDARY_DATA.notice.title} description={BOUNDARY_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
