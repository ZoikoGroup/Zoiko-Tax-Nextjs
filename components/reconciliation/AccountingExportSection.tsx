"use client";

import React from "react";
import { ACCOUNTING_EXPORT_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function AccountingExportSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA] border-b border-[#D8CEDD]/60"
      style={{
        backgroundImage: "url('/reconciliation/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={ACCOUNTING_EXPORT_DATA.eyebrow}
          title={ACCOUNTING_EXPORT_DATA.title}
          description={ACCOUNTING_EXPORT_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-[20px] border border-[#D8CEDD] bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
            {ACCOUNTING_EXPORT_DATA.boxTitle}
          </h3>

          <div className="space-y-3.5 pt-1">
            {ACCOUNTING_EXPORT_DATA.configs.map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between text-xs sm:text-[14px] gap-4"
              >
                <span className="text-[#665F69] font-normal">
                  {c.label}
                </span>
                <span className="font-semibold text-[#18141B] text-right">
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
