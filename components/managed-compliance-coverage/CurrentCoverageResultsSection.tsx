"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, ArrowUpRight, Box, ShieldCheck, CircleHelp, FlaskConical, Info, BadgeCheck } from "lucide-react";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";
import { SPECIMEN_RECORDS, SpecimenRecord } from "./types";

interface CurrentCoverageResultsProps {
  selectedId?: string;
  onSelectRecord?: (record: SpecimenRecord) => void;
  filteredRecords?: SpecimenRecord[];
}

export default function CurrentCoverageResultsSection({
  selectedId = "specimen-a",
  onSelectRecord,
  filteredRecords,
}: CurrentCoverageResultsProps) {
  const records = filteredRecords || SPECIMEN_RECORDS;

  const handleSelect = (rec: SpecimenRecord) => {
    if (onSelectRecord) {
      onSelectRecord(rec);
    }
    const el = document.getElementById("selected-market-detail");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#E5D9EB]">
      <Reveal>
        <div className="space-y-8 sm:space-y-10">
          <SectionHeader
            eyebrow="Current Coverage Results"
            title="Read both readiness gates before acting."
            description="Accessible specimen rows expose the underlying capability, operational-readiness state, public state, approved scope and evidence path together."
          />

          {/* Production rule callout (Dark Box from Figma) */}
          <div className="flex items-start sm:items-center gap-4 rounded-[16px] bg-[#301153] p-5 sm:p-6 shadow-md border border-[#481A7A]">
            <div className="shrink-0 p-2 rounded-xl bg-white/10 text-[#F4A261]">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <p className="text-sm sm:text-base font-semibold leading-relaxed text-white">
              PRODUCTION means underlying software capability is production-ready; Managed Compliance is available only when operations are separately approved as MANAGED for that exact scope.
            </p>
          </div>

          {/* Specimen Label */}
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-[13px] font-bold text-[#D65A2C] uppercase tracking-wider">
              Illustrative status structure — not live Coverage
            </span>
            <span className="text-xs text-[#665F69]">
              Showing {records.length} specimen records
            </span>
          </div>

          {/* Result Rows */}
          <div className="space-y-4">
            {records.map((rec) => {
              const isSelected = rec.id === selectedId;

              return (
                <div
                  key={rec.id}
                  onClick={() => handleSelect(rec)}
                  className={`group rounded-[16px] border bg-white p-5 sm:p-6 shadow-2xs transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "border-[#BF6735] ring-2 ring-[#BF6735]/20 shadow-sm"
                      : "border-[#E5D9EB] hover:border-[#BF6735]/60 hover:shadow-xs"
                  }`}
                >
                  {/* Top Summary Row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start pb-5 border-b border-[#F0E8F5]">
                    {/* Identity */}
                    <div className="md:col-span-3 flex flex-col gap-1">
                      <h3 className="text-lg font-bold text-[#18141B] group-hover:text-[#BF6735] transition-colors">
                        {rec.market}
                      </h3>
                      <p className="text-xs text-[#665F69]">{rec.qualifier}</p>
                    </div>

                    {/* Underlying Capability */}
                    <div className="md:col-span-3 flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A818E]">
                        Underlying capability
                      </span>
                      <StatusBadge status={rec.underlyingState} />
                    </div>

                    {/* Operational Readiness */}
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A818E]">
                        Operational readiness
                      </span>
                      <StatusBadge status={rec.operationalState} />
                    </div>

                    {/* Current Public State */}
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A818E]">
                        Current public state
                      </span>
                      <StatusBadge status={rec.publicState} />
                    </div>

                    {/* Action & Currentness */}
                    <div className="md:col-span-2 flex md:flex-col md:items-end justify-between items-center gap-1">
                      <span
                        className={`text-xs font-semibold ${
                          rec.currentness === "Current"
                            ? "text-[#177245]"
                            : "text-[#8A5B00]"
                        }`}
                      >
                        {rec.currentness}
                      </span>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[#D65A2C] group-hover:underline"
                      >
                        <span>
                          {rec.id === "specimen-b"
                            ? "Review boundaries"
                            : rec.id === "specimen-c"
                            ? "Check status"
                            : "View detail"}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Scope and Links Bottom Row */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
                      <span className="font-bold text-[#8A818E]">
                        Approved scope:
                      </span>
                      <span className="text-[#18141B]">{rec.scopeText}</span>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <Link
                        href={rec.packLink}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#D65A2C] hover:underline"
                      >
                        <span>Pack</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      <Link
                        href={rec.statusLink}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#D65A2C] hover:underline"
                      >
                        <span>Status & Releases</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
