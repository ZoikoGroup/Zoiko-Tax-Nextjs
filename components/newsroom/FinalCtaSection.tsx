"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FINAL_CTA_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function FinalCtaSection() {
  const { backgroundImage, title, description, primaryButton, secondaryButton } =
    FINAL_CTA_DATA;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#100122]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt="Company context"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay preserving photo visibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#120222]/88 via-[#18032c]/82 to-[#0e001d]/90 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-2xl mt-4 leading-relaxed">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Link
              href={primaryButton.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#BF6735] hover:bg-[#A85324] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
            >
              <span>{primaryButton.label}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-white/40 hover:border-white/80 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all backdrop-blur-xs hover:translate-y-[-1px]"
            >
              <span>{secondaryButton.label}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
