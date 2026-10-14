"use client";

import React from "react";
import { GOVERNED_SCOPE_DATA } from "./european-union-data";
import { SectionContainer, SectionHeading, Reveal } from "./shared";

export default function GovernedScopeSection() {
  const g = GOVERNED_SCOPE_DATA;

  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={g.eyebrow}
            title={g.title}
            description={g.description}
          />
        </Reveal>

        {/* Scope boundary container */}
        <Reveal delay={0.06}>
          <div className="rounded-[26px] bg-[#301153] p-8 flex flex-col lg:flex-row gap-8 items-start lg:items-center text-white shadow-xs">
            <h3 className="w-full lg:w-[360px] shrink-0 text-2xl sm:text-[28px] font-bold leading-[1.2em] text-white">
              Scope not publicly<br className="hidden sm:inline" />
              established
            </h3>
            <p className="flex-1 text-base font-normal leading-[1.55em] text-[#D9D0DF]">
              {g.scopeBoundary.description}
            </p>
          </div>
        </Reveal>

        {/* Reserved scope structure table */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white divide-y divide-[#D8CEDD] overflow-hidden shadow-xs">
            {g.dimensions.map((dim) => (
              <div
                key={dim.title}
                className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start"
              >
                <div className="md:col-span-4 flex flex-col gap-1">
                  <span className="text-base font-semibold text-[#18141B]">
                    {dim.title}
                  </span>
                  <span className="text-sm font-normal text-[#665F69]">
                    {dim.status}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base font-normal leading-[1.5em] text-[#665F69]">
                    {dim.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Footer Note */}
        <Reveal delay={0.14}>
          <p className="text-base font-normal leading-[1.55em] text-[#665F69]">
            {g.footerNote}
          </p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
