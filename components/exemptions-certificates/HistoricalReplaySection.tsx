"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { replayData } from "./exemptions-data";

export default function HistoricalReplaySection() {
  return (
    <SectionContainer id="replay" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow={replayData.eyebrow}
          title={replayData.title}
          description={replayData.description}
        />
      </Reveal>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
        {/* Left: Audit Manifest Mockup */}
        <div className="lg:col-span-6">
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1A062F] p-5 sm:p-7 md:p-9 text-white shadow-xl">
              {/* Header */}
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 pb-5 sm:pb-6 border-b border-white/10">
                <span className="font-mono text-xs font-bold text-[#D65A2C] tracking-wider uppercase">
                  {replayData.manifest.header}
                </span>
                <span className="font-mono text-xs text-white/60 tracking-wider">
                  {replayData.manifest.traceId}
                </span>
              </div>

              {/* Rows with clean dividers */}
              <div className="flex flex-col divide-y divide-white/10">
                {replayData.manifest.rows.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-3 sm:py-3.5 text-xs sm:text-[13px]"
                  >
                    <span className="text-white/75 font-sans">
                      {row.label}
                    </span>
                    <span className="font-mono text-white/95 text-left sm:text-right font-medium sm:ml-4 break-all sm:break-normal">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Copy & Transparency Statement */}
        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4 sm:gap-6 max-w-xl">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-normal leading-snug text-[#18141B] font-['Tiro_Gurmukhi',serif] break-words">
                {replayData.rightSide.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-[#535055]">
                {replayData.rightSide.body}
              </p>

              {/* Rigor Statement Banner */}
              <div className="flex items-start gap-3 rounded-xl sm:rounded-2xl border border-[#D8CEDD] bg-white p-4 sm:p-5 shadow-sm">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm bg-[#3B82F6] text-white">
                  <span className="text-[10px] font-bold">i</span>
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#535055]">
                  {replayData.rightSide.note}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
