import React from "react";
import { SectionContainer, SectionHeader, DataTable, Reveal } from "./shared";
import { GEOGRAPHY_DATA } from "./iot-m2m-satellite-data";

export default function GeographySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={GEOGRAPHY_DATA.eyebrow}
          title={GEOGRAPHY_DATA.title}
          description={GEOGRAPHY_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <DataTable
          columns={GEOGRAPHY_DATA.columns}
          rows={GEOGRAPHY_DATA.rows}
          gridClassName={GEOGRAPHY_DATA.gridClassName}
          className="mt-12 bg-white"
        />
      </Reveal>
    </SectionContainer>
  );
}
