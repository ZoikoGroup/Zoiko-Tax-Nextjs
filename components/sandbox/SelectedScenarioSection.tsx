"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const walkthroughSteps = [
  {
    num: "01",
    title: "Confirm the contract",
    desc: "Locate the exact documented version and its prerequisites. Do not infer method, path, schema or auth.",
  },
  {
    num: "02",
    title: "Prepare a safe fixture",
    desc: "Use synthetic placeholders. Confirm approved fixture use separately when applicable.",
  },
  {
    num: "03",
    title: "Follow the documented concept",
    desc: "Read the conceptual action. Exercise it only in a separately enabled environment, under its contract.",
  },
  {
    num: "04",
    title: "Inspect and interpret",
    desc: "Compare conceptual states with documented behavior. Keep recovery and traceability contract-defined.",
  },
];

export default function SelectedScenarioSection() {
  return (
    <section className="relative w-full bg-[#181126] overflow-hidden">
      {/* Background artwork with dark atmospheric overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/sandbox/ef9071e3483d5480a46d9d857ae6490b4c20b172.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181126]/95 via-[#181126]/90 to-[#181126]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#FFA785] font-['Inter',sans-serif]">
            SELECTED SCENARIO
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-white tracking-tight font-['Inter',sans-serif]">
            Request / response, without invented contracts.
          </h2>
          <p className="text-base sm:text-lg text-[#D8CEDD] font-normal leading-relaxed font-['Inter',sans-serif]">
            Illustrative example · A conceptual walkthrough for understanding the relationship between a safe fixture, a documented action and an interpreted outcome.
          </p>
        </div>

        {/* Deep Violet Card Container */}
        <div className="w-full p-6 sm:p-8 lg:p-10 bg-[#281541] rounded-3xl border border-white/10 flex flex-col items-start gap-8 shadow-2xl backdrop-blur-sm">
          {/* Card Top Metadata */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <span className="inline-block px-3 py-1 bg-white/10 text-[#FFA785] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
              NON-PRODUCTION / ILLUSTRATIVE EXAMPLE
            </span>
            <span className="text-xs text-[#D8CEDD] font-['Inter',sans-serif]">
              Access: Separately governed · Currentness: Not published
            </span>
          </div>

          {/* 2-Column Split: Source Details + Walkthrough Steps */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-10 lg:gap-14">
            {/* Left Column: Metadata */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-2xl font-bold text-white font-['Inter',sans-serif]">
                Start with the source.
              </h3>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-xs font-semibold text-[#FFA785]">Identity</span>
                <span className="text-sm text-white/90">Request / response walkthrough</span>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-xs font-semibold text-[#FFA785]">Purpose</span>
                <span className="text-sm text-white/90">Understand an approved integration pattern conceptually.</span>
              </div>

              <a
                href="/developers/api/"
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#FFA785] hover:underline"
              >
                API Reference — authoritative contract ↗
              </a>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-xs font-semibold text-[#FFA785]">Prerequisites</span>
                <span className="text-sm text-white/90">Contract-defined / customer-specific</span>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-xs font-semibold text-[#FFA785]">Safe data</span>
                <span className="text-sm text-white/90">Synthetic placeholders; approved fixtures only where governed.</span>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <span className="text-xs font-semibold text-[#FFA785]">Correlation / traceability</span>
                <span className="text-sm text-white/90">Placeholder only — no real trace or account identifiers.</span>
              </div>
            </div>

            {/* Right Column: 4 Walkthrough Steps */}
            <div className="flex flex-col items-start gap-5">
              <h3 className="text-2xl font-bold text-white font-['Inter',sans-serif]">
                Read the conceptual walkthrough
              </h3>

              <div className="flex flex-col w-full">
                {walkthroughSteps.map((step) => (
                  <div
                    key={step.num}
                    className="py-4 border-b border-white/10 flex items-start gap-4 first:pt-0 last:border-b-0"
                  >
                    <span className="text-xl font-bold text-[#FFA785] shrink-0 font-['Inter',sans-serif]">
                      {step.num}
                    </span>
                    <div className="flex flex-col items-start gap-1">
                      <h4 className="text-lg font-bold text-white font-['Inter',sans-serif]">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-[15px] text-[#D8CEDD] leading-relaxed font-['Inter',sans-serif]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2 Inner Sub-Boxes: States & Failures */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
            <div className="p-6 bg-[#180C2C] rounded-2xl border border-white/10 flex flex-col items-start gap-2.5">
              <h4 className="text-lg font-bold text-white font-['Inter',sans-serif]">
                Expected conceptual states
              </h4>
              <p className="text-sm text-[#D8CEDD] leading-relaxed font-['Inter',sans-serif]">
                Prepared → Ready to test (conceptual only) → Validating → Processing → Completed (non-production). The exact sequence and meaning stay contract-defined.
              </p>
            </div>

            <div className="p-6 bg-[#180C2C] rounded-2xl border border-white/10 flex flex-col items-start gap-2.5">
              <h4 className="text-lg font-bold text-white font-['Inter',sans-serif]">
                Failure &amp; degraded paths
              </h4>
              <p className="text-sm text-[#D8CEDD] leading-relaxed font-['Inter',sans-serif]">
                Partial, Failed, Restricted, Temporarily unavailable or Unknown. Stop when unsafe or uncertain; use authoritative recovery guidance.
              </p>
            </div>
          </div>

          {/* Production Implication */}
          <p className="text-sm sm:text-base font-semibold text-[#FFA785] font-['Inter',sans-serif]">
            Production implication: None. Review Coverage, entitlement and implementation readiness separately.
          </p>

          {/* Action Links & Pill Button */}
          <div className="w-full flex flex-wrap items-center gap-5 sm:gap-6 pt-1">
            <a
              href="/developers/api/"
              className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <span>Read API Reference</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/developers/integration-guides/"
              className="text-sm font-semibold text-[#FFA785] hover:underline"
            >
              Integration Guides ↗
            </a>
            <a
              href="/developers/changelog/"
              className="text-sm font-semibold text-[#FFA785] hover:underline"
            >
              API Changelog ↗
            </a>
            <a
              href="/demo/"
              className="text-sm font-semibold text-[#FFA785] hover:underline"
            >
              Controlled qualification · Book a Demo ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
