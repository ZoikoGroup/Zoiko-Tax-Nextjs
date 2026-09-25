"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function CoverageSection() {
  const cards = [
    {
      title: "Pack Available",
      items: [
        "Capability is supported and activated in the market pack",
        "Rules, content, and obligations are governed and versioned",
        "Evidence and replay are preserved for every instruction",
      ],
    },
    {
      title: "Discovery Required",
      items: [
        "Capability is not yet activated for the selected market",
        "Configuration, data-residency, and integration readiness must be assessed",
        "Availability is scoped to the specific market pack and operating mode",
      ],
    },
    {
      title: "Supported Configuration",
      items: [
        "Capability is available with specific configuration or operating-mode constraints",
        "Rules and content are governed, but deployment choices are limited",
        "Evidence and replay are preserved within the supported scope",
      ],
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Coverage Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              COVERAGE &amp; AVAILABILITY TRUTH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Capability is activated through governed packs.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300">
              Coverage is not universal. Each market pack is onboarded individually with jurisdiction-specific configuration, compliance validation, and readiness states.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start items-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-normal text-zinc-300 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
