"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Sparkles, Focus } from "lucide-react";
import { Reveal } from "./shared";

const LIFECYCLE_STAGES = [
  { name: "Receive", isCurrent: false },
  { name: "Classify", isCurrent: false },
  { name: "Attribute", isCurrent: false },
  { name: "Determine", isCurrent: false },
  { name: "Obligate", isCurrent: false },
  { name: "Comply", isCurrent: true },
  { name: "Reconcile / Prove", isCurrent: false },
];

const SEQUENCE_STEPS = [
  {
    num: "01",
    title: "Underlying production capability",
    desc: "Required software capability is current and PRODUCTION.",
  },
  {
    num: "02",
    title: "Approved operational-readiness gate",
    desc: "Operations are reviewed and approved for the exact scope.",
  },
  {
    num: "03",
    title: "Approved managed-service scope",
    desc: "Only explicit qualifiers may be shown publicly.",
  },
  {
    num: "04",
    title: "Governed execution and evidence",
    desc: "Execution follows approved controls with replayable evidence.",
  },
];

export default function HowManagedComplianceFitsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E011C] border-b border-[#2A0E45] py-10 sm:py-12 lg:py-16 text-white">
      {/* Background Image from Figma - High-resolution crisp boardroom with exact Figma lighting and tint */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/managed-compliance-coverage/lifecycle-architecture-bg.png"
          alt="Lifecycle architecture conference background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-8 space-y-6 lg:space-y-7 xl:space-y-8">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col gap-3 sm:gap-4 w-full">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#F4A261]">
              HOW MANAGED COMPLIANCE FITS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold leading-[1.15] tracking-tight text-white font-['Inter',sans-serif]">
              One readiness view inside a governed fiscal lifecycle.
            </h2>
            <p className="text-sm sm:text-base lg:text-[18px] xl:text-[20px] font-normal leading-[1.5] text-[#D9D0DF] max-w-5xl">
              This page reports only Managed Compliance readiness. It does not restate or collapse the independent state of every adjacent capability.
            </p>
          </div>
        </Reveal>

        {/* Lifecycle Panel */}
        <Reveal delay={0.1}>
          <div className="rounded-[26px] border border-white/[0.125] bg-white/[0.051] backdrop-blur-md p-6 sm:p-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-[18px] font-bold text-white">
                Fiscal lifecycle context
              </h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-[7px] rounded-full bg-[#EEE4F6] text-[#301153]">
                <Focus className="w-3.5 h-3.5 text-[#301153] shrink-0" strokeWidth={1.8} />
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#301153]">
                  REPORTS MANAGED COMPLIANCE READINESS ONLY
                </span>
              </div>
            </div>

            {/* Stages Row with Chevrons */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 w-full">
              {LIFECYCLE_STAGES.map((st, idx) => (
                <React.Fragment key={idx}>
                  <div
                    className={`flex-1 min-w-[110px] h-[43px] flex items-center justify-center rounded-[8px] px-2.5 text-[12px] font-bold transition-all text-center select-none ${
                      st.isCurrent
                        ? "bg-[#BF6735] border border-[#F4A261] text-white shadow-sm flex-[1.2]"
                        : "bg-white/[0.063] border border-white/[0.125] text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{st.name}</span>
                  </div>
                  {idx < LIFECYCLE_STAGES.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#D9D0DF]/60 shrink-0 hidden lg:block" strokeWidth={1.7} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Two-Gate Sequence (The 4 Step Cards with Arrows) */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:items-center gap-2.5 w-full">
            {SEQUENCE_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 rounded-[12px] border border-white/[0.14] bg-white/[0.07] backdrop-blur-xs p-[18px] min-h-[141px] flex flex-col justify-between space-y-2">
                  <span className="text-[11px] font-bold text-[#F4A261]">
                    {step.num}
                  </span>
                  <h4 className="text-[17px] font-bold text-white leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[12px] leading-relaxed text-[#D9D0DF]">
                    {step.desc}
                  </p>
                </div>
                {idx < SEQUENCE_STEPS.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center text-[#F4A261] px-1 shrink-0">
                    <ArrowRight className="w-5 h-5 text-[#F4A261]" strokeWidth={2} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>

        {/* AI Authority Disclosure (White Card on Dark) */}
        <Reveal delay={0.3}>
          <div className="rounded-[16px] bg-white p-6 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-[#18141B]">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-[12px] bg-[#EEE4F6] flex items-center justify-center text-[#301153] shrink-0">
                <Sparkles className="w-5 h-5 text-[#301153]" strokeWidth={1.8} />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-[18px] font-bold text-[#18141B]">
                  AI may assist. It is never fiscal authority.
                </h4>
                <p className="text-xs sm:text-[14px] leading-relaxed text-[#665F69]">
                  AI may assist research, extraction, investigation and explanation, but it is never the source of law or autonomous compliance authority.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <Link
                href="/trust"
                className="inline-flex items-center justify-center rounded-full border border-[#D8CEDD] bg-white px-5 py-3 text-sm font-semibold text-[#18141B] hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all"
              >
                <span>View Trust</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
