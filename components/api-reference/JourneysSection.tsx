"use client";

import React from "react";
import { BG, JOURNEYS_DATA } from "./api-reference-data";
import { ICONS, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function JourneysSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.journeys}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={JOURNEYS_DATA.eyebrow} title={JOURNEYS_DATA.title} />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {JOURNEYS_DATA.items.map((item, idx) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={0.04 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="text-xl text-[#18141B]">{item.title}</h3>
                  <p className="text-[15px] leading-6 text-[#665F69]">{item.description}</p>
                  <span className="mt-auto text-xs font-bold uppercase text-[#D65A2C]">{item.tag}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
