import React from "react";
import { Reveal } from "./shared";
import { DIRECT_ANSWER_DATA } from "./iot-m2m-satellite-data";

export default function DirectAnswerSection() {
  return (
    <section className="w-full border-y border-[#D8CEDD] bg-[#FAF3FF]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-4 py-16 sm:px-8 lg:p-20">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="max-w-[900px] text-3xl font-normal leading-10 tracking-tight text-[#18141B] sm:text-4xl">
            {DIRECT_ANSWER_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base leading-6 text-[#665F69]">{DIRECT_ANSWER_DATA.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
