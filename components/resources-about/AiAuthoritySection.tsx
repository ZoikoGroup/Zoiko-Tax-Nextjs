"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, GitBranch, UserCheck, ArrowRight, ArrowUpRight, Info } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { aiAuthorityData } from "./types";

const iconMap = {
  Sparkles,
  GitBranch,
  UserCheck,
};

export default function AiAuthoritySection() {
  const { stages, modelInWords, modelInWordsEyebrow, scopeNotice, governanceLink } =
    aiAuthorityData;

  return (
    <SectionContainer
      id="ai-authority"
      className="relative overflow-hidden bg-[#1D033B] text-white border-b border-[#301153]"
    >
      {/* Background Image with exact Figma rgba(29, 3, 59, 0.84) overlay */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/ai-authority-bg.png"
          alt="AI governance and decision authority background"
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
            eyebrow={aiAuthorityData.eyebrow}
            title={aiAuthorityData.headline}
            description={aiAuthorityData.subhead}
          />
        </Reveal>

        {/* 3 Authority stages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {stages.map((stage, idx) => {
            const Icon = iconMap[stage.icon as keyof typeof iconMap] || Sparkles;
            return (
              <Reveal key={stage.tag} delay={0.08 * idx}>
                <div className="h-full rounded-[16px] bg-[#301153] border border-[#69477D] p-7 sm:p-8 flex flex-col justify-between shadow-xl hover:border-[#F4A261]/70 transition-all duration-200">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      {stage.hasNextArrow && (
                        <div className="text-white/60">
                          <ArrowRight className="w-5 h-5 stroke-[1.8]" />
                        </div>
                      )}
                    </div>

                    <span className="inline-block text-xs sm:text-[13px] font-bold uppercase tracking-[0.06em] text-[#F4A261]">
                      {stage.tag}
                    </span>

                    <h3 className="text-2xl sm:text-[26px] font-normal leading-[1.2] text-white">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="pt-4 text-sm sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF] border-t border-[#69477D]/60 mt-6">
                    {stage.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Model in words */}
        <Reveal delay={0.2}>
          <div className="space-y-3 pt-2">
            <h4 className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4A261]">
              {modelInWordsEyebrow}
            </h4>
            <p className="text-sm sm:text-[17px] font-normal leading-[1.6] text-[#D9D0DF]">
              {modelInWords}
            </p>
          </div>
        </Reveal>

        {/* Scope note */}
        <Reveal delay={0.25}>
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

        {/* Link */}
        <Reveal delay={0.3}>
          <div className="pt-1">
            <Link
              href={governanceLink.href}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F4A261] hover:text-[#f8b884] transition-colors group"
            >
              <span className="group-hover:underline underline-offset-4">
                {governanceLink.label}
              </span>
              <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
