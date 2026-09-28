import React from "react";
import CardGridSection from "./CardGridSection";
import { EXEMPTIONS_DATA, IMAGES } from "./broadband-data";

export default function ExemptionsSection() {
  return (
    <CardGridSection
      data={EXEMPTIONS_DATA}
      className="bg-white"
      bgImage={IMAGES.exemptions}
      gridClassName="md:grid-cols-2"
      compact
    />
  );
}
