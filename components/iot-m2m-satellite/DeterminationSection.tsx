import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { DETERMINATION_DATA } from "./iot-m2m-satellite-data";

export default function DeterminationSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={DETERMINATION_DATA.eyebrow}
          title={DETERMINATION_DATA.title}
          description={DETERMINATION_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {DETERMINATION_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-4 p-6 sm:p-7">
              <h3 className="text-lg font-bold text-[#D65A2C]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
