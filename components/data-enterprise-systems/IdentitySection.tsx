"use client";

import React from "react";
import Image from "next/image";
import { BG, IDENTITY_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, FlowRow, Notice, Reveal, SectionHeader } from "./shared";

export default function IdentitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2A1840]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.identity} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 md:py-24 flex flex-col gap-10">
        <Reveal>
          <SectionHeader dark eyebrow={IDENTITY_DATA.eyebrow} title={IDENTITY_DATA.title} description={IDENTITY_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <figure className="w-full rounded-3xl border border-[#5C3979] p-5 sm:p-7 flex flex-col gap-5">
            <FlowRow steps={IDENTITY_DATA.flow} variant="dark" />
            <figcaption className="text-sm leading-5 text-[#D9D0DF]">{IDENTITY_DATA.diagram}</figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {IDENTITY_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.03 * idx} className="h-full">
              <div className="h-full rounded-2xl border border-[#5C3979] bg-[#301153]/95 p-5 sm:p-6 flex flex-col gap-3">
                <span className="text-xs font-bold uppercase text-[#F4A261]">{card.tag}</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">{card.title}</h3>
                <p className="text-base leading-6 text-[#D9D0DF]">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <Notice dark title={IDENTITY_DATA.notice.title} description={IDENTITY_DATA.notice.description} />
        </Reveal>

        <ArrowLink dark href={IDENTITY_DATA.link.href} className="self-start">
          {IDENTITY_DATA.link.label}
        </ArrowLink>
      </div>
    </section>
  );
}
