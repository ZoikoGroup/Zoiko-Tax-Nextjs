"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ConversionSection() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-20 sm:py-24 relative bg-slate-900 flex flex-col justify-start items-center gap-12 overflow-hidden">
      {/* Background Image & Gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Conversion Image Treatment.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-center gap-12">
        <div className="self-stretch flex flex-col justify-start items-center gap-5 text-center">
          <div className="self-stretch text-center justify-start text-orange-300 text-sm font-bold font-['Sora'] uppercase tracking-wider">
            CONTROL THE HANDOFF FROM LIABILITY TO RECONCILIATION
          </div>
          <h2 className="self-stretch text-center justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px] max-w-8xl mx-auto">
            See how governed remittance orchestration fits your<br/> telecom fiscal operating model.
          </h2>
          <p className="self-stretch text-center justify-start text-zinc-300 text-base sm:text-lg font-normal max-w-8xl mx-auto leading-relaxed">
            Connect approved liabilities, payment instructions, approvals, supported external handoff, evidence, and reconciliation without turning your platform<br/> into an ungoverned payment black box.
          </p>
        </div>

        <div className="self-stretch inline-flex flex-wrap justify-center items-center gap-4">
          <Link
            href="#demo"
            className="h-12 px-6 bg-amber-700 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00),inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] flex justify-start items-center text-neutral-50 text-sm font-semibold hover:bg-amber-600 transition-colors"
          >
            Book a Demo
          </Link>
          <Link
            href="#coverage"
            className="h-12 px-6 bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-start items-center text-neutral-50 text-sm font-semibold hover:bg-white/20 transition-colors"
          >
            View Coverage
          </Link>
          <Link
            href="#compliance"
            className="h-12 px-6 bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/10 flex justify-start items-center text-neutral-50 text-sm font-semibold hover:bg-white/20 transition-colors"
          >
            Explore Compliance &amp; Filing
          </Link>
        </div>

        <div className="self-stretch text-center justify-start text-zinc-300 text-xs font-normal max-w-2xl mx-auto">
          Exact operational scope is set within individual market pack license contracts. Public copy does not imply money transmitter licensing or asset fund custody.
        </div>
      </div>
    </section>
  );
}
