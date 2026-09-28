import React from "react";
import CardGridSection from "./CardGridSection";
import { IMAGES, INTEGRATIONS_DATA } from "./ucaas-data";

export default function IntegrationsSection() {
  return (
    <CardGridSection
      data={INTEGRATIONS_DATA}
      className="bg-white"
      bgImage={IMAGES.integrations}
      gridClassName="lg:grid-cols-3"
    />
  );
}
