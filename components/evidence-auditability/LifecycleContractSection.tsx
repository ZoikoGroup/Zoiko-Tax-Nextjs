"use client";

import React from "react";
import { LIFECYCLE_CONTRACT_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function LifecycleContractSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/evidence-auditability/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={LIFECYCLE_CONTRACT_DATA.eyebrow}
          title={LIFECYCLE_CONTRACT_DATA.title}
          description={LIFECYCLE_CONTRACT_DATA.description}
        />
      </Reveal>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {LIFECYCLE_CONTRACT_DATA.cards.map((card, i) => (
          <Reveal key={card.title} delay={0.03 * i}>
            <div className="h-full min-h-[150px] rounded-xl border border-[#D8CEDD] bg-white p-4 space-y-2.5">
              <h3 className="text-sm font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-xs leading-[1.4] text-[#665F69]">{card.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
