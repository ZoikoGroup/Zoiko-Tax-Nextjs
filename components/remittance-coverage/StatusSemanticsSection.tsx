"use client";

import React from "react";
import Image from "next/image";
import { History } from "lucide-react";
import { Reveal, renderLucideIcon } from "./shared";

interface StatusCardData {
  status: string;
  iconName: string;
  pillBg: string;
  pillColor: string;
  publicMeaning: string;
  productionMeaning: string;
  pageBehavior: string;
}

const STATUS_ITEMS: StatusCardData[] = [
  {
    status: "Research",
    iconName: "flask-conical",
    pillBg: "bg-[#EEE7F7]",
    pillColor: "text-[#301153]",
    publicMeaning: "Public investigation or initial content work.",
    productionMeaning: "No production-use authority.",
    pageBehavior: "Show state and known source context; suppress unsupported scope.",
  },
  {
    status: "Validation",
    iconName: "list-checks",
    pillBg: "bg-[#EEE7F7]",
    pillColor: "text-[#301153]",
    publicMeaning: "Governed validation is in progress.",
    productionMeaning: "Not authorized for production use.",
    pageBehavior: "Show validation label and limitations prominently.",
  },
  {
    status: "Pilot",
    iconName: "test-tube-2",
    pillBg: "bg-[#FFF5DE]",
    pillColor: "text-[#9A5A11]",
    publicMeaning: "Controlled pilot within stated boundaries.",
    productionMeaning: "Only governed pilot use within explicit scope.",
    pageBehavior: "Show pilot qualifier; never present as general availability.",
  },
  {
    status: "Production",
    iconName: "badge-check",
    pillBg: "bg-[#EAF7F0]",
    pillColor: "text-[#276749]",
    publicMeaning: "Current governed Production state for stated Remittance scope.",
    productionMeaning: "Authoritative only for the stated capability, market and scope.",
    pageBehavior: "Show scope and evidence; never expand by adjacency or inference.",
  },
  {
    status: "Managed",
    iconName: "users-round",
    pillBg: "bg-[#EAF7F0]",
    pillColor: "text-[#276749]",
    publicMeaning: "A governed managed operating mode is stated.",
    productionMeaning: "Only the exact managed scope and contract are authoritative.",
    pageBehavior: "Separate managed availability from software capability readiness.",
  },
  {
    status: "Suspended",
    iconName: "pause-octagon",
    pillBg: "bg-[#FDECEC]",
    pillColor: "text-[#9B2C2C]",
    publicMeaning: "Current use is paused under governance.",
    productionMeaning: "No current production-use authority.",
    pageBehavior: "Replace prior positive state and foreground suspension.",
  },
  {
    status: "Withdrawn",
    iconName: "ban",
    pillBg: "bg-[#FDECEC]",
    pillColor: "text-[#9B2C2C]",
    publicMeaning: "Capability state has been withdrawn.",
    productionMeaning: "No production-use authority.",
    pageBehavior: "Show withdrawn as current truth; retain history only as history.",
  },
  {
    status: "Status unavailable",
    iconName: "circle-help",
    pillBg: "bg-[#F7F0F8]",
    pillColor: "text-[#665F69]",
    publicMeaning: "Current governed public state cannot be established.",
    productionMeaning: "No production-use authority may be inferred.",
    pageBehavior: "Say unavailable; explain stale, missing or conflicting evidence where known.",
  },
];

export default function StatusSemanticsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFAFF] border-b border-[#E9E1EC] py-16 sm:py-20 lg:py-[104px]">
      {/* Pattern Background matching Figma fill_cd3340fc */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-85"
        aria-hidden="true"
      >
        <Image
          src="/remittance-coverage/pattern-bg.png"
          alt="Status semantics pattern background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-8 xl:px-5 space-y-10">
        <Reveal>
          {/* Section Heading */}
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-wider text-[#D65A2C]">
              STATUS SEMANTICS
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
              Current state outranks remembered history.
            </h2>
            <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69]">
              Each state uses an icon, shape, explicit label and written meaning—never color alone. Read it with the governed scope and current evidence.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Status Grid (4 rows of 2 cards each) */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STATUS_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E9E1EC] bg-white p-[22px] flex flex-col justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow"
              >
                {/* Heading Row: Badge on Left, ICON + LABEL on Right */}
                <div className="flex items-center justify-between">
                  <div
                    className={`inline-flex items-center gap-[7px] px-[11px] py-[7px] rounded-full text-xs font-bold ${item.pillBg} ${item.pillColor}`}
                  >
                    {renderLucideIcon(item.iconName, `w-3.5 h-3.5 shrink-0 ${item.pillColor}`)}
                    <span>{item.status}</span>
                  </div>

                  <span className="text-xs font-bold text-[#665F69] uppercase tracking-wider">
                    ICON + LABEL
                  </span>
                </div>

                {/* 3 Semantic Fields */}
                <div className="space-y-3 pt-1">
                  {/* Public Meaning */}
                  <div className="space-y-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                      PUBLIC MEANING
                    </span>
                    <p className="text-[13px] leading-[1.45em] text-[#18141B]">
                      {item.publicMeaning}
                    </p>
                  </div>

                  {/* Production-Use Meaning */}
                  <div className="space-y-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                      PRODUCTION-USE MEANING
                    </span>
                    <p className="text-[13px] leading-[1.45em] text-[#18141B]">
                      {item.productionMeaning}
                    </p>
                  </div>

                  {/* Page Behavior */}
                  <div className="space-y-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                      PAGE BEHAVIOR
                    </span>
                    <p className="text-[13px] leading-[1.45em] text-[#665F69]">
                      {item.pageBehavior}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Historical Production Notice Banner */}
        <Reveal delay={0.2}>
          <div className="rounded-2xl border border-[#F2C7B4] bg-[#FFF0E8] p-6 flex items-start gap-4 shadow-2xs">
            <div className="shrink-0 w-10 h-10 rounded-[10px] bg-white flex items-center justify-center text-[#D65A2C] shadow-2xs">
              <History className="w-5 h-5 text-[#D65A2C]" />
            </div>
            <div className="space-y-1 flex-1">
              <h3 className="text-base font-bold text-[#18141B] font-['Inter',sans-serif]">
                Historical Production never overrides current truth
              </h3>
              <p className="text-sm leading-[1.5em] text-[#665F69]">
                A current Suspended, Withdrawn or Status unavailable state replaces any earlier Production indication for decision-making. History may explain provenance, but it cannot restore authority.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
