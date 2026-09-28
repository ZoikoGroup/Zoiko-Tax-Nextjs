"use client";

import React from "react";
import clsx from "clsx";
import { CHANGE_MONITORING_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const PRIORITY_STYLES: Record<string, string> = {
  Critical: "bg-[#FFEBE7] text-[#E53B3B]",
  Medium: "bg-[#FFF3CD] text-[#9A5B12]",
};

const STATUS_COLORS: Record<string, string> = {
  "Review Pending": "text-[#9A5B12]",
  "Evaluated Draft": "text-[#26735B]",
};

export default function ChangeMonitoringSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={CHANGE_MONITORING_DATA.eyebrow}
          title={CHANGE_MONITORING_DATA.title}
          description={CHANGE_MONITORING_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 overflow-x-auto rounded-2xl border border-[#D8CEDD]">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="bg-[#F7F3ED] text-left">
                {CHANGE_MONITORING_DATA.columns.map((col) => (
                  <th key={col} className="px-4 py-3.5 font-bold text-[#18141B] whitespace-nowrap">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {CHANGE_MONITORING_DATA.rows.map((row, i) => (
                <tr key={row.jurisdiction} className={clsx("bg-white", i > 0 && "border-t border-[#D8CEDD]")}>
                  <td className="px-4 py-4 font-normal text-[#18141B] whitespace-nowrap">{row.jurisdiction}</td>
                  <td className="px-4 py-4 text-[#18141B]">{row.topic}</td>
                  <td className="px-4 py-4 text-[#665F69] whitespace-nowrap">{row.effectiveDate}</td>
                  <td className="px-4 py-4">
                    <span
                      className={clsx(
                        "inline-flex items-center rounded px-2 py-1 text-xs font-semibold whitespace-nowrap",
                        PRIORITY_STYLES[row.priority]
                      )}
                    >
                      {row.priority}
                    </span>
                  </td>
                  <td className={clsx("px-4 py-4 whitespace-nowrap", STATUS_COLORS[row.reviewStatus])}>
                    {row.reviewStatus}
                  </td>
                  <td className="px-4 py-4 text-[#665F69]">{row.actionContext}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
