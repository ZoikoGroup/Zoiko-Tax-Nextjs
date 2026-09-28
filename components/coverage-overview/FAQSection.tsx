"use client";

import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { SectionContainer, Reveal } from "./shared";
import { COVERAGE_FAQS } from "./coverage-data";

export default function FAQSection() {
  return (
    <SectionContainer className="relative overflow-hidden bg-[#FAF7FC] border-b border-[#DDD2E2]/60 py-20 lg:py-[104px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-85" aria-hidden="true">
        <Image
          src="/coverage-overview/section-pattern-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="space-y-10 sm:space-y-12">
            {/* Header */}
            <div className="flex flex-col gap-3 w-full max-w-4xl">
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                DIRECT ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#18141B] leading-[1.08] tracking-tight font-['Inter',sans-serif]">
                Coverage questions, answered without inflated claims
              </h2>
              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.55] text-[#706876] max-w-3xl">
                Bounded answers help operators interpret public Coverage without turning readiness states into legal conclusions or broad promises.
              </p>
            </div>

            {/* Questions Table List: 3-column side-by-side matching Figma */}
            <div className="border-t border-[#DDD2E2] divide-y divide-[#DDD2E2]">
              {COVERAGE_FAQS.map((faq) => (
                <div
                  key={faq.id}
                  className="py-[26px] flex flex-col lg:flex-row items-start lg:items-baseline gap-4 lg:gap-12 justify-between group transition-colors"
                >
                  {/* Left Column: Number (01-07) + Question Title */}
                  <div className="w-full lg:w-[470px] lg:max-w-[470px] shrink-0 flex items-start gap-4">
                    <span className="text-xs font-extrabold text-[#D65A2C] tracking-wider shrink-0 pt-0.5">
                      {faq.number}
                    </span>
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-[#18141B] leading-[1.35]">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Middle Column: Answer Summary Text */}
                  <div className="flex-1 pl-7 lg:pl-0">
                    <p className="text-[14px] sm:text-[15px] font-normal text-[#4E4852] leading-[1.6]">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Right Column: Purple Plus Icon */}
                  <div className="shrink-0 pl-7 lg:pl-0 pt-0.5">
                    <Plus className="w-5 h-5 text-[#5A2388] transition-transform duration-200 group-hover:scale-110" strokeWidth={2} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
