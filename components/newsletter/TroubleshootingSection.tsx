"use client";

import React from "react";
import { Lock } from "lucide-react";
import { TROUBLESHOOTING_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function TroubleshootingSection() {
  const { eyebrow, title, description, cards, bottomCallout } =
    TROUBLESHOOTING_DATA;

  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {description}
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Grid (2x2) */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={0.05 * (idx + 1)}>
              <div className="bg-[#F8F3FA] border border-[#EADBEE] rounded-2xl p-6 shadow-2xs flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] font-bold text-[#BF6735] tracking-wider uppercase block">
                    {card.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#18141B] tracking-tight mt-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#605C66] leading-relaxed mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <Reveal delay={0.25}>
          <div className="mt-6 sm:mt-8 bg-white border border-[#EADBEE] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 shadow-2xs">
            <button
              type="button"
              disabled
              className="bg-[#EFE8F4] text-[#5C5566] border border-[#D5CBDC] px-3.5 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 cursor-not-allowed"
            >
              <span>{bottomCallout.buttonText}</span>
              <Lock className="w-3 h-3 opacity-70" aria-hidden="true" />
            </button>
            <p className="text-xs text-[#605C66] leading-relaxed">
              {bottomCallout.text}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
