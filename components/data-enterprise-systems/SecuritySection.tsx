"use client";

import React from "react";
import Image from "next/image";
import { BG, SECURITY_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, IconTile, Notice, Reveal, SectionHeader } from "./shared";

export default function SecuritySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2A1840]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.security} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 md:py-24 flex flex-col gap-10">
        <Reveal>
          <SectionHeader dark eyebrow={SECURITY_DATA.eyebrow} title={SECURITY_DATA.title} description={SECURITY_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.03 * idx} className="h-full">
              <div className="h-full rounded-2xl border border-[#5C3979] bg-[#301153]/95 p-5 sm:p-6 flex flex-col gap-4">
                <IconTile icon={card.icon} dark />
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-white">{card.title}</h3>
                <p className="text-base leading-6 text-[#D9D0DF]">{card.description}</p>
                {card.link && (
                  <ArrowLink dark href={card.link.href}>
                    {card.link.label}
                  </ArrowLink>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <Notice dark title={SECURITY_DATA.notice.title} description={SECURITY_DATA.notice.description} />
        </Reveal>

        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {SECURITY_DATA.links.map((l) => (
            <ArrowLink key={l.label} dark href={l.href}>
              {l.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </section>
  );
}
