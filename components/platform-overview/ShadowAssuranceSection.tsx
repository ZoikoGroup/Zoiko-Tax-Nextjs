"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./shared";

const shadowAssuranceSteps = [
  {
    step: "01 CONNECT",
    text: "Mirror transaction facts securely without altering primary BSS flow.",
  },
  {
    step: "02 COMPARE",
    text: "Examine calculations across tax, obligations, and reconciliation.",
  },
  {
    step: "03 DECIDE",
    text: "Identify variations and execute a controlled, gated migration.",
  },
];

export default function ShadowAssuranceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#100030] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Image overlay with dark tone */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/platform-overview/Shadow Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-20 -z-10 size-[500px] rounded-full bg-purple-700/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-col gap-4">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
                  SHADOW ASSURANCE ADOPTION
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-[1.12] tracking-tight text-white">
                  Compare with confidence before you change production.
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-[#F7D7CB]/90">
                  Evaluate rules and track system behavior under live transaction loads. Production operations remain untouched until controlled cutover.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3 Step Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {shadowAssuranceSteps.map((item, index) => (
                <Reveal key={item.step} delay={0.1 + index * 0.08}>
                  <div className="flex h-full min-h-[190px] flex-col justify-start rounded-2xl border border-white/10 bg-[#1A093D]/90 p-6 shadow-xl backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#F4A261]/40">
                    <span className="font-mono text-xs font-bold tracking-wider text-[#F4A261]">
                      {item.step}
                    </span>
                    <p className="mt-3 text-xs sm:text-[13px] leading-relaxed text-zinc-300">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
