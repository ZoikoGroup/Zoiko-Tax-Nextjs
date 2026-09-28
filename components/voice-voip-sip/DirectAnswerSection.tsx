import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { DIRECT_ANSWER_DATA } from "./voice-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE] sm:py-20">
      <Reveal>
        <SectionHeader data={DIRECT_ANSWER_DATA} />
      </Reveal>
    </SectionContainer>
  );
}
