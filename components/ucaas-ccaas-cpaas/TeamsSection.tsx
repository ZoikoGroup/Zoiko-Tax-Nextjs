import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { TEAMS_DATA } from "./ucaas-data";

export default function TeamsSection() {
  return (
    <SectionContainer className="bg-[#1D033B]">
      <Reveal>
        <SectionHeader eyebrow={TEAMS_DATA.eyebrow} title={TEAMS_DATA.title} dark />
      </Reveal>
      <StaggerGroup className="mt-8 flex flex-col gap-3">
        {TEAMS_DATA.cards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-[#2E1453] p-5 transition-colors hover:border-[#D65A2C]/40 sm:flex-row sm:items-center sm:gap-6">
              <h3 className="shrink-0 text-lg font-bold text-white sm:w-56">{card.title}</h3>
              <p className="text-sm text-[#D8CEDD]">{card.description}</p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
