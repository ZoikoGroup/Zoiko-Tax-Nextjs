"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  Tag,
  Layers,
  Calculator,
  FileText,
  CheckCircle2,
  RefreshCw,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./shared";

type LifecycleStage = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const lifecycleStages: LifecycleStage[] = [
  {
    step: "01",
    title: "Receive",
    description: "Ingest billing files",
    icon: Download,
  },
  {
    step: "02",
    title: "Classify",
    description: "Classify service codes",
    icon: Tag,
  },
  {
    step: "03",
    title: "Attribute",
    description: "Assign attributes",
    icon: Layers,
  },
  {
    step: "04",
    title: "Determine",
    description: "Compute taxes",
    icon: Calculator,
  },
  {
    step: "05",
    title: "Obligate",
    description: "Map obligations",
    icon: FileText,
  },
  {
    step: "06",
    title: "Comply",
    description: "Prepare filings",
    icon: CheckCircle2,
  },
  {
    step: "07",
    title: "Reconcile",
    description: "Validate ledger",
    icon: RefreshCw,
  },
  {
    step: "08",
    title: "Prove",
    description: "Retain evidence",
    icon: Shield,
  },
];

export default function LifecycleSection() {
  return (
    <section
      id="lifecycle"
      className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/platform-overview/Platform and proof.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-2.5 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              OPERATIONAL FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.1] tracking-tight text-[#18141B]">
              The Connected Fiscal Lifecycle
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
              A unified data and control pipeline starting with transaction facts and culminating in replayable evidence.
            </p>
          </div>
        </Reveal>

        {/* 8-Stage Lifecycle Cards Row */}
        <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {lifecycleStages.map((stage, index) => {
            const IconComponent = stage.icon;
            return (
              <Reveal key={stage.step} delay={index * 0.04}>
                <div className="group flex h-full min-h-[140px] flex-col justify-between rounded-xl border border-[#D8CEDD] bg-white p-3.5 sm:p-4 shadow-[0_2px_4px_0_rgba(0,0,0,0.03)] transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
                  {/* Top Header: Step Number & Direct Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#D65A2C]">
                      {stage.step}
                    </span>
                    <IconComponent className="size-4 text-[#BF6735] stroke-[2] transition-transform group-hover:scale-110" />
                  </div>

                  {/* Body: Title & Subtitle */}
                  <div className="mt-4 flex flex-col gap-0.5">
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#18141B]">
                      {stage.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs leading-snug text-[#665F69]">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom footnote */}
        <Reveal delay={0.3}>
          <p className="mt-6 text-xs text-[#665F69]">
            Evidence visually spans all 8 stages of execution to preserve exact execution context.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
