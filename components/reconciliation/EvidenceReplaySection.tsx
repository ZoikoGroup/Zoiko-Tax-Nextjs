"use client";

import React from "react";
import { EVIDENCE_REPLAY_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function EvidenceReplaySection() {
  return (
    <SectionContainer id="evidence-replay" className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={EVIDENCE_REPLAY_DATA.eyebrow}
          title={EVIDENCE_REPLAY_DATA.title}
          description={EVIDENCE_REPLAY_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-[20px] border border-[#D8CEDD] bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
            {EVIDENCE_REPLAY_DATA.boxTitle}
          </h3>

          <div className="space-y-5 pt-1">
            {EVIDENCE_REPLAY_DATA.timeline.map((item) => (
              <div
                key={item.time}
                className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8"
              >
                <div className="shrink-0 sm:w-28 pt-0.5">
                  <span className="font-mono text-xs sm:text-[13px] font-medium text-[#D65A2C]">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-[#18141B]">
                    {item.agent}
                  </h4>
                  <p className="mt-0.5 text-xs sm:text-[13px] text-[#665F69] leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 flex justify-start">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-6 py-2.5 text-sm font-semibold text-[#18141B] transition-colors hover:bg-[#FAF3FF]"
            >
              Explore Evidence & Replay
            </button>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
