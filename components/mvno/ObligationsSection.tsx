import React from "react";
import { SectionContainer, SectionHeader, SectionAction, Reveal } from "./shared";
import { OBLIGATIONS_DATA } from "./mvno-data";

export default function ObligationsSection() {
  const { panel } = OBLIGATIONS_DATA;

  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={OBLIGATIONS_DATA.eyebrow}
          title={OBLIGATIONS_DATA.title}
          description={OBLIGATIONS_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-2xl bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-sm font-bold text-[#18141B]">{panel.title}</h3>
            <span className="text-xs text-[#665F69]">{panel.caption}</span>
          </div>
          <ul className="mt-3 flex flex-col">
            {panel.rows.map((row) => (
              <li
                key={row.name}
                className="flex flex-col gap-1 border-t border-[#F0EAF3] py-3 first:border-t-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <span className="text-sm text-[#18141B]">{row.name}</span>
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                  <span className="text-[#665F69]">{row.owner}</span>
                  <span className="font-semibold text-[#D65A2C]">{row.status}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={0.14}>
        <SectionAction action={OBLIGATIONS_DATA.action} />
      </Reveal>
    </SectionContainer>
  );
}
