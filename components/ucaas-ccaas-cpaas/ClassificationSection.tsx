import React from "react";
import TextSection from "./TextSection";
import { CLASSIFICATION_DATA, IMAGES } from "./ucaas-data";

export default function ClassificationSection() {
  return (
    <TextSection data={CLASSIFICATION_DATA} className="bg-white" bgImage={IMAGES.classification} />
  );
}
