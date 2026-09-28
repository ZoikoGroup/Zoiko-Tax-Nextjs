"use client";

import React from "react";
import { SectionContainer, SectionHeader, StatusBadge, DescriptiveLink } from "./shared";
import { stateVocabularyData } from "./status-data";

export default function StateVocabularySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Operational truth"
          title="State vocabulary"
          description="These labels describe bounded operating states, not a celebratory maturity ladder. Always read the explicit text definition and scope."
        />

        {/* State Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {stateVocabularyData.map((item) => (
            <div
              key={item.state}
              className="flex flex-col items-start gap-3.5 rounded-2xl border border-[#EAE2ED] bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <StatusBadge label={item.state} />
              <p className="text-sm font-normal leading-[1.5] text-[#18141B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vocabulary Note and Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <p className="text-sm font-normal leading-[1.5] text-[#665F69] max-w-[900px]">
            A change can move in either direction. Historical state does not determine current state; use the current Coverage handoff.
          </p>
          <DescriptiveLink
            text="View Current Coverage"
            href="/coverage-overview"
            className="shrink-0"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
