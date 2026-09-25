"use client";

import React from "react";
import { OPERATING_MODELS_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";

export default function OperatingModelsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/60">
      <Reveal>
        <SectionHeader
          eyebrow={OPERATING_MODELS_DATA.eyebrow}
          title={OPERATING_MODELS_DATA.title}
          description={OPERATING_MODELS_DATA.description}
        />
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mt-10 sm:mt-12">
        {OPERATING_MODELS_DATA.integrations.map((item, idx) => (
          <Reveal key={item.title} delay={0.03 * (idx + 1)}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 shadow-2xs flex flex-col justify-between hover:border-[#D65A2C]/40 hover:shadow-xs transition-all duration-200">
              <div>
                <span className="text-xs font-bold text-[#D65A2C] uppercase tracking-wider block">
                  Layer 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-[#18141B] mt-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#665F69] mt-1.5 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 flex justify-start">
        <SecondaryButton href="/developers">
          {OPERATING_MODELS_DATA.cta}
        </SecondaryButton>
      </Reveal>
    </SectionContainer>
  );
}
