"use client";

import React from "react";

export default function HistoricalReplaySection() {
  const cards = [
    {
      title: "Replay Manifest",
      items: [
        "Input facts and liability source",
        "Validation results and readiness gates",
        "Approval history and segregation of duties",
      ],
    },
    {
      title: "Audit Trail",
      items: [
        "Handoff evidence and acknowledgement references",
        "Settlement confirmation and reconciliation match",
        "Versioned rules and content used for the instruction",
      ],
    },
    {
      title: "Historical Replay",
      items: [
        "Reconstruct the instruction lifecycle from governed facts",
        "Support audit, dispute resolution, and treasury closure",
        "Preserve evidence for every instruction packet",
      ],
    },
  ];

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          EVIDENCE, AUDITABILITY &amp; HISTORICAL REPLAY
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Every instruction can be reconstructed from governed facts.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          The platform preserves a replay manifest that connects the original liability source, validation results, approval history, handoff evidence, and settlement confirmation.
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
    </section>
  );
}
