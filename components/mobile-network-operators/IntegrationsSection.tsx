"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";
import { ArrowUpRight, Cpu, PlugZap } from "lucide-react";

export default function IntegrationsSection() {
  const integrations = [
    { title: "Billing / BSS", desc: "Transaction and invoice context" },
    { title: "OSS / product catalog", desc: "Offer, product and service facts" },
    { title: "ERP / General Ledger", desc: "Accounting and entity positions" },
    { title: "Existing tax engines", desc: "Federated outcomes and comparison" },
    { title: "E-Invoicing networks", desc: "Supported document and status exchange" },
    { title: "Data / batch", desc: "Controlled high-volume exchange" },
    { title: "Events / webhooks", desc: "Governed state notifications" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Integrations and developers
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
            Fit governed fiscal control into the systems already running the carrier.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Connect by controlled APIs, events, files and batch patterns without making vendor-specific connector or endpoint claims.
          </p>
        </div>

        {/* 7 Cards Grid */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-2.5 shadow-xs min-h-28"
            >
              <div className="flex items-center gap-2.5">
                <PlugZap className="w-4 h-4 text-orange-600 shrink-0" />
                <div className="text-zinc-900 text-base font-bold font-['Inter']">
                  {item.title}
                </div>
              </div>
              <div className="self-stretch text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3">
          <Link
            href="#developers"
            className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
          >
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
              Explore Developer Resources
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#api-docs"
            className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
          >
            <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
              Read API Documentation
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
