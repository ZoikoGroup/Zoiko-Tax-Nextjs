"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Layers, Waypoints } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function IntegrationsSection() {
  const integrationCards = [
    {
      num: "01",
      title: "Billing / BSS",
      desc: "Invoices, usage, adjustments and account facts",
    },
    {
      num: "02",
      title: "Host / operator dependency",
      desc: "Available network, usage and settlement context",
    },
    {
      num: "03",
      title: "OSS / product catalog",
      desc: "Offers, bundles, service attributes and lifecycle state",
    },
    {
      num: "04",
      title: "ERP / General Ledger",
      desc: "Accounting positions and reconciliation context",
    },
    {
      num: "05",
      title: "Existing tax engines",
      desc: "Federated request, result and evidence comparison",
    },
    {
      num: "06",
      title: "E-Invoicing networks",
      desc: "Supported document and response orchestration",
    },
    {
      num: "07",
      title: "Data / batch",
      desc: "Governed bulk exchange patterns",
    },
    {
      num: "08",
      title: "Events / webhooks",
      desc: "Controlled state and workflow notifications",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Integrations + developer fit
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Fit governed fiscal control into the billing, host-operator and enterprise systems supporting the MVNO.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Use conceptual integration families to plan fact exchange and workflow boundaries without assuming a universal host integration, vendor-specific connector, contractual allocation or internal topology.
          </p>
        </div>

        {/* 8 Integration Cards in 2 rows of 4 */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {integrationCards.map((card) => (
            <div
              key={card.num}
              className="min-h-40 p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-3 shadow-sm transition-transform hover:-translate-y-0.5 duration-150"
            >
              <div className="self-stretch flex justify-between items-center">
                <span className="justify-start text-orange-600 text-[10px] font-normal font-['Roboto_Mono']">
                  {card.num}
                </span>
                <Waypoints className="w-4 h-4 text-orange-600" strokeWidth={1.8} />
              </div>
              <h3 className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-4">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-xl">
          <div className="flex-1 flex flex-col justify-start items-start gap-3.5">
            <span className="justify-start text-orange-300 text-xs font-normal font-['Roboto_Mono'] tracking-wider">
              GOVERNED INTERFACES
            </span>
            <h3 className="self-stretch justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight">
              Build against explicit contracts and supported capability states.
            </h3>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">
              Documentation should define required facts, validation, versioning, states and evidence—not imply an endpoint or connector that has not been approved.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-2.5 w-full sm:w-auto">
            <Link
              href="#developer-resources"
              className="h-12 px-5 bg-white/10 hover:bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-2.5 transition-colors group"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Explore Developer Resources
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Link
              href="#api-documentation"
              className="h-12 px-5 bg-white/10 hover:bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/30 flex justify-center items-center gap-2.5 transition-colors group"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Read API Documentation
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
