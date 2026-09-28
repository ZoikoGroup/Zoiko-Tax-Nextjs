import React from "react";
import CardGridSection from "./CardGridSection";
import { CHALLENGES_DATA, IMAGES } from "./ucaas-data";

export default function ChallengesSection() {
  return (
    <CardGridSection
      data={CHALLENGES_DATA}
      className="bg-white"
      bgImage={IMAGES.complexity}
      gridClassName="sm:grid-cols-2 lg:grid-cols-4"
    />
  );
}
