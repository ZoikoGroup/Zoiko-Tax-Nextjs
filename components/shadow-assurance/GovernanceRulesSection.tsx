"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function GovernanceRulesSection() {
  const roles = [
    {
      role: "Tax Operator",
      perms: "View records, generate comparison manifests, flag anomalies",
      limit: "Read-Only Payload",
    },
    {
      role: "Assurance Auditor",
      perms: "Full access to evidence manifests, export signed trace reports",
      limit: "Governed Scope Only",
    },
    {
      role: "Compliance Officer",
      perms: "Approve cutover, configure tolerance profiles, resolve discrepancy flags",
      limit: "Full Authority",
    },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] border-t border-b border-zinc-300 flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            GOVERNANCE RULES
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Access Control &amp; Responsibility
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Enforce clear segregation of duty profiles across assurance operations.
          </p>
        </div>

        {/* Roles Table */}
        <div className="self-stretch rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden shadow-sm">
          {/* Header Row */}
          <div className="self-stretch p-4 bg-slate-900 flex justify-between items-center text-white text-sm font-bold font-['Inter']">
            <div className="w-48 shrink-0">Role Profile</div>
            <div className="flex-1 px-4">Assurance Permissions</div>
            <div className="w-40 text-right md:text-left shrink-0">Access Limit</div>
          </div>

          {/* Data Rows */}
          {roles.map((r, idx) => (
            <div
              key={idx}
              className={`self-stretch p-4 bg-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 ${
                idx < roles.length - 1 ? "border-b border-zinc-300" : ""
              }`}
            >
              <div className="w-48 text-zinc-900 text-sm font-semibold font-['Inter'] shrink-0">
                {r.role}
              </div>
              <div className="flex-1 sm:px-4 text-stone-500 text-sm font-normal font-['Inter']">
                {r.perms}
              </div>
              <div className="w-40 text-orange-600 text-xs font-normal font-['JetBrains_Mono'] shrink-0">
                {r.limit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
