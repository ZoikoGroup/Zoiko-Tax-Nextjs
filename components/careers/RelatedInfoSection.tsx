"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RELATED_INFO_DATA as R } from "./careers-data";
import { SectionContainer, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function RelatedInfoSection() {
  return (
    <SectionContainer className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{R.title}</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {R.cards.map((card, i) => (
          <Reveal key={card.title} delay={0.03 * i}>
            <div className="relative h-full rounded-2xl border border-[#D8CEDD] overflow-hidden p-8 flex flex-col gap-6">
              {card.hasPhoto && (
                <div className="absolute inset-0 border-[2.5px] border-white rounded-2xl" aria-hidden="true">
                  <Image src="/careers/policy-card-bg.png" alt="" fill className="object-cover" />
                  <div className="absolute inset-0 bg-white/55" />
                </div>
              )}
              <div className="relative flex flex-col gap-4 flex-1">
                <h3 className="text-2xl sm:text-[28px] font-semibold leading-[1.2] text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69] flex-1">{card.description}</p>
                {card.variant === "primary" ? (
                  <PrimaryButton>
                    <span className="inline-flex items-center gap-2">
                      {card.action}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </PrimaryButton>
                ) : (
                  <SecondaryButton>
                    <span className="inline-flex items-center gap-2">
                      {card.action}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
