"use client";

import React from "react";
import { BookOpen, Files, BookA } from "lucide-react";
import { RELATED_RESOURCES_DATA as R } from "./regulatory-change-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [BookOpen, Files, BookA];

export default function RelatedResourcesSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/regulatory-change/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#B65326]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {R.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={card.title} delay={0.04 * i}>
                <a
                  href={card.path}
                  className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-5 hover:border-[#BF6735]/40 transition-colors"
                >
                  <Icon className="h-[30px] w-[30px] text-[#301153]" aria-hidden="true" />
                  <h3 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{card.title}</h3>
                  <p className="text-base leading-[1.6] text-[#665F69] flex-1">{card.description}</p>
                  <span className="text-[13px] font-medium text-[#B65326]">{card.path} →</span>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white p-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {R.capabilityDestinations.map((dest) => (
              <div key={dest.label} className="flex flex-col gap-3">
                <span className="text-xs font-bold text-[#B65326]">{dest.label}</span>
                <p className="text-base leading-[1.6] text-[#665F69]">{dest.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
