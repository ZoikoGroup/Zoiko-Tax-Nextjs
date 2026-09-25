"use client";

import React, { useState } from "react";
import { WORKSPACE_RECORDS } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

export default function WorkspaceSection() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Registry View"
        title="E-Invoice Operations Workspace"
        description="Operational dashboard showing real-time telecom invoice streams, validation outcomes, and adapter states. (Read-only data preview)."
        className="mb-8"
      />

      {/* Table filter chips */}
      <Reveal delay={0.05}>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <button
            type="button"
            onClick={() => setSelectedFilter("all")}
            className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
              selectedFilter === "all"
                ? "bg-white border border-[#D65A2C] text-[#D65A2C] shadow-xs"
                : "bg-white/70 border border-[#D8CEDD] text-[#18141B] hover:bg-white"
            }`}
          >
            All Entities
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("validation")}
            className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
              selectedFilter === "validation"
                ? "bg-white border border-[#D65A2C] text-[#D65A2C] shadow-xs"
                : "bg-white/70 border border-[#D8CEDD] text-[#18141B] hover:bg-white"
            }`}
          >
            Validation: All
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter("cleared")}
            className={`rounded-lg px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-all ${
              selectedFilter === "cleared"
                ? "bg-white border border-[#D65A2C] text-[#D65A2C] shadow-xs"
                : "bg-white/70 border border-[#D8CEDD] text-[#18141B] hover:bg-white"
            }`}
          >
            External State: Cleared
          </button>
        </div>
      </Reveal>

      {/* Table container */}
      <Reveal delay={0.1}>
        <div className="overflow-x-auto rounded-2xl border border-[#D8CEDD] bg-white shadow-xs">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-[#D8CEDD] bg-[#FAF8FA] text-xs font-bold uppercase tracking-wider text-[#18141B]">
              <tr>
                <th className="py-4 px-5">ID / Document</th>
                <th className="py-4 px-5">Entity & Counterparty</th>
                <th className="py-4 px-5">Jurisdiction</th>
                <th className="py-4 px-5">Fiscal Profile</th>
                <th className="py-4 px-5">Validation</th>
                <th className="py-4 px-5">Adapter State</th>
                <th className="py-4 px-5">External State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D8CEDD]/60 text-[#18141B]">
              {WORKSPACE_RECORDS.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-[#FAF3FF]/40 transition-colors duration-150"
                >
                  <td className="py-4 px-5 font-semibold text-[#D65A2C]">
                    {row.id}
                  </td>
                  <td className="py-4 px-5 font-medium">{row.counterparty}</td>
                  <td className="py-4 px-5 text-[#665F69]">{row.jurisdiction}</td>
                  <td className="py-4 px-5 text-[#18141B]">{row.fiscalProfile}</td>
                  <td className="py-4 px-5">
                    <StatusBadge status={row.validationStatus} />
                  </td>
                  <td className="py-4 px-5 text-[#665F69]">{row.adapterState}</td>
                  <td className="py-4 px-5 font-medium">{row.externalState}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
