import React from "react";
import FlowCardSection from "./FlowCardSection";
import { DETERMINATION_DATA, IMAGES } from "./broadband-data";

export default function DeterminationSection() {
  return (
    <FlowCardSection
      data={DETERMINATION_DATA}
      text={DETERMINATION_DATA.flow}
      badge={DETERMINATION_DATA.badge}
      bgImage={IMAGES.determination}
      textClassName="text-sm sm:text-base"
    />
  );
}
