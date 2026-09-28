import React from "react";
import CardGridSection from "./CardGridSection";
import { RESPONSIBILITY_DATA } from "./ucaas-data";

export default function ResponsibilitySection() {
  return (
    <CardGridSection data={RESPONSIBILITY_DATA} className="bg-[#1D033B]" gridClassName="lg:grid-cols-3" dark />
  );
}
