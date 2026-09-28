import React from "react";
import { SectionContainer, SectionHeader, Badge, Reveal } from "./shared";
import { WORKSPACE_DATA } from "./broadband-data";

export default function WorkspaceSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader eyebrow={WORKSPACE_DATA.eyebrow} title={WORKSPACE_DATA.title} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-10 rounded-3xl border border-[#D8CEDD] bg-white/40 p-4 sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-bold text-[#18141B]">{WORKSPACE_DATA.panelTitle}</h3>
            <Badge label={WORKSPACE_DATA.mode} tone="purple" className="self-start sm:self-auto" />
          </div>

          <div className="mt-5 flex flex-col gap-3 lg:gap-0 lg:bg-white">
            {WORKSPACE_DATA.rows.map((row) => (
              <div
                key={row.id}
                className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-xl border border-[#D8CEDD] bg-white p-4 transition-colors hover:bg-[#FAF3FF]/60 lg:grid-cols-[6rem_minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1.2fr)_9rem] lg:items-center lg:rounded-none lg:border-0 lg:px-4 lg:py-3.5 lg:text-center"
              >
                <span className="text-sm font-semibold text-[#D65A2C] lg:text-left">{row.id}</span>
                <Badge label={row.status} tone={row.tone} className="justify-self-end lg:order-last" />
                <span className="col-span-2 text-sm text-[#18141B] lg:col-span-1">{row.source}</span>
                <span className="text-sm text-[#665F69]">{row.service}</span>
                <span className="text-right text-sm text-[#18141B] lg:text-center">{row.jurisdiction}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
