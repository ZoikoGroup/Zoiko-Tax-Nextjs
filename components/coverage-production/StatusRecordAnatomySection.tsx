"use client";

import React from "react";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

interface RecordField {
  title: string;
  meaning: string;
  badge: string;
}

const RECORD_FIELDS: RecordField[] = [
  {
    title: "Capability",
    meaning: "Identifies the capability and version covered by the record.",
    badge: "Not populated",
  },
  {
    title: "Applicable scope",
    meaning:
      "Defines market, service context and other mandatory scope dimensions.",
    badge: "Not populated",
  },
  {
    title: "Status",
    meaning:
      "Carries the authoritative designation. Unknown facts remain Status not confirmed.",
    badge: "Not populated",
  },
  {
    title: "Status source",
    meaning: "Names the governed source and revision—not editorial page copy.",
    badge: "Not populated",
  },
  {
    title: "Last verified",
    meaning:
      "Records the latest source-backed verification and its currentness.",
    badge: "Not populated",
  },
  {
    title: "Restrictions",
    meaning: "States approved limitations, exclusions and conditional use.",
    badge: "Not populated",
  },
  {
    title: "Latest coverage release",
    meaning: "References the confirmed source release governing this record.",
    badge: "Not populated",
  },
  {
    title: "Supporting documentation",
    meaning:
      "References documentation only where approved for public access.",
    badge: "Not populated",
  },
];

export default function StatusRecordAnatomySection() {
  return (
    <SectionContainer id="status-record-anatomy" className="bg-[#FFFAFA]">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Read the record"
            title="A status is only one part of the record."
            description="Read identity, scope, authority and restrictions together before relying on an availability statement."
            className="mb-0"
          />

          {/* Illustrative Record Field Grid (2 columns on md+, 4 rows) */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RECORD_FIELDS.map((field, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-[#D8CEDD] bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-lg font-semibold text-[#301153] font-['Inter',sans-serif]">
                      {field.title}
                    </h3>
                    <p className="text-sm font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                      {field.meaning}
                    </p>
                  </div>

                  {/* Unpopulated Tag */}
                  <span className="flex-shrink-0 inline-flex items-center rounded-lg bg-[#F5EFF8] px-3 py-1.5 text-xs font-normal text-[#665F69] font-['Inter',sans-serif]">
                    {field.badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Illustration Caption */}
            <p className="text-sm font-normal text-[#665F69] pt-1 font-['Inter',sans-serif]">
              Illustrative data structure — not a statement of live coverage.
            </p>
          </div>

          {/* Source Boundary */}
          <SourceBoundary text="This structure is read-only and unpopulated. Actual record, release and documentation links must come from the governed registry; no current status or downloadable evidence is supplied here." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
