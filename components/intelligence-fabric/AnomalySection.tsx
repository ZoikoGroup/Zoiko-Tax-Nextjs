"use client";

import React from "react";
import { ANOMALY_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function AnomalySection() {
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
          eyebrow={ANOMALY_DATA.eyebrow}
          title={ANOMALY_DATA.title}
          description={ANOMALY_DATA.description}
        />
      </Reveal>

      <div className="mt-8 space-y-4">
        {ANOMALY_DATA.rows.map((row, i) => (
          <Reveal key={row.title} delay={0.05 * i}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-[#D8CEDD] bg-white p-5 sm:p-6">
              <div className="w-full sm:w-[220px] shrink-0 space-y-1.5">
                <h3 className="text-base font-bold text-[#18141B]">{row.title}</h3>
                <p className="font-mono text-xs text-[#D65A2C]">{row.state}</p>
              </div>
              <p className="flex-1 text-sm leading-[1.5] text-[#665F69]">{row.description}</p>
              <span className="shrink-0 rounded-md bg-[#F7F3ED] px-3 py-1.5 text-xs font-semibold text-[#18141B] whitespace-nowrap">
                {row.priority}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
