"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BG, HERO_DATA } from "./webhooks-events-data";
import { PrimaryButton, SecondaryButton, Reveal, ArrowLink, ICONS } from "./shared";

export default function HeroSection() {
  const { flow } = HERO_DATA;

  return (
    <section className="relative w-full overflow-hidden bg-[#F7F3ED]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={BG.hero} alt="" fill priority className="object-cover object-right" />
        {/* Extra wash on small screens where the text overlaps the busier part of the image */}
        <div className="absolute inset-0 bg-[rgba(247,243,237,0.6)] lg:bg-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] pt-10 pb-14 sm:pt-12 sm:pb-20 flex flex-col gap-8">
        <div className="max-w-[1100px] flex flex-col gap-5 sm:gap-6">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B]">
              {HERO_DATA.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="max-w-[990px] text-base sm:text-lg lg:text-[20px] font-medium leading-[1.6] text-[#4F4752]">
              {HERO_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-3 py-1.5">
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
              <ArrowLink href={HERO_DATA.link.href} className="sm:ml-1">
                {HERO_DATA.link.label}
              </ArrowLink>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-[1000px] text-sm font-medium leading-5 text-[#18141B]">{HERO_DATA.notice}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-3xl bg-[#301153] p-5 sm:p-8 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <p className="flex flex-wrap items-center gap-x-2 text-lg sm:text-xl font-semibold text-white">
                {flow.title.split(" → ").map((part, i) => (
                  <React.Fragment key={part}>
                    {i > 0 && <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />}
                    <span>{part}</span>
                  </React.Fragment>
                ))}
              </p>
              <span className="text-xs text-[#D9D0DF]">{flow.tag}</span>
            </div>

            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {flow.steps.map((step) => {
                const Icon = ICONS[step.icon];
                return (
                  <li
                    key={step.title}
                    className="rounded-2xl border border-[#705186] bg-[#43205F] p-5 flex flex-col gap-3.5"
                  >
                    <Icon className="h-6 w-6 text-[#F4A261]" strokeWidth={1.5} aria-hidden="true" />
                    <p className="text-lg font-semibold text-white">{step.title}</p>
                    <p className="text-base leading-6 text-[#D9D0DF]">{step.description}</p>
                  </li>
                );
              })}
            </ol>

            <p className="text-sm leading-5 text-[#D9D0DF]">{flow.footnote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
