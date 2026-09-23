import React from "react";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";
import { whyHardChallenges } from "./determination-data";

export default function WhyHardSection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow="STRUCTURAL COMPLEXITY"
          title="Why Telecom Determination is structurally hard"
          className="max-w-3xl"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {whyHardChallenges.map((card, idx) => (
          <Reveal key={card.number} delay={0.05 * idx}>
            <div className="flex h-full flex-col rounded-2xl border border-[#D8CEDD] bg-white p-7 shadow-[0_4px_12px_0_rgba(0,0,0,0.02)] transition-all hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-lg">
              {/* Card Top: Number + Tag */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#D65A2C]">{card.number}</span>
                <StatusBadge status="STRUCTURAL" />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-bold text-[#18141B]">{card.title}</h3>

              {/* Divider */}
              <div className="my-4 border-t border-[#D8CEDD]/60" />

              {/* Challenge & Strategy Content */}
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-[#535055]">
                <p>
                  <strong className="font-bold text-[#18141B]">Challenge: </strong>
                  {card.challenge}
                </p>
                <p>
                  <strong className="font-bold text-[#D65A2C]">ZoikoTax Strategy: </strong>
                  {card.strategy}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
