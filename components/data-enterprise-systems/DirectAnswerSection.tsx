"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./data-enterprise-systems-data";
import { Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="w-full bg-[#FAF5FF]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 md:py-24 flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-16">
        <Reveal className="lg:w-96 shrink-0">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#B4561E]">{DIRECT_ANSWER_DATA.eyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#18141B]">
              {DIRECT_ANSWER_DATA.title}
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="flex-1">
          <div className="flex flex-col gap-5">
            <p className="text-lg sm:text-xl leading-8 text-[#18141B]">{DIRECT_ANSWER_DATA.lead}</p>
            <p className="text-base leading-7 text-[#665F69]">{DIRECT_ANSWER_DATA.description}</p>
            <p className="text-sm leading-6 text-[#665F69]">{DIRECT_ANSWER_DATA.diagram}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
