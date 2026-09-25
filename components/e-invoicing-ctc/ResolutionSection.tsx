"use client";

import React from "react";
import { RESOLUTION_MARKETS } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ResolutionSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Local Integration"
        title="Jurisdiction, Network & Adapter Resolution"
        description="Review active profiles, system versions, and capability readiness. We explicitly outline verified operational dates instead of utilizing generic icons."
        className="mb-10 sm:mb-12"
      />

      <Reveal delay={0.05}>
        <div className="overflow-x-auto rounded-2xl border border-[#D8CEDD] bg-white shadow-xs">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[#D8CEDD] bg-[#FAF8FA] text-xs font-bold uppercase tracking-wider text-[#18141B]">
              <tr>
                <th className="py-4 px-5">Market / Region</th>
                <th className="py-4 px-5">Active Profile Version</th>
                <th className="py-4 px-5">Supported Network Path</th>
                <th className="py-4 px-5">Target Adapter</th>
                <th className="py-4 px-5">Effective Verified Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8CEDD]/60 text-[#18141B]">
              {RESOLUTION_MARKETS.map((row) => (
                <tr
                  key={row.market}
                  className="hover:bg-[#FAF3FF]/40 transition-colors duration-150"
                >
                  <td className="py-4 px-5 font-semibold text-[#18141B]">
                    {row.market}
                  </td>
                  <td className="py-4 px-5 text-[#D65A2C] font-medium">
                    {row.profileVersion}
                  </td>
                  <td className="py-4 px-5 text-[#665F69]">{row.network}</td>
                  <td className="py-4 px-5 text-[#18141B]">{row.adapter}</td>
                  <td className="py-4 px-5 text-[#26735B] font-medium">
                    {row.verifiedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
