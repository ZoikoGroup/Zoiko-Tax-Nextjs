"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal, SectionHeader, BoundaryNotice, renderLucideIcon } from "./shared";
import { PROOF_LINK_CARDS } from "./types";

export default function ProofCrosslinksSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#100031] border-b border-[#2C1945] py-16 sm:py-20 lg:py-24">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/remittance-coverage/proof-crosslinks-bg.png"
          alt="Proof and crosslinks background"
          fill
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#0E011C]/75" />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 space-y-12">
        <Reveal>
          {/* Section Heading */}
          <SectionHeader
            dark
            eyebrow="Proof & cross-links"
            title="Follow the evidence, not the architecture claim."
            description="Pack existence, global architecture, office presence or a platform description is not proof of current Production readiness."
          />
        </Reveal>

        {/* 6 Proof Cards Grid */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROOF_LINK_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#4C2F65] bg-[#2B1146]/90 backdrop-blur-xs p-6 flex flex-col justify-between gap-5 hover:border-[#6F4E90] transition-colors"
              >
                <div className="space-y-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#533172] flex items-center justify-center text-white">
                    {renderLucideIcon(card.iconName, "w-5 h-5 text-white")}
                  </div>
                  <h3 className="text-lg font-bold text-white font-['Inter',sans-serif]">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#D9D0DF]">
                    {card.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#F4A261] hover:text-[#f8b884] transition-colors"
                  >
                    <span>{card.linkText}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Dark Boundary Notice */}
        <Reveal delay={0.2}>
          <BoundaryNotice
            dark
            title="Evidence must be current and capability-specific"
            description="A platform description can explain how Remittance works. Only current Coverage evidence can establish whether a governed Remittance state and stated scope apply to the selected identity."
            iconName="file-search"
          />
        </Reveal>
      </div>
    </section>
  );
}
