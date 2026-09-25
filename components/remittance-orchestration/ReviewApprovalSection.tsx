"use client";

import React from "react";

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
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 bg-purple-50 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          REVIEW, APPROVAL &amp; SEGREGATION OF DUTIES
        </div>
        <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Approval is a governed state transition.
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          Review and approval are separate steps. Once the packet is validated, it enters a controlled sign-off flow that preserves segregation of duties and prevents accidental release.
        </p>
      </div>

      <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="p-7 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4"
          >
            <h3 className="justify-start text-zinc-900 text-xl font-semibold font-['Sora'] leading-6">
              {card.title}
            </h3>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {card.items.map((item, i) => (
                <div
                  key={i}
                  className="self-stretch justify-start text-zinc-900 text-sm font-normal"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
