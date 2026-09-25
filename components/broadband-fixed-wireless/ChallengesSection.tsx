import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CHALLENGES_DATA, IMAGES } from "./broadband-data";

export default function ChallengesSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.complexity}>
      <Reveal>
        <SectionHeader eyebrow={CHALLENGES_DATA.eyebrow} title={CHALLENGES_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3">
        {CHALLENGES_DATA.cards.map((card, idx) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-4 p-6 sm:p-7">
              <span className="font-mono text-sm font-bold text-[#3B1260]">{String(idx + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-semibold text-[#18141B]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
