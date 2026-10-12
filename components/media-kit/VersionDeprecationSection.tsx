"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal, AuthorityNotice } from "./shared";
import { statusTableData } from "./types";

export default function VersionDeprecationSection() {
  return (
    <SectionContainer id="version-deprecation" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Version / deprecation"
          title="Currentness should never be a guess."
          description="Read the status, version, owning source and last review together. These are status definitions—not claims that any asset here is approved or current."
        />
      </Reveal>

      {/* Structured Status Table */}
      <Reveal delay={0.1}>
        <div className="w-full rounded-[26px] bg-white border border-[#D8CEDD] overflow-hidden shadow-xs">
          {/* Table Header Row (Desktop) */}
          <div className="bg-[#301153] px-6 sm:px-7 py-4.5 hidden md:grid md:grid-cols-12 gap-6 items-center">
            <span className="md:col-span-3 text-sm font-semibold text-white tracking-wide">
              Status
            </span>
            <span className="md:col-span-5 text-sm font-semibold text-white tracking-wide">
              What it means
            </span>
            <span className="md:col-span-4 text-sm font-semibold text-white tracking-wide">
              Valid next action
            </span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#D8CEDD]/60">
            {statusTableData.map((row) => (
              <div
                key={row.status}
                className="p-5 sm:p-6 md:px-7 md:py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start hover:bg-[#FAF6FC]/50 transition-colors"
              >
                {/* Col 1: Status */}
                <div className="md:col-span-3">
                  <span className="inline-block font-mono text-xs sm:text-sm font-bold text-[#301153] px-2.5 py-1 rounded bg-[#F3EEF7] border border-[#D8CEDD]/60">
                    {row.status}
                  </span>
                </div>

                {/* Col 2: Meaning */}
                <div className="md:col-span-5 space-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#665F69] md:hidden">
                    What it means
                  </span>
                  <p className="text-sm sm:text-[15px] leading-[1.6] text-[#665F69]">
                    {row.meaning}
                  </p>
                </div>

                {/* Col 3: Action */}
                <div className="md:col-span-4 space-y-1">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#665F69] md:hidden">
                    Valid next action
                  </span>
                  <p className="text-sm sm:text-[15px] leading-[1.6] font-medium text-[#18141B]">
                    {row.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Authority Notice */}
      <Reveal delay={0.2}>
        <AuthorityNotice
          title="Missing or stale information does not become available"
          description="No review dates or approved version numbers have been supplied. If a source is stale, unavailable or conflicting, keep the action withheld. An unresolved route or unavailable third-party source is not evidence of approval."
        />
      </Reveal>
    </SectionContainer>
  );
}
