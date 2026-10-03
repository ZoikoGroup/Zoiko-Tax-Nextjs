"use client";

import React from "react";
import { DATA_MAPPING_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, AuthorityNotice, Reveal } from "./shared";

export default function DataMappingSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={DATA_MAPPING_DATA.eyebrow}
          title={DATA_MAPPING_DATA.title}
          description={DATA_MAPPING_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-[26px] bg-white overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="text-left">
                {DATA_MAPPING_DATA.columns.map((col) => (
                  <th key={col} className="px-6 py-4 font-bold text-[#D65A2C] text-xs whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DATA_MAPPING_DATA.rows.map((row) => (
                <tr key={row.category} className="border-t border-[#D8CEDD]">
                  <td className="px-6 py-5 text-[17px] text-[#18141B] whitespace-nowrap align-top">{row.category}</td>
                  <td className="px-6 py-5 text-[15px] text-[#301153] whitespace-nowrap align-top">{row.mapping}</td>
                  <td className="px-6 py-5 text-sm leading-[1.55] text-[#665F69] align-top">{row.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <Reveal delay={0.14} className="w-full mt-8">
        <AuthorityNotice title={DATA_MAPPING_DATA.notice.title} description={DATA_MAPPING_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}
