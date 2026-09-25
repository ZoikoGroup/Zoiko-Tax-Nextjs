"use client";

import React from "react";

export default function ComplianceInterlockSection() {
  const cards = [
    {
      title: "Filing Return",
      items: [
        "Match the payment confirmation with the originating filing return",
        "Update the return status with settlement evidence",
        "Preserve the filing pack and versioned rules used for the return",
      ],
    },
    {
      title: "Regulatory Obligation",
      items: [
        "Close the regulatory obligation with payment confirmation",
        "Retain the obligation history and approval trail",
        "Support audit reconstruction of the obligation lifecycle",
      ],
    },
    {
      title: "Evidence Interlock",
      items: [
        "Include filing and obligation references in the instruction manifest",
        "Support replay of the compliance decision chain",
        "Preserve versioned rules and content for every filing obligation",
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 bg-purple-50 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          COMPLIANCE &amp; FILING INTERLOCK
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Remittance is linked back to filing obligations.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          When a payment is confirmed, the platform updates the corresponding filing return and regulatory obligation. This closes the compliance loop and supports audit-ready evidence.
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
