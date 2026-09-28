"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CommandCenterSection() {
  const stats = [
    {
      label: "ACTIVE WAVE",
      val: "Wave 01: EU-VAT-Direct",
      color: "text-zinc-900",
    },
    {
      label: "SOURCE DATA INTEGRITY",
      val: "99.8% Consistent",
      color: "text-teal-800",
    },
    {
      label: "SHADOW ACTIVE STATUS",
      val: "Day 12 of 30",
      color: "text-blue-800",
    },
    {
      label: "ACTIVE GATE BLOCKERS",
      val: "1 Open Ticket",
      color: "text-red-600",
    },
  ];

  const logs = [
    {
      tag: "[OK]",
      text: " Mirror governed EU-VAT transactions successfully synced (14,028 records)",
      color: "text-green-300",
    },
    {
      tag: "[COMPARE]",
      text: " Comparing legacy engine output to ZoikoTax Parallel lane...",
      color: "text-indigo-50",
    },
    {
      tag: "[WARN]",
      text: " Code mismatch on SKU-0048, resolved to fallback tax category autonomously via rule-set v1.12",
      color: "text-yellow-100",
    },
    {
      tag: "[EVIDENCE]",
      text: " Hashing decision logs into verification payload: b7c4cf0012019b...",
      color: "text-indigo-50",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
              Console View
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
              Migration Command Center Workspace
            </h2>
          </div>

          <div className="px-4 py-2 bg-indigo-950 rounded-lg flex justify-start items-start shrink-0">
            <span className="justify-start text-orange-300 text-xs font-bold font-['Inter']">
              ILLUSTRATIVE SYNTHETIC DATA Only
            </span>
          </div>
        </div>

        {/* Command Center Card */}
        <div className="self-stretch p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 shadow-sm">
          {/* Top 4 Stats */}
          <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {stats.map((item) => (
              <div key={item.label} className="flex flex-col justify-start items-start gap-2">
                <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">
                  {item.label}
                </div>
                <div className={`justify-start text-xl sm:text-2xl font-bold font-['Inter'] ${item.color}`}>
                  {item.val}
                </div>
              </div>
            ))}
          </div>

          <div className="self-stretch h-0 border-b border-zinc-300" />

          {/* Terminal / Reconciliation Log */}
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="justify-start text-zinc-900 text-sm font-bold font-['Inter']">
              WAVE TRANSITION RECONCILIATION LOG
            </div>

            <div className="self-stretch p-4 bg-zinc-900 rounded-lg flex flex-col justify-start items-start gap-2.5 overflow-x-auto font-['Roboto_Mono'] text-xs">
              {logs.map((log, i) => (
                <div key={i} className={`justify-start font-normal leading-relaxed ${log.color}`}>
                  <span className="font-bold">{log.tag}</span>
                  {log.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
