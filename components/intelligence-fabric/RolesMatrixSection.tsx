"use client";

import React from "react";
import { ROLES_MATRIX_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function RolesMatrixSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/intelligence-fabric/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader eyebrow={ROLES_MATRIX_DATA.eyebrow} title={ROLES_MATRIX_DATA.title} />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-[#D8CEDD]">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#F7F3ED] text-left">
                {ROLES_MATRIX_DATA.columns.map((col) => (
                  <th key={col} className="px-4 py-4 font-bold text-[#18141B] whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROLES_MATRIX_DATA.rows.map((row, i) => (
                <tr key={row.role} className={i > 0 ? "border-t border-[#D8CEDD] bg-white" : "bg-white"}>
                  <td className="px-4 py-4 font-semibold text-[#18141B] whitespace-nowrap">{row.role}</td>
                  <td className="px-4 py-4 text-[#665F69]">{row.actions}</td>
                  <td className="px-4 py-4 text-[#665F69]">{row.limits}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
