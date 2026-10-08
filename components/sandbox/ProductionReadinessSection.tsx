"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const requirements = [
  "Production Coverage",
  "Security / compliance certification",
  "Contractual entitlement",
  "Production credential issuance",
  "Regulator readiness",
  "Performance or SLA evidence",
];

export default function ProductionReadinessSection() {
  return (
    <section className="relative w-full bg-[#48206E] overflow-hidden">
      {/* Background artwork with purple tinted overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/sandbox/ef9071e3483d5480a46d9d857ae6490b4c20b172.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#48206E]/95 via-[#48206E]/90 to-[#48206E]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#FFA785] font-['Inter',sans-serif]">
            PRODUCTION READINESS BOUNDARY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-white tracking-tight font-['Inter',sans-serif]">
            A successful test is not production readiness.
          </h2>
          <p className="text-base sm:text-lg text-[#D8CEDD] font-normal leading-relaxed font-['Inter',sans-serif]">
            Non-production results are learning and integration evidence in their governed context — never automatic permission to operate live.
          </p>
        </div>

        {/* Dark Box Container */}
        <div className="w-full p-6 sm:p-8 lg:p-10 bg-[#1A0B2E] rounded-3xl border border-white/10 flex flex-col items-start gap-6 shadow-2xl backdrop-blur-sm">
          <span className="inline-block px-3 py-1 bg-white/10 text-[#FFA785] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
            NO AUTOMATIC PROMOTION · NO CERTIFICATION STATUS
          </span>

          {/* 6 Requirements Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pt-2">
            {requirements.map((req) => (
              <div key={req} className="flex items-center gap-3">
                <Image
                  src="/sandbox/minus-circle.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 shrink-0 object-contain"
                />
                <span className="text-base sm:text-lg font-medium text-white font-['Inter',sans-serif]">
                  {req}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#D8CEDD] font-normal leading-relaxed font-['Inter',sans-serif] pt-2">
            A certification path may exist only where separately established. No badge, default pass criteria or automatic promotion is implied.
          </p>
        </div>

        {/* Bottom Actions & Disclaimer */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-2">
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="/coverage/"
              className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2 font-['Inter',sans-serif]"
            >
              <span>Verify Coverage</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/trust/"
              className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2 font-['Inter',sans-serif]"
            >
              <span>Review Trust</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Disclaimer & Link */}
          <div className="flex flex-col items-start lg:items-end gap-1">
            <span className="text-xs sm:text-sm text-[#D8CEDD] font-normal font-['Inter',sans-serif]">
              Review exact contracts and controlled implementation/commercial readiness.
            </span>
            <a
              href="/developers/integration-guides/"
              className="text-sm font-semibold text-[#FFA785] hover:underline font-['Inter',sans-serif]"
            >
              Explore Integration Guides ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
