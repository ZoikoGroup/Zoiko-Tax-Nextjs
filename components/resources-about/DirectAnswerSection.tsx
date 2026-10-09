"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { faqsData } from "./types";

export default function DirectAnswerSection() {
  return (
    <SectionContainer
      id="direct-answers"
      className="overflow-hidden bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40 mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/pattern-bg.png"
          alt="Direct answers FAQs background pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={faqsData.eyebrow}
            title={faqsData.headline}
            description={faqsData.subhead}
          />
        </Reveal>

        {/* 6 FAQ questions and answers */}
        <div className="divide-y divide-[#D8CEDD] border-b border-[#D8CEDD]">
          {faqsData.items.map((item, idx) => (
            <Reveal key={item.id} delay={0.06 * idx}>
              <div className="py-7 sm:py-9 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 lg:gap-16 items-start">
                {/* Question */}
                <div className="md:col-span-4 lg:col-span-4">
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B] leading-[1.3]">
                    {item.question}
                  </h3>
                </div>

                {/* Answer and Link */}
                <div className="md:col-span-8 lg:col-span-8 space-y-4">
                  <p className="text-base sm:text-[17px] font-normal leading-[1.6] text-[#665F69]">
                    {item.answer}
                  </p>

                  <div className="space-y-1 pt-1">
                    <Link
                      href={item.linkHref}
                      className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {item.linkText}
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    {item.secondaryRoute && (
                      <div>
                        <span className="text-xs sm:text-[13px] font-normal text-[#A64B25]/80">
                          {item.secondaryRoute}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
