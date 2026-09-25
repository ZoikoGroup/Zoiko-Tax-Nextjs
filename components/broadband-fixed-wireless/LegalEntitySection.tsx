import React from "react";
import CardGridSection from "./CardGridSection";
import { LEGAL_ENTITY_DATA } from "./broadband-data";

export default function LegalEntitySection() {
  return <CardGridSection data={LEGAL_ENTITY_DATA} className="bg-[#F8F3FE]" gridClassName="md:grid-cols-3" />;
}
