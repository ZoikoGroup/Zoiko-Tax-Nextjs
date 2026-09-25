"use client";

import React from "react";
import { OPERATING_MODELS } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function OperatingModelsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Operating Models"
        title="Adoption paths designed around your operations"
        description="Phased implementation paths built to co-exist with legacy billing configs and third-party systems."
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OPERATING_MODELS.map((model, idx) => (
          <Reveal key={model.title} delay={0.06 * idx}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 sm:p-8 shadow-xs hover:border-[#D65A2C]/50 transition-all duration-200 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#18141B] mb-3">
                  {model.title}
                </h3>
                <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
