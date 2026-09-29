import React from "react";
import TextSection from "./TextSection";
import { DIRECT_ANSWER_DATA } from "./ucaas-data";

export default function DirectAnswerSection() {
  return (
    <TextSection data={DIRECT_ANSWER_DATA} className="bg-[#F8F3FE]" />
  );
}
