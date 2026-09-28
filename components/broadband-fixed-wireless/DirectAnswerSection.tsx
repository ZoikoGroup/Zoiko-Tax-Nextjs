import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { DIRECT_ANSWER_DATA } from "./broadband-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <div className="flex flex-col gap-6">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
          <h2 className="text-[28px] font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl">
            {DIRECT_ANSWER_DATA.title}
          </h2>
          <p className="text-base leading-7 text-[#665F69] sm:text-lg">{DIRECT_ANSWER_DATA.description}</p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
