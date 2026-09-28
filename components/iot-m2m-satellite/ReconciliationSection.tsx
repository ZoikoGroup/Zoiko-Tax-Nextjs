import React from "react";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { RECONCILIATION_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function ReconciliationSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.reconciliation}>
      <Reveal>
        <SectionHeader
          eyebrow={RECONCILIATION_DATA.eyebrow}
          title={RECONCILIATION_DATA.title}
          description={RECONCILIATION_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RECONCILIATION_DATA.phases.map((phase) => (
          <StaggerItem key={phase.phase}>
            <Card className="flex min-h-48 flex-col gap-3.5 p-6">
              <span className="text-xs font-bold text-[#D65A2C]">{phase.phase}</span>
              <h3 className="text-xl font-bold text-[#18141B]">{phase.title}</h3>
              <span className="text-xs font-semibold text-[#3B1260]">{phase.owner}</span>
              <p className="text-sm leading-5 text-[#665F69]">{phase.description}</p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
