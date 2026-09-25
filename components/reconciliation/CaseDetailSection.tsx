"use client";

import React from "react";
import { CASE_DETAIL_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function CaseDetailSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={CASE_DETAIL_DATA.eyebrow}
          title={CASE_DETAIL_DATA.title}
          description={CASE_DETAIL_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Card: Mismatch Detail Card */}
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-sm">
            <div className="space-y-5">
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] tracking-tight">
                {CASE_DETAIL_DATA.caseId}
              </h3>

              {/* System Flag */}
              <div className="rounded-lg border border-[#D65A2C] bg-[#FFF9F5] p-3.5 sm:p-4 text-xs sm:text-[13px] leading-relaxed text-[#D65A2C]">
                <span className="font-bold">System Flag:</span>{" "}
                Non-standard tax classification detected on high-bandwidth bundle. Deviation exceeds maximum configured state-level tolerance of 0.05%.
              </div>

              {/* Side-by-Side Positions */}
              <div className="grid grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#665F69] block mb-1">
                    CALCULATED POSITION
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#18141B] block">
                    Engine Output (Aligned)
                  </span>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#665F69] block mb-1">
                    COLLECTED POSITION
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#D65A2C] block">
                    Billing Ledger Diff
                  </span>
                </div>
              </div>
            </div>

            {/* Investigation Description */}
            <p className="text-xs sm:text-[13px] text-[#665F69] leading-relaxed pt-2">
              Investigation: This discrepancy is attributed to customer-specific exemption certificate expiration that was registered in Amdocs BSS but not yet propagated to the central tax catalog.
            </p>
          </div>

          {/* Right Card: Audit Evidence Dossier */}
          <div className="rounded-2xl bg-[#1D033B] text-white p-6 sm:p-8 flex flex-col justify-between shadow-sm min-h-[340px]">
            <div>
              {/* Dossier Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-6">
                Audit Evidence Dossier
              </h3>

              {/* Dossier Key-Value Rows */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-[13px] gap-2">
                  <span className="text-[#D8CEDD]">Facts Source Hash</span>
                  <span className="font-mono font-semibold text-white">
                    {CASE_DETAIL_DATA.dossier.factsHash}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-[13px] gap-2">
                  <span className="text-[#D8CEDD]">Rule Version</span>
                  <span className="font-semibold text-white">
                    {CASE_DETAIL_DATA.dossier.ruleVersion}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-[13px] gap-2">
                  <span className="text-[#D8CEDD]">Assigned Reviewer</span>
                  <span className="font-semibold text-white">
                    {CASE_DETAIL_DATA.dossier.reviewer}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-[13px] gap-2">
                  <span className="text-[#D8CEDD]">Outcome State</span>
                  <span className="font-semibold text-white">
                    {CASE_DETAIL_DATA.dossier.outcomeState}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-2">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/30"
              >
                Publish Replay Manifest
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
