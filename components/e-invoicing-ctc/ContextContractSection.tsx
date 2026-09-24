"use client";

import React from "react";
import { CONTEXT_CONTRACT_ITEMS } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ContextContractSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Structure & Integrity"
        title="The E-Invoice Fiscal Context Contract"
        description="Every invoice payload in ZoikoTax must align commercial billing facts with regulatory tax determinations before transformation."
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTEXT_CONTRACT_ITEMS.map((item, idx) => (
          <Reveal key={item.title} delay={0.05 * idx}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-white p-6 shadow-xs hover:border-[#D65A2C]/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#18141B] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#665F69]">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
