"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Info, Search, Filter } from "lucide-react";

export default function WorkbenchSection() {
  const [searchTerm, setSearchTerm] = useState("");

  const rows = [
    {
      id: "RO-2026-USF-0941",
      payee: "USF FCC contributor",
      period: "Q4 2025",
      amount: "$412,850.00",
      readiness: "Passed",
      readinessType: "success",
      approval: "Approved (2/2)",
      handoff: "Handed Off",
      handoffType: "success",
    },
    {
      id: "RO-2026-TX-9382",
      payee: "Texas Comptroller",
      period: "Jan 2026",
      amount: "$84,120.00",
      readiness: "Blocked (Variance)",
      readinessType: "danger",
      approval: "Pending Review",
      handoff: "Not Started",
      handoffType: "neutral",
    },
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Operational Challenges Section.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              SYSTEM PROOF
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              The Remittance Workbench &amp; Registry
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
              View instructions prepared for external payment networks. Strictly read-only registry tracking readiness, approval statuses, and bank confirmations.
            </p>
          </div>

          {/* Notice Callout */}
          <div className="flex items-start sm:items-center gap-3 rounded-xl border border-[#D8CEDD] bg-[#FAF8FC] p-4 text-xs sm:text-sm text-[#18141B]">
            <Info className="h-5 w-5 shrink-0 text-[#D65A2C] mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-[#18141B]">Notice:</strong> ZoikoTax does not accept, hold, or transfer funds. The data displayed below represents validated instruction packages exported or ready for handoff to your selected corporate banking portals.
            </p>
          </div>

          {/* Registry Table Container */}
          <div className="overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white/95 shadow-sm">
            {/* Table Top Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 border-b border-[#EBE5EE]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search instructions..."
                    className="h-10 w-full rounded-lg border border-[#D8CEDD] bg-white pl-9 pr-3 text-xs sm:text-sm text-[#18141B] placeholder:text-neutral-400 focus:border-[#D65A2C] focus:outline-none focus:ring-1 focus:ring-[#D65A2C]"
                  />
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#D8CEDD] bg-white px-3 text-xs font-semibold text-[#18141B] hover:bg-slate-50"
                >
                  <Filter className="h-3.5 w-3.5" />
                  <span>Ready for Handoff</span>
                </button>
              </div>

              <span className="text-xs font-semibold text-[#D65A2C]">
                4 Active Validation Blocks Require Attention
              </span>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF8FC] border-b border-[#EBE5EE]">
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold text-[#18141B]">Instruction / ID</th>
                    <th className="py-3.5 px-4 text-xs font-bold text-[#18141B]">Authority / Payee</th>
                    <th className="py-3.5 px-4 text-xs font-bold text-[#18141B]">Period</th>
                    <th className="py-3.5 px-4 text-xs font-bold text-[#18141B]">Amount (USD)</th>
                    <th className="py-3.5 px-4 text-xs font-bold text-[#18141B]">Readiness Gate</th>
                    <th className="py-3.5 px-4 text-xs font-bold text-[#18141B]">Approval Policy</th>
                    <th className="py-3.5 px-4 sm:px-6 text-xs font-bold text-[#18141B]">Handoff Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EBE5EE]">
                  {rows.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-[#18141B]">
                        {row.id}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm text-[#535055]">
                        {row.payee}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm text-[#535055]">
                        {row.period}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-[#18141B]">
                        {row.amount}
                      </td>
                      <td className="py-4 px-4">
                        {row.readinessType === "success" ? (
                          <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                            {row.readiness}
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-semibold text-rose-700">
                            {row.readiness}
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm text-[#18141B]">
                        {row.approval}
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        {row.handoffType === "success" ? (
                          <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                            {row.handoff}
                          </span>
                        ) : (
                          <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                            {row.handoff}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
