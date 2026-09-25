"use client";

import React from "react";
import { FORECASTING_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ForecastingSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={FORECASTING_DATA.eyebrow}
          title={FORECASTING_DATA.title}
          description={FORECASTING_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-xl border border-[#D8CEDD] bg-[#FAF8FA] p-6 space-y-3">
            <h3 className="text-base font-bold text-[#18141B]">{FORECASTING_DATA.inputs.title}</h3>
            <ul className="space-y-2.5">
              {FORECASTING_DATA.inputs.items.map((item) => (
                <li key={item} className="text-sm leading-[1.5] text-[#665F69]">
                  {"• "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-xl bg-[#301153] p-6 space-y-3">
            <h3 className="text-base font-bold text-white">{FORECASTING_DATA.outcomes.title}</h3>
            <p className="text-lg font-semibold text-[#F4A261]">{FORECASTING_DATA.outcomes.value}</p>
            <p className="text-xs leading-[1.5] text-[#F7D7CB]">{FORECASTING_DATA.outcomes.notice}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
