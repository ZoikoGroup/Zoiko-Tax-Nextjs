"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { EXPLORE_CONTEXT_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function ExploreContextSection() {
  const { eyebrow, title, description, cards } = EXPLORE_CONTEXT_DATA;

  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
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

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={0.04 * (idx % 3)}>
              <div className="h-full bg-white border border-[#EADBEE] rounded-2xl p-6 sm:p-7 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between hover:border-[#BF6735]/40 hover:shadow-[0_6px_20px_rgba(40,10,60,0.05)] transition-all duration-200">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#18141B] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#605C66] mt-2 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#BF6735] hover:text-[#A85324] transition-colors group"
                  >
                    <span>{card.linkLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                  </Link>
                  <span className="text-[11px] text-[#8E8696] font-mono block mt-0.5">
                    {card.path}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
