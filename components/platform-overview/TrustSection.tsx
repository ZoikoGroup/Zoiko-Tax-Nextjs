"use client";

import React from "react";
import Image from "next/image";
import {
  Lock,
  Eye,
  MapPin,
  Sparkles,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./shared";

type TrustCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const trustCards: TrustCard[] = [
  {
    title: "Security & Auditing",
    description:
      "Attributable action history, logical boundaries, and controlled access where governed.",
    icon: Lock,
  },
  {
    title: "Privacy & Data Protection",
    description:
      "Data handling follows approved privacy and tenant-isolation controls; exact scope depends on deployment and contract.",
    icon: Eye,
  },
  {
    title: "Data Residency Choices",
    description:
      "Processing and residency follow approved deployment, contract, and applicable source-of-truth.",
    icon: MapPin,
  },
  {
    title: "AI Governance Controls",
    description:
      "Advisory extraction and proposal generation. Never overrides deterministic logic.",
    icon: Sparkles,
  },
  {
    title: "Evidence & Auditability",
    description:
      "Preserves source provenance, versions, approvals, and replay references where supported.",
    icon: ShieldCheck,
  },
  {
    title: "Trust Center",
    description:
      "Route to approved security, privacy, governance, and evidence materials for scoped evaluation.",
    icon: Zap,
  },
];

export default function TrustSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#100122] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/platform-overview/Trust Background Image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-2.5 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              GOVERNANCE & TRUST
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.1] tracking-tight text-white">
              Control is an architectural property
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Structured security, privacy, evidence, and governance controls are described only within approved scope.
            </p>
          </div>
        </Reveal>

        {/* 6 Trust Cards Grid (3 cols x 2 rows) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustCards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.05}>
                <div className="flex h-full min-h-[175px] flex-col justify-start rounded-2xl border border-white/10 bg-[#1A083B]/85 p-6 sm:p-7 shadow-xl backdrop-blur-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#F4A261]/40">
                  <IconComp className="size-5 text-[#F4A261] stroke-[2]" />
                  <h3 className="mt-3.5 text-base sm:text-lg font-bold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-zinc-300">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
