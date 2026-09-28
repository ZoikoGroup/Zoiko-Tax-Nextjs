"use client";

import React from "react";

export default function TreasuryBoundarySection() {
  const cards = [
    {
      title: "Payee & Channel",
      items: [
        "Payee details are validated against the approved filing return",
        "Channel selection is limited to supported export formats (ISO 20022, CSV, XML)",
        "Treasury destination is configured by your team, not by the platform",
      ],
    },
    {
      title: "Treasury Boundary",
      items: [
        "No custody of client funds, balances, or settlement accounts",
        "No direct connection to sovereign payment rails or clearing houses",
        "Final payment execution remains the responsibility of your treasury team",
      ],
    },
    {
      title: "Persistent Disclosure",
      items: [
        "No-custody and no-transmission are architectural properties, not badges",
        "Every instruction packet is exported for external handoff, not executed internally",
        "AI recommendations remain advisory and cannot sign off on payment instructions",
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          PAYEE, CHANNEL &amp; TREASURY BOUNDARY
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Payee, channel and treasury boundaries are explicit.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          The platform prepares the instruction structure, but the actual treasury execution remains outside the system boundary. This separation preserves no-custody, no-transmission, and no-autonomous settlement.
        </p>
      </div>

      <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-7 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4"
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
    </div>
    </section>
  );
}
