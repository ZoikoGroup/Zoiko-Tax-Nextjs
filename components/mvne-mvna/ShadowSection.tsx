import React from "react";
import EyebrowCardSection from "./EyebrowCardSection";
import { IMAGES, SHADOW_DATA } from "./mvne-mvna-data";

export default function ShadowSection() {
  return (
    <EyebrowCardSection
      data={SHADOW_DATA}
      className="bg-white"
      bgImage={IMAGES.shadow}
      gridClassName="md:grid-cols-2"
    />
  );
}
