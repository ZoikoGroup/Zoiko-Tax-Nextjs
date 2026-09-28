"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calculator,
  ListChecks,
  FileCheck2,
  Waypoints,
  Network,
  UsersRound,
  ArrowRight,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { CAPABILITY_ROUTES } from "./coverage-data";

const ICON_MAP = {
  calculator: Calculator,
  "list-checks": ListChecks,
  "file-check-2": FileCheck2,
  waypoints: Waypoints,
  network: Network,
  "users-round": UsersRound,
};

export default function CapabilityCoverageSection() {
  return (
    <SectionContainer className="relative overflow-hidden bg-[#FAF7FC] border-b border-[#DDD2E2]/60">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply" aria-hidden="true">
        <Image
          src="/coverage-overview/section-pattern-bg.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="space-y-10 sm:space-y-12">
            {/* Header */}
            <SectionHeader
              eyebrow="CAPABILITY ROUTES"
              title="Capability-specific Coverage"
              description="Coverage records route to the canonical capability surface. Each capability keeps its own truth boundary; no status may be inferred from an adjacent workflow."
            />

            {/* 6 Capability Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CAPABILITY_ROUTES.map((cap) => {
                const IconComponent = ICON_MAP[cap.iconName];
                return (
                  <div
                    key={cap.name}
                    className="rounded-[16px] border border-[#DDD2E2] bg-[#FAF7FC]/90 backdrop-blur-xs p-6 shadow-xs flex flex-col justify-between gap-4 hover:border-[#BF6735]/40 transition-colors"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-[11px] bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg font-bold text-[#18141B]">
                        {cap.name}
                      </h3>

                      <span className="block text-xs font-bold text-[#D65A2C] font-mono">
                        {cap.url}
                      </span>

                      <p className="text-sm font-normal leading-[1.5] text-[#4E4852]">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#DDD2E2]/50">
                      <Link
                        href={cap.url}
                        className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#5A2388] hover:text-[#431868] transition-colors"
                      >
                        <span>Open capability detail</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
