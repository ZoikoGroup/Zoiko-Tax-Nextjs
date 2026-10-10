"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="flex flex-col gap-8 sm:gap-10">
          <SectionHeader
            eyebrow="Direct answer"
            title="What is a ZoikoTax Country or Regulatory Pack?"
            description="A ZoikoTax Country or Regulatory Pack is the governed jurisdiction layer used to organize market-specific content and activate supported capabilities. Pack existence alone does not mean every capability is in PRODUCTION; readiness is published by capability and scope."
            className="mb-0"
          />

          {/* Coverage Truth Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-[#301153] p-6 text-white shadow-sm">
            <span className="text-xl sm:text-2xl font-bold font-['Inter',sans-serif] text-white tracking-tight">
              Market × Capability × Status × Scope
            </span>
            <span className="text-sm sm:text-[15px] font-normal text-[#D9D0DF] font-['Inter',sans-serif]">
              Pack existence ≠ capability readiness
            </span>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
