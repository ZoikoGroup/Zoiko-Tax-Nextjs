"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, Info } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { operatingModelData } from "./types";

export default function FiscalOperatingModelSection() {
  const { stages, connectedCard, scopeNotice } = operatingModelData;

  return (
    <SectionContainer
      id="operating-model"
      className="relative overflow-hidden bg-[#1D033B] text-white border-b border-[#301153]"
    >
      {/* Background Image with Figma's exact rgba(29, 3, 59, 0.84) overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/operating-model-bg.png"
          alt="Operating model collaboration background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1D033B]/84" />
      </div>

      <div className="relative space-y-10 sm:space-y-12 lg:space-y-14">
        {/* Section Heading */}
        <Reveal>
          <SectionHeader
            dark
            eyebrow={operatingModelData.eyebrow}
            title={operatingModelData.headline}
            description={operatingModelData.subhead}
          />
        </Reveal>

        {/* Lifecycle diagram container */}
        <Reveal delay={0.1}>
          <div className="rounded-[26px] bg-[#301153] border border-[#69477D] p-6 sm:p-8 shadow-2xl space-y-6">
            {/* Diagram header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <span className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4A261]">
                {operatingModelData.diagramHeader.badge}
              </span>
              <span className="text-xs sm:text-[14px] font-normal text-[#D9D0DF]">
                {operatingModelData.diagramHeader.sub}
              </span>
            </div>

            {/* Stages cards 4x2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {stages.map((stage) => (
                <div
                  key={stage.step}
                  className="rounded-[16px] bg-white/[0.04] border border-[#69477D] p-[22px] flex flex-col justify-between min-h-[114px] hover:border-[#F4A261]/70 hover:bg-white/[0.07] transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-[#F4A261]">
                      {stage.step}
                    </span>
                    {stage.isLast ? (
                      <Check className="w-5 h-5 text-white/80 stroke-[2]" />
                    ) : (
                      <ArrowRight className="w-5 h-5 text-white/70 stroke-[1.8]" />
                    )}
                  </div>
                  <h4 className="text-xl sm:text-[24px] font-semibold leading-tight text-white pt-3">
                    {stage.name}
                  </h4>
                </div>
              ))}

              {/* Connected throughout card (exact same styling and dimensions) */}
              <div className="rounded-[16px] bg-white/[0.04] border border-[#69477D] p-[22px] flex flex-col justify-between min-h-[114px] hover:border-[#F4A261]/70 transition-all duration-200">
                <span className="text-[13px] font-bold uppercase tracking-[0.04em] text-[#F4A261]">
                  {connectedCard.tag}
                </span>
                <h4 className="text-base sm:text-[19px] font-normal leading-[1.3] text-white pt-2">
                  {connectedCard.title}
                </h4>
              </div>
            </div>
          </div>
        </Reveal>

        {/* The model in words */}
        <Reveal delay={0.2}>
          <div className="space-y-4 pt-2">
            <h3 className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4A261]">
              {operatingModelData.modelInWordsEyebrow}
            </h3>

            <div className="border-t border-[#69477D]">
              {stages.map((stage) => (
                <div
                  key={stage.step}
                  className="py-[17px] border-b border-[#69477D] flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8"
                >
                  <span className="md:w-[235px] shrink-0 text-base sm:text-[18px] font-semibold text-white">
                    {stage.name}
                  </span>
                  <span className="text-sm sm:text-[17px] font-normal leading-[1.5em] text-[#D9D0DF]">
                    {stage.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Scope note */}
        <Reveal delay={0.3}>
          <div className="rounded-[16px] bg-white/[0.04] border border-[#69477D] p-6 flex items-start gap-4">
            <div className="shrink-0 text-white/80 mt-0.5">
              <Info className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-normal text-white">
                {scopeNotice.title}
              </h4>
              <p className="text-xs sm:text-[15px] font-normal leading-relaxed text-[#D9D0DF]">
                {scopeNotice.explanation}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
