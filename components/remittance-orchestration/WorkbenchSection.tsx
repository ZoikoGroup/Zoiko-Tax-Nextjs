"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";

export default function WorkbenchSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const rows = [
    {
      id: "RO-2026-USF-0941",
      payee: "USF FCC contributor",
      period: "Q4 2025",
      amount: "$412,850.00",
      readiness: "Passed",
      readinessClass: "bg-teal-800/10 text-teal-800",
      approval: "Approved (2/2)",
      handoff: "Handed Off",
      handoffClass: "bg-teal-800/10 text-teal-800",
    },
    {
      id: "RO-2026-TX-9382",
      payee: "Texas Comptroller",
      period: "Jan 2026",
      amount: "$84,120.00",
      readiness: "Blocked (Variance)",
      readinessClass: "bg-red-500/10 text-red-500",
      approval: "Pending Review",
      handoff: "Not Started",
      handoffClass: "bg-stone-100 text-neutral-600",
    },
  ];

  const filteredRows = rows.filter(
    (r) =>
      r.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.payee.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 bg-purple-50 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          SYSTEM PROOF
        </div>
        <h2 className="justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          The Remittance Workbench &amp; Registry
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          View instructions prepared for external payment networks. Strictly read-only registry tracking readiness, approval statuses, and bank confirmations.
        </p>
      </div>

      {/* Notice Banner */}
      <div className="self-stretch p-4 bg-purple-50 rounded-xl inline-flex justify-start items-center gap-3 border border-purple-200/60">
        <Info className="size-4 shrink-0 text-amber-700" />
        <div className="flex-1 justify-start">
          <span className="text-zinc-900 text-xs font-bold">
            Notice:{" "}
          </span>
          <span className="text-zinc-900 text-xs font-normal">
            ZoikoTax does not accept, hold, or transfer funds. The data displayed below represents validated instruction packages exported or ready for handoff to your selected corporate banking portals.
          </span>
        </div>
      </div>

      {/* Table Card */}
      <div className="self-stretch p-5 bg-neutral-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
        <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="flex justify-start items-center gap-3 w-full sm:w-auto">
            <div className="px-3.5 py-2 bg-stone-100 rounded-lg flex justify-start items-center">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search instructions..."
                className="bg-transparent text-neutral-600 text-xs font-normal outline-none placeholder:text-neutral-400 w-40 sm:w-48"
              />
            </div>
            <div className="px-3 py-2 rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start text-zinc-900 text-xs font-normal cursor-pointer">
              Ready for Handoff
            </div>
          </div>
          <div className="justify-start text-orange-600 text-xs font-semibold">
            4 Active Validation Blocks Require Attention
          </div>
        </div>

        {/* Scrollable Table Area */}
        <div className="w-full overflow-x-auto">
          {/* Header Row */}
          <div className="p-3 bg-purple-50 rounded-lg inline-flex justify-start items-start min-w-[850px] w-full">
            <div className="w-48 justify-start text-zinc-900 text-xs font-bold">
              Instruction / ID
            </div>
            <div className="w-36 justify-start text-zinc-900 text-xs font-bold">
              Authority / Payee
            </div>
            <div className="w-24 justify-start text-zinc-900 text-xs font-bold">
              Period
            </div>
            <div className="w-28 justify-start text-zinc-900 text-xs font-bold">
              Amount (USD)
            </div>
            <div className="w-36 justify-start text-zinc-900 text-xs font-bold">
              Readiness Gate
            </div>
            <div className="w-36 justify-start text-zinc-900 text-xs font-bold">
              Approval Policy
            </div>
            <div className="w-36 justify-start text-zinc-900 text-xs font-bold">
              Handoff Status
            </div>
          </div>

          {/* Rows */}
          {filteredRows.map((row) => (
            <div
              key={row.id}
              className="p-3 border-b border-zinc-300 inline-flex justify-start items-center min-w-[850px] w-full"
            >
              <div className="w-48 justify-start text-zinc-900 text-xs font-semibold">
                {row.id}
              </div>
              <div className="w-36 justify-start text-neutral-600 text-xs font-normal">
                {row.payee}
              </div>
              <div className="w-24 justify-start text-neutral-600 text-xs font-normal">
                {row.period}
              </div>
              <div className="w-28 justify-start text-zinc-900 text-xs font-semibold">
                {row.amount}
              </div>
              <div className="w-36 flex justify-start items-start">
                <div
                  className={`px-2 py-1 rounded-sm flex justify-start items-start ${row.readinessClass}`}
                >
                  <div className="justify-start text-xs font-semibold">
                    {row.readiness}
                  </div>
                </div>
              </div>
              <div className="w-36 flex justify-start items-start">
                <div className="justify-start text-zinc-900 text-xs font-normal">
                  {row.approval}
                </div>
              </div>
              <div className="w-36 flex justify-start items-start">
                <div
                  className={`px-2 py-1 rounded-sm flex justify-start items-start ${row.handoffClass}`}
                >
                  <div className="justify-start text-xs font-semibold">
                    {row.handoff}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
