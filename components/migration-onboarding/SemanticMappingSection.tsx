"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function SemanticMappingSection() {
  const rows = [
    {
      dimension: "Product Classification & SKU Mapping",
      version: "v1.12.0-schema-hash",
      exceptions: "0 pending exceptions",
      verdict: "Approved",
      badgeStyle: "outline-teal-800 text-teal-800",
    },
    {
      dimension: "Customer Exemptions & Certificates",
      version: "v4.02.1-hash-db",
      exceptions: "2 flagged reviews",
      verdict: "In Assessment",
      badgeStyle: "outline-yellow-700 text-yellow-700",
    },
    {
      dimension: "Filing & Jurisdiction Responsibilities",
      version: "v2.00.4-schema-hash",
      exceptions: "0 pending exceptions",
      verdict: "Approved",
      badgeStyle: "outline-teal-800 text-teal-800",
    },
    {
      dimension: "E-Invoicing & Document Clearance",
      version: "v1.01.0-schema-hash",
      exceptions: "1 blocked route",
      verdict: "Action Required",
      badgeStyle: "outline-red-600 text-red-600",
    },
    {
      dimension: "General Ledger Export Mapping (ERP)",
      version: "v3.11.2-schema-hash",
      exceptions: "0 pending exceptions",
      verdict: "Approved",
      badgeStyle: "outline-teal-800 text-teal-800",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Data Readiness
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Immutable Semantic Mapping Framework
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Align billing categories to governed target semantics with versioned mappings, source references, reviewer state, and evidence links.
          </p>
        </div>

        {/* Table Card */}
        <div className="self-stretch rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden bg-white shadow-sm">
          {/* Header Row */}
          <div className="self-stretch p-4 sm:p-5 bg-neutral-50 border-b border-zinc-300 hidden md:flex justify-start items-start gap-4">
            <div className="flex-1 justify-start text-zinc-900 text-sm font-bold font-['Inter']">
              MAPPING JURISDICTION / DIMENSION
            </div>
            <div className="w-64 justify-start text-zinc-900 text-sm font-bold font-['Inter']">
              VERSION ASSIGNMENT
            </div>
            <div className="w-48 justify-start text-zinc-900 text-sm font-bold font-['Inter']">
              EXCEPTIONS STATUS
            </div>
            <div className="w-44 justify-start text-zinc-900 text-sm font-bold font-['Inter']">
              REVIEW VERDICT
            </div>
          </div>

          {/* Data Rows */}
          {rows.map((row, index) => (
            <div
              key={row.dimension}
              className={`self-stretch p-4 sm:p-5 bg-white ${
                index < rows.length - 1 ? "border-b border-zinc-300" : ""
              } flex flex-col md:flex-row justify-start md:items-center gap-3 md:gap-4`}
            >
              <div className="flex-1 justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                <span className="md:hidden text-xs text-stone-400 block font-normal">DIMENSION:</span>
                {row.dimension}
              </div>

              <div className="w-full md:w-64 justify-start text-stone-500 text-xs font-normal font-['Roboto_Mono']">
                <span className="md:hidden text-xs text-stone-400 block font-normal font-['Inter']">VERSION:</span>
                {row.version}
              </div>

              <div className="w-full md:w-48 justify-start text-neutral-600 text-sm font-normal font-['Inter']">
                <span className="md:hidden text-xs text-stone-400 block font-normal">EXCEPTIONS:</span>
                {row.exceptions}
              </div>

              <div className="w-full md:w-44 flex justify-start items-center">
                <div
                  className={`px-3 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] ${row.badgeStyle} flex justify-start items-start`}
                >
                  <span className="text-xs font-semibold font-['Inter']">{row.verdict}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
