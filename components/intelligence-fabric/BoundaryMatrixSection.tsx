"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { BOUNDARY_MATRIX_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function BoundaryMatrixSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/intelligence-fabric/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader eyebrow={BOUNDARY_MATRIX_DATA.eyebrow} title={BOUNDARY_MATRIX_DATA.title} />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-[#26735B]">{BOUNDARY_MATRIX_DATA.isCard.title}</h3>
            <ul className="space-y-4">
              {BOUNDARY_MATRIX_DATA.isCard.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-4 w-4 shrink-0 text-[#26735B] mt-1" aria-hidden="true" />
                  <span className="text-sm leading-[1.5] text-[#18141B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold text-[#E53B3B]">{BOUNDARY_MATRIX_DATA.isNotCard.title}</h3>
            <ul className="space-y-4">
              {BOUNDARY_MATRIX_DATA.isNotCard.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="h-4 w-4 shrink-0 text-[#E53B3B] mt-1" aria-hidden="true" />
                  <span className="text-sm leading-[1.5] text-[#18141B]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
