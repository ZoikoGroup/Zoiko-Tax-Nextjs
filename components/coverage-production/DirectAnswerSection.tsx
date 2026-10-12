"use client";

import React from "react";
import {
  SectionContainer,
  SectionHeader,
  SourceBoundary,
  Reveal,
} from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer id="direct-answer" className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-8">
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Direct answer"
            title="What does Production mean?"
            className="mb-0"
          />

          {/* Definition Body */}
          <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.55] text-[#665F69] max-w-5xl font-['Inter',sans-serif]">
            Production is a coverage designation for an approved capability
            within a defined scope. It does not mean every ZoikoTax capability
            is available in every country, for every service or to every
            customer. Current scope and limitations must come from the governed
            coverage record.
          </p>

          {/* Source Boundary */}
          <SourceBoundary text="This page interprets the label; current coverage comes from its governed source." />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
