import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { IMAGES, LIFECYCLE_DATA } from "./mvne-mvna-data";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.lifecycle}>
      <Reveal>
        <SectionHeader eyebrow={LIFECYCLE_DATA.eyebrow} title={LIFECYCLE_DATA.title} dark />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 xl:grid-cols-8">
        {LIFECYCLE_DATA.stages.map((stage, idx) => (
          <StaggerItem key={stage.title}>
            <div className="flex h-full flex-col gap-3 rounded-lg bg-[#2A0650] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-[#330A5F]">
              <span className="text-xs font-bold text-[#D65A2C]">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-normal text-white sm:text-xl">{stage.title}</h3>
              <p className="text-xs leading-4 text-[#D8CEDD]">{stage.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
