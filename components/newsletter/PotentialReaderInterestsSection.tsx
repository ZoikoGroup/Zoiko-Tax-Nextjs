"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Code } from "lucide-react";
import { POTENTIAL_READER_INTERESTS_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function PotentialReaderInterestsSection() {
  const { eyebrow, title, description, cards, bottomNotice } =
    POTENTIAL_READER_INTERESTS_DATA;

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle diamond lattice watermark */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/wholesale-carriers-and-aggregators/white-bg.png"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
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

        {/* 2 Reader Interest Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={0.05 * (idx + 1)}>
              <div className="bg-white/90 border border-[#EADBEE] rounded-2xl p-6 sm:p-7 shadow-[0_2px_10px_rgba(40,10,60,0.02)] backdrop-blur-xs flex flex-col items-start h-full">
                {/* Icon */}
                <div className="text-[#BF6735]">
                  {card.icon === "book" ? (
                    <BookOpen className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Code className="w-5 h-5" aria-hidden="true" />
                  )}
                </div>

                {/* Status Badge */}
                <span className="mt-3 bg-[#F3EEF6] text-[#55505C] border border-[#E0D5E5] px-2.5 py-0.5 rounded-full text-[10.5px] sm:text-[11px] font-medium">
                  {card.badge}
                </span>

                {/* Title */}
                <h3 className="mt-3.5 text-base sm:text-lg font-bold text-[#18141B] tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-[13px] text-[#605C66] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Taxonomy Notice */}
        <Reveal delay={0.15}>
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] text-[#605C66]">
            <span className="bg-[#EDE5F4] text-[#481E6D] text-[10.5px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-md shrink-0">
              {bottomNotice.badge}
            </span>
            <span className="leading-relaxed">
              {bottomNotice.text}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
