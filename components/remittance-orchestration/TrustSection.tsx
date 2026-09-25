"use client";

import React from "react";

export default function TrustSection() {
  const cards = [
    {
      title: "Trust Architecture",
      items: [
        "Deterministic execution governed by explicit facts and versions",
        "Explicit uncertainty and unknowns stay visible, not silently guessed",
        "Tenant isolation protects each customer context",
      ],
    },
    {
      title: "Security & Privacy",
      items: [
        "Sensitive payment data is protected, not held or transmitted",
        "Privacy controls are enforced across instruction metadata and evidence",
        "Security practices are documented and reviewed regularly",
      ],
    },
    {
      title: "Sensitive Data",
      items: [
        "Bank references and treasury destinations are configured by your team",
        "No real account numbers or settlement credentials are stored in the system",
        "AI recommendations remain advisory and never execute payment actions",
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          TRUST, SECURITY, PRIVACY &amp; SENSITIVE PAYMENT DATA
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Sensitive payment data is handled with care.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          The platform is designed to protect sensitive payment data, preserve privacy, and maintain security controls without turning the system into a money transmitter or payment processor.
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
