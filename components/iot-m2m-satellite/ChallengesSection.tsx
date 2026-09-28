import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CHALLENGES_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function ChallengesSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.complexity}>
      <Reveal>
        <SectionHeader
          eyebrow={CHALLENGES_DATA.eyebrow}
          title={CHALLENGES_DATA.title}
          description={CHALLENGES_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex min-h-[156px] flex-col gap-4 p-6 sm:p-7">
              <h3 className="text-lg font-bold text-[#3B1260]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
