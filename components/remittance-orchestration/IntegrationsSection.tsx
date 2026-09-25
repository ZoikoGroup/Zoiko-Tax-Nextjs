"use client";

import React from "react";

export default function IntegrationsSection() {
  const cards = [
    {
      title: "Billing & BSS",
      items: [
        "Inherit approved liability amounts from billing and rating systems",
        "Prepare remittance instructions aligned to billing cycles and periods",
        "Preserve billing metadata in the instruction audit trail",
      ],
    },
    {
      title: "ERP & General Ledger",
      items: [
        "Export approved instructions to treasury systems and ERP ledgers",
        "Support reconciliation between approved liability and ledger outcomes",
        "Preserve ledger references in the instruction evidence manifest",
      ],
    },
    {
      title: "Existing Tax Engines",
      items: [
        "Coexist with incumbent engines through federated operating modes",
        "Support Shadow Assurance for comparator-based transition planning",
        "Preserve engine-specific rules and content in the evidence trail",
      ],
    },
  ];

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 bg-purple-50 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          INTEGRATIONS &amp; COEXISTENCE
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Fit the architecture you already operate.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          Remittance Orchestration integrates with billing, ERP, treasury systems, and incumbent tax engines to preserve existing workflows while modernizing fiscal compliance.
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
