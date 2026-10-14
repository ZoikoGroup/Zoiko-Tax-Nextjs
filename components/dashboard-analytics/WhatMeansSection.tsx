"use client";

import React from "react";
import { Globe, Layers, Shield } from "lucide-react";
import { WHAT_MEANS_DATA as W } from "./dashboard-analytics-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS: Record<string, typeof Layers> = { layers: Layers, globe: Globe, shield: Shield };

export default function WhatMeansSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-6">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{W.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{W.title}</h2>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <p className="text-xl sm:text-2xl leading-[1.5] text-[#18141B] mb-10">{W.description}</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {W.cards.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <Reveal key={c.title} delay={0.03 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
                <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                <h3 className="text-xl font-normal leading-[1.2] text-[#18141B]">{c.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{c.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionContainer>
  );
}
