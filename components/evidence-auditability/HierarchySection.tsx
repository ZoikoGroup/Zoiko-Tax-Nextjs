"use client";

import React from "react";
import { HIERARCHY_DATA } from "./evidence-auditability-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function HierarchySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={HIERARCHY_DATA.eyebrow}
          title={HIERARCHY_DATA.title}
          description={HIERARCHY_DATA.description}
        />
      </Reveal>

      <div className="mt-6 flex flex-col gap-3">
        {HIERARCHY_DATA.rows.map((row, i) => (
          <Reveal key={row.title} delay={0.04 * i}>
            <div className="rounded-xl border border-[#D8CEDD] bg-white p-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <p className="text-base font-bold text-[#18141B] md:w-[300px] shrink-0">{row.title}</p>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-[#535055]">
                  <span className="font-semibold">Operational Role:</span> {row.role}
                </p>
                <p className="text-xs text-[#D65A2C]">
                  <span className="font-semibold">Boundary Limitation:</span> {row.limitation}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
