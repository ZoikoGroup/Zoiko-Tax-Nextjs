"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal, AuthorityNotice } from "./shared";
import { colorSwatchesData } from "./types";

export default function ColorGuidanceSection() {
  return (
    <SectionContainer id="color-guidance" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Color guidance"
          title="Recognizable in context. Governed at source."
          description="Reference palette · publishing approval required. These values are observed on the homepage, not canonical approved brand tokens."
        />
      </Reveal>

      {/* 5 Observed Color Swatches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
        {colorSwatchesData.map((swatch, idx) => (
          <Reveal key={swatch.id} delay={0.04 * idx}>
            <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] overflow-hidden flex flex-col justify-between hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
              {/* Color Sample Block */}
              <div
                className="w-full h-[146px] border-b border-[#D8CEDD] transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: swatch.bgColor }}
              />

              {/* Swatch Metadata */}
              <div className="p-5 sm:p-6 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold text-[#18141B] font-['Inter',sans-serif]">
                    {swatch.name}
                  </h3>
                  <p className="text-sm font-mono font-medium text-[#301153]">
                    {swatch.hex}
                  </p>
                </div>
                <p className="text-xs text-[#665F69] pt-2">
                  {swatch.note}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Authority Notice */}
      <Reveal delay={0.2}>
        <AuthorityNotice
          title="Digital, print and accessible pairings need approval"
          description="Approved digital and print specifications have not been supplied. Do not infer CMYK, spot colors or approved combinations from this preview. Use governed color guidance and validate legibility in the intended context before publishing."
        />
      </Reveal>
    </SectionContainer>
  );
}
