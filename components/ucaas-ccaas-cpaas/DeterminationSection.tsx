import React from "react";
import TextSection from "./TextSection";
import { DETERMINATION_DATA, IMAGES } from "./ucaas-data";

export default function DeterminationSection() {
  return (
    <TextSection data={DETERMINATION_DATA} className="bg-white" bgImage={IMAGES.determination} />
  );
}
