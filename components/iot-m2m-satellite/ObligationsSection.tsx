import React from "react";
import { SectionContainer, SectionHeader, DataTable, Reveal } from "./shared";
import { OBLIGATIONS_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function ObligationsSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.obligations}>
      <Reveal>
        <SectionHeader
          eyebrow={OBLIGATIONS_DATA.eyebrow}
          title={OBLIGATIONS_DATA.title}
          description={OBLIGATIONS_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <DataTable
          columns={OBLIGATIONS_DATA.columns}
          rows={OBLIGATIONS_DATA.rows}
          gridClassName={OBLIGATIONS_DATA.gridClassName}
          thirdColumnClassName="text-sm font-medium text-[#18141B]"
          className="mt-12 bg-white"
        />
      </Reveal>
    </SectionContainer>
  );
}
