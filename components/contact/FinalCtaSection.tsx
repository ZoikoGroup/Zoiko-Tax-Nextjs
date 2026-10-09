"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FINAL_CTA_DATA } from "./contact-data";
import { Reveal } from "./shared";

export default function FinalCtaSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#100122]">
      {/* Background datacenter server room image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={FINAL_CTA_DATA.backgroundImage}
          alt="ZoikoTax Telecom Architecture Infrastructure"
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark plum tint overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#100122]/92 via-[#180332]/88 to-[#100122]/92 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32 flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-[1.18] max-w-3xl">
            {FINAL_CTA_DATA.title}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="text-xs sm:text-sm md:text-base text-[#D8CEDD] max-w-2xl mt-4 leading-relaxed">
            {FINAL_CTA_DATA.description}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-7 sm:mt-8 flex flex-col items-center">
            <Link
              href={FINAL_CTA_DATA.cta.href}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#BF6735] hover:bg-[#A85324] text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg"
            >
              {FINAL_CTA_DATA.cta.label}
            </Link>
            <span className="text-[11px] text-[#A89CB5] font-mono mt-2 block">
              {FINAL_CTA_DATA.cta.path}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
