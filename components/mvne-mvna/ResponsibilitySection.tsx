import React from "react";
import EyebrowCardSection from "./EyebrowCardSection";
import { RESPONSIBILITY_DATA } from "./mvne-mvna-data";

export default function ResponsibilitySection() {
  return (
    <EyebrowCardSection data={RESPONSIBILITY_DATA} className="bg-[#F8F3FE]" gridClassName="md:grid-cols-2" />
  );
}
