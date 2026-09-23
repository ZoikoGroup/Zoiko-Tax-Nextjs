"use client";

import React from "react";
import { SectionContainer, SectionHeader, SecondaryButton, Reveal } from "./shared";
import { trustData } from "./exemptions-data";
import { Lock, Shield, Database } from "lucide-react";

export default function TrustSection() {
  const icons = [Lock, Shield, Database];

  return (
    <SectionContainer id="trust" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow={trustData.eyebrow}
          title={trustData.title}
          description={trustData.description}
        />
      </Reveal>

      {/* 3 Trust Cards */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trustData.cards.map((card, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <Reveal key={card.title} delay={idx * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-5 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#BF6735]/10 text-[#BF6735]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3.5 sm:mt-4 text-base sm:text-lg font-bold text-[#18141B]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-[#535055]">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* CTA Button */}
      <Reveal delay={0.25}>
        <div className="mt-8 sm:mt-12 flex justify-center">
          <SecondaryButton href={trustData.cta.href} className="w-full sm:w-auto">
            {trustData.cta.label}
          </SecondaryButton>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
