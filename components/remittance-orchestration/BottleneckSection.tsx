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
              THE TELECOM BOTTLENECK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              Why Telecom Remittance is Complex
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
              In telecoms, transaction high-volume and jurisdictional fragmentation make tracking liability remittance incredibly error-prone. One missing validation link can lead to catastrophic tax penalties.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-start items-start gap-3 rounded-2xl border border-[#D8CEDD] bg-white/90 p-6 sm:p-7 shadow-sm transition-all hover:shadow-md hover:border-[#D65A2C]/40"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                  {c.num}
                </span>
                <h3 className="text-xl font-semibold text-[#18141B]">
                  {c.title}
                </h3>
                <p className="text-sm font-normal text-[#535055] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
