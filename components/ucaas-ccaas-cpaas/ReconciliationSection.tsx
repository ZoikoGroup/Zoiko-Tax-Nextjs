import React from "react";
import TextSection from "./TextSection";
import { IMAGES, RECONCILIATION_DATA } from "./ucaas-data";

export default function ReconciliationSection() {
  return (
    <TextSection data={RECONCILIATION_DATA} className="bg-white" bgImage={IMAGES.reconciliation} />
  );
}
