"use client";

import React from "react";

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
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 bg-purple-50 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          LIABILITY / AMOUNT / SOURCE CONTEXT
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Remittance starts with a locked liability source.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          Before any instruction is prepared, the platform must inherit a validated liability amount from a governed source. This ensures the downstream packet is tied to a specific filing return, regulatory obligation, and approved monetary outcome.
        </p>
      </div>

      <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4"
          >
            <h3 className="justify-start text-zinc-900 text-xl font-semibold font-['Sora'] leading-6">
              {card.title}
            </h3>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {card.items.map((item, i) => (
                <div
                  key={i}
                  className="self-stretch justify-start text-zinc-900 text-sm font-normal"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
