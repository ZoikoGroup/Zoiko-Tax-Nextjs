import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { OUTCOMES_DATA } from "./broadband-data";

export default function OutcomesSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader eyebrow={OUTCOMES_DATA.eyebrow} title={OUTCOMES_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {OUTCOMES_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex min-h-[122px] flex-col gap-3 p-6">
              <h3 className="text-base font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
