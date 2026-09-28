import React from "react";
import { SectionContainer, SectionHeader, DataTable, Reveal } from "./shared";
import { ONTOLOGY_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function OntologySection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.ontology}>
      <Reveal>
        <SectionHeader
          eyebrow={ONTOLOGY_DATA.eyebrow}
          title={ONTOLOGY_DATA.title}
          description={ONTOLOGY_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <DataTable
          columns={ONTOLOGY_DATA.columns}
          rows={ONTOLOGY_DATA.rows}
          gridClassName={ONTOLOGY_DATA.gridClassName}
          className="mt-12 bg-white"
        />
      </Reveal>
    </SectionContainer>
  );
}
