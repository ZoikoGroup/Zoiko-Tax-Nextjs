"use client";

import React from "react";
import Image from "next/image";
import { AUTHORITY_DATA, BG } from "./api-reference-data";
import { ICONS, Reveal, SectionHeader } from "./shared";

export default function AuthoritySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2A1840]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.authority} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 md:py-24 flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={AUTHORITY_DATA.eyebrow}
            title={AUTHORITY_DATA.title}
            description={AUTHORITY_DATA.description}
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {AUTHORITY_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.04 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#5C3979] bg-[#301153]/90 p-5 sm:p-6 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#F4A261]" strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="text-xl leading-7 text-white">{card.title}</h3>
                  <p className="text-base leading-6 text-[#D9D0DF]">{card.description}</p>
                  <span className="mt-auto self-start rounded-lg bg-[#301153] px-3 py-1.5 text-xs font-semibold text-[#D9D0DF]">
                    {card.badge}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="w-full rounded-2xl bg-[#301153]/90 p-6 flex flex-col md:flex-row gap-4 md:gap-10">
            <p className="md:w-72 shrink-0 text-xl sm:text-2xl text-white">{AUTHORITY_DATA.replay.title}</p>
            <p className="flex-1 text-base leading-6 text-[#D9D0DF]">{AUTHORITY_DATA.replay.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
