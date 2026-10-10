"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { mediaKitFaqData } from "./types";

export default function MediaKitFaqSection() {
  return (
    <SectionContainer id="media-kit-faq" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="FAQ"
          title="Direct answers. No inferred permissions."
          description="The key questions, answered in the open—not hidden behind a hover or collapsed control."
        />
      </Reveal>

      {/* 7 Open Questions and Answers */}
      <div className="w-full">
        {mediaKitFaqData.map((faq, idx) => (
          <Reveal key={idx} delay={0.03 * idx}>
            <div className="py-7 border-b border-[#D8CEDD] space-y-3">
              <h3 className="text-lg sm:text-[20px] font-semibold leading-[1.4] text-[#18141B] font-['Inter',sans-serif]">
                {faq.question}
              </h3>
              <p className="text-base leading-[1.6] text-[#665F69] w-full">
                {faq.answer}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
