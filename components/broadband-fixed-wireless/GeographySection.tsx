import React from "react";
import { SectionContainer, SectionHeader, Badge, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { GEOGRAPHY_DATA, IMAGES } from "./broadband-data";

export default function GeographySection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.geography}>
      <Reveal>
        <SectionHeader
          eyebrow={GEOGRAPHY_DATA.eyebrow}
          title={GEOGRAPHY_DATA.title}
          description={GEOGRAPHY_DATA.description}
        />
      </Reveal>
      <StaggerGroup className="mt-8 flex flex-col gap-3">
        {GEOGRAPHY_DATA.rows.map((row) => (
          <StaggerItem key={row.title}>
            <div className="grid grid-cols-1 gap-3 rounded-xl border border-[#D8CEDD] bg-white p-4 transition-colors hover:bg-[#FAF3FF]/60 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_auto] md:items-center md:gap-6">
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-[#18141B]">{row.title}</span>
                <span className="font-mono text-xs text-[#665F69]">{row.coordinates}</span>
              </div>
              <span className="text-sm text-[#D65A2C] md:text-center">{row.authority}</span>
              <Badge label={row.badge} tone="success" className="justify-self-start md:justify-self-end" />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}
