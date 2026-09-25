"use client";

import React from "react";
import { COVERAGE_TRUTH_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, StatusBadge, SecondaryButton, Reveal } from "./shared";

export default function CoverageTruthSection() {
  return (
    <SectionContainer
      id="coverage-truth"
      className="bg-[#FAF8FA] border-b border-[#D8CEDD]/60"
      style={{
        backgroundImage: "url('/reconciliation/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={COVERAGE_TRUTH_DATA.eyebrow}
          title={COVERAGE_TRUTH_DATA.title}
          description={COVERAGE_TRUTH_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-2xl border border-[#D8CEDD] bg-white/95 backdrop-blur-md shadow-xs overflow-hidden">
          <div className="p-5 sm:p-6 border-b border-[#D8CEDD] bg-[#F7F3ED]/50 flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
              {COVERAGE_TRUTH_DATA.boxTitle}
            </h3>
            <span className="text-xs font-semibold text-[#665F69] bg-white border border-[#D8CEDD] rounded-full px-3 py-1">
              Active Coverage Audit
            </span>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#D8CEDD]/60 bg-white text-[12px] font-bold text-[#18141B] uppercase tracking-wider">
                  <th className="py-4 px-6">Market Pack</th>
                  <th className="py-4 px-6">Scope Details</th>
                  <th className="py-4 px-6 text-right">Operational State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D8CEDD]/60 text-sm">
                {COVERAGE_TRUTH_DATA.rows.map((row) => (
                  <tr key={row.pack} className="hover:bg-[#FAF8FA] transition-colors duration-150">
                    <td className="py-4 px-6 font-semibold text-[#18141B]">
                      {row.pack}
                    </td>
                    <td className="py-4 px-6 text-[#665F69]">
                      {row.scope}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <StatusBadge status={row.state} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.16} className="mt-8 flex justify-start">
        <SecondaryButton href="/coverage">
          {COVERAGE_TRUTH_DATA.cta}
        </SecondaryButton>
      </Reveal>
    </SectionContainer>
  );
}
