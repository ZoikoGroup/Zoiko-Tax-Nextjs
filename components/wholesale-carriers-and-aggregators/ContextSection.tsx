"use client";

import React from "react";
import { Briefcase, Layers, Users, FileCheck, History, Network, Layers3, Split, Workflow, FileSearch } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ContextSection() {
  const cards = [
    {
      num: "01",
      title: "Commercial / provider role",
      desc: "Wholesale-carrier, aggregator, provider and counterparty labels describe relationship context; they do not, by themselves, decide tax, regulatory, filing or legal responsibility.",
      icon: Network,
    },
    {
      num: "02",
      title: "Service classification",
      desc: "Voice, messaging, data, interconnect and bundled services can require distinct controlled classifications and revenue treatment before rules can be applied.",
      icon: Layers3,
    },
    {
      num: "03",
      title: "Provider / counterparty context",
      desc: "Commercial relationships shape which facts are available. Attribution must preserve provider, counterparty, contract context and legal-entity isolation.",
      icon: Split,
    },
    {
      num: "04",
      title: "Downstream obligations",
      desc: "Filing, invoice, reporting and remittance duties follow governed jurisdiction, authority and responsibility outcomes—not shorthand role names.",
      icon: Workflow,
    },
    {
      num: "05",
      title: "Auditability",
      desc: "Historical outcomes need the original entity, relationship context, facts, sources, versions, approvals, state and lineage—not a present-day approximation.",
      icon: FileSearch,
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-7xl flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Wholesale fiscal context
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Wholesale and inter-provider fiscal responsibility is <br/>more than a commercial-role label.
          </h2>
          <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Every outcome has to connect the commercial relationship to governed service facts, responsible legal entities, jurisdictional authority and downstream proof.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First 5 regular cards */}
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="min-h-56 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-3.5 shadow-sm"
              >
                <div className="self-stretch flex justify-between items-center">
                  <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                    {card.num}
                  </span>
                  <div className="size-5 flex items-center justify-center text-violet-950">
                    <Icon className="size-4" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                    {card.title}
                  </h3>
                  <p className="self-stretch justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-5">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Control Principle in Dark Purple */}
          <div className="min-h-52 p-6 bg-violet-950 rounded-2xl flex flex-col justify-between items-start shadow-md">
            <div className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              CONTROL PRINCIPLE
            </div>
            <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-7">
              Role informs context. Governed evidence supports responsibility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
