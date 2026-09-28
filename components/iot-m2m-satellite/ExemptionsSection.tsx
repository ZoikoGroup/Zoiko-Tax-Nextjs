import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { EXEMPTIONS_DATA } from "./iot-m2m-satellite-data";

export default function ExemptionsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={EXEMPTIONS_DATA.eyebrow}
          title={EXEMPTIONS_DATA.title}
          description={EXEMPTIONS_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {EXEMPTIONS_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-4 p-6 sm:p-7">
              <h3 className="text-lg font-bold text-[#3B1260]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
