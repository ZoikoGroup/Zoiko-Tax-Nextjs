"use client";

import React from "react";
import { Check, CheckCircle2, CircleSlash, X } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const IS_ITEMS = [
  "Public readiness registry",
  "Governed truth surface",
  "Capability-specific states",
  "Route to deeper evidence",
];

const IS_NOT_ITEMS = [
  "Legal opinion",
  "Marketing map",
  "A promise every module is live",
  "A substitute for contracts or documentation",
];

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#DDD2E2]/60">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          {/* Header */}
          <SectionHeader
            eyebrow="DIRECT ANSWER"
            title="What is ZoikoTax Coverage Overview?"
            description="Coverage Overview is the public view of current capability availability by market. It routes operators to the governed pack, authoritative status and release chronology, and capability detail needed to inspect exact scope."
          />

          {/* Definition Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* What it IS */}
            <div className="rounded-[16px] border border-[#DDD2E2] bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-[#F0EDF3]">
                <CheckCircle2 className="w-6 h-6 text-[#176B4D] shrink-0" />
                <h3 className="text-xl sm:text-[22px] font-bold text-[#18141B]">
                  Coverage Overview is
                </h3>
              </div>

              <ul className="space-y-3 pt-1">
                {IS_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#176B4D]">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-[#18141B] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What it IS NOT */}
            <div className="rounded-[16px] border border-[#DDD2E2] bg-white p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-[#F0EDF3]">
                <CircleSlash className="w-6 h-6 text-[#9B2C3B] shrink-0" />
                <h3 className="text-xl sm:text-[22px] font-bold text-[#18141B]">
                  Coverage Overview is not
                </h3>
              </div>

              <ul className="space-y-3 pt-1">
                {IS_NOT_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FBE8EB] flex items-center justify-center text-[#9B2C3B]">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base font-normal text-[#18141B] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
