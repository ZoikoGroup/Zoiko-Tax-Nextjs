"use client";

import React from "react";
import Link from "next/link";
import { Workflow } from "lucide-react";
import { Reveal, SectionContainer, BoundaryNotice, StatusTag } from "./shared";
import { RemittanceRecord } from "./types";

interface CurrentCoverageResultsSectionProps {
  records: RemittanceRecord[];
  selectedId: string;
  onSelectRecord: (record: RemittanceRecord) => void;
}

export default function CurrentCoverageResultsSection({
  records,
  selectedId,
  onSelectRecord,
}: CurrentCoverageResultsSectionProps) {
  return (
    <SectionContainer className="bg-[#FAF8FA] border-b border-[#E5D9EB]">
      <Reveal>
        <div className="space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#18141B] font-['Inter',sans-serif]">
                Current Coverage Results
              </h2>
              <p className="text-xs sm:text-sm font-bold text-[#D65A2C] mt-1">
                Illustrative status structure — not live Coverage.
              </p>
            </div>
            <div className="text-xs sm:text-sm text-[#665F69] bg-white border border-[#D8CEDD] px-3 py-1.5 rounded-full self-start sm:self-auto shadow-2xs">
              {records.length} synthetic specimen records
            </div>
          </div>

          {/* Boundary Notice */}
          <BoundaryNotice
            title="Production is narrow, governed and capability-specific"
            description="Production applies only to governed Remittance capability and stated scope; it does not prove a customer obligation, legal compliance, universal downstream support or fund custody/payment execution."
            iconName="shield-alert"
          />

          {/* Table Container */}
          <div className="w-full overflow-x-auto rounded-2xl border border-[#D8CEDD] bg-white shadow-xs">
            <table className="w-full text-left border-collapse min-w-[960px]">
              {/* Header */}
              <thead>
                <tr className="bg-[#100031] text-[#D9D0DF] text-[11px] font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6 w-[220px]">Market / Jurisdiction</th>
                  <th className="py-3.5 px-4 w-[145px]">Capability</th>
                  <th className="py-3.5 px-4 w-[165px]">Current state</th>
                  <th className="py-3.5 px-4 w-[240px]">Controlled scope</th>
                  <th className="py-3.5 px-4 w-[140px]">Currentness</th>
                  <th className="py-3.5 px-4 w-[170px]">Evidence</th>
                  <th className="py-3.5 px-4 sm:pr-6 text-right w-[120px]">Action</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-[#E9E1EC] text-sm">
                {records.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-[#665F69]">
                      No matching records found. Try resetting the filters.
                    </td>
                  </tr>
                ) : (
                  records.map((rec) => {
                    const isSelected = rec.id === selectedId;

                    return (
                      <tr
                        key={rec.id}
                        onClick={() => onSelectRecord(rec)}
                        className={`transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#FAF3FF] ring-2 ring-inset ring-[#BF6735]"
                            : "hover:bg-[#FAF8FA]"
                        }`}
                      >
                        {/* Market / Jurisdiction */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-bold text-[#18141B]">{rec.market}</div>
                          <div className="text-xs text-[#665F69] mt-0.5">{rec.qualifier}</div>
                        </td>

                        {/* Capability */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#18141B]">
                            <Workflow className="w-4 h-4 text-[#D65A2C] shrink-0" />
                            <span>{rec.capability}</span>
                          </div>
                        </td>

                        {/* Current State */}
                        <td className="py-4 px-4">
                          <StatusTag status={rec.currentState} />
                        </td>

                        {/* Controlled Scope */}
                        <td className="py-4 px-4 text-xs text-[#665F69] leading-relaxed">
                          {rec.controlledScope}
                        </td>

                        {/* Currentness */}
                        <td className="py-4 px-4">
                          <StatusTag status={rec.currentness} />
                        </td>

                        {/* Evidence */}
                        <td className="py-4 px-4 space-y-1">
                          <div>
                            <Link
                              href={rec.evidencePack}
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors"
                            >
                              Country & Regulatory Pack ↗
                            </Link>
                          </div>
                          <div>
                            <Link
                              href={rec.evidenceStatus}
                              onClick={(e) => e.stopPropagation()}
                              className="text-xs font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors"
                            >
                              Status & Releases ↗
                            </Link>
                          </div>
                        </td>

                        {/* Action */}
                        <td className="py-4 px-4 sm:pr-6 text-right">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectRecord(rec);
                              const detailEl = document.getElementById("selected-market-detail");
                              if (detailEl) detailEl.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-2xs ${
                              isSelected
                                ? "bg-[#BF6735] text-white"
                                : "bg-white border border-[#D8CEDD] text-[#18141B] hover:border-[#BF6735]"
                            }`}
                          >
                            View detail
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <p className="text-xs sm:text-[13px] text-[#665F69] leading-relaxed">
            These records demonstrate structure and failure behavior only. They do not identify real markets, dates, schedules, regulators, endpoints, payment rails or supported remittance scope.
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
