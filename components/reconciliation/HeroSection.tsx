"use client";

import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "./shared";

interface ChainNode {
  title: string;
  subtitle: string;
  badge: string;
  isTriggered?: boolean;
  isPending?: boolean;
}

const CHAIN_NODES: ChainNode[] = [
  {
    title: "Calculated",
    subtitle: "Zoiko Engine",
    badge: "Aligned",
  },
  {
    title: "Billed",
    subtitle: "Amdocs BSS",
    badge: "Aligned",
  },
  {
    title: "Collected",
    subtitle: "Lockbox Batch",
    badge: "Variance Triggered",
    isTriggered: true,
  },
  {
    title: "Reported",
    subtitle: "Filing Draft",
    badge: "Pending",
    isPending: true,
  },
  {
    title: "Paid",
    subtitle: "Treasury Confirm",
    badge: "Pending",
    isPending: true,
  },
  {
    title: "GL / Exported",
    subtitle: "SAP S/4HANA",
    badge: "Awaiting Pre-Run",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-l from-[#FFEEEC] via-[#FAF3FF] to-[#FAF3FF] border-b border-[#D8CEDD]/50 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      {/* Background Server Room Image on the right */}
      <div
        className="absolute right-0 top-0 bottom-0 w-full lg:w-[56%] pointer-events-none select-none opacity-45 sm:opacity-55 lg:opacity-75 [mask-image:linear-gradient(to_right,transparent_0%,black_25%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_25%)]"
        aria-hidden="true"
      >
        <Image
          src="/reconciliation/hero-bg.png"
          alt="Telecom operations and audit team in server room"
          fill
          priority
          className="object-cover object-right-top"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        {/* Main Hero Content */}
        <div className="max-w-[820px] space-y-5 sm:space-y-6">
          {/* Eyebrow */}
          <div>
            <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
              TELECOM FISCAL RECONCILIATION
            </span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[58px] font-bold leading-[1.08] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
              Reconcile every fiscal<br className="hidden sm:inline" /> outcome with evidence.
            </h1>
          </div>

          {/* Description */}
          <div>
            <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-[1.5] text-[#665F69] max-w-[760px]">
              Connect calculated, billed, collected, reported, paid, and accounting/exported positions dynamically. Trace alignment and highlight tax or regulatory variance automatically with complete replayable evidence files.
            </p>
          </div>

          {/* System Boundary Note Box */}
          <div className="rounded-xl border border-[#D8CEDD] bg-[#FAF3FF]/90 backdrop-blur-xs p-4 sm:p-5 shadow-2xs max-w-[780px]">
            <p className="text-xs sm:text-[13px] font-normal leading-[1.6] text-[#665F69]">
              <strong className="text-[#18141B] font-semibold">System Boundary Note:</strong>{" "}
              Matched positions represent computational and workflow alignment for analysis and trace. They are not a replacement for authoritative legal tax engines, official regulatory filings, actual bank settlements, or official corporate general ledger records.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <PrimaryButton href="/contact">Book a Demo</PrimaryButton>
            <SecondaryButton href="#evidence-replay">Explore Evidence & Replay</SecondaryButton>
            <SecondaryButton href="#coverage-truth">View Current Coverage →</SecondaryButton>
          </div>

          {/* Audience Note */}
          <div>
            <p className="text-xs sm:text-[13px] font-normal text-[#665F69] pt-1">
              Built specifically for governed tax, finance, revenue assurance, compliance, and telecom technology operations.
            </p>
          </div>
        </div>

        {/* Source Position Chain (Trace Run Map) Card */}
        <div className="mt-10 sm:mt-14">
          <div className="rounded-2xl sm:rounded-3xl border border-[#D8CEDD] bg-white p-5 sm:p-7 md:p-8 shadow-sm">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#18141B] mb-5">
              ILLUSTRATIVE SOURCE POSITION CHAIN (TRACE RUN MAP)
            </div>

            {/* 6 Cards in a Single Row without ugly scrollbar */}
            <div className="flex items-center justify-between gap-1.5 sm:gap-2.5 w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
              {CHAIN_NODES.map((node, i) => (
                <React.Fragment key={node.title}>
                  {/* Node Card */}
                  <div
                    className={`flex-1 min-w-[130px] sm:min-w-[145px] lg:min-w-0 rounded-xl p-3 sm:p-4 transition-all duration-200 ${
                      node.isTriggered
                        ? "border-2 border-[#D65A2C] bg-[#F7F3ED]/70 shadow-2xs"
                        : "border border-[#D8CEDD] bg-[#F7F3ED]/60 hover:bg-white"
                    }`}
                  >
                    <div className="text-sm sm:text-[15px] font-bold text-[#18141B] whitespace-nowrap">
                      {node.title}
                    </div>
                    <div className="text-xs text-[#665F69] mt-0.5 whitespace-nowrap">
                      {node.subtitle}
                    </div>

                    <div className="mt-3">
                      {node.isTriggered ? (
                        <span className="inline-flex items-center rounded-full border border-[#D65A2C] bg-[#FFEEEC] px-2.5 py-0.5 text-[11px] font-semibold text-[#D65A2C] whitespace-nowrap">
                          {node.badge}
                        </span>
                      ) : node.isPending ? (
                        <span className="inline-flex items-center rounded-full border border-[#9A5B12] bg-[#FDF5E6] px-2.5 py-0.5 text-[11px] font-semibold text-[#9A5B12] whitespace-nowrap">
                          {node.badge}
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-[#F7F3ED] px-2.5 py-0.5 text-[11px] font-semibold text-[#665F69] whitespace-nowrap">
                          {node.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {i < CHAIN_NODES.length - 1 && (
                    <div className="shrink-0 px-0.5 sm:px-1 text-[#D8CEDD] select-none text-base sm:text-lg font-light">
                      →
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
