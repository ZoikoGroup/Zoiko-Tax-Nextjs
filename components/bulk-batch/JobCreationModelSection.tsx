"use client";

import React from "react";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";
import { JOB_CONCEPTS } from "./types";

export default function JobCreationModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="04 / SUBMISSION & JOB-CREATION MODEL"
          title="Submission creates a boundary—not a promise."
          description="Read each lifecycle concept alongside what it does not imply. Exact production mechanics remain source-controlled."
        />

        <div className="w-full rounded-2xl bg-white outline outline-1 -outline-offset-1 outline-[#D8CEDD] overflow-hidden">
          <div className="flex items-start gap-6 bg-[#F1E7F7] px-6 py-3.5">
            <div className="w-60 lg:w-64 shrink-0 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">Concept</div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">
              What the guidance explains
            </div>
            <div className="flex-1 text-xs font-bold text-[#301153] font-['Inter',sans-serif]">What is not implied</div>
          </div>
          {JOB_CONCEPTS.map((row, idx) => (
            <div
              key={row.concept}
              className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-6 px-6 py-4 ${
                idx < JOB_CONCEPTS.length - 1 ? "border-b border-[#D8CEDD]" : ""
              }`}
            >
              <div className="w-60 lg:w-64 shrink-0 text-sm font-semibold leading-6 text-[#18141B] font-['Inter',sans-serif]">
                {row.concept}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.concept === "Validation" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Check structure, version and required metadata before authoritative</span><br className="hidden lg:inline" />
                    <span>processing.</span>
                  </>
                ) : row.concept === "Partial outcome" ? (
                  <>
                    <span className="lg:whitespace-nowrap">Keep item-level successes, failures and unresolved outcomes</span><br className="hidden lg:inline" />
                    <span>distinct.</span>
                  </>
                ) : (
                  row.explains
                )}
              </div>
              <div className="flex-1 text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">
                {row.concept === "Submission" ? (
                  <>
                    <span className="lg:whitespace-nowrap">No public endpoint, method, host, upload mechanism or transport is</span><br className="hidden lg:inline" />
                    <span>specified.</span>
                  </>
                ) : row.concept === "Result retrieval" ? (
                  <>
                    <span className="lg:whitespace-nowrap">No download URL, storage location, retrieval contract or retention</span><br className="hidden lg:inline" />
                    <span>claim.</span>
                  </>
                ) : (
                  <span className="lg:whitespace-nowrap">{row.notImplied}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <BoundaryNotice
          title="Access is separately controlled"
          description="Entitlement, provisioning, environment, credentials, transport and capacity are governed separately. Public documentation does not provide self-service production access, credentials or a file-transfer contract."
          className="w-full"
        />
      </div>
    </SectionContainer>
  );
}
