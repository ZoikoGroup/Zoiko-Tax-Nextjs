"use client";

import React from "react";
import Image from "next/image";

export default function ExceptionsSection() {
  const cards = [
    {
      num: "01",
      title: "Validation Exceptions",
      desc: "Route blocked packets to reviewers with clear failure reasons and evidence.",
    },
    {
      num: "02",
      title: "Rejection Handling",
      desc: "Capture rejection reasons from treasury and preserve them in the instruction history.",
    },
    {
      num: "03",
      title: "Cancellation & Supersession",
      desc: "Support cancellation and supersession with immutable audit records and versioned evidence.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Exceptions Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            EXCEPTIONS, REJECTIONS, CANCELLATIONS &amp; SUPERSESSION
          </div>
          <h2 className="self-stretch justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            Exceptions are handled with governed workflows.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            When an instruction fails validation, is rejected by treasury, or needs cancellation, the platform routes it into a controlled exception flow that preserves auditability and prevents loss of context.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.num}
              className="p-6 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3"
            >
              <div className="justify-start text-orange-300 text-xs font-bold">
                {c.num}
              </div>
              <div className="self-stretch justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
                {c.title}
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-xs font-normal leading-relaxed">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
