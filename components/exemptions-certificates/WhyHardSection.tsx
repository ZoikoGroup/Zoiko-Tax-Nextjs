"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./shared";
import { whyHardData } from "./exemptions-data";

export default function WhyHardSection() {
  return (
    <section id="problem-space" className="relative overflow-hidden bg-[#FAF8FA] py-12 sm:py-16 lg:py-24">
      {/* Background Lattice Pattern Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <Image
          src="/exemptions-certificates/pattern-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col gap-2.5 sm:gap-3 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#D65A2C]">
              {whyHardData.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.12] tracking-tight text-[#0A2029] font-['Tiro_Gurmukhi',serif] break-words">
              {whyHardData.title}
            </h2>
            <p className="mt-1 text-sm sm:text-base leading-relaxed text-[#535055] max-w-3xl">
              {whyHardData.description}
            </p>
          </div>
        </Reveal>

        {/* 8-Card Grid with Origami Gradient Card Patterns */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyHardData.items.map((item, index) => (
            <Reveal key={item.num} delay={index * 0.04}>
              <div className="group relative flex h-full min-h-[165px] sm:min-h-[175px] flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white/70 p-5 sm:p-6 shadow-[0_4px_20px_0_rgba(216,206,221,0.25)] transition-all duration-200 hover:-translate-y-1 hover:shadow-md backdrop-blur-xs">
                {/* Full Card Pattern Background with Origami Folds */}
                <div className="pointer-events-none absolute inset-0">
                  <Image
                    src="/exemptions-certificates/card-pattern.png"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold text-[#D65A2C] tracking-wider">
                      {item.num}
                    </span>
                    <h3 className="mt-2 sm:mt-2.5 text-base sm:text-[17px] font-bold text-[#0A2029]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-[13px] leading-[1.5] text-[#545155]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Critical Exposure Warning Note */}
        <Reveal delay={0.2}>
          <div className="mt-8 sm:mt-12 flex items-start sm:items-center justify-center gap-2 text-center px-2">
            <span className="text-xs text-[#0A2029] leading-none select-none shrink-0 mt-0.5 sm:mt-0">▲</span>
            <p className="text-xs sm:text-sm font-semibold text-[#0A2029] text-left sm:text-center">
              {whyHardData.alert}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
