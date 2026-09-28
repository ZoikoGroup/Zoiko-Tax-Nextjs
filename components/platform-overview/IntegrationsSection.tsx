"use client";

import React from "react";
import Link from "next/link";
import {
  Receipt,
  Database,
  Cpu,
  Send,
  Layers,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./shared";

type IntegrationSystem = {
  label: string;
  icon: LucideIcon;
};

const integrationSystems: IntegrationSystem[] = [
  { label: "Billing / BSS / OSS", icon: Receipt },
  { label: "ERP & General Ledger", icon: Database },
  { label: "Existing Tax Engines", icon: Cpu },
  { label: "E-Invoicing Networks", icon: Send },
  { label: "Enterprise Data Warehouses", icon: Layers },
  { label: "OEM & Embedded SDKs", icon: Briefcase },
];

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="relative w-full overflow-hidden bg-[#FAF8FA] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-2.5 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              INTEGRATION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.1] tracking-tight text-[#18141B]">
              Fit the architecture you already operate
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
              Coexist cleanly with existing systems or embed governed compliance natively.
            </p>
          </div>
        </Reveal>

        {/* 6 Integration System Cards Row */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {integrationSystems.map((item, index) => {
            const IconComp = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.04}>
                <div className="group flex h-full min-h-[125px] flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-4 sm:p-5 shadow-[0_2px_4px_0_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
                  <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg bg-[#FAF3FF] text-[#BF6735]">
                    <IconComp className="size-4 stroke-[2]" />
                  </div>
                  <h3 className="mt-3 text-xs sm:text-[13px] font-bold text-[#18141B]">
                    {item.label}
                  </h3>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Developer Integration Dark Banner */}
        <div className="mt-8 sm:mt-12">
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-[#140228] p-8 sm:p-10 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                {/* Left Column: Copy & Action */}
                <div className="lg:col-span-6 flex flex-col gap-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-white leading-tight">
                    Built for controlled integration
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-zinc-300">
                    Traceable decisions • Idempotent requests • Deterministic response curves • Replay-ready payload evidence. Designed specifically for enterprise engineers.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="#developers"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-xs sm:text-sm font-semibold text-[#18141B] shadow-sm transition-all hover:bg-slate-100 active:scale-95"
                    >
                      Explore Developer Docs
                    </Link>
                  </div>
                </div>

                {/* Right Column: Code Mockup */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl border border-white/10 bg-[#0C011A] p-5 sm:p-6 font-mono text-xs">
                    <span className="font-mono text-xs font-normal tracking-wider text-[#F4A261]">
                      ILLUSTRATIVE API SCHEME
                    </span>

                    <pre className="mt-3 overflow-x-auto text-zinc-200 leading-relaxed text-xs sm:text-[13px]">
                      <code>{`request = {
  intent: "determine",
  facts: "governed payload",
  evidence: "required_manifest"
}`}</code>
                    </pre>

                    <p className="mt-3 text-[10px] sm:text-[11px] text-zinc-400">
                      Standard scheme. No real endpoint or commitments implied.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
