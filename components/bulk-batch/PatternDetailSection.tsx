"use client";

import React from "react";
import { SectionContainer, SectionHeader, BoundaryNotice, SecondaryButton } from "./shared";
import { PATTERN_ANATOMY } from "./types";

export default function PatternDetailSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="03 / SELECTED PATTERN DETAIL"
          title="Understand the pattern before the contract."
          description="Conceptual ingestion/export guidance, not a selected public job or an assertion of live access."
        />

        <BoundaryNotice
          title="Illustrative pattern anatomy — not a published contract"
          description="Controlled label: <verified-bulk-pattern> · Version: not published in this view · Source: controlled registry / contract, not supplied. This anatomy is not a released asset."
          className="w-full"
        />

        <div className="w-full rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD] overflow-hidden">
          <div className="flex items-start gap-6 bg-[#F1E7F7] px-6 py-3.5">
            <div className="w-48 lg:w-52 shrink-0 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">Boundary</div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">Conceptual detail</div>
          </div>
          {PATTERN_ANATOMY.map((row, idx) => (
            <div
              key={row.boundary}
              className={`flex items-start gap-6 px-6 py-4 ${idx < PATTERN_ANATOMY.length - 1 ? "border-b border-[#D8CEDD]" : ""}`}
            >
              <div className="w-48 lg:w-52 shrink-0 text-base font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]">
                {row.boundary}
              </div>
              <div className="flex-1 text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.boundary === "Authority" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Read/export reads defined state. Non-committing preparation does not write authoritative state. Authoritative write applies only where</span><br className="hidden lg:inline" />
                    <span>the controlled contract defines it.</span>
                  </>
                ) : row.boundary === "Input / result" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Input structure, manifests, validation evidence and result semantics come from the controlled source. No fixed file format or result</span><br className="hidden lg:inline" />
                    <span>schema is implied.</span>
                  </>
                ) : (
                  <span className="lg:whitespace-nowrap">{row.detail}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <SecondaryButton href="/developers/api/">API Reference</SecondaryButton>
          <SecondaryButton href="/developers/integration-guides/">Integration Guides</SecondaryButton>
        </div>
      </div>
    </SectionContainer>
  );
}
