"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, AlertCircle } from "lucide-react";

export default function HeroSection() {
  const steps = [
    { num: "01. INHERIT", label: "Approved Liability" },
    { num: "02. PREPARE", label: "Draft Instruction" },
    { num: "03. VALIDATE", label: "Readiness Check" },
    { num: "04. APPROVE", label: "Segregated Sign-Off" },
    { num: "05. HANDOFF", label: "External Export", active: true },
    { num: "06. RECONCILE", label: "Match & Evidence" },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAF8FC] pt-14 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 flex flex-col justify-start">
      {/* Hero Background Image - Full Opacity Anchored to Right */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/remittance-orchestration/Hero Background Image (1).png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:gap-12">
          {/* Main Hero Header Content */}
          <div className="flex flex-col items-start gap-5 max-w-3xl lg:max-w-6xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              TELECOM REMITTANCE ORCHESTRATION
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              Govern remittance instructions and approvals without losing control.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-[#535055]">
              ZoikoTax connects approved telecom fiscal liabilities to governed remittance instructions, readiness checks, approvals, supported external handoff and evidence — without positioning the platform as the holder or transmitter of customer funds.
            </p>

            <p className="text-sm sm:text-base font-medium text-[#18141B] leading-normal">
              Keep the amount, authority, due context, instruction version, approval history and external confirmation references connected through reconciliation.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="#demo"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full bg-[#BF6735] px-6 text-sm font-semibold text-white outline outline-1 -outline-offset-1 outline-[#DD7235] shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-all hover:bg-[#DD7235] active:scale-95"
              >
                Book a Demo
              </Link>
              <Link
                href="#coverage"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
              >
                View Current Coverage
              </Link>
              <Link
                href="#compliance"
                className="inline-flex h-12 items-center justify-center whitespace-nowrap rounded-full border border-[#D8CEDD] bg-white px-6 text-sm font-semibold text-[#18141B] shadow-[0_2px_4px_0_rgba(0,0,0,0.06)] transition-all hover:bg-slate-50 hover:border-slate-400 active:scale-95"
              >
                Explore Compliance &amp; Filing
              </Link>
            </div>

            {/* Disclaimer Footnote */}
            <p className="pt-1 text-xs font-normal text-[#665F69]/90 leading-normal">
              Built for governed telecom fiscal operations • Capability varies by activated market pack and operating mode. ZoikoTax is not a money transmitter or payment system.
            </p>
          </div>

          {/* Governed Control Chain Boundary Card */}
          <div className="w-full rounded-3xl bg-[#1D033B] p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-white">
              Governed Control Chain Boundary
            </h3>

            {/* 6 Step Pipeline Flow with Chevrons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-2.5">
              {steps.map((step, idx) => (
                <React.Fragment key={step.num}>
                  <div
                    className={`flex-1 min-w-[130px] p-3 rounded-xl flex flex-col justify-start items-start gap-1 transition-all ${
                      step.active
                        ? "bg-[#D65A2C]/20 border border-[#D65A2C] shadow-lg shadow-[#D65A2C]/10"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${
                        step.active ? "text-[#D65A2C]" : "text-[#F4A261]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {step.label}
                    </span>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center px-1">
                      <ChevronRight className="h-4 w-4 text-[#F4A261]/60" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* System Boundary Callout */}
            <div className="flex items-start sm:items-center gap-3 rounded-xl bg-[#120224] border border-white/5 p-3.5 sm:p-4">
              <AlertCircle className="h-4 w-4 shrink-0 text-[#F4A261] mt-0.5 sm:mt-0" />
              <p className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-white font-semibold">System boundary: </strong>
                ZoikoTax generates verified structures but does not directly hold client deposits, manage cash ledger accounts, or connect directly to sovereign payment rails. All monetary settlement takes place via your authorized banking institutions. AI recommendation components run strictly out-of-band and cannot sign instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
