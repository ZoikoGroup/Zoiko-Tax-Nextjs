"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import { FINAL_CTA_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function FinalCtaSection() {
  const { backgroundImage, title, description, cta, note } = FINAL_CTA_DATA;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#100122]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={backgroundImage}
          alt="Exploring ZoikoTax beyond the newsletter"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay preserving photo visibility */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#130324]/92 via-[#18032c]/85 to-[#0e001c]/95 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white tracking-tight leading-tight max-w-3xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-2xl mt-3 leading-relaxed">
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-7 sm:mt-8 flex flex-col items-center">
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#BF6735] hover:bg-[#A85324] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px] opacity-90 cursor-not-allowed"
            >
              <span>{cta.label}</span>
              {cta.locked && <Lock className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />}
            </Link>

            <span className="text-[11px] text-[#A89CB5] font-mono mt-3.5 block">
              {note}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
