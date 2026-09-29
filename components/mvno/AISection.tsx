import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { AI_DATA, IMAGES } from "./mvno-data";

export default function AISection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.ai} bgOpacity="opacity-35">
      <Reveal>
        <SectionHeader eyebrow={AI_DATA.eyebrow} title={AI_DATA.title} description={AI_DATA.description} dark />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {AI_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card dark className="flex flex-col gap-4 p-6">
              <h3 className="text-base font-bold uppercase text-[#F4A261]">{card.title}</h3>
              <ul className="flex flex-col gap-3">
                {card.items.map((item) => (
                  <li key={item} className="text-sm text-white">
                    • {item}
                  </li>
                ))}
              </ul>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
