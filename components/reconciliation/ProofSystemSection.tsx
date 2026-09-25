"use client";

import React from "react";
import { PROOF_SYSTEM_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader } from "./shared";

export default function ProofSystemSection() {
  return (
    <SectionContainer className="bg-[#1D033B] py-20 lg:py-26 border-b border-white/10 text-white">
      {/* Section Header */}
      <div>
        <SectionHeader
          eyebrow={PROOF_SYSTEM_DATA.eyebrow}
          title={PROOF_SYSTEM_DATA.title}
          description={PROOF_SYSTEM_DATA.description}
          dark
        />
      </div>

      {/* 7 Interface Buttons matching exact Figma node 239:15440 */}
      <div className="flex flex-wrap gap-4 mt-10 sm:mt-12 max-w-5xl">
        {PROOF_SYSTEM_DATA.interfaces.map((item) => (
          <div
            key={item.id}
            className="rounded-[8px] border border-white/15 bg-white/[0.08] px-6 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-2xs select-none hover:bg-white/[0.14] hover:border-white/25 transition-all duration-200 cursor-default"
          >
            {item.label}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
