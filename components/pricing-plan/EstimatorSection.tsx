"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function EstimatorSection() {
  const [intent, setIntent] = useState("Understand a potential operating scope");
  const [capability, setCapability] = useState("Not specified");
  const [jurisdiction, setJurisdiction] = useState("Not specified");
  const [services, setServices] = useState("Needs commercial and technical clarification");

  const summaryItems = [
    "Capability context — missing input",
    "Jurisdiction context — missing input",
    "Services / integration — clarification needed",
    "Pricing source — not established",
    "Assumptions — no units or currency inferred",
  ];

  return (
    <SectionContainer
      id="estimator"
      className="bg-[#FAF3FF] bg-cover bg-center"
      style={{ backgroundImage: `url('/pricing-plan/Menu-Background-Image.png')` }}
    >
      <Reveal>
        <SectionHeader
          eyebrow="Estimator"
          title="Clarify your scope. Keep the unknowns visible."
          description="Build a scope summary. An approved pricing calculation is not available on this page."
          className="mb-10"
        />
      </Reveal>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start w-full">
        {/* Stage 1: Scope Intent Form (Left, fixed 734px in Figma) */}
        <div className="w-full lg:w-[734px] lg:shrink-0">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[26px] border border-[#D8CEDD] bg-white p-6 sm:p-9 shadow-sm">
              {/* Stage Heading */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8CEDD]/60 pb-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                  STAGE 1 / SCOPE
                </span>
                <span className="text-xs font-normal text-[#665F69]">
                  Illustrative form · no submission
                </span>
              </div>

              {/* Field 1: Evaluation Intent */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#18141B]">
                    Evaluation intent
                  </label>
                  <span className="text-xs font-medium text-[#D65A2C]">
                    Illustrative intent
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={intent}
                    onChange={(e) => setIntent(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-[#FAFAFC] px-4 py-3.5 pr-10 text-sm font-medium text-[#18141B] transition-colors focus:border-[#BF6735] focus:bg-white focus:outline-none"
                  >
                    <option value="Understand a potential operating scope">
                      Understand a potential operating scope
                    </option>
                    <option value="General commercial exploration">
                      General commercial exploration
                    </option>
                    <option value="Architecture assessment">
                      Architecture assessment
                    </option>
                  </select>
                  <Image
                    src="/pricing-plan/icons/chevron-down.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
                  />
                </div>
                <p className="text-xs leading-[1.55] text-[#665F69]">
                  An example of non-sensitive public intent—not a service selection.
                </p>
              </div>

              {/* Field 2: Capability Context */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#18141B]">
                    Capability context
                  </label>
                  <span className="text-xs font-medium text-[#D65A2C]">
                    Not specified
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={capability}
                    onChange={(e) => setCapability(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-[#FAFAFC] px-4 py-3.5 pr-10 text-sm font-medium text-[#18141B] transition-colors focus:border-[#BF6735] focus:bg-white focus:outline-none"
                  >
                    <option value="Not specified">Not specified</option>
                    <option value="Tax Determination Only">Tax Determination Only</option>
                    <option value="Compliance & Regulatory Filing">Compliance & Regulatory Filing</option>
                    <option value="End-to-End Fiscal Infrastructure">End-to-End Fiscal Infrastructure</option>
                  </select>
                  <Image
                    src="/pricing-plan/icons/chevron-down.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
                  />
                </div>
                <p className="text-xs leading-[1.55] text-[#665F69]">
                  Describe the need without taxpayer, customer or transaction details.
                </p>
              </div>

              {/* Field 3: Jurisdiction Context */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#18141B]">
                    Jurisdiction context
                  </label>
                  <span className="text-xs font-medium text-[#D65A2C]">
                    Not specified
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={jurisdiction}
                    onChange={(e) => setJurisdiction(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-[#FAFAFC] px-4 py-3.5 pr-10 text-sm font-medium text-[#18141B] transition-colors focus:border-[#BF6735] focus:bg-white focus:outline-none"
                  >
                    <option value="Not specified">Not specified</option>
                    <option value="North America (US / Canada)">North America (US / Canada)</option>
                    <option value="European Union / UK">European Union / UK</option>
                    <option value="Multi-regional / Global">Multi-regional / Global</option>
                  </select>
                  <Image
                    src="/pricing-plan/icons/chevron-down.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
                  />
                </div>
                <p className="text-xs leading-[1.55] text-[#665F69]">
                  Commercial context only; current Coverage requires separate confirmation.
                </p>
              </div>

              {/* Field 4: Services and Integration */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-[#18141B]">
                    Services and integration context
                  </label>
                  <span className="text-xs font-medium text-[#D65A2C]">
                    Illustrative intent
                  </span>
                </div>
                <div className="relative">
                  <select
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-[#D8CEDD] bg-[#FAFAFC] px-4 py-3.5 pr-10 text-sm font-medium text-[#18141B] transition-colors focus:border-[#BF6735] focus:bg-white focus:outline-none"
                  >
                    <option value="Needs commercial and technical clarification">
                      Needs commercial and technical clarification
                    </option>
                    <option value="Standard REST API Integration">
                      Standard REST API Integration
                    </option>
                    <option value="Enterprise ERP Connector">
                      Enterprise ERP Connector
                    </option>
                    <option value="Full Assisted Implementation">
                      Full Assisted Implementation
                    </option>
                  </select>
                  <Image
                    src="/pricing-plan/icons/chevron-down.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 opacity-60"
                  />
                </div>
                <p className="text-xs leading-[1.55] text-[#665F69]">
                  No catalog, billable units, quantities or currency assumed.
                </p>
              </div>

              {/* Form footnote disclaimer */}
              <p className="border-t border-[#D8CEDD]/60 pt-4 text-xs leading-[1.55] text-[#665F69]">
                No account credentials, contracts, files, taxpayer data, phone number or email are requested. This illustration does not submit to CRM, save, share or export a summary.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stage 2: Scope Summary & Amount Withheld (Right, fills remaining space) */}
        <div className="w-full lg:flex-1">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[26px] bg-[#301153] p-7 sm:p-8 text-white shadow-lg">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F4A261]">
                  SCOPE SUMMARY / NOT A QUOTE
                </span>
                <h3 className="text-2xl sm:text-[30px] font-bold leading-tight text-white">
                  Intent is known. Scope is<br className="hidden sm:inline" /> still open.
                </h3>
                <p className="text-sm sm:text-base leading-[1.55] text-white/70">
                  Understand the potential operating scope before a voluntary commercial handoff.
                </p>
              </div>

              {/* 5 Checklist Items with circle-help */}
              <div className="flex flex-col gap-3 py-2">
                {summaryItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Image
                      src="/pricing-plan/icons/circle-help.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="shrink-0 opacity-80"
                    />
                    <span className="text-sm font-medium text-white/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Calculation Unavailable Box */}
              <div className="rounded-[16px] bg-[#14091F] p-6 border border-white/10">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F4A261]">
                  STAGE 2 / AMOUNT WITHHELD
                </span>
                <h4 className="mt-2 text-xl font-bold text-white">
                  No approved pricing engine
                </h4>
                <p className="mt-2 text-sm leading-[1.55] text-white/70">
                  No numeric total is shown. Clarify missing scope and use the approved quote/order process for final commercial terms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom disclaimer matching Figma node #1484:16345 */}
      <Reveal delay={0.1}>
        <p className="mt-10 text-sm font-normal leading-[1.55] text-[#665F69]">
          An estimate is not a quote, order form, invoice, tax calculation, Coverage confirmation, entitlement or legal commitment. Final commercial terms come from the approved quote/order process.
        </p>
      </Reveal>
    </SectionContainer>
  );
}
