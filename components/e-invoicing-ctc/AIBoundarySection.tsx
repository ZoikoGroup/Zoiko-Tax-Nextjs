"use client";

import React from "react";
import Image from "next/image";
import { AI_BOUNDARY_DATA } from "./e-invoicing-data";
import { SectionHeader, Reveal } from "./shared";

export default function AIBoundarySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#301153] py-16 sm:py-20 lg:py-24 text-white">
      {/* AI background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-27">
        <Image
          src="/e-invoicing-ctc/ai-boundary-bg.png"
          alt="AI Boundary pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow={AI_BOUNDARY_DATA.eyebrow}
          title={AI_BOUNDARY_DATA.title}
          description={AI_BOUNDARY_DATA.description}
          dark
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* AI MAY */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-[#F4A261] bg-[#E8F5E9]/10 p-6 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F4A261] mb-5">
                  AI MAY
                </h3>
                <ul className="space-y-3.5">
                  {AI_BOUNDARY_DATA.may.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#FFF8F5] leading-relaxed"
                    >
                      <span className="text-[#A3F3D3] font-bold text-base select-none shrink-0">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* AI MAY NOT */}
          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-[#F4A261] bg-[#FFEBEE]/10 p-6 sm:p-8 backdrop-blur-xs flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F4A261] mb-5">
                  AI MAY NOT
                </h3>
                <ul className="space-y-3.5">
                  {AI_BOUNDARY_DATA.mayNot.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-base text-[#FFF8F5] leading-relaxed"
                    >
                      <span className="text-[#FCA5A5] font-bold text-base select-none shrink-0">
                        ✗
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
