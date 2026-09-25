import React from "react";
import { SectionContainer, SectionHeader, DataTable, Reveal } from "./shared";
import { LEGAL_ENTITY_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function LegalEntitySection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.legalEntity}>
      <Reveal>
        <SectionHeader
          eyebrow={LEGAL_ENTITY_DATA.eyebrow}
          title={LEGAL_ENTITY_DATA.title}
          description={LEGAL_ENTITY_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <DataTable
          columns={LEGAL_ENTITY_DATA.columns}
          rows={LEGAL_ENTITY_DATA.rows}
          gridClassName={LEGAL_ENTITY_DATA.gridClassName}
          thirdColumnClassName="text-sm text-[#18141B]"
          className="mt-12 bg-white"
        />
      </Reveal>
    </SectionContainer>
  );
}
