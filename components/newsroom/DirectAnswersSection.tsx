"use client";

import React from "react";
import Image from "next/image";
import { DIRECT_ANSWERS_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function DirectAnswersSection() {
  const { eyebrow, title, items, reviewCandidate } = DIRECT_ANSWERS_DATA;

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
        </div>

        {/* 6 Q&A Rows */}
        <div className="mt-10 sm:mt-12 flex flex-col border-t border-[#EADBEE]">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={0.03 * (idx % 3)}>
              <div className="border-b border-[#EADBEE] py-6 sm:py-7 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                {/* Question */}
                <div className="w-full md:w-[35%] lg:w-[32%] shrink-0">
                  <h3 className="text-sm sm:text-base font-bold text-[#18141B] leading-snug">
                    {item.question}
                  </h3>
                </div>

                {/* Answer */}
                <div className="flex-1">
                  <p className="text-xs sm:text-[13.5px] text-[#4A4550] leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Review Candidate / Publication Gates Card */}
        <Reveal delay={0.1}>
          <div className="mt-12 sm:mt-16 rounded-2xl border border-[#E5DBEB] bg-[#FAF8FB]/60 backdrop-blur-xs p-6 sm:p-8 lg:p-10 shadow-xs">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735] block">
              {reviewCandidate.tag}
            </span>

            <p className="text-xs sm:text-[13px] text-[#55505C] leading-relaxed mt-2.5 max-w-5xl">
              {reviewCandidate.description}
            </p>

            <div className="mt-8 pt-8 border-t border-[#EADBEE] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column: Intended page metadata */}
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-[#18141B] tracking-tight mb-4">
                  {reviewCandidate.leftCol.title}
                </h4>

                <div className="flex flex-col divide-y divide-[#EADBEE] border-y border-[#EADBEE]">
                  {reviewCandidate.leftCol.rows.map((row, rIdx) => (
                    <div key={rIdx} className="py-3 flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                      <span className="text-xs font-semibold text-[#18141B] w-32 shrink-0">
                        {row.label}
                      </span>
                      <span className="text-xs text-[#55505C] font-mono break-all sm:break-normal">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visible data only */}
              <div className="flex flex-col">
                <h4 className="text-sm font-bold text-[#18141B] tracking-tight mb-4">
                  {reviewCandidate.rightCol.title}
                </h4>

                <div className="space-y-3.5 text-xs text-[#55505C] leading-relaxed">
                  {reviewCandidate.rightCol.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
