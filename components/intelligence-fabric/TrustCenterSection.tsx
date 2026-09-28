"use client";

import React from "react";
import Image from "next/image";
import { TRUST_CENTER_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function TrustCenterSection() {
  return (
    <div id="trust-center" className="relative w-full overflow-hidden bg-[#1D033B]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src="/intelligence-fabric/trust-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <SectionHeader eyebrow={TRUST_CENTER_DATA.eyebrow} title={TRUST_CENTER_DATA.title} dark />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TRUST_CENTER_DATA.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.06 * i}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.07] p-6 space-y-3">
                <h3 className="text-lg font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-[1.5] text-[#F7D7CB]">{card.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.16}>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href="#">{TRUST_CENTER_DATA.actions[0]}</PrimaryButton>
            <SecondaryButton href="#">{TRUST_CENTER_DATA.actions[1]}</SecondaryButton>
          </div>
        </Reveal>
      </SectionContainer>
    </div>
  );
}
