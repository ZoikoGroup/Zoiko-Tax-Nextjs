import React from "react";
import { CircleX } from "lucide-react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CONTEXT_MODEL_DATA } from "./iot-m2m-satellite-data";

export default function ContextModelSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={CONTEXT_MODEL_DATA.eyebrow}
          title={CONTEXT_MODEL_DATA.title}
          description={CONTEXT_MODEL_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {CONTEXT_MODEL_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex items-start gap-4 p-5 sm:p-6">
              <div className="shrink-0 rounded-lg bg-[#F7F3ED] p-3">
                <CircleX className="size-5 text-[#D65A2C]" strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="flex flex-1 flex-col gap-1.5">
                <h3 className="text-lg font-bold text-[#18141B]">{card.title}</h3>
                <p className="text-sm text-[#665F69]">{card.description}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
