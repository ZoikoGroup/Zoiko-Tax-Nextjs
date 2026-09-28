import React from "react";
import CardGridSection from "./CardGridSection";
import { COMPLIANCE_DATA, IMAGES } from "./mvno-data";

export default function ComplianceSection() {
  return (
    <CardGridSection
      data={COMPLIANCE_DATA}
      className="bg-[#1D033B]"
      bgImage={IMAGES.compliance}
      gridClassName="lg:grid-cols-3"
      dark
    />
  );
}
