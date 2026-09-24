"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA } from "./e-invoicing-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-l from-[#FFEEEC] via-[#FAF3FF] to-[#FAF3FF] border-b border-[#D8CEDD]/50 pt-10 sm:pt-14 pb-14 sm:pb-20">
      {/* Background server room photo positioned on the right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[60%] pointer-events-none select-none opacity-50 sm:opacity-60 lg:opacity-75 [mask-image:linear-gradient(to_right,transparent_0%,black_35%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_35%)]"
        aria-hidden="true"
      >
        <Image
          src="/e-invoicing-ctc/hero-bg.png"
          alt="Telecom server room and engineer"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        {/* Main Hero Copy */}
        <div className="max-w-[840px] space-y-5 sm:space-y-6">
          <Reveal>
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
              {HERO_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] xl:text-[60px] font-bold leading-[1.04] tracking-tight text-[#18141B]">
              Control telecom e-invoicing through governed profiles and adapters.
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69] max-w-[780px]">
              {HERO_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-sm sm:text-[15px] font-normal leading-[1.55] text-[#18141B] max-w-[780px]">
              {HERO_DATA.subDescription}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <PrimaryButton href="/contact">Book a Demo</PrimaryButton>
              <SecondaryButton href="#coverage">View Current Coverage</SecondaryButton>
              <SecondaryButton href="#developers">Explore Developer Integrations</SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-xs sm:text-[13px] font-normal text-[#18141B]/80 pt-1">
              {HERO_DATA.disclaimer}
            </p>
          </Reveal>
        </div>

        {/* Governed Data Flow & Authority Boundary - Single Horizontal Row */}
        <Reveal delay={0.24} className="mt-10 sm:mt-14">
          <div className="rounded-2xl border border-[#D8CEDD] bg-white/75 backdrop-blur-md p-5 sm:p-6 shadow-sm">
            <span className="text-[12px] font-bold uppercase tracking-wider text-[#D65A2C] block mb-3.5">
              GOVERNED DATA FLOW & AUTHORITY BOUNDARY
            </span>

            {/* Always single row across desktop with overflow protection */}
            <div className="flex flex-nowrap items-center gap-2 sm:gap-2.5 w-full overflow-x-auto pb-1 scrollbar-thin">
              {/* Step 1: Invoice Facts */}
              <div className="flex-1 min-w-[150px] sm:min-w-[160px] rounded-lg border border-[#D8CEDD] bg-white p-3 shadow-2xs">
                <div className="text-sm font-bold text-[#18141B] whitespace-nowrap">
                  Invoice Facts
                </div>
                <div className="text-[11px] text-[#665F69] mt-0.5 whitespace-nowrap">
                  Commercial payload
                </div>
              </div>

              {/* Arrow */}
              <span className="text-[#D65A2C] font-semibold text-sm sm:text-base shrink-0 select-none px-0.5">
                →
              </span>

              {/* Step 2: Fiscal Context */}
              <div className="flex-1 min-w-[150px] sm:min-w-[160px] rounded-lg border border-[#D8CEDD] bg-white p-3 shadow-2xs">
                <div className="text-sm font-bold text-[#18141B] whitespace-nowrap">
                  Fiscal Context
                </div>
                <div className="text-[11px] text-[#665F69] mt-0.5 whitespace-nowrap">
                  Situs & validation
                </div>
              </div>

              {/* Arrow */}
              <span className="text-[#D65A2C] font-semibold text-sm sm:text-base shrink-0 select-none px-0.5">
                →
              </span>

              {/* Step 3: Governed Profile */}
              <div className="flex-1 min-w-[150px] sm:min-w-[160px] rounded-lg border border-[#D8CEDD] bg-white p-3 shadow-2xs">
                <div className="text-sm font-bold text-[#18141B] whitespace-nowrap">
                  Governed Profile
                </div>
                <div className="text-[11px] text-[#665F69] mt-0.5 whitespace-nowrap">
                  Tax schema rule
                </div>
              </div>

              {/* Arrow */}
              <span className="text-[#D65A2C] font-semibold text-sm sm:text-base shrink-0 select-none px-0.5">
                →
              </span>

              {/* Step 4: Handoff Adapter */}
              <div className="flex-1 min-w-[150px] sm:min-w-[160px] rounded-lg border border-[#D8CEDD] bg-white p-3 shadow-2xs">
                <div className="text-sm font-bold text-[#18141B] whitespace-nowrap">
                  Handoff Adapter
                </div>
                <div className="text-[11px] text-[#665F69] mt-0.5 whitespace-nowrap">
                  CTC delivery payload
                </div>
              </div>

              {/* Arrow */}
              <span className="text-[#D65A2C] font-semibold text-sm sm:text-base shrink-0 select-none px-0.5">
                →
              </span>

              {/* Step 5: External Network (Dashed border + purple bg) */}
              <div className="flex-1 min-w-[160px] sm:min-w-[170px] rounded-lg border border-dashed border-[#D65A2C] bg-[#FAF3FF] p-3 shadow-2xs">
                <div className="text-sm font-bold text-[#D65A2C] whitespace-nowrap">
                  External Network
                </div>
                <div className="text-[11px] text-[#665F69] mt-0.5 whitespace-nowrap">
                  Outside ZoikoTax control
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
