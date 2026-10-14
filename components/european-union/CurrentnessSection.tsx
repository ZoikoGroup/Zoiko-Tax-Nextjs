"use client";

import React from "react";
import Image from "next/image";
import { CURRENTNESS_DATA } from "./european-union-data";
import { StatusUnavailableBadge, Reveal } from "./shared";

export default function CurrentnessSection() {
  const c = CURRENTNESS_DATA;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/european-union/currentness-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(18, 3, 39, 0.94) 0%, rgba(18, 3, 39, 0.84) 50%, rgba(18, 3, 39, 0.61) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-16 flex flex-col gap-6 text-white">
        {/* Source summary row */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col gap-2.5">
              <span className="text-sm font-bold uppercase tracking-wider text-[#F4A261]">
                {c.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-[32px] font-bold text-white">
                {c.marketName}
              </h2>
            </div>
            <StatusUnavailableBadge dark className="self-start sm:self-auto" />
          </div>
        </Reveal>

        {/* Unavailable main statement */}
        <Reveal delay={0.05}>
          <p className="max-w-[1100px] text-lg sm:text-[20px] font-normal leading-[1.5em] text-white">
            {c.explanation}
          </p>
        </Reveal>

        {/* Source context cards */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xs p-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {c.fields.map((field) => (
              <div key={field.label} className="flex flex-col gap-2">
                <span className="text-[13px] font-semibold text-[#D9D0DF]">
                  {field.label}
                </span>
                <span className="text-base font-normal leading-[1.5em] text-white">
                  {field.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Note */}
        <Reveal delay={0.15}>
          <p className="text-sm font-normal leading-[1.55em] text-[#D9D0DF]">
            {c.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
