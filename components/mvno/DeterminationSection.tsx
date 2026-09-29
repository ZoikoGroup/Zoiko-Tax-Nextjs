import React from "react";
import {
  SectionContainer,
  SectionHeader,
  SectionAction,
  Card,
  Badge,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "./shared";
import { DETERMINATION_DATA, IMAGES } from "./mvno-data";

export default function DeterminationSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.determination}>
      <Reveal>
        <SectionHeader
          eyebrow={DETERMINATION_DATA.eyebrow}
          title={DETERMINATION_DATA.title}
          description={DETERMINATION_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-3">
        {DETERMINATION_DATA.cards.map((card, idx) => (
          <StaggerItem key={card.title}>
            <Card className="flex min-h-[180px] flex-col gap-3 p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-[#D65A2C]">{String(idx + 1).padStart(2, "0")}</span>
                <Badge label={card.badge} tone={card.tone} />
              </div>
              <h3 className="text-xl font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-sm leading-6 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <Reveal delay={0.1}>
        <SectionAction action={DETERMINATION_DATA.action} />
      </Reveal>
    </SectionContainer>
  );
}
