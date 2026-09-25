"use client";

import React from "react";
import clsx from "clsx";
import { REVIEW_PROCESS_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ReviewProcessSection() {
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
        <SectionHeader eyebrow={REVIEW_PROCESS_DATA.eyebrow} title={REVIEW_PROCESS_DATA.title} />
      </Reveal>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {REVIEW_PROCESS_DATA.stages.map((stage, i) => (
          <Reveal key={stage.step} delay={0.04 * i}>
            <div className="h-full rounded-lg border border-[#D8CEDD] bg-white p-5 space-y-2">
              <h3
                className={clsx(
                  "text-sm font-bold",
                  stage.highlighted ? "text-[#D65A2C]" : "text-[#18141B]"
                )}
              >
                {stage.step}
              </h3>
              <p className="text-xs leading-[1.5] text-[#665F69]">{stage.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
