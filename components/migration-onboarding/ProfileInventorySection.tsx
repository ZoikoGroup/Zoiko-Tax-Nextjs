"use client";

import React from "react";
import Image from "next/image";

export default function ProfileInventorySection() {
  const topologyParams = [
    { label: "Entity Footprint:", val: "7 Registered Local Operating Units" },
    { label: "Integration Ports:", val: "BSS SOAP APIs, REST, Offline Batch" },
    { label: "Billing Engines:", val: "Amdocs, Custom Ledger DB v2" },
    { label: "Baseline Jurisdictions:", val: "US State, Federal, EU VAT" },
  ];

  const evidenceHealth = [
    { label: "Legacy Logs Integrity:", val: "Partial Gaps Detected", color: "text-orange-300" },
    { label: "Filing Accountability Map:", val: "Fully Defined", color: "text-white" },
    { label: "Exemption Certificates:", val: "Digitized / Hashed in System", color: "text-white" },
    { label: "Replay Readiness:", val: "Awaiting Simulation Phase", color: "text-orange-300" },
  ];

  return (
    <section className="w-full relative bg-gradient-to-r from-slate-900/90 via-indigo-950/80 to-indigo-950/70 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/migration-onboarding/Current State Profile.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center  mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase">
            Profiling Core
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Current-State Profile Inventory
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Map your existing architecture topology to identify integration hooks, operational gaps, and system compliance baselines.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="p-6 bg-violet-950/90 border border-violet-900/50 rounded-2xl flex flex-col justify-start items-start gap-4 backdrop-blur-sm shadow-md">
            <div className="justify-start text-white text-lg font-bold font-['Inter']">
              TOPOLOGY PARAMETERS
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {topologyParams.map((item) => (
                <div key={item.label} className="text-sm font-['Inter'] leading-relaxed">
                  <span className="text-zinc-300 font-normal">{item.label} </span>
                  <span className="text-white font-semibold">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-violet-950/90 border border-violet-900/50 rounded-2xl flex flex-col justify-start items-start gap-4 backdrop-blur-sm shadow-md">
            <div className="justify-start text-white text-lg font-bold font-['Inter']">
              EVIDENCE HEALTH STATUS
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {evidenceHealth.map((item) => (
                <div key={item.label} className="text-sm font-['Inter'] leading-relaxed">
                  <span className="text-zinc-300 font-normal">{item.label} </span>
                  <span className={`font-semibold ${item.color}`}>{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
