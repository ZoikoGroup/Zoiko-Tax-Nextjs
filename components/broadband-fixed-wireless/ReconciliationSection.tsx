import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { RECONCILIATION_DATA } from "./broadband-data";

export default function ReconciliationSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={RECONCILIATION_DATA.eyebrow}
          title={RECONCILIATION_DATA.title}
          description={RECONCILIATION_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {RECONCILIATION_DATA.stages.map((stage, idx) => (
          <StaggerItem key={stage}>
            <div className="flex h-full min-h-[72px] flex-col items-center gap-2 rounded-lg border border-[#D8CEDD] bg-white p-4 text-center transition-colors hover:border-[#D65A2C]/40">
              <span className="font-mono text-xs font-semibold text-[#D65A2C]">
                {String(idx + 1).padStart(2, "0")} / {stage}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
