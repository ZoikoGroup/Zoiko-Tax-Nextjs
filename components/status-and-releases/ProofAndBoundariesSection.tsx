"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "./shared";
import { proofBoundaryRoutes } from "./status-data";

export default function ProofAndBoundariesSection() {
  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(28, 3, 47, 0.63), rgba(28, 3, 47, 0.63)), url('/status-and-releases/proof-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 xl:px-20 z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="Proof and boundaries"
          title="A governed change record—with explicit limits."
          description="A public status event establishes a governed Coverage change. It is not transaction-level replay proof, certification, residency proof, uptime or SLA evidence, or an incident declaration."
          dark
        />

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {proofBoundaryRoutes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-3 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm transition hover:bg-white/[0.1] hover:border-white/25"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-5 w-5 text-[#FFF0E9]" />
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-normal leading-[1.45] text-[#D9D0DF]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#FFF0E9] transition-colors group"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Principle Card */}
          <div className="flex flex-col justify-between gap-3 rounded-2xl bg-[#D65A2C] p-5 text-white shadow-lg border border-white/20">
            <Sparkles className="h-6 w-6 text-white" />
            <h3 className="text-xl sm:text-[21px] font-bold leading-[1.35] text-white">
              AI assists. Approved rules decide. Evidence proves.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
