"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "./shared";

const DOCTRINE_POINTS = [
  {
    title: "Global architecture ≠ universal live support",
    description:
      "Architecture establishes a common control plane; it does not publish capability readiness.",
  },
  {
    title: "Capabilities activate independently",
    description:
      "Each workflow progresses through its own governed pack and release state.",
  },
  {
    title: "No state inheritance",
    description:
      "One capability never inherits the state of an adjacent capability.",
  },
  {
    title: "Scope and uncertainty stay visible",
    description:
      "Published boundaries and unresolved evidence remain part of the record.",
  },
  {
    title: "Unknown truth stays unknown",
    description:
      "When reliable truth cannot be published, the visible state is STATUS UNAVAILABLE.",
  },
];

export default function CoverageDoctrineSection() {
  return (
    <section className="relative w-full py-20 lg:py-24 bg-[#21053E] border-b border-[#3A145E]">
      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
                OPERATING DOCTRINE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white font-['Inter',sans-serif]">
                Global by design · Local by law
              </h2>

              <p className="text-base sm:text-lg font-normal leading-[1.55] text-[#D9D0DF]">
                A common platform can carry governed local truth without flattening market-specific scope or uncertainty.
              </p>
            </div>

            {/* Right Column - Doctrine Points */}
            <div className="lg:col-span-7 space-y-3">
              {DOCTRINE_POINTS.map((pt) => (
                <div
                  key={pt.title}
                  className="rounded-[16px] border border-white/10 bg-white/[0.05] p-5 sm:p-5.5 hover:bg-white/[0.08] transition-colors flex items-start gap-4"
                >
                  <div className="shrink-0 p-2 rounded-xl bg-[#F4A261]/15 text-[#F4A261]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-[16px] font-bold text-white">
                      {pt.title}
                    </h3>
                    <p className="text-sm sm:text-[14px] font-normal leading-[1.5] text-[#D9D0DF]">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
