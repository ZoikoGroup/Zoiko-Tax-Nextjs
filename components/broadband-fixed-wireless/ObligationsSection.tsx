import React from "react";
import { SectionContainer, SectionHeader, Badge, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { OBLIGATIONS_DATA } from "./broadband-data";

export default function ObligationsSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={OBLIGATIONS_DATA.eyebrow}
          title={OBLIGATIONS_DATA.title}
          description={OBLIGATIONS_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {OBLIGATIONS_DATA.items.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex h-full min-h-20 flex-col items-start justify-center gap-3 rounded-xl sm:flex-row sm:items-center sm:justify-between sm:gap-4 md:flex-col md:items-start md:justify-center md:gap-3 xl:flex-row xl:items-center xl:justify-between xl:gap-4 border border-[#D8CEDD] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_16px_0_rgba(29,3,59,0.06)]">
              <span className="text-base font-semibold text-[#18141B]">{item.title}</span>
              <Badge label={item.badge} tone={item.tone} />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
