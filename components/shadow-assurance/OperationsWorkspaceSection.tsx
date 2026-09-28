"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function OperationsWorkspaceSection() {
  const stats = [
    {
      label: "Total Replayed Runs",
      val: "1,240,480",
      sub: "1.2M transactions",
    },
    {
      label: "Verified Agreement",
      val: "99.82%",
      sub: "Goal: 100.0%",
    },
    {
      label: "Active Discrepancies",
      val: "142",
      sub: "Awaiting investigation",
    },
    {
      label: "Evidence Integrity",
      val: "Proved",
      sub: "Trace Manifest generated",
    },
  ];

  const recentRecords = [
    {
      runId: "RUN-704982",
      entity: "Zoiko Telecom UK",
      message: "Parallel recalculation verified - rounding variance detected.",
      status: "Reconciled",
      statusClass: "outline-teal-800 text-teal-800 bg-teal-50",
    },
    {
      runId: "RUN-704983",
      entity: "Zoiko Telecom US",
      message: "Missing jurisdiction fact on source payload.",
      status: "Investigation",
      statusClass: "outline-yellow-700 text-yellow-700 bg-yellow-50",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-8">
        {/* Top Header */}
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
              ILLUSTRATIVE SYNTHETIC DATA
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
              Assurance Operations Workspace
            </h2>
          </div>

          <div className="px-3 py-1 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-300 bg-orange-50/50 flex justify-start items-start shrink-0">
            <span className="justify-start text-orange-600 text-xs font-semibold font-['Inter'] uppercase">
              Non-Authoritative
            </span>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-2 shadow-sm"
            >
              <div className="justify-start text-orange-500 text-xs font-medium font-['Inter']">
                {stat.label}
              </div>
              <div className="justify-start text-zinc-900 text-3xl font-extrabold font-['Inter']">
                {stat.val}
              </div>
              <div className="justify-start text-zinc-900/50 text-xs font-normal font-['Inter']">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Compare Records Box */}
        <div className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-4 shadow-sm">
          <div className="justify-start text-zinc-900 text-sm font-bold font-['Inter']">
            Recent Compare Records
          </div>

          <div className="self-stretch flex flex-col gap-3">
            {recentRecords.map((rec, idx) => (
              <div
                key={idx}
                className="self-stretch p-4 bg-zinc-50/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div className="w-28 text-zinc-900 text-xs font-normal font-['JetBrains_Mono']">
                  {rec.runId}
                </div>
                <div className="w-48 text-orange-600 text-sm font-medium font-['Inter']">
                  {rec.entity}
                </div>
                <div className="flex-1 text-zinc-900 text-sm font-normal font-['Inter']">
                  {rec.message}
                </div>
                <div
                  className={`px-3 py-1 rounded-[999px] outline outline-1 outline-offset-[-1px] flex justify-start items-start shrink-0 ${rec.statusClass}`}
                >
                  <span className="text-xs font-semibold font-['Inter'] uppercase">
                    {rec.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
