"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock, ShieldCheck } from "lucide-react";

export default function TrustSection() {
  const trustCards = [
    {
      title: "Tenant / entity isolation",
      desc: "Keep operator, entity and responsibility boundaries explicit.",
    },
    {
      title: "Sensitive telecom / tax data",
      desc: "Apply governed handling to consequential commercial and fiscal context.",
    },
    {
      title: "Residency",
      desc: "Expose capability-specific residency and deployment constraints.",
    },
    {
      title: "Business continuity",
      desc: "Plan controlled continuity, recovery and operational ownership.",
    },
    {
      title: "Evidence integrity",
      desc: "Preserve provenance, versions, approvals and replay manifests.",
    },
    {
      title: "AI governance",
      desc: "AI assists; approved rules and governed actions remain authoritative.",
    },
    {
      title: "Responsible disclosure",
      desc: "Provide a clear path for security and integrity concerns.",
    },
    {
      title: "Claims governance",
      desc: "Keep availability and product claims tied to approved evidence.",
    },
  ];

  return (
    <section className="w-full relative  flex flex-col justify-start items-center overflow-hidden">
      {/* Background Graphic */}
      <div className="pointer-events-none absolute inset-0  overflow-hidden">
        <Image
          src="/mobile-network-operators/Proof texture.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Trust and procurement
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
            Built for consequential fiscal work.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Control is an architectural property: make boundaries, evidence and operational responsibilities inspectable for security, risk, finance and procurement teams.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {trustCards.map((card, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2.5 backdrop-blur-xs min-h-28 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-orange-300 shrink-0" />
                <div className="text-white text-base font-bold font-['Inter']">
                  {card.title}
                </div>
              </div>
              <div className="self-stretch text-zinc-300 text-xs font-normal font-['Inter'] leading-5">
                {card.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-start items-start gap-3">
          <Link
            href="#trust"
            className="h-12 px-6 bg-white/5 hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center gap-2.5 shadow-sm transition-colors group"
          >
            <span className="text-white text-sm font-semibold font-['Inter']">
              Visit Trust Center
            </span>
            <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#evidence-replay"
            className="h-12 px-6 bg-white/5 hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center gap-2.5 shadow-sm transition-colors group"
          >
            <span className="text-white text-sm font-semibold font-['Inter']">
              Explore Evidence &amp; Replay
            </span>
            <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
