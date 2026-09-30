"use client";

import React from "react";
import Image from "next/image";
import {
  FileText,
  Cpu,
  History,
  AlertCircle,
  Building,
  Globe,
  Bot,
  ShieldCheck,
  LibraryBig,
  Binary,
  CircleHelp,
  Shield,
  MapPinCheck,
  Sparkles,
} from "lucide-react";

export default function TrustAiSection() {
  const cards = [
    {
      icon: LibraryBig,
      title: "Governed tax content",
      desc: "Versioned, effective-dated content with controlled release.",
    },
    {
      icon: Binary,
      title: "Deterministic monetary execution",
      desc: "Approved rules — not generated prose — set supported outcomes.",
    },
    {
      icon: History,
      title: "Evidence and historical replay",
      desc: "Reconstruct source, facts, version, context and approvals.",
    },
    {
      icon: CircleHelp,
      title: "Explicit uncertainty",
      desc: "Unknown, unsupported and blocked states remain visible.",
    },
    {
      icon: Shield,
      title: "Tenant and entity isolation",
      desc: "Separation is designed into governed data boundaries.",
    },
    {
      icon: MapPinCheck,
      title: "Residency-aware architecture",
      desc: "Deployment and data handling align to supported residency options.",
    },
    {
      icon: Sparkles,
      title: "Controlled AI assistance",
      desc: "AI may assist research and analysis but cannot silently decide.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Graphic & Overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/tax-regulatory-compliance/Background image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-indigo-950/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-9">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Coverage + Trust + AI
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Control is an architectural property — not a badge.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            A buying gate for sensitive fiscal operations: verify scope, control, evidence, isolation and the role of automation before activation.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="min-h-44 p-5 bg-indigo-950/75 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 flex flex-col justify-start items-start gap-3 transition-colors hover:bg-indigo-950/90"
              >
                <div className="size-5 relative flex items-center justify-center">
                  <Icon className="size-4 text-orange-300" />
                </div>
                <div className="self-stretch justify-start text-white text-base font-bold font-['Inter']">
                  {c.title}
                </div>
                <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">
                  {c.desc}
                </div>
              </div>
            );
          })}

          {/* 8th Feature Card (Vibrant Orange) */}
          <div className="min-h-44 p-6 bg-orange-600 rounded-2xl flex flex-col justify-start items-start gap-3 shadow-md">
            <div className="size-6 relative flex items-center justify-center">
              <ShieldCheck className="size-5 text-white" />
            </div>
            <div className="self-stretch justify-start text-white text-xl sm:text-2xl font-bold font-['Inter'] leading-7">
              AI assists. Approved rules decide. Evidence proves.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
