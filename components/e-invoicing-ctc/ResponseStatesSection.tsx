"use client";

import React from "react";
import { RESPONSE_STATES } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ResponseStatesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Exception states"
        title="Authoritative Responses, Rejections & Corrections"
        description="ZoikoTax maps external network responses into trace-ready compliance outcomes. We don't hide rejections behind simple status flags."
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {RESPONSE_STATES.map((state, idx) => (
          <Reveal key={state.title} delay={0.04 * idx}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-5 shadow-xs hover:border-[#D65A2C]/40 transition-all duration-150 flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-[#18141B] mb-2">
                  {state.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#665F69] leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
