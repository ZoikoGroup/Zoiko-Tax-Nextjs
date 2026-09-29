import React from "react";
import EyebrowCardSection from "./EyebrowCardSection";
import { IMAGES, REALITIES_DATA } from "./mvne-mvna-data";

export default function RealitiesSection() {
  return (
    <EyebrowCardSection
      data={REALITIES_DATA}
      className="bg-white"
      bgImage={IMAGES.complexity}
      gridClassName="lg:grid-cols-3"
    />
  );
}
