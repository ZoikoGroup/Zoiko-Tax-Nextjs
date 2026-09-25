"use client";

import React from "react";
import Image from "next/image";
import { TRUST_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";

export default function TrustSection() {
  return (
    <SectionContainer className="bg-[#1D033B] border-b border-white/10 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-25"
        aria-hidden="true"
      >
        <Image
          src="/reconciliation/trust-bg.png"
          alt="Enterprise security infrastructure background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow={TRUST_DATA.eyebrow}
            title={TRUST_DATA.title}
            description={TRUST_DATA.description}
            dark
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mt-10 sm:mt-12">
          {TRUST_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.04 * (idx + 1)}>
              <div className="h-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-6 sm:p-7 shadow-sm hover:border-[#F4A261]/40 transition-all duration-200">
                <span className="text-xs font-bold text-[#F4A261] uppercase tracking-wider block">
                  Control 0{idx + 1}
                </span>
                <h3 className="text-lg sm:text-[19px] font-bold text-white mt-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#D9D0DF] mt-2.5 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 flex justify-start">
          <SecondaryButton href="/trust" dark>
            {TRUST_DATA.cta}
          </SecondaryButton>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
