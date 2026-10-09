"use client";

import React from "react";
import Image from "next/image";
import { CalendarClock, CalendarX, LockKeyhole, Radio } from "lucide-react";
import { LIVE_EVENTS_DATA as L, EVENT_CHANGES_DATA as C } from "./events-data";
import { SectionContainer, Reveal } from "./shared";

export default function LiveRecordingsSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/events/live-events-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(18,3,39,0.78)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[88px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <Reveal className="flex-1 max-w-[560px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-bold uppercase text-[#F4A261]">{L.eyebrow}</span>
                  <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{L.title}</h2>
                </div>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{L.description}</p>
              </div>
            </Reveal>

            <Reveal className="w-full lg:flex-1" delay={0.04}>
              <div className="rounded-2xl bg-[#301153] p-7 sm:p-8 flex flex-col gap-5">
                <Radio className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
                <span className="inline-flex w-fit items-center rounded-full bg-white/[0.08] border border-white/[0.19] px-3 py-1.5 text-xs font-mono text-[#D9D0DF]">
                  {L.badge}
                </span>
                <h3 className="text-2xl sm:text-[26px] font-bold text-white">{L.cardTitle}</h3>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{L.cardDescription}</p>
                <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#EBE5EF] px-[22px] h-[48px] text-sm font-semibold text-[#665F69]">
                  {L.joinAction}
                  <LockKeyhole className="h-[14px] w-[14px]" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <SectionContainer className="bg-white relative">
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/events/pattern-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />

        <div className="relative">
          <Reveal>
            <div className="flex flex-col gap-4 mb-10">
              <span className="text-sm font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{C.title}</h2>
              <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{C.description}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {C.cards.map((card, i) => {
              const Icon = i === 0 ? CalendarX : CalendarClock;
              return (
                <Reveal key={card.title} delay={0.03 * i}>
                  <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                    <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                    <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.25] text-[#18141B]">{card.title}</h3>
                    <p className="text-base leading-[1.6] text-[#665F69]">{card.description}</p>
                    <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#F3EEF7] px-3 py-1.5 text-xs font-mono text-[#301153]">
                      {card.badge}
                    </span>
                    <p className="text-sm leading-[1.6] text-[#665F69]">{card.footnote}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.06}>
            <p className="text-sm leading-[1.6] text-[#665F69]">{C.footnote}</p>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
