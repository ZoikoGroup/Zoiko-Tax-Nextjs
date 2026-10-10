"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { audienceNeedsData } from "./types";

export default function BrandOverviewSection() {
  return (
    <SectionContainer id="brand-overview" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Brand overview"
          title="The right material. The right context."
          description="A resource for communicating accurately—not a blanket permission to use the brand."
        />
      </Reveal>

      {/* 4 Audience Guidance Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {audienceNeedsData.map((item, idx) => (
          <Reveal key={item.id} delay={0.05 * idx}>
            <div className="h-full rounded-2xl bg-white p-7 sm:p-8 flex flex-col justify-between gap-5 border border-[#D8CEDD] hover:border-[#BF6735] hover:shadow-sm transition-all duration-200">
              <div className="space-y-4">
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src={`/media-kit/icons/${item.icon}.svg`}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug text-[#18141B] font-['Inter',sans-serif]">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base leading-[1.6] text-[#665F69]">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
