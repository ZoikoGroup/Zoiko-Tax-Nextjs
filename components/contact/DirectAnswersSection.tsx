"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { DIRECT_ANSWERS_DATA } from "./contact-data";
import { Reveal } from "./shared";

export default function DirectAnswersSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Faint diamond lattice pattern background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40" aria-hidden="true">
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
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {DIRECT_ANSWERS_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {DIRECT_ANSWERS_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-3xl leading-relaxed mt-1">
              {DIRECT_ANSWERS_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* 8 Q&A Rows */}
        <div className="mt-8 sm:mt-12 flex flex-col border-t border-[#EADBEE]">
          {DIRECT_ANSWERS_DATA.items.map((item, idx) => (
            <Reveal key={idx} delay={0.03 * (idx % 4)}>
              <div className="border-b border-[#EADBEE] py-6 sm:py-7 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                {/* Question */}
                <div className="w-full md:w-[34%] lg:w-[30%] shrink-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#18141B] leading-snug">
                    {item.question}
                  </h3>
                </div>

                {/* Answer & Optional Link */}
                <div className="flex-1">
                  <p className="text-xs sm:text-[13.5px] text-[#4A4550] leading-relaxed">
                    {item.answer}
                  </p>

                  {item.link && (
                    <div className="mt-3">
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#BF6735] hover:text-[#A85324] transition-colors"
                      >
                        <span>{item.link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                      <span className="text-[11px] text-[#7A7582] font-mono block mt-0.5">
                        {item.link.path}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
