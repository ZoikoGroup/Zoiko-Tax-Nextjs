"use client";

import React from "react";
import Image from "next/image";

const principles = [
  {
    title: "Prefer synthetic fixtures",
    desc: "The demonstrations below use descriptive placeholders, not executable payloads or real identifiers.",
  },
  {
    title: "Use approved fixtures only when governed",
    desc: "Approval, handling and retention come from the exact contract; no retention policy is implied here.",
  },
  {
    title: "Keep context public-safe",
    desc: "Preserve only safe route or controlled topic context. Never carry payloads or private data into search, links or analytics.",
  },
];

export default function DataSafetySection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Diamond Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[url('/status-and-releases/pattern-bg.png')] bg-repeat bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            DATA SAFETY · BEFORE ANY SAMPLE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Synthetic first. Sensitive data never.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Use synthetic data by default. Approved fixtures are acceptable only when their use is explicitly governed.
          </p>
        </div>

        {/* Warning Alert Card */}
        <div className="w-full p-6 sm:p-8 bg-[#FFF6F0] rounded-2xl border border-[#FBD6C6] flex items-start gap-5 sm:gap-6 shadow-sm">
          <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 relative">
            <Image
              src="/sandbox/shield-alert.png"
              alt=""
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex-1 flex flex-col items-start gap-3 sm:gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C] font-['Inter',sans-serif]">
              STOP IF DATA CLASSIFICATION IS UNCERTAIN
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif] leading-snug">
              Do not paste, submit or upload regulated or private data.
            </h3>

            <p className="text-sm sm:text-base font-normal leading-relaxed text-[#18141B] font-['Inter',sans-serif]">
              No real subscribers or customers, tax filings or returns, invoice payloads, secrets, credentials or certificates, tenant or account identifiers, private logs, traces or operational information.
            </p>

            <p className="text-sm sm:text-base font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
              Safe default: use synthetic data and seek controlled implementation/security guidance. Do not upload regulated data while classification is unresolved. No upload functionality is shown here.
            </p>

            <a
              href="/trust/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#D65A2C] hover:underline font-['Inter',sans-serif] pt-1"
            >
              Review Trust guidance ↗
            </a>
          </div>
        </div>

        {/* 3 Principles / Feature Columns */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 pt-2">
          {principles.map((principle) => (
            <div key={principle.title} className="flex flex-col items-start gap-2.5">
              <h4 className="text-lg sm:text-xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                {principle.title}
              </h4>
              <p className="text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
