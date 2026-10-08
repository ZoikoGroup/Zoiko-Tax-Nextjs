"use client";

import React from "react";
import { BG, JOURNEYS_DATA } from "./developer-overview-data";
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

        <div className="flex flex-col">
          {JOURNEYS_DATA.items.map((item, idx) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={0.04 * idx}>
                <div className="border-t border-[#D8CEDD] py-6 flex flex-col md:flex-row gap-3 md:gap-10">
                  <div className="md:w-60 lg:w-72 shrink-0 flex items-start gap-3">
                    <Icon className="h-6 w-6 shrink-0 text-[#D65A2C] mt-0.5" strokeWidth={1.6} aria-hidden="true" />
                    <h3 className="text-xl sm:text-2xl font-bold leading-7 text-[#18141B]">{item.title}</h3>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <p className="text-base sm:text-lg font-semibold leading-7 text-[#301153]">{item.path}</p>
                    <p className="text-base leading-6 text-[#665F69]">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
