import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { LIFECYCLE_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function LifecycleSection() {
  return (
    <SectionContainer id="lifecycle" className="bg-[#1D033B]" bgImage={IMAGES.lifecycle}>
      <Reveal>
        <SectionHeader
          dark
          eyebrow={LIFECYCLE_DATA.eyebrow}
          title={LIFECYCLE_DATA.title}
          description={LIFECYCLE_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8">
        {LIFECYCLE_DATA.steps.map((step, idx) => (
          <StaggerItem key={step.title}>
            <div className="flex h-full min-h-40 flex-col gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-[#D65A2C]/60 hover:bg-white/15 sm:min-h-48">
              <span className="text-xs font-bold text-[#D65A2C]">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="text-base font-bold text-white">{step.title}</h3>
              <p className="text-xs leading-4 text-[#E5E1EA]">{step.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
