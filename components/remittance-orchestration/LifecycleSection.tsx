"use client";

import React from "react";
import Image from "next/image";

export default function LifecycleSection() {
  const stages = [
    { num: "01", title: "Inherit", desc: "Liability state locked" },
    { num: "02", title: "Prepare", desc: "Draft instruction built" },
    { num: "03", title: "Validate", desc: "Readiness criteria met" },
    { num: "04", title: "Review", desc: "Dual signatures validated" },
    { num: "05", title: "Approve", desc: "Irreversible state lock" },
    { num: "06", title: "Hand off", desc: "Structured package out" },
    { num: "07", title: "Observe", desc: "Handoff acknowledgement" },
    { num: "08", title: "Resolve", desc: "Handle manual exceptions" },
    { num: "09", title: "Reconcile", desc: "Filing match verify" },
    { num: "10", title: "Prove", desc: "Durable replay signed" },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Lifecycle Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              THE REMITTANCE LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Ten Stages of Controlled Handoff
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300">
              Instead of a single &quot;Pay Now&quot; trigger, ZoikoTax implements a rigorous state machine from determination output up to verified bank clearance.
            </p>
          </div>

          {/* 10 Stages Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span className="text-xs sm:text-sm font-bold text-[#F4A261]">
                  {stage.num}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-snug">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
