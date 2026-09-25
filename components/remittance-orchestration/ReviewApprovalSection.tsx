"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ReviewApprovalSection() {
  const cards = [
    {
      title: "Review",
      items: [
        "Packet is presented to reviewers with all validation results attached",
        "Reviewers can request changes, reject the packet, or escalate exceptions",
        "Review history is preserved as part of the instruction audit trail",
      ],
    },
    {
      title: "Approval",
      items: [
        "Dual signatures are required before the packet becomes approved",
        "Approval policy is enforced by role, amount threshold, and jurisdiction",
        "Approved packets are locked to prevent accidental modification",
      ],
    },
    {
      title: "Segregation of Duties",
      items: [
        "Preparers cannot approve their own packets",
        "Reviewers and approvers are tracked by identity and timestamp",
        "Segregation rules are enforced by policy, not by manual exception",
      ],
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
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              REVIEW, APPROVAL &amp; SEGREGATION OF DUTIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              Approval is a governed state transition.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
              Review and approval are separate steps. Once the packet is validated, it enters a controlled sign-off flow that preserves segregation of duties and prevents accidental release.
            </p>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start items-start gap-5 rounded-2xl border border-[#D8CEDD] bg-[#FAF8FC]/90 p-6 sm:p-7 shadow-sm transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-[#18141B]">
                  {card.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {card.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm font-normal text-[#18141B] leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
