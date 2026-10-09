"use client";

import React from "react";
import Image from "next/image";
import { ShieldAlert, Clock } from "lucide-react";
import { PRIVACY_CONSCIOUS_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function PrivacyConsciousSection() {
  const { eyebrow, title, description, backgroundImage, cards } =
    PRIVACY_CONSCIOUS_DATA;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#100122] py-16 sm:py-20 lg:py-24">
      {/* Background image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt="Privacy-conscious by design"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay preserving photo visibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#130324]/92 via-[#18032e]/85 to-[#100122]/94 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-tight text-white">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-4xl leading-relaxed mt-1">
              {description}
            </p>
          </Reveal>
        </div>

        {/* 2 Principle Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={0.1 * (idx + 1)}>
              <div className="bg-[#1C0638]/90 border border-white/15 rounded-2xl p-6 sm:p-7 backdrop-blur-xs shadow-lg flex flex-col justify-between h-full">
                <div>
                  <div className="text-[#F4A261]">
                    {card.icon === "shield" ? (
                      <ShieldAlert className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-3">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#D8CEDD] leading-relaxed mt-2.5">
                    {card.description}
                  </p>
                </div>

                {/* Sub-specimen box */}
                <div className="bg-[#130224]/85 border border-white/10 rounded-xl p-4 mt-6">
                  <span className="text-[10px] font-bold text-[#F4A261] tracking-wider uppercase block">
                    {card.specimen.tag}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight mt-1">
                    {card.specimen.title}
                  </h4>
                  <p className="text-[11px] text-[#C4B7D4] leading-relaxed mt-1.5">
                    {card.specimen.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
