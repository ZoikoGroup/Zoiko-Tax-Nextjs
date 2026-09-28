import React from "react";
import CardGridSection from "./CardGridSection";
import { SHADOW_DATA } from "./broadband-data";

export default function ShadowSection() {
  return <CardGridSection data={SHADOW_DATA} className="bg-[#F8F3FE]" gridClassName="md:grid-cols-3" />;
}
