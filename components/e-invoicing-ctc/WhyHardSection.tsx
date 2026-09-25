"use client";

import React from "react";
import Image from "next/image";
import { WHY_HARD_DATA } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function WhyHardSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3FF] py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]/50">
      {/* Pattern background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Image
          src="/e-invoicing-ctc/pattern-bg.png"
          alt="Section pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow={WHY_HARD_DATA.eyebrow}
          title={WHY_HARD_DATA.title}
          description={WHY_HARD_DATA.description}
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_HARD_DATA.items.map((item, idx) => (
            <Reveal key={item.id} delay={0.05 * idx}>
              <div className="h-full rounded-xl border border-[#D8CEDD] bg-white/95 p-6 backdrop-blur-xs shadow-xs hover:border-[#D65A2C]/50 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#D65A2C] tracking-widest block mb-3">
                    {item.id}
                  </span>
                  <h3 className="text-lg font-bold text-[#18141B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#665F69]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
