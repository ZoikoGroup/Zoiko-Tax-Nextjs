"use client";

import React from "react";
import { PERMISSIONS_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function PermissionsSection() {
  return (
    <SectionContainer className="bg-[#F5F2F9]">
      <Reveal>
        <SectionHeader eyebrow={PERMISSIONS_DATA.eyebrow} title={PERMISSIONS_DATA.title} />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-6 overflow-x-auto rounded-xl border border-[#D8CEDD]">
          <table className="w-full min-w-[860px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#FAF5F0] text-left">
                {PERMISSIONS_DATA.columns.map((col) => (
                  <th key={col} className="px-3 py-3 font-bold text-[#18141B] text-[13px] whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PERMISSIONS_DATA.rows.map((row, i) => (
                <tr key={row.role} className={i > 0 ? "border-t border-[#D8CEDD] bg-white" : "bg-white"}>
                  <td className="px-3 py-3 font-bold text-[#18141B] whitespace-nowrap">{row.role}</td>
                  <td className="px-3 py-3 text-[#535055] whitespace-nowrap">{row.metadataView}</td>
                  <td className="px-3 py-3 text-[#D65A2C] whitespace-nowrap">{row.restrictedPayload}</td>
                  <td className="px-3 py-3 text-[#665F69] whitespace-nowrap">{row.exportCapabilities}</td>
                  <td className="px-3 py-3 text-[#18141B] whitespace-nowrap">{row.stateAuthority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
