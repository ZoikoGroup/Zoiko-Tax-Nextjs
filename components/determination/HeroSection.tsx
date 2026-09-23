"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, StatusBadge, Reveal } from "./shared";
import { heroData } from "./determination-data";

export default function HeroSection() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(265deg,rgba(239,191,175,0.19)_36%,rgba(243,213,215,0.6)_43%,rgba(247,236,254,1)_50%)] py-16 sm:py-20 lg:py-24">
      {/* Background Image overlay with low opacity */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.28]">
        <Image
          src="/determination/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex flex-col gap-6">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
                  {heroData.eyebrow}
                </span>

                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold leading-[1.06] tracking-tight text-[#18141B]">
                  {heroData.title}
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
                  {heroData.subtitle}
                </p>

                <p className="text-sm leading-relaxed text-[#665F69]">
                  {heroData.secondary}
                </p>

                {/* Hero Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
                  <SecondaryButton href="#coverage">View Current Coverage</SecondaryButton>
                  <SecondaryButton href="#developer">Explore the Platform</SecondaryButton>
                </div>

                {/* Boundary disclosures */}
                <div className="flex flex-col gap-1.5 border-t border-[#B4B2B5]/60 pt-4 text-xs font-semibold text-[#665F69]">
                  {heroData.disclosures.map((disclosure, index) => (
                    <span key={index}>{disclosure}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Execution Trace Mockup */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="w-full max-w-[520px] mx-auto rounded-3xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-[0_12px_24px_0_rgba(0,0,0,0.04)]">
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    TRACING ENGINE MOCKUP
                  </span>
                  <StatusBadge status="SIMULATION ONLY" />
                </div>

                {/* Subtitle */}
                <h3 className="mt-3 text-lg font-bold text-[#18141B]">
                  Execution Trace Pipeline
                </h3>

                {/* Stages List */}
                <div className="mt-4 flex flex-col gap-2.5">
                  {heroData.pipelineStages.map((stage, idx) => {
                    const isHovered = activeStage === idx;
                    return (
                      <div
                        key={stage.tag}
                        onMouseEnter={() => setActiveStage(idx)}
                        onMouseLeave={() => setActiveStage(null)}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-all cursor-default ${
                          isHovered
                            ? "bg-[#FAF3FF] border border-[#D65A2C]/30 shadow-sm translate-x-1"
                            : "bg-[#FAF8FA] border border-transparent"
                        }`}
                      >
                        <span className="shrink-0 font-mono text-xs font-bold text-[#D65A2C]">
                          {stage.tag}
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-[#18141B]">
                          {stage.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Card Footer Note */}
                <p className="mt-5 text-center text-[11px] text-[#665F69]">
                  No production transactions or fiscal rates calculated in this visualization.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
