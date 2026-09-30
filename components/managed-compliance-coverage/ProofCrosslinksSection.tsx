"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Library,
  RadioTower,
  FileCheck2,
  Waypoints,
  ShieldCheck,
  Ban,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "./shared";

const PROOF_CARDS = [
  {
    icon: Library,
    title: "Country & Regulatory Packs",
    desc: "Inspect governed jurisdictional content and pack evidence. Pack existence alone is not proof of Managed Compliance availability.",
    linkText: "View packs",
    href: "/coverage-overview",
  },
  {
    icon: RadioTower,
    title: "Status & Releases",
    desc: "Verify current status, changes, suspension, withdrawal, stale sources and record conflicts.",
    linkText: "View status",
    href: "/status-and-releases",
  },
  {
    icon: FileCheck2,
    title: "Platform Compliance & Filing",
    desc: "Understand governed workflow, approvals, evidence and replayability. Platform capability does not assign customer responsibility.",
    linkText: "View platform proof",
    href: "/compliance-filing",
  },
  {
    icon: Waypoints,
    title: "Adjacent capability Coverage",
    desc: "Check Tax Determination, obligations, remittance and e-invoicing through their own capability-specific truth.",
    linkText: "Explore Coverage",
    href: "/coverage-overview",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Review the architectural controls that support sensitive fiscal operations—without treating architecture as a managed-service promise.",
    linkText: "View Trust",
    href: "/trust",
  },
];

export default function ProofCrosslinksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E011C] border-b border-[#2A0E45] py-20 lg:py-24 text-white">
      {/* Background Image from Figma - Clean visible photo */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/managed-compliance-coverage/proof-crosslinks-bg.png"
          alt="Proof and crosslinks background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Exact Figma overlay: #0E011C with 67% opacity */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: "rgba(14, 1, 28, 0.67)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-8 space-y-10 sm:space-y-12">
        {/* Section Heading */}
        <Reveal>
          <div className="flex flex-col gap-3 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
              PROOF & CROSS-LINKS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1] tracking-tight text-white font-['Inter',sans-serif]">
              Follow the evidence. Keep every claim bounded.
            </h2>
            <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#D9D0DF]">
              Use each source for the question it can answer. No single artifact substitutes for both readiness gates and exact approved scope.
            </p>
          </div>
        </Reveal>

        {/* 5 Proof Cards Grid */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {PROOF_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="rounded-[16px] border border-white/12 bg-white/[0.07] backdrop-blur-xs p-5 flex flex-col justify-between hover:bg-white/12 transition-all space-y-4"
                >
                  <div className="space-y-3">
                    <div className="p-2 rounded-xl bg-white/10 text-white w-fit">
                      <Icon className="w-5 h-5 text-[#F4A261]" />
                    </div>
                    <h4 className="text-base font-bold text-white leading-snug">
                      {card.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#D9D0DF]">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#F4A261] transition-colors"
                    >
                      <span>{card.linkText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Not Proof Notice (White Card on Dark) */}
        <Reveal delay={0.2}>
          <div className="rounded-[18px] bg-white p-6 sm:p-7 shadow-lg flex items-start sm:items-center gap-4 text-[#18141B]">
            <div className="shrink-0 p-3 rounded-2xl bg-[#FFF0E9] text-[#D65A2C]">
              <Ban className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#18141B]">
                Related proof is necessary context—not automatic Managed availability.
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#665F69]">
                Pack existence, office presence, global architecture or underlying software Production is not by itself proof of Managed Compliance availability.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
