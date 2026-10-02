"use client";

import React from "react";

const faqs = [
  {
    question: "What is Sandbox?",
    answer: "The public non-production integration/testing experience for ZoikoTax, using synthetic or approved test data. It is not production evidence or automatic promotion.",
  },
  {
    question: "What can I test?",
    answer: "Approved integration concepts, and separately enabled patterns where governed. The walkthroughs here are illustrative; no released scenario inventory is asserted.",
  },
  {
    question: "Which data can I use?",
    answer: "Prefer synthetic fixtures. Approved test fixtures require governed use. Never submit real customer, subscriber, tax, invoice, tenant or account data, secrets or private traces.",
  },
  {
    question: "Is access self-service?",
    answer: "No self-service access is asserted. Access, credentials and prerequisites are separately governed; public documentation is not an entitlement.",
  },
  {
    question: "Does completing a test mean production ready?",
    answer: "No. Production Coverage, entitlement, regulator readiness, credentials and implementation/commercial prerequisites must be verified separately.",
  },
  {
    question: "Where are exact contracts?",
    answer: "In the authoritative API, SDK, Webhooks & Events, Bulk & Batch and Integration Guides documentation. Sandbox prose does not define syntax, versions or semantics.",
  },
  {
    question: "What if the environment is unavailable?",
    answer: "Continue with public docs and conceptual walkthroughs. Do not infer private account or incident state; exact recovery follows the authoritative contract.",
  },
  {
    question: "Does Sandbox certify me?",
    answer: "No. Sandbox does not confer security/compliance certification or regulator readiness. Any certification path must be separately established.",
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Diamond Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[url('/status-and-releases/pattern-bg.png')] bg-repeat bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Direct answers. No production shortcuts.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="w-full py-6 border-b border-[#D8CEDD] first:border-t flex flex-col md:flex-row items-start gap-3 sm:gap-6 md:gap-14"
            >
              <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 flex items-start gap-3">
                <span className="w-2.5 h-[2px] bg-[#D65A2C] shrink-0 mt-3 rounded-full" aria-hidden="true" />
                <h3 className="flex-1 text-base sm:text-lg font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {faq.question}
                </h3>
              </div>
              <p className="flex-1 text-sm sm:text-base text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
