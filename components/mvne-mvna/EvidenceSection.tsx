import React from "react";
import { SectionContainer, SectionHeader, GlassCardGrid, Reveal } from "./shared";
import { EVIDENCE_DATA, IMAGES } from "./mvne-mvna-data";

export default function EvidenceSection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.evidence}>
      <Reveal>
        <SectionHeader
          eyebrow={EVIDENCE_DATA.eyebrow}
          title={EVIDENCE_DATA.title}
          description={EVIDENCE_DATA.description}
          dark
        />
      </Reveal>
      <GlassCardGrid cards={EVIDENCE_DATA.cards} className="mt-8" />
    </SectionContainer>
  );
}
