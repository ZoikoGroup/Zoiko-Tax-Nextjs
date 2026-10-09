"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ShieldAlert, ArrowUpRight } from "lucide-react";
import { DEDICATED_DESTINATIONS_DATA } from "./contact-data";
import { Reveal } from "./shared";

export default function DedicatedDestinationsSection() {
  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#18052E]">
      {/* Background workspace desk image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={DEDICATED_DESTINATIONS_DATA.backgroundImage}
          alt="ZoikoTax Dedicated Routes Desk"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1C0636]/95 via-[#250945]/90 to-[#18042F]/95 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              {DEDICATED_DESTINATIONS_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.1] tracking-tight text-white">
              {DEDICATED_DESTINATIONS_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-3xl leading-relaxed mt-1">
              {DEDICATED_DESTINATIONS_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* 2 Dark Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
          {DEDICATED_DESTINATIONS_DATA.cards.map((card, idx) => {
            const Icon = idx === 0 ? ShieldCheck : ShieldAlert;
            return (
              <Reveal key={card.id} delay={0.08 * (idx + 1)}>
                <div className="h-full bg-[#290E45]/85 backdrop-blur-sm border border-[#52297D] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#3E1A66] border border-[#633596] flex items-center justify-center text-[#F4A261]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>

                    <h3 className="text-xl sm:text-[22px] font-bold text-white mt-4">
                      {card.title}
                    </h3>

                    <div className="mt-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#3E1B64] text-[#EADBEE] border border-[#5A2C8F]">
                        {card.badge}
                      </span>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm text-[#D8CEDD] leading-relaxed">
                      {card.text1}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-[#BBAEC8] leading-relaxed">
                      {card.text2}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#461F73]">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#F4A261] hover:text-[#FFB67A] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                    <span className="text-[11px] text-[#A89CB5] font-mono block mt-0.5">
                      {card.path}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
