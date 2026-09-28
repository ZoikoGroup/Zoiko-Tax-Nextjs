"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { PROOF_ROUTES } from "./coverage-data";

const BOUNDARY_PILLS = [
  "Not tax/legal advice",
  "Not certification",
  "Not residency proof",
  "Not uptime/SLA proof",
];

export default function ProvenanceSection() {
  return (
    <SectionContainer className="bg-[#FAF7FC] border-b border-[#DDD2E2]/60">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          {/* Header */}
          <SectionHeader
            eyebrow="BOUNDED PROOF"
            title="Proof, provenance and safe operation"
            description="Coverage status is readiness proof for a specific market, capability and scope. It routes to—not replaces—the evidence required for other claims."
          />

          {/* Proof Feature Card */}
          <div className="rounded-[26px] bg-[#21053E] overflow-hidden flex flex-col lg:flex-row shadow-sm">
            {/* Image Column */}
            <div className="relative w-full lg:w-[48%] min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
              <Image
                src="/coverage-overview/operations-evidence.png"
                alt="Audit, telecom compliance and operations evidence inspection"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-[52%] p-7 sm:p-10 flex flex-col justify-center space-y-5">
              <h3 className="text-2xl sm:text-3xl lg:text-[30px] font-bold leading-[1.15] text-white">
                Readiness is one proof boundary—not every proof.
              </h3>

              <p className="text-sm sm:text-base font-normal leading-[1.55] text-[#DDD2E5]">
                Coverage status is not tax or legal advice, transaction-level replay evidence, certification, residency proof, integration security evidence, or uptime/SLA proof. Follow the correct route for each claim.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-1">
                {BOUNDARY_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-semibold text-white tracking-tight"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 9 Proof Route Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {PROOF_ROUTES.map((route) => (
              <div
                key={route.name}
                className="rounded-[16px] border border-[#DDD2E2] bg-white p-5 sm:p-5.5 shadow-2xs space-y-2 hover:border-[#BF6735]/40 transition-colors"
              >
                <Link
                  href={route.href}
                  className="group inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#5A2388] hover:text-[#431868] transition-colors"
                >
                  <span>{route.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <p className="text-xs sm:text-[13px] font-normal leading-[1.5] text-[#4E4852]">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
