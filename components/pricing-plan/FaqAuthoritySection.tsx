"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const faqs = [
  {
    question: "How much does ZoikoTax cost?",
    answer:
      "No public amounts are established for this scope. Review the pricing drivers and obtain an authoritative quote rather than relying on an inferred range.",
  },
  {
    question: "Does ZoikoTax charge by transaction or usage?",
    answer:
      "Billable units and measurement must come from the approved Pricing Registry. Transaction or API telemetry does not establish a pricing unit.",
  },
  {
    question: "Are implementation and support included?",
    answer:
      "Only the applicable Commercial, Services and Support sources can establish inclusion. No universal implementation or support entitlement is approved here.",
  },
  {
    question: "Are there discounts for commitments?",
    answer:
      "Only an active approved policy can support a discount. No commitment savings or annual discount is established on this page.",
  },
  {
    question: "Which currencies and regions are available?",
    answer:
      "Commercial region and currency require the applicable registry; they are unspecified here. Current Coverage is a separate capability-specific authority.",
  },
  {
    question: "Is the estimator a quote?",
    answer:
      "No. This page illustrates a scope-summary aid without an approved calculation engine. Final commercial terms come from the approved quote/order process.",
  },
  {
    question: "Do startups/nonprofits/public sector get special pricing?",
    answer:
      "Only an approved active program can establish eligibility or benefits. No public program information is currently established for these contexts.",
  },
  {
    question: "Does buying a plan guarantee compliance or filing coverage?",
    answer:
      "No. Pricing does not establish compliance, tax correctness, successful filing or Coverage. Availability and professional advice must be confirmed separately.",
  },
  {
    question: "Is a free trial available?",
    answer:
      "No approved free-trial terms are supplied. This page does not promise a trial, a free plan or temporary entitlements.",
  },
  {
    question: "Are APIs, SDKs and sandbox access included?",
    answer:
      "Commercial entitlements require applicable sources; they are not established here. Developers is the technical authority, not proof of pricing inclusion.",
  },
  {
    question: "Can I assume an annual discount?",
    answer:
      "No. Billing cadence and discounts require current approved policy and the applicable quote/order. There is no annual toggle or inferred saving.",
  },
];

const authorityRoles = [
  { role: "Pricing", scope: "Commercial amounts, units and applicable quote scope" },
  { role: "Coverage", scope: "Capability-specific readiness and availability" },
  { role: "Developers", scope: "Technical API and integration documentation" },
  { role: "Platform", scope: "Product capability definitions" },
  { role: "Trust", scope: "Security, privacy and governance statements" },
  { role: "Support", scope: "Agreement-specific eligibility and support terms" },
  { role: "Legal", scope: "Applicable legal documents and obligations" },
  { role: "Partners", scope: "Agreement-based ecosystem and partner context" },
];

const sourceStates = [
  {
    title: "No approved public price",
    desc: "Review drivers; use an authoritative quote.",
  },
  {
    title: "Unavailable, stale or conflicting source",
    desc: "Values are suppressed until the current authority is verified.",
  },
  {
    title: "Scheduled, superseded or withdrawn detail",
    desc: "Not presented as a current offer. Only verified active sources may support values.",
  },
  {
    title: "No calculation engine",
    desc: "Build a scope summary; no numeric total is shown.",
  },
  {
    title: "Unsupported currency context",
    desc: "No amount or FX fallback; seek registry confirmation.",
  },
  {
    title: "Inactive or unestablished program",
    desc: "No benefits or application destination are implied.",
  },
  {
    title: "Missing route",
    desc: "Destination unavailable; no substitute URL is invented.",
  },
];

export default function FaqAuthoritySection() {
  return (
    <SectionContainer
      id="faqs"
      className="bg-[#FAF3FF] bg-cover bg-center"
      style={{ backgroundImage: `url('/pricing-plan/Menu-Background-Image.png')` }}
    >
      <Reveal>
        <SectionHeader
          eyebrow="FAQs"
          title="Direct answers. No inferred entitlements."
          description="Pricing questions should resolve to the right source—not to a favorable assumption."
          className="mb-10"
        />
      </Reveal>

      {/* Frequently asked questions matching Figma node #1484:16478 */}
      <div className="flex flex-col w-full mb-12">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="flex flex-col gap-3 py-6 border-t border-[#D8CEDD] lg:flex-row lg:gap-12"
          >
            <h3 className="w-full lg:w-[445px] lg:shrink-0 text-lg sm:text-[19px] font-bold leading-[1.4] text-[#18141B]">
              {faq.question}
            </h3>
            <p className="flex-1 text-base sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>

      {/* Authority Mapping & Safe Source States Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-stretch">
        {/* Left: Different questions. Different authority. */}
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#18141B]">
                Different questions. Different authority.
              </h3>
              <p className="text-sm leading-[1.55] text-[#665F69]">
                Pricing cannot confirm availability, security, compliance or support rights. Use the applicable current source for each question.
              </p>
            </div>

            <div className="mt-6 flex flex-col divide-y divide-[#D8CEDD]/60">
              {authorityRoles.map((item) => (
                <div key={item.role} className="flex flex-col sm:flex-row sm:items-center gap-2 py-3">
                  <span className="w-28 shrink-0 text-sm font-bold text-[#301153]">
                    {item.role}
                  </span>
                  <span className="text-sm font-normal text-[#665F69]">
                    {item.scope}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-[#D8CEDD]/60 pt-4 text-xs leading-[1.55] text-[#665F69]">
              Separate destination routes are not established here. No label above implies a live subpage.
            </p>
          </div>
        </Reveal>

        {/* Right: When a source cannot be verified */}
        <Reveal>
          <div className="flex h-full flex-col justify-between rounded-[26px] bg-[#301153] p-7 sm:p-9 text-white shadow-md">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-[28px] font-bold text-white">
                When a source cannot be verified
              </h3>
              <p className="text-base sm:text-[17px] leading-[1.55] text-white/70">
                Current pricing detail could not be verified. We are not showing an older value as current.
              </p>
            </div>

            <div className="mt-6 flex flex-col divide-y divide-white/10">
              {sourceStates.map((item) => (
                <div key={item.title} className="flex flex-col gap-1 py-3">
                  <span className="text-sm font-semibold text-[#F4A261]">
                    {item.title}
                  </span>
                  <span className="text-sm text-white/70">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
