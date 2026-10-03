"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./api-changelog-data";
import { Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="w-full bg-[#FAF3FF]">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-8 sm:py-10 lg:py-12">
        <Reveal>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
            <div className="lg:w-[340px] shrink-0 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
              <h2 className="text-2xl sm:text-[28px] font-bold leading-[1.15] text-[#18141B]">{DIRECT_ANSWER_DATA.title}</h2>
            </div>
            <p className="flex-1 text-base leading-[1.6] text-[#665F69]">{DIRECT_ANSWER_DATA.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
