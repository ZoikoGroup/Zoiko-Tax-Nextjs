"use client";

import React from "react";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

interface FieldItem {
  name: string;
  meaning: string;
}

interface ColumnGroup {
  title: string;
  description: string;
  fields: FieldItem[];
}

const SCOPE_COLUMNS: ColumnGroup[] = [
  {
    title: "Capability & context",
    description: "What is approved, and where it applies.",
    fields: [
      {
        name: "Capability identifier and version",
        meaning: "The exact capability and version governed by the record.",
      },
      {
        name: "Country/jurisdiction where applicable",
        meaning:
          "The applicable market or jurisdiction; never inferred from global architecture.",
      },
      {
        name: "Product/service category",
        meaning:
          "The product or service context to which approval applies.",
      },
      {
        name: "Coverage level",
        meaning:
          "The approved extent of support for this capability and scope.",
      },
    ],
  },
  {
    title: "Conditions & limits",
    description: "What must be true before relying on scope.",
    fields: [
      {
        name: "Activation/prerequisite",
        meaning:
          "Source-controlled dependencies or activation conditions, if applicable.",
      },
      {
        name: "Exclusions",
        meaning:
          "Explicit cases, functions or contexts outside the approved scope.",
      },
      {
        name: "Approved operating mode",
        meaning:
          "The permitted mode of operation; no managed service is implied.",
      },
    ],
  },
  {
    title: "Authority & currentness",
    description: "Why this record can be relied on now.",
    fields: [
      {
        name: "Status-effective timestamp and time zone",
        meaning:
          "When the source says the status takes effect, with its time zone.",
      },
      {
        name: "Source revision",
        meaning:
          "The authoritative revision that binds the statement to its source.",
      },
      {
        name: "Owner",
        meaning: "The accountable status owner named by the governed record.",
      },
      {
        name: "Evidence link if publishable",
        meaning:
          "Only approved public evidence; restricted material is not exposed.",
      },
    ],
  },
];

export default function ProductionScopeAnatomySection() {
  return (
    <SectionContainer id="scope-anatomy" className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-10">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Scope anatomy"
            title="Approval is a scoped statement."
            description="An illustrative, unpopulated field model. These are definitions—not a live registry record."
            className="mb-0"
          />

          {/* Scope Schema 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SCOPE_COLUMNS.map((col, idx) => (
              <div
                key={idx}
                className="flex flex-col rounded-2xl border border-[#D8CEDD] bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                {/* Column Heading */}
                <div className="flex flex-col gap-3 pb-4 border-b border-[#D8CEDD]">
                  <h3 className="text-[22px] font-bold text-[#301153] font-['Inter',sans-serif]">
                    {col.title}
                  </h3>
                  <p className="text-sm font-normal text-[#665F69] font-['Inter',sans-serif]">
                    {col.description}
                  </p>
                </div>

                {/* Fields List */}
                <div className="flex flex-col divide-y divide-[#D8CEDD]">
                  {col.fields.map((field, fIdx) => (
                    <div key={fIdx} className="flex flex-col gap-1.5 py-4">
                      <span className="text-base font-semibold text-[#18141B] font-['Inter',sans-serif]">
                        {field.name}
                      </span>
                      <p className="text-sm font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                        {field.meaning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Source Boundary */}
          <SourceBoundary text="Missing mandatory scope prevents a Production assertion. None of these fields permits a universal coverage claim." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
