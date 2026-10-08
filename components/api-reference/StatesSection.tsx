"use client";

import React from "react";
import { BG, STATES_DATA } from "./api-reference-data";
import { Reveal, SectionContainer, SectionHeader } from "./shared";

export default function StatesSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.states}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={STATES_DATA.eyebrow} title={STATES_DATA.title} description={STATES_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATES_DATA.items.map((item, idx) => (
            <Reveal key={item.title} delay={0.03 * idx} className="h-full">
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase text-[#D65A2C]">{STATES_DATA.tag}</span>
                <h3 className="text-xl text-[#18141B]">{item.title}</h3>
                <p className="text-sm leading-[22px] text-[#665F69]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="w-full rounded-2xl bg-[#F1E8F8] p-6 sm:p-7 flex flex-col md:flex-row gap-4 md:gap-14">
            <p className="md:w-72 shrink-0 text-xl leading-7 text-[#301153]">{STATES_DATA.band.title}</p>
            <p className="flex-1 text-sm leading-6 text-[#665F69]">{STATES_DATA.band.description}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
