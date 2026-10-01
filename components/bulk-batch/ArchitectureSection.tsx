"use client";

import React from "react";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";
import { ARCHITECTURE_ROWS } from "./types";

export default function ArchitectureSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="07 / INPUT, MANIFEST & RESULT ARCHITECTURE"
          title="Document the boundaries. Don’t invent the payload."
          description="These are conceptual documentation responsibilities. Exact fields, formats and schemas must be supplied by a controlled source."
        />

        <div className="w-full rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD] overflow-hidden">
          <div className="flex items-start gap-6 bg-[#F1E7F7] px-6 py-3.5">
            <div className="w-60 lg:w-64 shrink-0 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Architecture element
            </div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">Purpose</div>
          </div>
          {ARCHITECTURE_ROWS.map((row, idx) => (
            <div
              key={row.element}
              className={`flex items-start gap-6 px-6 py-4 ${idx < ARCHITECTURE_ROWS.length - 1 ? "border-b border-[#D8CEDD]" : ""}`}
            >
              <div className="w-60 lg:w-64 shrink-0 text-sm font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]">
                {row.element}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                <span className="lg:whitespace-nowrap">{row.purpose}</span>
              </div>
            </div>
          ))}
        </div>

        <BoundaryNotice
          title="Non-production identity placeholders — not actual formats"
          description="<job-id> · <contract-version> · <correlation-reference> · <input-manifest> · <result-reference>. These names illustrate documentation structure only; they are not fields, identifiers or a result schema."
          className="w-full"
        />
      </div>
    </SectionContainer>
  );
}
