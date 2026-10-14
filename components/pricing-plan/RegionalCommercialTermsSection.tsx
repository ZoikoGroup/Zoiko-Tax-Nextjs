"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";

const commercialCards = [
  {
    badge: "POLICY NOT ESTABLISHED",
    title: "Discounts & Commitments",
    body: "Only a current approved discount policy can support commitment incentives. No savings, annual preselection or discount entitlement is established here. The applicable customer quote and order control the agreed treatment.",
  },
  {
    badge: "REGISTRY REQUIRED",
    title: "Regional & Currency",
    body: "The pricebook must establish region, currency, effective context and applicable tax treatment. No currencies, amounts or FX conversion are shown. Commercial currency is not payment support, data residency, tax correctness or Coverage.",
  },
  {
    badge: "APPROVED DOCUMENTS REQUIRED",
    title: "Terms & Billing",
    body: "Billing cadence, renewal, cancellation, tax, payment and quote validity must come from the exact applicable Legal and Commercial documents. No generic SaaS terms are substituted. Document destinations are not established.",
  },
];

export default function RegionalCommercialTermsSection() {
  return (
    <SectionContainer
      id="commercial-terms"
      className="bg-[#FAF3FF] bg-cover bg-center"
      style={{ backgroundImage: `url('/pricing-plan/Menu-Background-Image.png')` }}
    >
      <Reveal>
        <SectionHeader
          eyebrow="Commercial context"
          title={
            <span className="lg:whitespace-nowrap">
              Separate the price context from the operating truth.
            </span>
          }
          description={
            <>
              Region, currency, commitments and billing belong to applicable commercial sources. They do not establish where a capability is<br className="hidden sm:inline" /> available.
            </>
          }
          className="mb-10"
        />
      </Reveal>

      <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {commercialCards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="flex h-full flex-col justify-between rounded-[20px] border border-[#D8CEDD] bg-white p-7 sm:p-8 shadow-sm transition-all hover:border-[#BF6735]/40 hover:shadow-md">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#D65A2C]">
                  {card.badge}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#18141B]">
                  {card.title}
                </h3>
                <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
                  {card.body}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>

      {/* Quote Precedence Banner matching Figma node #1484:16399 */}
      <Reveal>
        <div className="mt-8 rounded-[26px] bg-[#301153] p-8 sm:p-9 text-white shadow-md">
          <div className="flex flex-col gap-3.5">
            <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white">
              The approved quote/order is the commercial authority.
            </h3>
            <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
              A public page or scope summary cannot supersede agreed commercial terms. If source details are unavailable or conflict, values remain withheld until Commercial and Legal resolve the applicable authority.
            </p>
            <p className="text-sm font-normal text-[#D9D0DF]/90">
              Legal / commercial document route unavailable · no substitute terms or destination shown
            </p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
