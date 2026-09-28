import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { LIFECYCLE_DATA } from "./ucaas-data";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#1D033B]">
      <Reveal>
        <SectionHeader eyebrow={LIFECYCLE_DATA.eyebrow} title={LIFECYCLE_DATA.title} dark />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {LIFECYCLE_DATA.stages.map((stage, idx) => (
          <StaggerItem key={stage.title}>
            <div className="flex h-full flex-col gap-2 rounded-xl border border-white/10 bg-[#2E1453] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D65A2C]/40">
              <span className="font-mono text-xs text-[#D65A2C]">Stage {String(idx + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-bold text-white">{stage.title}</h3>
              <p className="text-xs leading-4 text-[#D8CEDD]">{stage.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
