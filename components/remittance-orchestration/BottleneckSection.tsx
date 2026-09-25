"use client";

import React from "react";
import Image from "next/image";

export default function BottleneckSection() {
  const challenges = [
    {
      num: "01 / TRACEABILITY",
      title: "Amount Provenance",
      desc: "Connecting computed tax to final bank draft outputs requires continuous metadata locks.",
    },
    {
      num: "02 / JURISDICTION",
      title: "Multiple Authorities",
      desc: "Taxes, regulatory fees, and universal service contributions split across thousands of entities.",
    },
    {
      num: "03 / TIME",
      title: "Due Sensitivity",
      desc: "Missed deadline flags and late penalties cascade across complex multi-tier operator business models.",
    },
    {
      num: "04 / INTERFACING",
      title: "Channel Variation",
      desc: "Disparate bank files, ISO standard schemas, and regulatory portal inputs create schema fatigue.",
    },
    {
      num: "05 / CONTROL",
      title: "Approval Authority",
      desc: "Guaranteeing dual-signature segregation of duties while remote personnel prepare transactions.",
    },
    {
      num: "06 / BOUNDARIES",
      title: "External Uncertainty",
      desc: "Acknowledging handoff does not equal final settled proof; tracking the post-handoff black box.",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Operational Challenges Section.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          THE TELECOM BOTTLENECK
        </div>
        <h2 className="justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Why Telecom Remittance is Complex
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          In telecoms, transaction high-volume and jurisdictional fragmentation make tracking liability remittance incredibly error-prone. One missing validation link can lead to catastrophic tax penalties.
        </p>
      </div>

      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((c, idx) => (
          <div
            key={idx}
            className="p-6 bg-neutral-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3"
          >
            <div className="justify-start text-orange-600 text-xs font-bold uppercase">
              {c.num}
            </div>
            <h3 className="justify-start text-zinc-900 text-xl font-semibold font-['Sora'] leading-6">
              {c.title}
            </h3>
            <p className="self-stretch justify-start text-neutral-600 text-xs font-normal  leading-5">
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
