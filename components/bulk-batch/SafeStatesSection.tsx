"use client";

import React from "react";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";
import { JOURNEY_CARDS, SAFE_STATES } from "./types";

export default function SafeStatesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="12 / USER JOURNEYS & SAFE STATES"
          title="Make the next step useful—even when truth is unavailable."
          description="Illustrative documentation patterns, not assertions about the current service. Preserve uncertainty rather than displaying stale success."
        />

        {/* Journey cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {JOURNEY_CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="flex-1 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-[#D8CEDD] flex flex-col items-start gap-3 transition-shadow hover:shadow-sm"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
                {card.eyebrow}
              </span>
              <h3 className="text-lg font-bold leading-6 text-[#18141B] font-['Inter',sans-serif]">{card.title}</h3>
              <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Safe states table */}
        <div className="w-full rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD] overflow-hidden">
          <div className="flex items-start gap-6 bg-[#F1E7F7] px-6 py-3.5">
            <div className="w-64 lg:w-72 shrink-0 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Illustrative documentation state
            </div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Safe presentation / continuation
            </div>
          </div>
          {SAFE_STATES.map((row, idx) => (
            <div
              key={row.state}
              className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-6 px-6 py-4 ${
                idx < SAFE_STATES.length - 1 ? "border-b border-[#D8CEDD]" : ""
              }`}
            >
              <div className="w-64 lg:w-72 shrink-0 text-sm font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]">
                {row.state}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">{row.behavior}</div>
            </div>
          ))}
        </div>

        <BoundaryNotice
          title="Continuity without sensitive data collection"
          description="Use safe labels and text alternatives, not color alone. Keep notices and examples readable in narrow, zoomed or print-oriented layouts. These state patterns are illustrative documentation guidance, not current service-state assertions."
          className="w-full"
        />
      </div>
    </SectionContainer>
  );
}
