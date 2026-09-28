import React from "react";
import CardGridSection from "./CardGridSection";
import { EVIDENCE_DATA } from "./mvno-data";

export default function EvidenceSection() {
  return (
    <CardGridSection
      data={EVIDENCE_DATA}
      className="bg-[#F8F3FE]"
      gridClassName="lg:grid-cols-3"
    />
  );
}
