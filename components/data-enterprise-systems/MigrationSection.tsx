"use client";

import React from "react";
import { BG, MIGRATION_DATA } from "./data-enterprise-systems-data";
import { Notice, Reveal, SectionContainer, SectionHeader, patternBg } from "./shared";

export default function MigrationSection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]" style={patternBg(BG.readiness)}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={MIGRATION_DATA.eyebrow} title={MIGRATION_DATA.title} description={MIGRATION_DATA.description} />
        </Reveal>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MIGRATION_DATA.steps.map((step, idx) => (
            <li key={step.title} className="h-full">
              <Reveal delay={0.03 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 flex flex-col gap-3">
                  <span className="text-xs font-bold uppercase text-[#B4561E]">
                    {String(idx + 1).padStart(2, "0")} · {step.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-[#18141B]">{step.title}</h3>
                  <p className="text-base leading-[26px] text-[#665F69]">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="text-sm leading-[22px] text-[#665F69]">{MIGRATION_DATA.journey}</p>

        <Reveal delay={0.08}>
          <Notice title={MIGRATION_DATA.notice.title} description={MIGRATION_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
