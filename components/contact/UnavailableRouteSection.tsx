"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { UNAVAILABLE_ROUTE_DATA } from "./contact-data";
import { Reveal } from "./shared";

export default function UnavailableRouteSection() {
  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {UNAVAILABLE_ROUTE_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {UNAVAILABLE_ROUTE_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {UNAVAILABLE_ROUTE_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* 3 Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {UNAVAILABLE_ROUTE_DATA.cards.map((card, idx) => (
            <Reveal key={idx} delay={0.06 * (idx + 1)}>
              <div className="h-full bg-white border border-[#E9E2EE] rounded-2xl p-6 sm:p-7 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col">
                <h3 className="text-sm sm:text-base font-bold text-[#18141B]">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#605C66] leading-relaxed mt-2.5">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Trust Center Link */}
        <Reveal delay={0.25}>
          <div className="mt-6 sm:mt-8">
            <Link
              href={UNAVAILABLE_ROUTE_DATA.link.href}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#BF6735] hover:text-[#A85324] transition-colors"
            >
              <span>{UNAVAILABLE_ROUTE_DATA.link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
            <span className="text-[11px] text-[#7A7582] font-mono block mt-0.5">
              {UNAVAILABLE_ROUTE_DATA.link.path}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
