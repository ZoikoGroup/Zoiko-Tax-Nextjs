"use client";

import React from "react";
import Image from "next/image";
import { HONEST_STATES_DATA } from "./partnerships-data";
import { SectionContainer, EyebrowTag, SectionHeading, SectionDescription, Reveal } from "./shared";

export default function HonestStatesSection() {
  return (
    <SectionContainer id="honest-states" className="relative py-[90px] bg-[#271740] overflow-hidden">
      {/* Background Dark Infrastructure Texture */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <picture>
          <source srcSet="/partnerships/honest-states-bg.webp" type="image/webp" />
          <Image
            src="/partnerships/honest-states-bg.png"
            alt=""
            fill
            className="object-cover opacity-60 mix-blend-screen"
          />
        </picture>
        {/* Figma Linear Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(25, 16, 47, 0.55) 0%, rgba(25, 16, 47, 0.82) 100%)",
          }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <Reveal delay={0.05}>
            <EyebrowTag light>{HONEST_STATES_DATA.eyebrow}</EyebrowTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-[39.2px] font-extrabold leading-[1.15] sm:leading-[52px] tracking-[-0.784px] text-white max-w-[1143px] mb-3 sm:mb-4">
              {HONEST_STATES_DATA.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-[16px] leading-[26px] text-[#B6A8CF] max-w-[707px]">
              {HONEST_STATES_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* 8 States Grid: exactly 4 columns with 16px gap matching Figma 274px card width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HONEST_STATES_DATA.states.map((st, idx) => (
            <Reveal key={st.id} delay={0.04 * (idx + 1)}>
              <div className="flex flex-col justify-between h-full min-h-[178px] bg-white/[0.055] hover:bg-white/[0.08] border border-white/[0.12] rounded-[16px] p-5 transition-all duration-200">
                <div>
                  {/* Status Indicator Dot + Uppercase Tag */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-[9px] h-[9px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: st.dotColor }}
                    />
                    <span className="text-[11.5px] font-bold text-white tracking-[0.575px] uppercase">
                      {st.statusLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-[14px] font-medium text-white leading-[20px] mb-1.5">
                    {st.title}
                  </h4>

                  {/* Description */}
                  {st.description && (
                    <p className="text-[12.5px] font-normal leading-[19px] text-[#B6A8CF]">
                      {st.description}
                    </p>
                  )}
                </div>

                {/* Submitting Progress Bar (Card 4) */}
                {st.hasProgress && (
                  <div className="mt-4 pt-1">
                    <div className="w-full h-1 bg-white/[0.15] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#F0B98A] rounded-full transition-all duration-500"
                        style={{ width: `${st.progressPercent || 62}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
