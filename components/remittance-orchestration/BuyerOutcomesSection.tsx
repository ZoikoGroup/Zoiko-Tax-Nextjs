"use client";

import React from "react";
import Image from "next/image";

export default function BuyerOutcomesSection() {
  const outcomes = [
    {
      num: "01",
      title: "Tax & Compliance",
      desc: "Defensible decisions and controlled obligations across telecom fiscal operations.",
    },
    {
      num: "02",
      title: "Finance",
      desc: "Close with reconciled fiscal truth and durable settlement evidence.",
    },
    {
      num: "03",
      title: "Revenue Assurance",
      desc: "Detect leakage and explain variance with governed fiscal evidence.",
    },
  ];

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Buyer Outcomes Background Image.png"
          alt=""
          fill
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            SALES / BUYER OUTCOMES / RETENTION LOGIC
          </div>
          <h2 className="self-stretch justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            Buyer outcomes are aligned to telecom fiscal operations.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            The platform supports teams accountable for tax, compliance, finance, billing, revenue assurance, product launch, and technology leadership.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
          {outcomes.map((o) => (
            <div
              key={o.num}
              className="p-6 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3"
            >
              <div className="justify-start text-orange-300 text-xs font-bold">
                {o.num}
              </div>
              <div className="self-stretch justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
                {o.title}
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-xs font-normal leading-relaxed">
                {o.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
