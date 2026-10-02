"use client";

import React from "react";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";
import { JOB_STATES } from "./types";

export default function JobStateRecoverySection() {
  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="06 / JOB STATE & RECOVERY"
          title="A status is only as useful as its meaning."
          description="Conceptual state meanings below are not a published state enum or a live service-state assertion."
        />

        <BoundaryNotice
          title="Accepted ≠ complete ≠ authoritative business success"
          description="Unknown, conflicting or stale metadata must never be rendered as success. Verify authoritative current state through an approved API or downstream workflow."
          className="w-full"
        />

        <div className="w-full rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD] overflow-hidden">
          <div className="flex items-start gap-6 bg-[#F1E7F7] px-6 py-3.5">
            <div className="w-56 shrink-0 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Conceptual state
            </div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              Meaning to communicate
            </div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">Safe next step</div>
          </div>
          {JOB_STATES.map((row, idx) => (
            <div
              key={row.state}
              className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-6 px-6 py-4 ${
                idx < JOB_STATES.length - 1 ? "border-b border-[#D8CEDD]" : ""
              }`}
            >
              <div className="w-56 shrink-0 text-sm font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]">
                {row.state}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.state === "Submitted / accepted" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Submission has been acknowledged where defined. Validation and</span><br className="hidden lg:inline" />
                    <span>processing may remain.</span>
                  </>
                ) : (
                  <span className="lg:whitespace-nowrap">{row.meaning}</span>
                )}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.state === "Complete" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Inspect item outcomes; not every item necessarily succeeded</span><br className="hidden lg:inline" />
                    <span>unless the contract states so.</span>
                  </>
                ) : row.state === "Status unavailable" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Treat as unknown—not success. Check source/currentness and use</span><br className="hidden lg:inline" />
                    <span>approved recovery.</span>
                  </>
                ) : (
                  <span className="lg:whitespace-nowrap">{row.nextStep}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
          Cancellation is a state only if the controlled contract supports it. This guide provides no cancellation, pause or retention behavior.
        </p>
      </div>
    </SectionContainer>
  );
}
