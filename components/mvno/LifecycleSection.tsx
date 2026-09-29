import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { IMAGES, LIFECYCLE_DATA } from "./mvno-data";

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.lifecycle} bgOpacity="opacity-30">
      <Reveal>
        <SectionHeader
          eyebrow={LIFECYCLE_DATA.eyebrow}
          title={LIFECYCLE_DATA.title}
          description={LIFECYCLE_DATA.description}
          dark
        />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {LIFECYCLE_DATA.stages.map((stage) => (
          <StaggerItem key={stage.tag}>
            <Card dark className="flex flex-col gap-2 p-5">
              <span className="text-xs font-bold uppercase text-[#F4A261]">{stage.tag}</span>
              <h3 className="text-lg font-bold text-white">{stage.title}</h3>
              <p className="text-sm leading-5 text-[#D8CEDD]">{stage.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
