import React from "react";
import { SectionContainer, SectionHeader, ListPanel, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { AI_DATA, IMAGES } from "./voice-data";

export default function AISection() {
  return (
    <SectionContainer className="bg-[#18141B]" bgImage={IMAGES.ai}>
      <Reveal>
        <SectionHeader data={AI_DATA} dark />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <StaggerItem>
          <ListPanel card={AI_DATA.may} className="bg-[#F5F2EC]" />
        </StaggerItem>
        <StaggerItem>
          <ListPanel card={AI_DATA.mayNot} className="bg-[#0A0510]" dark />
        </StaggerItem>
      </StaggerGroup>
    </SectionContainer>
  );
}
