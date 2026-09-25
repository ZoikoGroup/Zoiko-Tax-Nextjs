"use client";

import React from "react";
import { STATE_MODEL_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function StateModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={STATE_MODEL_DATA.eyebrow}
          title={STATE_MODEL_DATA.title}
          description={STATE_MODEL_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#D8CEDD]">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#FAF5F0] text-left">
                {STATE_MODEL_DATA.columns.map((col) => (
                  <th key={col} className="px-4 py-4 font-bold text-[#18141B] text-[13px] whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {STATE_MODEL_DATA.rows.map((row, i) => (
                <tr key={row.attribute} className={i > 0 ? "border-t border-[#D8CEDD] bg-white" : "bg-white"}>
                  <td className="px-4 py-4 font-bold text-[#18141B] whitespace-nowrap">{row.attribute}</td>
                  <td className="px-4 py-4 text-[#665F69]">{row.optimal}</td>
                  <td className="px-4 py-4 text-[#D65A2C]">{row.uncertainty}</td>
                  <td className="px-4 py-4 text-[#535055]">{row.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
