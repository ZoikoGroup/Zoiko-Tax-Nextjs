"use client";

import React from "react";
import {
  Server,
  GitBranch,
  ShieldAlert,
  Puzzle,
  Users2,
  Receipt,
  Building2,
  Cpu,
  Network,
  Database,
  Code2,
  Workflow,
  ScanSearch,
  PlugZap,
} from "lucide-react";

export default function OperatingModelsSection() {
  const models = [
    {
      icon: Workflow,
      title: "Native",
      desc: "ZoikoTax executes supported capabilities as the primary governed fiscal-control service.",
    },
    {
      icon: Workflow,
      title: "Federated",
      desc: "Coordinate ZoikoTax capabilities with incumbent systems and approved division of responsibility.",
    },
    {
      icon: ScanSearch,
      title: "Shadow Assurance",
      desc: "Compare outcomes and evidence before cutover without silently changing production results.",
    },
    {
      icon: Workflow,
      title: "OEM / Embedded",
      desc: "Expose supported capabilities within a partner or product experience through governed interfaces.",
    },
    {
      icon: Workflow,
      title: "Managed Compliance",
      desc: "Operate supported workflows with defined roles, approvals, evidence and service boundaries.",
    },
  ];

  const integrations = [
    {
      icon: PlugZap,
      title: "Billing & BSS",
      desc: "Transaction, product and customer facts; outcomes and action states returned.",
    },
    {
      icon: PlugZap,
      title: "ERP & General Ledger",
      desc: "Entity, account and posting context; filing and reconciliation positions exchanged.",
    },
    {
      icon: PlugZap,
      title: "Existing Tax Engines",
      desc: "Coexist, compare, route or preserve incumbent determination results.",
    },
    {
      icon: PlugZap,
      title: "E-Invoicing Networks",
      desc: "Supported document exchange, acknowledgment and rejection context.",
    },
    {
      icon: Database,
      title: "Data & Batch",
      desc: "Governed files, events and scheduled processing for supported schemas.",
    },
    {
      icon: PlugZap,
      title: "OEM / Embedded",
      desc: "Scoped APIs and evidence payloads for approved embedded experiences.",
    },
  ];

  return (
    <section className="w-full bg-purple-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Operating models and migration paths
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Fit the architecture you operate — without pretending to replace it all.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            ZoikoTax is a telecom fiscal-control layer. Adopt supported capabilities natively, connect them to incumbent systems, or use assurance-led migration paths.
          </p>
        </div>

        {/* 5 Operating Model Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="min-h-44 p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 transition-all hover:translate-y-[-2px]"
              >
                <div className="size-9 bg-violet-100 rounded-[10px] flex justify-center items-center shrink-0">
                  <Icon className="size-5 text-orange-600" />
                </div>
                <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter'] leading-6">
                  {m.title}
                </div>
                <div className="self-stretch justify-start text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                  {m.desc}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Boundaries Box */}
        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <h3 className="justify-start text-white text-xl sm:text-2xl font-bold font-['Inter']">
              Integration boundaries
            </h3>
            <div className="px-3.5 py-1.5 bg-orange-600 rounded-full inline-flex justify-start items-center shrink-0">
              <span className="justify-start text-white text-xs font-semibold font-['Inter'] tracking-wider">
                TELECOM FISCAL-CONTROL LAYER
              </span>
            </div>
          </div>

          <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {integrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="min-h-40 p-4 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2.5 transition-colors hover:bg-white/10"
                >
                  <Icon className="size-4 text-orange-300 shrink-0" />
                  <div className="self-stretch justify-start text-white text-sm font-bold font-['Inter'] leading-4">
                    {item.title}
                  </div>
                  <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">
                    {item.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
