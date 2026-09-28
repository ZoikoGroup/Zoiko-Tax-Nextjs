import React from "react";
import CardGridSection from "./CardGridSection";
import { SHADOW_DATA, IMAGES } from "./mvno-data";

export default function ShadowSection() {
  return (
    <CardGridSection
      data={SHADOW_DATA}
      className="bg-white"
      bgImage={IMAGES.shadow}
      gridClassName="lg:grid-cols-3"
      tinted
    />
  );
}
