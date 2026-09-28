import React from "react";
import CardGridSection from "./CardGridSection";
import { ARCHITECTURE_DATA, IMAGES } from "./mvno-data";

export default function ArchitectureSection() {
  return (
    <CardGridSection
      data={ARCHITECTURE_DATA}
      className="bg-white"
      bgImage={IMAGES.integrations}
      gridClassName="sm:grid-cols-2 lg:grid-cols-4"
      cardClassName="min-h-[102px]"
    />
  );
}
