import React from "react";
import FlowCardSection from "./FlowCardSection";
import { EVIDENCE_DATA, IMAGES } from "./broadband-data";

export default function EvidenceSection() {
  return (
    <FlowCardSection
      data={EVIDENCE_DATA}
      text={EVIDENCE_DATA.reference}
      badge={EVIDENCE_DATA.badge}
      bgImage={IMAGES.evidence}
      textClassName="text-sm"
    />
  );
}
