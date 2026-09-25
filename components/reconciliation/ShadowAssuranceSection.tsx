"use client";

import React from "react";
import Link from "next/link";
import { SHADOW_ASSURANCE_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ShadowAssuranceSection() {
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
          eyebrow={SHADOW_ASSURANCE_DATA.eyebrow}
          title={SHADOW_ASSURANCE_DATA.title}
          description={SHADOW_ASSURANCE_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-[20px] border border-[#D8CEDD] bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
            {SHADOW_ASSURANCE_DATA.boxTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-1">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#18141B]">
                Shadow Assurance Mode
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#665F69] leading-relaxed">
                {SHADOW_ASSURANCE_DATA.shadow.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#665F69] select-none">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#18141B]">
                Operational Reconciliation
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#665F69] leading-relaxed">
                {SHADOW_ASSURANCE_DATA.operational.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[#665F69] select-none">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 flex justify-start">
            <Link
              href="/shadow-assurance"
              className="inline-flex items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-6 py-2.5 text-sm font-semibold text-[#18141B] transition-colors hover:bg-[#FAF3FF]"
            >
              {SHADOW_ASSURANCE_DATA.cta}
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
