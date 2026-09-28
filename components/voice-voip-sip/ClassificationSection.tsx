import React from "react";
import { SectionContainer, SectionHeader, ListPanel, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CLASSIFICATION_DATA, IMAGES } from "./voice-data";

export default function ClassificationSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.classification}>
      <Reveal>
        <SectionHeader data={CLASSIFICATION_DATA} />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <StaggerItem>
          <ListPanel card={CLASSIFICATION_DATA.input} className="bg-[#F5F2EC]" />
        </StaggerItem>
        <StaggerItem>
          <ListPanel card={CLASSIFICATION_DATA.output} className="bg-[#F8F3FE]" />
        </StaggerItem>
      </StaggerGroup>
    </SectionContainer>
  );
}
