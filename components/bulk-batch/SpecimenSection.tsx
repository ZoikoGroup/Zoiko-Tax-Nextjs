"use client";

import React from "react";
import { SectionHeader, BoundaryNotice } from "./shared";
import { SPECIMEN_ROWS } from "./types";

export default function SpecimenSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      {/* Full-bleed artwork exported from Figma (public/bulk-batch) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bulk-batch/Illustrative example.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120327]/60 via-[#120327]/40 to-[#120327]/70" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-col items-start gap-8">
          <SectionHeader
            dark
            eyebrow="10 / ILLUSTRATIVE EXAMPLE"
            title="A documentation specimen. Not production syntax."
            description="Read this as a labeled reference sheet—not an executable request, file, API payload or result."
          />

          <BoundaryNotice
            dark
            title="ILLUSTRATIVE EXAMPLE — NOT A PRODUCTION JOB, ENDPOINT, FILE FORMAT OR RESULT SCHEMA. Placeholder names show documentation structure only."
            description="No real subscriber, customer, invoice or tax data; no private tenant/job IDs or secrets. These placeholders do not define actual identifier formats or published versions."
            className="w-full"
          />

          <div className="w-full rounded-2xl bg-[#301153]/85 backdrop-blur-sm p-7 outline outline-1 -outline-offset-1 outline-[#593576]">
            {SPECIMEN_ROWS.map((row, idx) => (
              <div
                key={row.label}
                className={`flex flex-col gap-2 py-4 md:flex-row md:items-start md:gap-8 ${
                  idx < SPECIMEN_ROWS.length - 1 ? "border-b border-[#493057]" : ""
                }`}
              >
                <div className="w-56 shrink-0 text-sm font-semibold text-white font-['Inter',sans-serif]">
                  {row.label}
                </div>
                <div className="flex-1 text-sm leading-6 text-[#D8CEDD] font-mono">{row.value}</div>
              </div>
            ))}
          </div>

          <p className="text-sm leading-6 text-[#D8CEDD] font-['Inter',sans-serif]">
            Exact schemas, formats and version identity belong to the controlled contract. This guide does not create a production transfer contract or queue model.
          </p>
        </div>
      </div>
    </section>
  );
}
