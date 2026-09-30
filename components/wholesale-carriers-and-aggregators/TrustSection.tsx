"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Lock,
  Globe,
  RefreshCw,
  FileCheck2,
  Cpu,
  AlertCircle,
  Award,
  PanelTop,
  DatabaseZap,
  FileLock2,
  BrainCircuit,
  MessageSquare,
  MessageSquareWarning,
  BadgeCheck,
} from "lucide-react";

export default function TrustSection() {
  const cards = [
    {
      title: "Tenant / entity isolation",
      desc: "Separate governed context and evidence across tenants and legal entities.",
      icon: PanelTop,
    },
    {
      title: "Sensitive telecom / tax data",
      desc: "Minimize, protect and govern access to consequential operational data.",
      icon: Shield,
    },
    {
      title: "Residency",
      desc: "Document supported data-location and processing boundaries by service scope.",
      icon: DatabaseZap,
    },
    {
      title: "Business continuity",
      desc: "Design recovery, review and operating procedures around supported services.",
      icon: RefreshCw,
    },
    {
      title: "Evidence integrity",
      desc: "Preserve provenance, versions, approvals, lineage and replay manifests.",
      icon: FileLock2,
    },
    {
      title: "AI governance",
      desc: "Advisory assistance stays bounded; approved rules remain authoritative.",
      icon: BrainCircuit,
    },
    {
      title: "Responsible disclosure",
      desc: "Provide a defined route for security and product concerns.",
      icon: MessageSquareWarning,
    },
    {
      title: "Claims governance",
      desc: "Keep availability, capability and responsibility claims qualified and current.",
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="w-full relative min-h-[700px] flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/wholesale-carriers-and-aggregators/Trust and procurement.png"
          alt="Trust and procurement background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-[1060px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Trust + procurement
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Built for consequential fiscal work.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Control is an architectural property: explicit isolation, bounded claims, governed assistance and attributable evidence for sensitive telecom fiscal operations.
          </p>
        </div>

        {/* 8 Trust Cards Grid */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="min-h-44 p-5 bg-violet-950/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 flex flex-col justify-between items-start gap-3 backdrop-blur-sm shadow-md"
              >
                <div className="size-6 flex items-center justify-center text-orange-300">
                  <Icon className="size-4" />
                </div>
                <div className="self-stretch flex flex-col gap-1">
                  <h3 className="self-stretch justify-start text-white text-base font-bold font-['Inter'] leading-5">
                    {card.title}
                  </h3>
                  <p className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 flex-wrap pt-2">
          <Link
            href="#trust-center"
            className="h-12 px-6 bg-white hover:bg-zinc-100 rounded-[999px] flex justify-center items-center gap-2 transition-colors shadow-sm"
          >
            <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
              Visit Trust Center
            </span>
          </Link>
          <Link
            href="#evidence"
            className="h-12 px-6 bg-white hover:bg-zinc-100 rounded-[999px] flex justify-center items-center gap-2 transition-colors shadow-sm"
          >
            <span className="justify-start text-slate-900 text-sm font-semibold font-['Inter']">
              Explore Evidence &amp; Replay
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
