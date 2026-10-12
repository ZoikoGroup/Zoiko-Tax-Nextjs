"use client";

import React from "react";
import clsx from "clsx";
import { ADJACENT_ASSURANCE_DATA as A } from "./regulatory-compliance-data";
import { SectionContainer, Reveal } from "./shared";

export default function AdjacentAssuranceSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{A.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{A.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{A.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {A.destinations.map((d, i) => (
          <Reveal key={d.title} delay={0.03 * i}>
            <div
              className={clsx(
                "h-full min-h-[258px] rounded-2xl border border-[#D8CEDD] p-6 flex flex-col gap-5",
                d.current ? "bg-[#301153]" : "bg-white"
              )}
            >
              <h3 className={clsx("text-2xl font-bold leading-[1.15]", d.current ? "text-white" : "text-[#18141B]")}>
                {d.title}
              </h3>
              <p className={clsx("text-base leading-[1.55] flex-1", d.current ? "text-[#D9D0DF]" : "text-[#665F69]")}>
                {d.description}
              </p>
              <span className={clsx("text-sm font-semibold", d.current ? "text-[#F4A261]" : "text-[#665F69]")}>
                {d.note}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="text-sm leading-[1.55] text-[#665F69]">{A.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}
