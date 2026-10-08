"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { principlesData } from "./types";

export default function OperatingPrinciplesSection() {
  return (
    <SectionContainer
      id="operating-principles"
      className="bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      <div className="space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={principlesData.eyebrow}
            title={principlesData.headline}
            description={principlesData.subhead}
          />
        </Reveal>

        {/* 6 Operating principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {principlesData.principles.map((item, idx) => (
            <Reveal key={item.id} delay={0.06 * idx}>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl lg:text-[25px] font-normal leading-[1.25] text-[#18141B]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-[17px] font-normal leading-[1.55] text-[#665F69]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
