"use client";

import React from "react";
import Link from "next/link";
import {
  
  Layers,
  Webhook,
  ArrowUpRight,
  ReceiptText,
  Network,
  Boxes,
  GitCompare,
  BookOpen,
  Send,
  Database,
} from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function IntegrationsSection() {
  const integrations = [
    {
      title: "Billing / BSS",
      desc: "Supported billing facts, adjustments and invoice context",
      icon:ReceiptText,
    },
    {
      title: "Counterparty / operator context",
      desc: "Provider, counterparty, relationship and entity attribution",
      icon: Network,
    },
    {
      title: "OSS / product catalog",
      desc: "Controlled product, offer and service-class inputs",
      icon: Boxes,
    },
    {
      title: "ERP / General Ledger",
      desc: "Governed accounting positions and reconciliation references",
      icon: BookOpen,
    },
    {
      title: "Existing tax engines",
      desc: "Federated outcome comparison with explicit source boundaries",
      icon: GitCompare,
    },
    {
      title: "E-Invoicing networks",
      desc: "Supported network and mandate-specific exchange patterns",
      icon: Send,
    },
    {
      title: "Data / batch",
      desc: "Validated supported file and batch-family intake",
      icon: Database,
    },
    {
      title: "Events / webhooks",
      desc: "Supported event-family notifications and state changes",
      icon: Webhook,
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-[1200px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Integrations + developer fit
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Fit governed fiscal control into the inter-provider billing, enabling-platform and enterprise systems supporting Wholesale Carriers &amp; Aggregators.
          </h2>
          <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Integration patterns are capability-specific. They do not imply universal counterparty integration, contractual allocation, vendor-specific connectors or access to an operator’s internal topology.
          </p>
        </div>

        {/* 8 Integration Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {integrations.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="min-h-40 p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-3 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="size-6 flex items-center justify-center text-orange-600">
                  <Icon className="size-4" />
                </div>
                <div className="self-stretch flex flex-col gap-1">
                  <h3 className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter'] leading-5">
                    {item.title}
                  </h3>
                  <p className="self-stretch justify-start text-zinc-600 text-xs font-normal font-['Inter'] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Fit Banner */}
        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-xl">
          <div className="flex-1 flex flex-col justify-start items-start gap-3">
            <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              DEVELOPER FIT
            </span>
            <h3 className="self-stretch justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter']">
              Build to governed contracts, not invented endpoints.
            </h3>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-relaxed">
              Start with supported event families, schemas, validation behavior, states and evidence requirements documented for the activated capability.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Link
              href="#developer-resources"
              className="h-12 px-5 bg-white hover:bg-zinc-100 rounded-[999px] flex justify-center items-center gap-2 transition-colors shadow-sm"
            >
              <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
                Explore Developer Resources
              </span>
            </Link>
            <Link
              href="#api-docs"
              className="h-12 px-5 bg-white hover:bg-zinc-100 rounded-[999px] flex justify-center items-center gap-2 transition-colors shadow-sm"
            >
              <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
                Read API Documentation
              </span>
              <ArrowUpRight className="size-4 text-slate-900" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
