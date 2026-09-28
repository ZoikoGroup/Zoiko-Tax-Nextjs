import React from "react";
import CardGridSection from "./CardGridSection";
import { EVIDENCE_DATA } from "./ucaas-data";

export default function EvidenceSection() {
  return (
    <CardGridSection data={EVIDENCE_DATA} className="bg-[#1D033B]" gridClassName="lg:grid-cols-3" dark />
  );
}
