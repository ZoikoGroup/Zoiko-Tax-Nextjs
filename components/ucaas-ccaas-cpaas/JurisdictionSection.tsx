import React from "react";
import TextSection from "./TextSection";
import { JURISDICTION_DATA } from "./ucaas-data";

export default function JurisdictionSection() {
  return (
    <TextSection data={JURISDICTION_DATA} className="bg-[#F8F3FE]" />
  );
}
