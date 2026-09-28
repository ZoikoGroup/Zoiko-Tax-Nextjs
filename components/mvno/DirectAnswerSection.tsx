import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { DIRECT_ANSWER_DATA } from "./mvno-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={DIRECT_ANSWER_DATA.eyebrow}
          title={DIRECT_ANSWER_DATA.title}
          description={DIRECT_ANSWER_DATA.description}
        />
      </Reveal>
    </SectionContainer>
  );
}
