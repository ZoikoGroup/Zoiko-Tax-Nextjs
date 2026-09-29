import React from "react";
import CardGridSection from "./CardGridSection";
import { COMPLEXITY_DATA, IMAGES } from "./mvno-data";

export default function ComplexitySection() {
  return (
    <CardGridSection
      data={COMPLEXITY_DATA}
      className="bg-white"
      bgImage={IMAGES.complexity}
      gridClassName="lg:grid-cols-3"
    />
  );
}
