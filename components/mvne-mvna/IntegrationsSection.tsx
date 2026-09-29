"use client";

import React from "react";
import Link from "next/link";
import { Blocks, Layers } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function IntegrationsSection() {
  const cards = [
    {
      num: "01",
      title: "Billing / BSS",
      desc: "Service, charge and invoice context",
    },
    {
      num: "02",
      title: "Downstream tenant / operator context",
      desc: "Attribution and relationship facts",
    },
    {
      num: "03",
      title: "OSS / product catalog",
      desc: "Offer and service classification inputs",
    },
    {
      num: "04",
      title: "ERP / General Ledger",
      desc: "Governed accounting positions",
    },
    {
      num: "05",
      title: "Existing tax engines",
      desc: "Federated decision coexistence",
    },
    {
      num: "06",
      title: "E-Invoicing networks",
      desc: "Supported jurisdictional exchange",
    },
    {
      num: "07",
      title: "Data / batch",
      desc: "Controlled family-level intake",
    },
    {
      num: "08",
      title: "Events / webhooks",
      desc: "Governed operational signals",
    },
  ];

  const envelopeRows = [
    "tenant context",
    "legal entity",
    "relationship context",
    "jurisdiction + authority",
    "evidence reference",
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Integrations + developer fit
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Fit governed fiscal control into the multi-tenant billing, enabling-platform and enterprise systems supporting MVNEs &amp; MVNAs.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Integration patterns are conceptual and support varies by downstream system, jurisdiction and capability. They do not imply universal integrations, contractual allocation, vendor-specific connectors or internal topology.
          </p>
        </div>

        {/* 8 Integration Cards in 2 rows of 4 */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card) => (
            <div
              key={card.num}
              className="min-h-36 p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-sm transition-transform hover:-translate-y-0.5 duration-150"
            >
              <div className="size-5 flex justify-center items-center">
                <Blocks className="size-5 text-orange-600" strokeWidth={1.8} />
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter'] leading-5">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Governed Developer Fit Callout Box */}
        <div className="self-stretch min-h-60 p-6 sm:p-9 bg-violet-950 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-xl">
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              GOVERNED DEVELOPER FIT
            </span>
            <h3 className="self-stretch justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
              Integrate context without hiding responsibility.
            </h3>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">
              Use supported interfaces and event patterns to carry platform, tenant, legal-entity and evidence context. Documentation—not illustrative endpoints—defines the contract.
            </p>
            <div className="flex flex-wrap justify-start items-start gap-3 pt-1">
              <Link
                href="#developer-resources"
                className="h-12 px-5 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
              >
                <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                  Explore Developer Resources
                </span>
              </Link>
              <Link
                href="#api-docs"
                className="h-12 px-5 bg-transparent hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center shadow-sm transition-colors"
              >
                <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                  Read API Documentation
                </span>
              </Link>
            </div>
          </div>

          {/* Context Envelope Box */}
          <div className="w-full lg:w-96 p-5 bg-slate-900 rounded-2xl flex flex-col justify-start items-start gap-3 shadow-md shrink-0">
            <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              CONTEXT ENVELOPE
            </span>
            <div className="self-stretch flex flex-col justify-start items-start divide-y divide-white/10">
              {envelopeRows.map((row) => (
                <div key={row} className="self-stretch py-2.5 flex justify-between items-center">
                  <span className="justify-start text-white text-xs font-normal font-['Roboto_Mono']">
                    {row}
                  </span>
                  <span className="justify-start text-orange-300 text-[10px] font-normal font-['Roboto_Mono']">
                    GOVERNED
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
