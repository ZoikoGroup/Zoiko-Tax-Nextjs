import React from "react";
import CardGridSection from "./CardGridSection";
import { OUTCOMES_DATA } from "./mvno-data";

export default function OutcomesSection() {
  return (
    <CardGridSection
      data={OUTCOMES_DATA}
      className="bg-[#F8F3FE]"
      gridClassName="sm:grid-cols-2 lg:grid-cols-4"
      cardClassName="min-h-[126px]"
    />
  );
}
