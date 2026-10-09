"use client";

import React from "react";
import Link from "next/link";
import { CONTINUE_EXPLORING_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function ContinueExploringSection() {
  const { eyebrow, title, description, cards } = CONTINUE_EXPLORING_DATA;

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

        {/* 5 Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={0.04 * (idx + 1)}>
              <div className="relative bg-white/95 border border-[#EADBEE] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between hover:border-[#BF6735]/40 hover:shadow-[0_6px_20px_rgba(40,10,60,0.05)] transition-all duration-200 h-full overflow-hidden">
                {/* Subtle decorative glow */}
                <div
                  className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-[#F5ECF8]/60 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <h3 className="text-sm sm:text-base font-bold text-[#18141B] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#605C66] mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="relative z-10 mt-5 pt-2">
                  <Link
                    href={card.href}
                    className="text-[10.5px] sm:text-[11px] text-[#481E6D] font-mono hover:text-[#BF6735] transition-colors block"
                  >
                    {card.status}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
