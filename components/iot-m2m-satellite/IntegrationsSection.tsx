import React from "react";
import { CircleX } from "lucide-react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { INTEGRATIONS_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function IntegrationsSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.integrations}>
      <Reveal>
        <SectionHeader
          eyebrow={INTEGRATIONS_DATA.eyebrow}
          title={INTEGRATIONS_DATA.title}
          description={INTEGRATIONS_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INTEGRATIONS_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex min-h-[200px] flex-col gap-3 p-6">
              <div className="p-2">
                <CircleX className="size-5 text-[#D65A2C]" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#18141B]">{card.title}</h3>
              <p className="text-sm leading-5 text-[#665F69]">{card.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
