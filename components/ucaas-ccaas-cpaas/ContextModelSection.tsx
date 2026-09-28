import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CONTEXT_MODEL_DATA } from "./ucaas-data";

export default function ContextModelSection() {
  const { panel, rows } = CONTEXT_MODEL_DATA;

  return (
    <SectionContainer className="border-b border-[#D8CEDD] bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader eyebrow={CONTEXT_MODEL_DATA.eyebrow} title={CONTEXT_MODEL_DATA.title} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 grid grid-cols-1 gap-6 rounded-[20px] border border-[#D8CEDD] bg-white p-5 sm:p-8 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold text-[#18141B]">{panel.title}</h3>
            <p className="text-sm leading-5 text-[#5F5862]">{panel.description}</p>
          </div>
          <StaggerGroup className="flex flex-col gap-3">
            {rows.map((row) => (
              <StaggerItem key={row.label}>
                <div className="flex flex-col gap-1 rounded-lg border border-[#D8CEDD] bg-[#FDF9F8] p-4 sm:flex-row sm:gap-4">
                  <span className="shrink-0 text-sm font-bold text-[#D65A2C] sm:w-44">{row.label}</span>
                  <span className="text-sm text-[#18141B]">{row.value}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
