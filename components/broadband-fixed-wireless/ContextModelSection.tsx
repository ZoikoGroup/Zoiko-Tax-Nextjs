import React from "react";
import { SectionContainer, SectionHeader, Card, BulletList, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CONTEXT_MODEL_DATA, IMAGES } from "./broadband-data";

export default function ContextModelSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.context}>
      <Reveal>
        <SectionHeader eyebrow={CONTEXT_MODEL_DATA.eyebrow} title={CONTEXT_MODEL_DATA.title} />
      </Reveal>
      <StaggerGroup className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CONTEXT_MODEL_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-5 p-6 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)]">
              <h3 className="text-lg font-bold text-[#18141B]">{card.title}</h3>
              <BulletList items={card.items} />
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
