"use client";

import React from "react";

export default function TrackingSection() {
  const cards = [
    {
      title: "Acknowledgement",
      items: [
        "Capture acknowledgement timestamps from the treasury portal or banking gateway",
        "Store acknowledgement references for audit and reconciliation",
        "Update the instruction state to reflect handoff acknowledgement",
      ],
    },
    {
      title: "Settlement Confirmation",
      items: [
        "Match settlement confirmation with the approved liability amount",
        "Preserve settlement timestamps and confirmation references",
        "Close the instruction lifecycle with durable settlement evidence",
      ],
    },
    {
      title: "Evidence Manifest",
      items: [
        "Include acknowledgement and settlement references in the replay manifest",
        "Support audit reconstruction from instruction creation to final confirmation",
        "Preserve versioned rules, content, and approval history for every packet",
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          ACKNOWLEDGEMENT &amp; SETTLEMENT-CONFIRMATION TRACKING
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Handoff is not the same as settlement confirmation.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          After export, the platform tracks acknowledgement and settlement confirmation references. This keeps the instruction registry aligned with the external treasury outcome.
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
