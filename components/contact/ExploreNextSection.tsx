"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EXPLORE_NEXT_DATA } from "./contact-data";
import { Reveal } from "./shared";

export default function ExploreNextSection() {
  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {EXPLORE_NEXT_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {EXPLORE_NEXT_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {EXPLORE_NEXT_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {EXPLORE_NEXT_DATA.cards.map((card, idx) => (
            <Reveal key={card.id} delay={0.05 * (idx + 1)}>
              <div className="h-full bg-white border border-[#E9E2EE] rounded-2xl p-5 sm:p-6 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between hover:shadow-[0_6px_20px_rgba(40,10,60,0.05)] transition-all duration-200">
                <div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1 text-sm sm:text-[15px] font-semibold text-[#BF6735] hover:text-[#A85324] transition-colors"
                  >
                    <span>{card.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                  <span className="text-[11px] text-[#7A7582] font-mono block mt-0.5">
                    {card.path}
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#605C66] mt-4 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
