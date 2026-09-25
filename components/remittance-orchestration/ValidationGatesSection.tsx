"use client";

import React from "react";
import Image from "next/image";

export default function ValidationGatesSection() {
  const gates = [
    {
      num: "01",
      title: "Scope / Coverage",
      desc: "Verify the instruction is supported by the active market pack and regulatory rules.",
    },
    {
      num: "02",
      title: "Source Integrity",
      desc: "Confirm the amount and liability source match the approved filing return.",
    },
    {
      num: "03",
      title: "Payee Details",
      desc: "Validate destination addresses, bank references, and regulatory identifiers.",
    },
    {
      num: "04",
      title: "Segregation",
      desc: "Confirm the packet is ready for dual-signature review before approval is requested.",
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Validation Background Image.png"
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
              VALIDATION &amp; READINESS GATES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Readiness is checked before approval is requested.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300">
              Validation gates verify the instruction packet is complete, compliant, and ready for sign-off. This prevents incomplete or unsupported packets from entering the approval flow.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gates.map((g) => (
              <div
                key={g.num}
                className="flex flex-col justify-start items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              >
                <span className="text-xs sm:text-sm font-bold text-[#F4A261]">
                  {g.num}
                </span>
                <h3 className="text-lg font-semibold text-white">
                  {g.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
