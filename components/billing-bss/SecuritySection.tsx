"use client";

import React from "react";
import Image from "next/image";
import { KeyRound, Shield, MessageSquare } from "lucide-react";
import { SECURITY_DATA } from "./billing-bss-data";
import { SectionContainer, DocRef, AuthorityNotice, Reveal } from "./shared";

const ICONS = { key: KeyRound, shield: Shield, message: MessageSquare };

export default function SecuritySection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0 opacity-[0.24] pointer-events-none select-none" aria-hidden="true">
        <Image src="/billing-bss/security-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-xs sm:text-[13px] font-bold uppercase text-[#F4A261]">{SECURITY_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-white">
              {SECURITY_DATA.title}
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] leading-[1.55] text-[#D9D0DF]">
              {SECURITY_DATA.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {SECURITY_DATA.cards.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.05 * i}>
                <div className="h-full rounded-2xl border border-[#553568] bg-[#241039] p-6 flex flex-col gap-3.5">
                  <Icon className="h-[26px] w-[26px] text-[#F4A261]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] font-bold leading-[1.2] text-white">{card.title}</h3>
                  <p className="text-[15px] sm:text-base leading-[1.55] text-[#D9D0DF]">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SECURITY_DATA.references.map((ref) => (
            <DocRef key={ref.label} label={ref.label} path={ref.path} dark />
          ))}
        </div>

        <Reveal delay={0.14} className="w-full mt-8">
          <AuthorityNotice title={SECURITY_DATA.notice.title} description={SECURITY_DATA.notice.description} dark />
        </Reveal>
      </SectionContainer>
    </div>
  );
}
