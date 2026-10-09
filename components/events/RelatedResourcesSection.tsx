"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { RELATED_RESOURCES_DATA as R, CLOSING_BAND_DATA as C } from "./events-data";
import { PrimaryButton, Reveal } from "./shared";

export default function RelatedResourcesSection() {
  return (
    <>
      <section className="w-full bg-white py-14 sm:py-18 md:py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">
          <Reveal>
            <div className="flex flex-col gap-4 mb-10">
              <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{R.title}</h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            {R.cards.map((card, i) => (
              <Reveal key={card.title} delay={0.02 * i}>
                <div className="relative h-full min-h-[250px] rounded-2xl border-[2.5px] border-white overflow-hidden p-6 flex flex-col gap-6 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.07)]">
                  <div className="absolute inset-0" aria-hidden="true">
                    <Image src="/events/resource-card-bg.png" alt="" fill className="object-cover opacity-[0.37]" />
                    <div className="absolute inset-0 bg-white/[0.27]" />
                  </div>
                  <div className="relative flex flex-col gap-6">
                    <span className="text-xs font-bold text-[#D65A2C]">{card.label}</span>
                    <h3 className="text-[22px] font-bold leading-[1.2] text-[#1D033B]">{card.title}</h3>
                    <p className="text-sm leading-[1.6] text-[#665F69]">{card.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.06}>
            <p className="text-sm leading-[1.6] text-[#665F69]">{R.footnote}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/events/closing-band-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(29,3,59,0.72)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-40 py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-[880px] flex flex-col items-center gap-5">
            <Reveal>
              <span className="text-xs font-bold text-[#F4A261]">{C.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.04}>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{C.title}</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{C.description}</p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <PrimaryButton>
                  <span className="inline-flex items-center gap-2">
                    {C.actions[0].label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </PrimaryButton>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#EBE5EF] px-[22px] h-[48px] text-sm font-semibold text-[#665F69]">
                  {C.actions[1].label}
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
