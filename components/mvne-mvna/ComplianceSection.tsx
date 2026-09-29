import React from "react";
import EyebrowCardSection from "./EyebrowCardSection";
import { COMPLIANCE_DATA, IMAGES } from "./mvne-mvna-data";

export default function ComplianceSection() {
  return (
    <EyebrowCardSection
      data={COMPLIANCE_DATA}
      className="bg-white"
      bgImage={IMAGES.compliance}
      gridClassName="lg:grid-cols-3"
    />
  );
}
