"use client";

import React from "react";
import { DIRECT_ANSWER_DATA } from "./webhooks-events-data";
import { Reveal, ArrowLink, LAVENDER } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className={`w-full ${LAVENDER}`}>
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] pt-12 pb-14 sm:pt-16 sm:pb-20 flex flex-col gap-5">
        <Reveal>
          <span className="text-xs sm:text-sm font-bold text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B]">
            {DIRECT_ANSWER_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="text-base sm:text-lg lg:text-xl leading-8 text-[#665F69]">{DIRECT_ANSWER_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.12}>
          <nav aria-label="On this page" className="flex flex-wrap gap-x-6">
            {DIRECT_ANSWER_DATA.links.map((l) => (
              <ArrowLink key={l.label} href={l.href}>
                {l.label}
              </ArrowLink>
            ))}
          </nav>
        </Reveal>
      </div>
    </section>
  );
}
