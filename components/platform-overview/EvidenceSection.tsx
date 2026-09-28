"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./shared";

const evidenceBullets = [
  "Preserve exact transactional facts at ingestion",
  "Trace jurisdiction classification version status",
  "Maintain source provenance for all rule alterations",
  "Lock approvals and state changes into proof logs",
];

const manifestData = {
  title: "REPLAY EVIDENCE MANIFEST (SAMPLE)",
  rows: [
    { label: "Transaction Reference", value: "TXN-2026-09882" },
    { label: "Rule-set Version", value: "v4.14-US-FED" },
    { label: "Operator Approval Hash", value: "0x8a92bb...7cf" },
  ],
  note: "Preserved payload allows deterministic recalculation and historic audits.",
};

export default function EvidenceSection() {
  return (
    <section
      id="evidence"
      className="relative w-full overflow-hidden bg-[#FAF8FA] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-2.5 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              EVIDENCE & AUDITABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.1] tracking-tight text-[#18141B]">
              Traceable outcomes. Immutable decisions.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
              Every computed result is preserved alongside its complete context — rules, dates, operator inputs, and versions.
            </p>
          </div>
        </Reveal>

        {/* Content: 2-Column Side-by-Side */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: 4 Clean Check Items (No box backgrounds) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {evidenceBullets.map((bullet, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-4.5 shrink-0 text-[#D65A2C] stroke-[2.2]" />
                  <span className="text-sm sm:text-base font-normal text-[#18141B]">
                    {bullet}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right Column: Replay Evidence Manifest Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="w-full max-w-[520px] rounded-2xl border border-[#D8CEDD] bg-slate-50/70 p-6 sm:p-7 shadow-[0_2px_4px_0_rgba(0,0,0,0.02)]">
                <span className="font-mono text-xs font-normal uppercase tracking-wider text-[#D65A2C]">
                  {manifestData.title}
                </span>

                <div className="mt-4 flex flex-col gap-2.5">
                  {manifestData.rows.map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="text-[#665F69] font-normal">
                        {row.label}
                      </span>
                      <span className="font-mono text-[#18141B] font-medium">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-[11px] text-[#665F69] italic">
                  {manifestData.note}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
