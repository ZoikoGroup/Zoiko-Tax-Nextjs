import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { WORKSPACE_DATA } from "./ucaas-data";

export default function WorkspaceSection() {
  return (
    <SectionContainer className="border-b border-[#D8CEDD] bg-white">
      <Reveal>
        <SectionHeader
          eyebrow={WORKSPACE_DATA.eyebrow}
          title={WORKSPACE_DATA.title}
          description={WORKSPACE_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-6 rounded-[20px] border border-white/10 bg-[#1D033B] p-5 sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-lg font-bold text-white">{WORKSPACE_DATA.panelTitle}</h3>
            <span className="self-start rounded-full bg-[#2E1453] px-3 py-1.5 text-xs font-bold text-[#D65A2C] sm:self-auto">
              {WORKSPACE_DATA.badge}
            </span>
          </div>
          <ul className="flex flex-col gap-px bg-white/10">
            {WORKSPACE_DATA.rows.map((row) => (
              <li
                key={row.id}
                className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 bg-[#140629] p-4 transition-colors hover:bg-[#1A0934] md:grid-cols-[6rem_12rem_minmax(0,18rem)_minmax(0,1fr)] md:items-center"
              >
                <span className="font-mono text-xs text-white">{row.id}</span>
                <span className="text-right text-xs font-bold text-[#D65A2C] md:order-last md:text-left">
                  {row.status}
                </span>
                <span className="text-sm text-[#D8CEDD]">{row.service}</span>
                <span className="text-right text-sm text-[#D8CEDD] md:text-left">{row.endpoint}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
