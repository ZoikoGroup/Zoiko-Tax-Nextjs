"use client";

import React from "react";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";
import { TROUBLESHOOTING_ROWS } from "./types";

export default function TroubleshootingSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="09 / OBSERVABILITY, ERRORS & TROUBLESHOOTING"
          title="Follow the evidence. Then choose the recovery route."
          description="Correlate safely using contract-defined fields. Last-known information must carry governed currentness; it is not automatically current truth."
        />

        <div className="w-full rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD] overflow-hidden">
          <div className="flex items-start gap-6 bg-[#F1E7F7] px-6 py-3.5">
            <div className="w-56 lg:w-60 shrink-0 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Observed condition
            </div>
            <div className="flex-[1.1] text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Diagnosis boundary
            </div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Documentation / recovery route
            </div>
          </div>
          {TROUBLESHOOTING_ROWS.map((row, idx) => (
            <div
              key={row.condition}
              className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-6 px-6 py-4 ${
                idx < TROUBLESHOOTING_ROWS.length - 1 ? "border-b border-[#D8CEDD]" : ""
              }`}
            >
              <div className="w-56 lg:w-60 shrink-0 text-sm font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]">
                {row.condition}
              </div>
              <div className="flex-[1.1] text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.boundary}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.route}
              </div>
            </div>
          ))}
        </div>

        <BoundaryNotice
          title="Escalate with safe context—not sensitive telemetry"
          description="Use approved support/commercial channels without an implied response-time SLA. Share only permitted correlation and currentness context. Exclude payloads, files, private job IDs, credentials and raw sensitive search from telemetry; do not log full datasets."
          className="w-full"
        />
      </div>
    </SectionContainer>
  );
}
