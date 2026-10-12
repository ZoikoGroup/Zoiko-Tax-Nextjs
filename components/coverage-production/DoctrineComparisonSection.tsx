"use client";

import React from "react";
import clsx from "clsx";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

interface VocabularyRow {
  designation: string;
  badge?: string;
  exactMeaning: string;
  scopeClarification: string;
  isHighlighted?: boolean;
}

const VOCABULARY_DATA: VocabularyRow[] = [
  {
    designation: "Production",
    badge: "DEFINITION ONLY",
    exactMeaning: "Approved capability for stated scope.",
    scopeClarification:
      "Capability-specific approval; not global availability or customer entitlement.",
    isHighlighted: true,
  },
  {
    designation: "Managed",
    exactMeaning: "Production plus approved managed service.",
    scopeClarification:
      "A separately approved service layer. It is not inherited from Production.",
  },
  {
    designation: "Pilot",
    exactMeaning: "Controlled, limited deployment.",
    scopeClarification:
      "Only the permitted, limited scope; never general Production availability.",
  },
  {
    designation: "Validation",
    exactMeaning: "Under formal validation.",
    scopeClarification:
      "Validation activity is not approval to market a capability as Production.",
  },
  {
    designation: "Research",
    exactMeaning: "Research stage, not marketed as production.",
    scopeClarification:
      "Investigation does not establish deployment readiness or availability.",
  },
];

export default function DoctrineComparisonSection() {
  return (
    <SectionContainer id="doctrine-comparison" className="bg-[#FFFAFA]">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Coverage vocabulary"
            title="One vocabulary. Distinct meanings."
            description="Definitions, not a list of current ZoikoTax capability states."
            className="mb-0"
          />

          {/* Definition Table matching exact 180px / 390px / 614px column structure */}
          <div className="w-full overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white shadow-sm">
            {/* Table Header */}
            <div className="hidden md:flex items-center gap-6 bg-[#301153] px-6 py-4.5 text-white">
              <div className="w-[180px] flex-shrink-0 text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                DESIGNATION
              </div>
              <div className="w-[390px] flex-shrink-0 text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                EXACT MEANING
              </div>
              <div className="flex-1 text-[13px] font-bold uppercase tracking-wider font-['Inter',sans-serif]">
                SCOPE & PRODUCTION USE
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#D8CEDD]">
              {VOCABULARY_DATA.map((row, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "flex flex-col md:flex-row md:items-center gap-3 md:gap-6 px-6 py-5.5 sm:py-6 transition-colors",
                    row.isHighlighted ? "bg-[#F5EFF8]" : "bg-white hover:bg-[#FAF8FA]"
                  )}
                >
                  {/* Designation Column (180px) */}
                  <div className="w-full md:w-[180px] flex-shrink-0 flex flex-col gap-1 justify-center">
                    <span className="text-lg font-bold text-[#301153] font-['Inter',sans-serif]">
                      {row.designation}
                    </span>
                    {row.badge && (
                      <span className="inline-block text-[11px] font-semibold tracking-wider text-[#665F69] font-['Inter',sans-serif]">
                        {row.badge}
                      </span>
                    )}
                  </div>

                  {/* Exact Meaning Column (390px) */}
                  <div className="w-full md:w-[390px] flex-shrink-0 flex items-center">
                    <p className="text-base font-normal text-[#18141B] font-['Inter',sans-serif]">
                      {row.exactMeaning}
                    </p>
                  </div>

                  {/* Scope & Production Use Column (flex-1) */}
                  <div className="flex-1 flex items-center">
                    <p className="text-[15px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                      {row.scopeClarification}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Source Boundary */}
          <SourceBoundary text="Each country and capability is assessed independently. No parent badge rolls up mixed scope into a global Production claim." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
