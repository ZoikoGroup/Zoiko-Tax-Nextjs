"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { NEXT_ROUTES_DATA } from "./resources-faq-data";
import { SectionContainer, Reveal } from "./shared";

export default function NextRoutesSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/resources-faq/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#D65A2C]">{NEXT_ROUTES_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
              {NEXT_ROUTES_DATA.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {NEXT_ROUTES_DATA.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.03 * i}>
              <a
                href={card.href}
                className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4 hover:border-[#BF6735]/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#18141B]">{card.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69] flex-1">{card.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#BF6735]">
                  {card.cta}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
