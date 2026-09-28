"use client";

import React from "react";
import { EXCEPTIONS_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function ExceptionsSection() {
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
          eyebrow={EXCEPTIONS_DATA.eyebrow}
          title={EXCEPTIONS_DATA.title}
          description={EXCEPTIONS_DATA.description}
        />
      </Reveal>

      <div className="mt-6 flex flex-col gap-3">
        {EXCEPTIONS_DATA.rows.map((row, i) => (
          <Reveal key={row.title} delay={0.04 * i}>
            <div className="rounded-xl border border-[#D8CEDD] bg-white p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
              <p className="text-base font-bold text-[#18141B] md:w-[280px] shrink-0">{row.title}</p>
              <span className="w-fit shrink-0 rounded bg-[rgba(214,90,44,0.1)] px-2 py-1 text-[11px] font-semibold uppercase text-[#D65A2C] md:w-[180px] text-center">
                {row.badge}
              </span>
              <p className="text-[13px] text-[#665F69]">
                <span className="font-semibold text-[#18141B]">Mitigation Path:</span> {row.mitigation}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
