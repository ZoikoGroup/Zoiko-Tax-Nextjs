"use client";

import React from "react";
import clsx from "clsx";
import { WORKSPACE_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const TONE_STYLES: Record<string, string> = {
  green: "bg-[rgba(38,115,91,0.1)] text-[#26735B]",
  orange: "bg-[rgba(214,90,44,0.1)] text-[#D65A2C]",
  amber: "bg-[rgba(244,162,97,0.1)] text-[#F4A261]",
};

export default function WorkspaceSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/evidence-auditability/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={WORKSPACE_DATA.eyebrow}
          title={WORKSPACE_DATA.title}
          description={WORKSPACE_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-6 rounded-[20px] border border-[#D8CEDD] bg-white p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-bold text-[#18141B]">{WORKSPACE_DATA.logTitle}</h3>
              <span className="rounded-full bg-[#F5F2F9] px-2.5 py-1 text-xs text-[#665F69]">
                {WORKSPACE_DATA.logBadge}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {WORKSPACE_DATA.filters.map((filter) => (
                <span key={filter} className="rounded-lg border border-[#D8CEDD] px-3 py-2 text-[13px] text-[#665F69]">
                  {filter}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#D8CEDD]">
            <table className="w-full min-w-[900px] border-collapse text-sm">
              <thead>
                <tr className="bg-[#FAF3FF] text-left">
                  {WORKSPACE_DATA.columns.map((col) => (
                    <th key={col} className="px-3 py-3 font-bold text-[#18141B] text-xs whitespace-nowrap">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {WORKSPACE_DATA.rows.map((row, i) => (
                  <tr key={row.id} className={clsx("bg-white", i > 0 && "border-t border-[#D8CEDD]")}>
                    <td className="px-3 py-3 font-bold text-[#18141B] text-[13px] whitespace-nowrap">{row.id}</td>
                    <td className="px-3 py-3 text-[#665F69] text-[13px] whitespace-nowrap">{row.capability}</td>
                    <td className="px-3 py-3 text-[#535055] text-[13px] whitespace-nowrap">{row.jurisdiction}</td>
                    <td className="px-3 py-3 text-[#665F69] text-[13px] whitespace-nowrap">{row.date}</td>
                    <td className="px-3 py-3">
                      <span className={clsx("rounded px-2 py-1 text-[11px] font-semibold whitespace-nowrap", TONE_STYLES[row.completenessTone])}>
                        {row.completeness}
                      </span>
                    </td>
                    <td className="px-3 py-3">
                      <span className={clsx("rounded px-2 py-1 text-[11px] font-semibold whitespace-nowrap", TONE_STYLES[row.replayTone])}>
                        {row.replayStatus}
                      </span>
                    </td>
                    <td className={clsx("px-3 py-3 text-xs whitespace-nowrap", row.notice === "None" ? "text-[#665F69]" : "text-[#D65A2C]")}>
                      {row.notice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
