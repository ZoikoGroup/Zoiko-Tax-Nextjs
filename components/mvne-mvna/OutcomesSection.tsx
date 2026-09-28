import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { OUTCOMES_DATA } from "./mvne-mvna-data";

export default function OutcomesSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader title={OUTCOMES_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {OUTCOMES_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-3 rounded-xl p-6">
              <h3 className="text-xs font-semibold uppercase text-[#D65A2C]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
