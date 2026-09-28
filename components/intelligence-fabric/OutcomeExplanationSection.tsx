"use client";

import React from "react";
import clsx from "clsx";
import { OUTCOME_EXPLANATION_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function OutcomeExplanationSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/intelligence-fabric/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={OUTCOME_EXPLANATION_DATA.eyebrow}
          title={OUTCOME_EXPLANATION_DATA.title}
          description={OUTCOME_EXPLANATION_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-[#18141B]">{OUTCOME_EXPLANATION_DATA.transactionId}</h3>
          <div className="space-y-2.5">
            {OUTCOME_EXPLANATION_DATA.lines.map((line, i) => (
              <p
                key={i}
                className={clsx(
                  "text-sm leading-[1.5]",
                  line.tone === "default" && "text-[#18141B]",
                  line.tone === "muted" && "text-[#665F69]",
                  line.tone === "alert" && "text-[#E53B3B]"
                )}
              >
                {line.text}
              </p>
            ))}
          </div>
          <div className="border-t border-[#D8CEDD] pt-4">
            <p className="text-xs text-[#665F69]">{OUTCOME_EXPLANATION_DATA.systemNote}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
