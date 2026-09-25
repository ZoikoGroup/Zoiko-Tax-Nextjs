"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { BREADCRUMBS, HERO_DATA } from "./intelligence-fabric-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8FA]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src="/intelligence-fabric/hero-bg.png" alt="" fill priority className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] pt-8 sm:pt-10 pb-14 sm:pb-20 lg:pb-[88px]">
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-[#665F69]">
            {BREADCRUMBS.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3 text-[#665F69]/70" aria-hidden="true" />}
                {i === BREADCRUMBS.length - 1 ? (
                  <span className="font-semibold text-[#D65A2C]">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-[#18141B] transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-10 lg:gap-16 items-center">
          <div className="max-w-[760px] space-y-5 sm:space-y-6">
            <Reveal>
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
                {HERO_DATA.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-[-2.5px] text-[#18141B] whitespace-pre-line">
                {HERO_DATA.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base sm:text-lg lg:text-[19px] font-medium leading-[1.5] text-[#535055] max-w-[720px]">
                {HERO_DATA.description}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-sm sm:text-[14px] font-normal leading-[1.5] text-[#18141B] max-w-[720px]">
                {HERO_DATA.compatibility}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {HERO_DATA.actions.map((action) =>
                  action.variant === "primary" ? (
                    <PrimaryButton key={action.label} href={action.href}>
                      {action.label}
                    </PrimaryButton>
                  ) : (
                    <SecondaryButton key={action.label} href={action.href}>
                      {action.label}
                    </SecondaryButton>
                  )
                )}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[13px] font-medium text-[#18141B] pt-1">{HERO_DATA.trustLine}</p>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="w-full">
            <div className="rounded-3xl border border-[#D8CEDD] bg-white p-6 shadow-[0px_8px_12px_0px_rgba(0,0,0,0.05)] space-y-3">
              <span className="font-mono text-[11px] font-bold text-[#D65A2C]">
                {HERO_DATA.operationsGraphic.label}
              </span>

              <div className="rounded-lg bg-[#F7F3ED] flex items-center gap-3 p-3">
                <span className="h-2 w-2 rounded-full bg-[#D65A2C] shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs text-[#18141B]">{HERO_DATA.operationsGraphic.pulse}</span>
              </div>

              <div className="pl-4 space-y-2">
                {HERO_DATA.operationsGraphic.flow.map((line) => (
                  <p key={line} className="text-[13px] text-[#665F69] leading-snug">
                    {line}
                  </p>
                ))}
              </div>

              <div className="rounded-lg border border-[#D8CEDD] bg-[#EADFF0] flex items-center gap-3 p-3">
                <ShieldCheck className="h-4 w-4 text-[#18141B] shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold text-[#18141B]">{HERO_DATA.operationsGraphic.lock}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
