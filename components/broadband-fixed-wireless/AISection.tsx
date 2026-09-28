import React from "react";
import { SectionContainer, SectionHeader, Card, BulletList, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { AI_DATA, IMAGES } from "./broadband-data";

export default function AISection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.ai}>
      <Reveal>
        <SectionHeader eyebrow={AI_DATA.eyebrow} title={AI_DATA.title} description={AI_DATA.description} />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {AI_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-3 p-6">
              <h3 className="text-base font-bold text-[#D65A2C]">{card.title}</h3>
              <BulletList items={card.items} className="gap-2" />
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
