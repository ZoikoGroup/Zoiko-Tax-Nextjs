"use client";

import React from "react";
import Image from "next/image";
import { HERO_DATA } from "./evidence-auditability-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/evidence-auditability/hero-bg.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,247,242,0.96)] via-[48%] via-[rgba(250,245,255,0.82)] to-[rgba(235,219,245,0.46)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-12 sm:py-16 lg:py-[53px]">
        <div className="grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-10 lg:gap-12 items-center">
          <div className="flex flex-col gap-5 sm:gap-6">
            <Reveal>
              <span className="inline-block text-xs sm:text-[13px] font-bold uppercase text-[#D65A2C]">
                {HERO_DATA.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.1] tracking-tight text-[#18141B]">
                {HERO_DATA.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.5] text-[#535055]">
                {HERO_DATA.description}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="rounded-xl border border-[#D8CEDD] bg-white/48 p-4">
                <p className="text-[13px] leading-[1.4] text-[#665F69]">
                  <span className="font-bold text-[#18141B]">Operational Trust Line:</span>{" "}
                  {HERO_DATA.trustLine.replace("Operational Trust Line: ", "")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="flex flex-wrap items-center gap-3">
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
          </div>

          <Reveal delay={0.2} className="w-full">
            <div className="rounded-3xl bg-[#1D033B] p-6 sm:p-8 space-y-3">
              <span className="font-bold text-xs uppercase text-[#F4A261]">{HERO_DATA.provenance.title}</span>
              <p className="text-xs text-[#D9D0DF]">{HERO_DATA.provenance.description}</p>

              <div className="flex flex-col gap-1.5 pt-2">
                {HERO_DATA.provenance.layers.map((layer) => (
                  <div
                    key={layer.title}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-3 rounded-lg border border-white/[0.08] p-3"
                    style={{ backgroundColor: layer.bg }}
                  >
                    <p className="text-sm font-bold text-white sm:w-[180px] shrink-0">{layer.title}</p>
                    <p className="text-xs text-[#D9D0DF]">{layer.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
