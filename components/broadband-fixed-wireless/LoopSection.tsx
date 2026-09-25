import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { LOOP_DATA } from "./broadband-data";

export default function LoopSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader eyebrow={LOOP_DATA.eyebrow} title={LOOP_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
        {LOOP_DATA.stages.map(({ label, icon: Icon }, idx) => (
          <StaggerItem key={label}>
            <div className="group flex h-full flex-col items-center gap-3 rounded-xl border border-[#D8CEDD] bg-white p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-[0_8px_16px_0_rgba(29,3,59,0.06)]">
              <Icon
                className="size-6 text-[#D65A2C] transition-transform duration-300 group-hover:scale-110"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span className="text-sm font-bold text-[#18141B]">{label}</span>
              <span className="text-xs text-[#665F69]">Stage {idx + 1}</span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
