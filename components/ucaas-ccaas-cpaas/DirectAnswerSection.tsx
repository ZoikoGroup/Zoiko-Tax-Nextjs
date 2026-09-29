import React from "react";
import { SectionContainer, MonoPill, Reveal } from "./shared";
import { DIRECT_ANSWER_DATA } from "./ucaas-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] lg:py-24">
      <div className="flex max-w-[980px] flex-col gap-9">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]">
              {DIRECT_ANSWER_DATA.title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-10 rounded-3xl bg-white p-6 shadow-[0_6px_18px_0_rgba(0,0,0,0.08)] sm:flex-row sm:items-start sm:gap-10 sm:p-8 lg:items-center">
            <p className="flex-1 text-lg leading-7 text-[#18141B] lg:text-xl lg:leading-8">
              {DIRECT_ANSWER_DATA.description}
            </p>
            <div className="flex w-full shrink-0 flex-col items-start gap-2.5 sm:w-80">
              {DIRECT_ANSWER_DATA.pills.map((pill) => (
                <MonoPill key={pill.label} label={pill.label} highlight={pill.highlight} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
