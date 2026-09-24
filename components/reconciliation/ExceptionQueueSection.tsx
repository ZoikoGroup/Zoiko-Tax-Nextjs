"use client";

import React from "react";
import { EXCEPTION_QUEUE_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";

export default function ExceptionQueueSection() {
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
          eyebrow={EXCEPTION_QUEUE_DATA.eyebrow}
          title={EXCEPTION_QUEUE_DATA.title}
          description={EXCEPTION_QUEUE_DATA.description}
        />
      </Reveal>

      {/* 4 Pipeline stages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-10 sm:mt-12">
        {EXCEPTION_QUEUE_DATA.stages.map((stage, idx) => (
          <Reveal key={stage.title} delay={0.04 * (idx + 1)}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white/95 backdrop-blur-xs p-5 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#D8CEDD]/60">
                  <h3 className="text-sm font-bold text-[#18141B]">
                    {stage.title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF3FF] text-[#D65A2C] border border-[#D8CEDD]">
                    {stage.count}
                  </span>
                </div>

                <div className="mt-4 rounded-xl border border-[#D8CEDD] bg-[#F7F3ED]/50 p-4 space-y-2">
                  <div className="text-sm font-bold text-[#18141B]">
                    {stage.cardTitle}
                  </div>
                  <div className="text-xs text-[#665F69]">
                    {stage.cardMeta}
                  </div>
                  <div className="pt-1">
                    <StatusBadge status="Under Review" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
