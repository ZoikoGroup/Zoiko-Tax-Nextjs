"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionSection() {
  return (
    <section className="relative isolate w-full overflow-hidden py-20 sm:py-24 lg:py-28 flex items-center justify-center min-h-[520px]">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Conversion Image Treatment.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
            CONTROL THE HANDOFF FROM LIABILITY TO RECONCILIATION
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            See how governed remittance orchestration fits your telecom fiscal operating model.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-normal text-zinc-300 max-w-3xl leading-relaxed">
            Connect approved liabilities, payment instructions, approvals, supported external handoff, evidence, and reconciliation without turning your platform into an ungoverned payment black box.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
            <Link
              href="#demo"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#BF6735] px-7 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-all hover:bg-[#DD7235] active:scale-95"
            >
              Book a Demo
            </Link>
            <Link
              href="#coverage"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
            >
              View Coverage
            </Link>
            <Link
              href="#compliance"
              className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
            >
              Explore Compliance &amp; Filing
            </Link>
          </div>

          {/* Footnote */}
          <p className="pt-2 text-xs font-normal text-zinc-400 max-w-2xl">
            Exact operational scope is set within individual market pack license contracts. Public copy does not imply money transmitter licensing or asset fund custody.
          </p>
        </div>
      </div>
    </section>
  );
}
