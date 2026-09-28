import React from "react";
import CardGridSection from "./CardGridSection";
import { OBLIGATIONS_DATA } from "./ucaas-data";

export default function ObligationsSection() {
  return (
    <CardGridSection data={OBLIGATIONS_DATA} className="bg-[#F8F3FE]" gridClassName="lg:grid-cols-3" />
  );
}
