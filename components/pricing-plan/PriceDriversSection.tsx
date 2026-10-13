"use client";

import React from "react";
import { SectionContainer, SectionHeader, PrimaryButton, Reveal, StaggerGroup, StaggerItem } from "./shared";

const driverChips = [
  "Volume context",
  "Capability scope",
  "Jurisdiction context",
  "Service needs",
  "Integration",
  "Commitment",
];

const capabilityCards = [
  {
    title: "Platform Subscription",
    body: "Recurring platform access may be a quote component only if governed. No amount, billing cadence or plan is established, and access does not imply all capabilities.",
    note: "Confirm the applicable access scope and commercial source.",
  },
  {
    title: "Usage & Volume",
    body: "Billable units, allowances, measurement, rounding and overages require an approved Pricing Registry. API calls, transactions and other telemetry are not inferred pricing units.",
    note: "Define the governed measurement before discussing volume.",
  },
  {
    title: "Tax Determination",
    body: "Commercial scope may address required determination capabilities. It does not establish tax correctness, advice or jurisdictional Coverage; no pay-per-calculation model is assumed.",
    note: "Describe the intended capability; confirm Coverage separately.",
  },
  {
    title: "Filing & Compliance",
    body: "Commercial software and service scope must be distinguished from successful filing or compliance. Per-filing units, form counts and service targets are not established.",
    note: "Clarify software versus service responsibilities.",
  },
  {
    title: "Regulatory Data",
    body: "Content inclusion, licensing and permitted scope require applicable sources. No real-time updates, exhaustive global rights or update cadence are claimed.",
    note: "Confirm content scope and licensing authority.",
  },
  {
    title: "Developer & API",
    body: "Commercial API entitlements are conditional. Endpoint prices, rate limits, quotas, SDK access and sandbox availability are not established by this page.",
    note: "Use Developers for technical authority; Pricing for commercial scope.",
  },
];

export default function PriceDriversSection() {
  return (
    <SectionContainer id="price-drivers" className="bg-[#1D033B] text-white">
      <Reveal>
        <SectionHeader
          eyebrow="What may shape a quote"
          title="Price follows scope—not assumptions."
          description="Volume, capability, jurisdiction, service needs, integration complexity and commitment can be relevant concepts. Their commercial treatment requires confirmation."
          dark
          className="mb-8"
        />
      </Reveal>

      {/* Driver Concepts Chips matching Figma node #1484:16214 */}
      <Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pb-10">
          {driverChips.map((chip) => (
            <div
              key={chip}
              className="flex items-center justify-center rounded-[16px] border border-white/[0.16] bg-white/[0.05] px-3 py-[15px] text-sm font-normal text-white text-center"
            >
              {chip}
            </div>
          ))}
        </div>
      </Reveal>

      {/* 6 Capability Cards Grid matching Figma template EL-f27f962d */}
      <StaggerGroup className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {capabilityCards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="flex h-full flex-col justify-between gap-4 rounded-[16px] border border-white/[0.13] bg-[#301153] p-7 transition-all hover:border-[#F4A261]/50 hover:bg-[#381661]">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs font-normal text-[#F4A261]">
                  COMMERCIAL SOURCE REQUIRED
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white">
                  {card.title}
                </h3>
                <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
                  {card.body}
                </p>
              </div>
              <p className="text-sm font-normal leading-[1.5] text-[#F4A261]">
                {card.note}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Custom & Enterprise Span Banner matching Figma node #1484:16260 */}
      <Reveal>
        <div className="mt-8 rounded-[26px] bg-[#14091F] p-8 lg:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-white">
                Custom & Enterprise
              </h3>
              <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
                Complex architecture, service needs and commercial terms may need a tailored evaluation. This is not a published Enterprise tier: unlimited access, a customer-success manager, custom SLAs and minimum spend are not established.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:w-[310px] shrink-0">
              <p className="text-sm leading-[1.55] text-[#D9D0DF]">
                Bring architectural questions into an approved evaluation. Confirm commercial scope and current Coverage independently.
              </p>
              <div>
                <PrimaryButton href="#evaluation">
                  Book a Demo
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
