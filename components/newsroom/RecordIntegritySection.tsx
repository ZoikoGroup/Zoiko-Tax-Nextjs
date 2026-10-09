"use client";

import React from "react";
import Image from "next/image";
import { RECORD_INTEGRITY_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function RecordIntegritySection() {
  const { specimens, cards, note } = RECORD_INTEGRITY_DATA;

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background subtle diamond lattice pattern */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40" aria-hidden="true">
        <Image
          src="/wholesale-carriers-and-aggregators/white-bg.png"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {RECORD_INTEGRITY_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {RECORD_INTEGRITY_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {RECORD_INTEGRITY_DATA.description}
            </p>
          </Reveal>

          {/* Specimens badges row */}
          <Reveal delay={0.12}>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              {specimens.map((sp, i) => (
                <span
                  key={i}
                  className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-[#F3ECF7] text-[#4A154B] border border-[#E5DAEB]"
                >
                  {sp}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((cd, idx) => (
            <Reveal key={idx} delay={0.05 * (idx + 1)}>
              <div className="h-full rounded-2xl border border-[#E9E2EE] bg-white/95 backdrop-blur-sm p-6 sm:p-7 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between hover:shadow-[0_6px_20px_rgba(40,10,60,0.05)] transition-all duration-200">
                <h3 className="text-base font-bold text-[#18141B]">
                  {cd.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605C66] leading-relaxed mt-2.5">
                  {cd.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Note */}
        <Reveal delay={0.25}>
          <p className="mt-8 text-[11px] text-[#7A7582] text-center max-w-4xl mx-auto leading-relaxed">
            {note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
