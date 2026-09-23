"use client";

import React from "react";
import Link from "next/link";
import { SectionContainer, SectionHeader, PrimaryButton, Reveal } from "./shared";
import { interlockData } from "./exemptions-data";

export default function InterlockSection() {
  return (
    <SectionContainer id="interlock" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow={interlockData.eyebrow}
          title={interlockData.title}
          description={interlockData.description}
        />
      </Reveal>

      {/* 6-step Flow Cards */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {interlockData.steps.map((step, idx) => (
          <Reveal key={step.num} delay={idx * 0.04}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-4 sm:p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
              <div>
                <span className="font-mono text-xs font-bold text-[#D65A2C]">
                  {step.num}
                </span>
                <h3 className="mt-2.5 sm:mt-3 text-sm sm:text-base font-bold text-[#18141B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#535055]">
                  {step.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Interlock CTAs */}
      <Reveal delay={0.2}>
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <PrimaryButton href={interlockData.primaryCta.href} className="w-full sm:w-auto">
            {interlockData.primaryCta.label}
          </PrimaryButton>
          <Link
            href={interlockData.secondaryCta.href}
            className="text-xs sm:text-sm font-semibold text-[#1D033B] hover:text-[#D65A2C] transition-colors py-1.5 sm:py-0 text-center"
          >
            {interlockData.secondaryCta.label}
          </Link>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
