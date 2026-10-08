"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import {
  SectionContainer,
  SectionHeader,
  Reveal,
  PrimaryButton,
} from "./shared";
import { evaluationData } from "./types";

export default function EvaluationNextStepsSection() {
  const { steps, pathways, demoCallout } = evaluationData;

  return (
    <div id="evaluation-next-steps" className="w-full">
      {/* Part A: Evaluation path */}
      <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
        <div className="space-y-12 sm:space-y-16">
          <Reveal>
            <SectionHeader
              eyebrow={evaluationData.eyebrow}
              title={evaluationData.headline}
              description={evaluationData.subhead}
            />
          </Reveal>

          {/* 4 Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((item, idx) => (
              <Reveal key={item.step} delay={0.06 * idx}>
                <div className="h-full rounded-[16px] bg-[#F4EDF8] p-6 sm:p-7 flex flex-col justify-between border border-[#D8CEDD] hover:border-[#BF6735] hover:bg-white transition-all duration-200 shadow-2xs">
                  <div className="space-y-4">
                    <span className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.08em] text-[#A64B25]">
                      {item.step}
                    </span>
                    <h3 className="text-xl sm:text-[23px] font-normal leading-[1.25] text-[#18141B]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="space-y-1 pt-6 border-t border-[#D8CEDD]/60 mt-6">
                    <Link
                      href={item.linkHref}
                      className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {item.linkText}
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                    <div>
                      <span className="text-xs text-[#665F69]">
                        {item.route}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Resource pathways 3 columns */}
          <Reveal delay={0.2}>
            <div className="pt-7 border-t border-[#D8CEDD] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {pathways.map((path) => (
                <div key={path.title} className="space-y-2">
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-1.5 text-base sm:text-[17px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group"
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {path.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <p className="text-sm font-normal text-[#665F69]">
                    {path.description}
                  </p>
                  <div>
                    <span className="text-xs text-[#665F69]/80">
                      {path.route}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Part B: Demo Callout */}
      <section className="relative w-full overflow-hidden bg-[#1D033B] text-white py-20 sm:py-24 lg:py-28">
        {/* Background Image with exact Figma rgba(29, 3, 59, 0.84) overlay */}
        <div
          className="absolute inset-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          <Image
            src="/resources-about/conversion-bg.png"
            alt="Evaluation and conversation background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1D033B]/84" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 text-center">
          <Reveal>
            <div className="mx-auto max-w-3xl space-y-6 sm:space-y-7">
              <span className="text-xs sm:text-[14px] font-bold uppercase tracking-[0.06em] text-[#F4A261]">
                {demoCallout.eyebrow}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white font-['Inter',sans-serif]">
                {demoCallout.headline}
              </h2>

              <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-[19px] font-normal leading-[1.55] text-[#D9D0DF]">
                {demoCallout.subhead}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <PrimaryButton href={demoCallout.primaryCta.href}>
                  {demoCallout.primaryCta.label}
                </PrimaryButton>
                <Link
                  href={demoCallout.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#301153] border border-[#69477D] hover:bg-[#FAF6FC] transition-all duration-200 active:scale-[0.98] shadow-sm"
                >
                  <span>{demoCallout.secondaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 text-[#301153]" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
