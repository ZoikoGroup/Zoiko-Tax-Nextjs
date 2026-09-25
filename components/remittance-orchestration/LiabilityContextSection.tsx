"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function LiabilityContextSection() {
  const cards = [
    {
      title: "Liability Source",
      items: [
        "Determination output from a governed tax engine or native pack",
        "Approved filing return with locked liability amount and period",
        "Regulatory obligation with assigned payer, payee and due context",
      ],
    },
    {
      title: "Amount Integrity",
      items: [
        "Amount is inherited from the approved source, not recreated in the workflow",
        "Currency and rounding rules are preserved from the source liability",
        "Every instruction packet carries a unique immutable source reference",
      ],
    },
    {
      title: "Source Provenance",
      items: [
        "Instruction metadata links back to the originating filing pack",
        "Versioned rules and content are preserved in the instruction manifest",
        "Audit replay can reconstruct the source facts that generated the packet",
      ],
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Operational Challenges Section.png"
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
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              LIABILITY / AMOUNT / SOURCE CONTEXT
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              Remittance starts with a locked liability source.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
              Before any instruction is prepared, the platform must inherit a validated liability amount from a governed source. This ensures the downstream packet is tied to a specific filing return, regulatory obligation, and approved monetary outcome.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start items-start gap-5 rounded-2xl border border-[#D8CEDD] bg-white/95 p-6 sm:p-7 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#18141B]">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-normal text-[#18141B] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
