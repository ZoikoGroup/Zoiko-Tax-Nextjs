"use client";

import React from "react";
import { Reveal, SectionContainer, BoundaryNotice, StatusTag, renderLucideIcon } from "./shared";
import { RemittanceRecord } from "./types";

interface SelectedMarketDetailSectionProps {
  record?: RemittanceRecord;
}

export default function SelectedMarketDetailSection({
  record,
}: SelectedMarketDetailSectionProps) {
  if (!record) return null;

  const detailFields = [
    {
      title: "Identity",
      iconName: "fingerprint",
      description: `${record.market} · synthetic selected identity.`,
    },
    {
      title: "Scope summary",
      iconName: "scan-text",
      description: record.scopeSummary,
    },
    {
      title: "What current state means",
      iconName: "badge-help",
      description: record.stateMeaning,
    },
    {
      title: "Pack evidence",
      iconName: "book-open-check",
      description: record.packEvidence,
    },
    {
      title: "Status currentness",
      iconName: "clock-3",
      description: record.statusCurrentness,
    },
    {
      title: "Remittance capability",
      iconName: "workflow",
      description: record.remittanceCapability,
    },
    {
      title: "Adjacent Coverage",
      iconName: "split",
      description: record.adjacentCoverage,
    },
    {
      title: "Platform proof",
      iconName: "braces",
      description: record.platformProof,
    },
    {
      title: "Commercial handoff",
      iconName: "messages-square",
      description: record.commercialHandoff,
    },
  ];

  return (
    <SectionContainer id="selected-market-detail" className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                Selected market / jurisdiction detail
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                Read the state in context.
              </h2>
              <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69]">
                Synthetic specimen detail. Unknown scope is omitted rather than invented.
              </p>
            </div>

            {/* Right Status Badge */}
            <div className="flex flex-col items-start lg:items-end gap-1.5 shrink-0">
              <StatusTag
                status={`${record.currentState} · illustrative`}
                iconName="flask-conical"
                className="px-3 py-1.5 text-xs sm:text-sm"
              />
              <span className="text-xs text-[#665F69]">
                Not production-use authority
              </span>
            </div>
          </div>

          {/* 9 Field Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {detailFields.map((field, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E9E1EC] bg-white p-5 sm:p-6 space-y-3 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF3FF] border border-[#E9E1EC] flex items-center justify-center text-[#301153]">
                    {renderLucideIcon(field.iconName, "w-4 h-4 text-[#301153]")}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#18141B] font-['Inter',sans-serif]">
                    {field.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[14px] leading-relaxed text-[#665F69]">
                  {field.description}
                </p>
              </div>
            ))}
          </div>

          {/* Boundary Notice */}
          <BoundaryNotice
            title="No money movement is represented here"
            description="Remittance capability can govern preparation, review, approval, handoff and tracking. ZoikoTax does not hold, transfer or settle customer funds, and this detail does not imply payment execution."
            iconName="shield-alert"
          />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
