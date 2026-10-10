"use client";

import React from "react";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

interface RecoveryRow {
  condition: string;
  meaning: string;
  nextStep: string;
}

const RECOVERY_ROWS: RecoveryRow[] = [
  {
    condition: "No record",
    meaning:
      "No confirmed matching record. This does not mean unsupported in every context.",
    nextStep: "View Current Coverage and clarify the capability and scope.",
  },
  {
    condition: "Source unavailable",
    meaning: "The definition remains readable; current state is unconfirmed.",
    nextStep:
      "Return to Coverage, retry the source, or use an approved inquiry when published.",
  },
  {
    condition: "Pending validation",
    meaning: "Validation has not established general Production approval.",
    nextStep:
      "Verify the authoritative status and permitted scope before relying on it.",
  },
  {
    condition: "Conflicting records",
    meaning:
      "Status not confirmed. Competing statements cannot establish readiness.",
    nextStep:
      "Seek review by the source owner; use Coverage for the current record.",
  },
  {
    condition: "Status stale",
    meaning:
      "Verification is required. No positive current badge should be shown.",
    nextStep: "Find a newly verified authoritative record in Coverage.",
  },
  {
    condition: "Approval withdrawn",
    meaning:
      "Not current Production. Historical context is retained only if approved.",
    nextStep:
      "Consult the current record and source-governed withdrawal conditions.",
  },
  {
    condition: "Capability replaced",
    meaning:
      "An old designation does not confirm the replacement capability.",
    nextStep:
      "Consult a confirmed successor and verify its independent scope.",
  },
  {
    condition: "Locale mismatch",
    meaning:
      "Translation or locale must not change the meaning of the status term.",
    nextStep:
      "Use only an explicitly approved locale or source fallback; otherwise seek clarification.",
  },
  {
    condition: "Not applicable",
    meaning:
      "A source-controlled conclusion for a specific scope—not all contexts.",
    nextStep:
      "Verify the scope of that conclusion and any applicable alternative record.",
  },
];

export default function DegradedStatesSection() {
  return (
    <SectionContainer id="degraded-states" className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="When facts are unresolved"
            title="Fail closed. Explain the next step."
            description="Guidance for distinct source conditions—not a report of actual incidents or emergencies."
            className="mb-0"
          />

          {/* Recovery Guidance Table */}
          <div className="w-full overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white shadow-sm">
            {/* Table Header */}
            <div className="hidden md:grid md:grid-cols-12 gap-6 bg-[#301153] px-6 py-4.5 text-white">
              <div className="md:col-span-3 text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                SOURCE CONDITION
              </div>
              <div className="md:col-span-4 text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                WHAT IT MEANS
              </div>
              <div className="md:col-span-5 text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                APPROVED NEXT STEP
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#D8CEDD]">
              {RECOVERY_ROWS.map((row, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-6 px-6 py-5.5 hover:bg-[#FAF8FA] transition-colors"
                >
                  {/* Condition Column */}
                  <div className="md:col-span-3 flex items-center">
                    <span className="text-base font-semibold text-[#301153] font-['Inter',sans-serif]">
                      {row.condition}
                    </span>
                  </div>

                  {/* Meaning Column */}
                  <div className="md:col-span-4 flex items-center">
                    <p className="text-[15px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                      {row.meaning}
                    </p>
                  </div>

                  {/* Next Step Column */}
                  <div className="md:col-span-5 flex items-center">
                    <p className="text-[15px] font-normal leading-relaxed text-[#18141B] font-['Inter',sans-serif]">
                      {row.nextStep}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Access and Connection Boundaries (2 Callout Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2.5 rounded-2xl bg-[#F5EFF8] p-6 text-[#301153]">
              <h3 className="text-[17px] font-semibold text-[#301153] font-['Inter',sans-serif]">
                Permission denied
              </h3>
              <p className="text-sm font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                Use a generic access message and an authorized surface. Do not
                reveal private evidence or tenant-specific scope.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 rounded-2xl bg-[#F5EFF8] p-6 text-[#301153]">
              <h3 className="text-[17px] font-semibold text-[#301153] font-['Inter',sans-serif]">
                Network failure
              </h3>
              <p className="text-sm font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                Keep the definition visible. Leave current status unconfirmed; do
                not present a cached status as current. Retry Coverage.
              </p>
            </div>
          </div>

          {/* Source Boundary */}
          <SourceBoundary text="Missing, partial, stale or conflicting facts remain Status not confirmed. No guesses, no automatic Production fallback, and no inferred global unsupported status." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
