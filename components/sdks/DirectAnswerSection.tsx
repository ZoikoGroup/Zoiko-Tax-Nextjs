"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./sdks-data";
import { Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="w-full bg-[#FAF3FF]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 flex flex-col lg:flex-row gap-6 lg:gap-16">
        <Reveal className="lg:w-80 shrink-0">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-[1.12] text-[#18141B]">{DIRECT_ANSWER_DATA.title}</h2>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="flex-1">
          <p className="text-lg sm:text-xl leading-8 text-[#18141B]">{DIRECT_ANSWER_DATA.description}</p>
        </Reveal>
      </div>
    </section>
  );
}
