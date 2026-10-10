"use client";

import React from "react";
import Image from "next/image";
import { PUBLISHING_CONTROLS_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function PublishingControlsSection() {
  const { headerCols, rows, sourceNotice } = PUBLISHING_CONTROLS_DATA;

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24 bg-[#1C0636]">
      {/* Background image n2.jpg */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={PUBLISHING_CONTROLS_DATA.backgroundImage}
          alt="Publishing Controls Authority Review"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1C0636]/95 via-[#250945]/90 to-[#18042F]/95 pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              {PUBLISHING_CONTROLS_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-white">
              {PUBLISHING_CONTROLS_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-4xl leading-relaxed mt-1">
              {PUBLISHING_CONTROLS_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* Controls Table */}
        <Reveal delay={0.12}>
          <div className="mt-8 sm:mt-10 rounded-2xl border border-[#52297D] bg-[#240D3E]/85 backdrop-blur-sm p-6 sm:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row pb-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F4A261] gap-2 sm:gap-6">
              <span className="sm:w-60 shrink-0">{headerCols.claim}</span>
              <span className="flex-1">{headerCols.gate}</span>
            </div>

            <div className="flex flex-col">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="border-t border-[#461F73] py-3 sm:py-3.5 flex flex-col sm:flex-row text-xs sm:text-[13px] gap-1 sm:gap-6"
                >
                  <span className="font-bold text-white sm:w-60 shrink-0">
                    {row.claim}
                  </span>
                  <span className="text-[#D8CEDD] flex-1 leading-relaxed">
                    {row.gate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Source Notice Container */}
        <Reveal delay={0.18}>
          <div className="mt-6 rounded-xl border border-[#52297D] bg-[#290E45]/85 backdrop-blur-sm p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 shadow-xl">
            <div className="shrink-0 sm:min-w-[200px]">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4A261] block">
                {sourceNotice.tag}
              </span>
              <h3 className="text-base font-bold text-white mt-1">
                {sourceNotice.title}
              </h3>
            </div>
            <p className="text-xs text-[#D8CEDD] leading-relaxed flex-1">
              {sourceNotice.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
