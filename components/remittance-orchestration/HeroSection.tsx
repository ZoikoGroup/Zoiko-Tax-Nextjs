"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldAlert } from "lucide-react";

export default function HeroSection() {
  const steps = [
    { num: "01. INHERIT", label: "Approved Liability" },
    { num: "02. PREPARE", label: "Draft Instruction" },
    { num: "03. VALIDATE", label: "Readiness Check" },
    { num: "04. APPROVE", label: "Segregated Sign-Off" },
    { num: "05. HANDOFF", label: "External Export", active: true },
    { num: "06. RECONCILE", label: "Match & Evidence", muted: true },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 pt-16 pb-20 relative bg-gradient-to-b from-rose-100 to-purple-50 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Hero Background Image (1).png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch justify-start text-orange-600 text-sm font-bold font-['Sora'] uppercase tracking-wider">
          TELECOM REMITTANCE ORCHESTRATION
        </div>
        <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Sora'] leading-tight lg:leading-[63px]">
          Govern remittance instructions and approvals without losing control.
        </h1>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium leading-8">
          ZoikoTax connects approved telecom fiscal liabilities to governed remittance instructions, readiness checks, approvals, supported external handoff and evidence — without positioning the platform as the holder or transmitter of customer funds.
        </p>
        <p className="self-stretch justify-start text-zinc-900 text-base font-medium">
          Keep the amount, authority, due context, instruction version, approval history and external confirmation references connected through reconciliation.
        </p>

        <div className="self-stretch inline-flex flex-wrap justify-start items-center gap-4 pt-1">
          <Link
            href="#demo"
            className="h-12 px-6 bg-amber-700 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00),inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] flex justify-start items-center text-neutral-50 text-sm font-semibold transition-colors hover:bg-amber-600"
          >
            Book a Demo
          </Link>
          <Link
            href="#coverage"
            className="h-12 px-6 bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center text-zinc-900 text-sm font-semibold transition-colors hover:bg-white"
          >
            View Current Coverage
          </Link>
          <Link
            href="#compliance"
            className="h-12 px-6 bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center text-zinc-900 text-sm font-semibold transition-colors hover:bg-white"
          >
            Explore Compliance &amp; Filing
          </Link>
        </div>

        <div className="self-stretch justify-start text-neutral-600 text-xs font-normal">
          Built for governed telecom fiscal operations • Capability varies by activated market pack and operating mode. ZoikoTax is not a money transmitter or payment system.
        </div>
      </div>

      {/* Governed Control Chain Boundary Card */}
      <div className="self-stretch p-6 sm:p-7 bg-indigo-950 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-5">
        <div className="self-stretch justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
          Governed Control Chain Boundary
        </div>

        <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center gap-2">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div
                className={`flex-1 min-w-[120px] p-3 rounded-lg flex flex-col justify-start items-start gap-1 ${
                  step.active
                    ? "bg-orange-600/20 outline outline-1 outline-offset-[-1px] outline-orange-600"
                    : "bg-white/5"
                }`}
              >
                <div
                  className={`text-xs uppercase font-semibold ${
                    step.active
                      ? "text-orange-600 font-bold"
                      : step.muted
                      ? "text-zinc-300"
                      : "text-orange-300"
                  }`}
                >
                  {step.num}
                </div>
                <div
                  className={`text-xs font-semibold ${
                    step.muted ? "text-zinc-300" : "text-neutral-50"
                  }`}
                >
                  {step.label}
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:flex size-3.5 justify-center items-center shrink-0">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-300" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* System Boundary Callout */}
        <div className="self-stretch p-3 bg-zinc-900 rounded-lg inline-flex items-start sm:items-center gap-2.5">
          <ShieldAlert className="size-4 shrink-0 text-orange-300 mt-0.5 sm:mt-0" />
          <div className="flex-1 justify-start">
            <span className="text-neutral-50 text-xs font-bold">
              System boundary:{" "}
            </span>
            <span className="text-zinc-300 text-xs font-normal">
              ZoikoTax generates verified structures but does not directly hold client deposits, manage cash ledger accounts, or connect directly to sovereign payment rails. All monetary settlement takes place via your authorized banking institutions. AI recommendation components run strictly out-of-band and cannot sign instructions.
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
