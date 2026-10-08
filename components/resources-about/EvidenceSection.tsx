"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileSearch, ArrowUpRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal, ScopeNotice } from "./shared";
import { evidenceData } from "./types";

export default function EvidenceSection() {
  const { narrativeParagraphs, auditLink, diagram, scopeNotice } = evidenceData;

  return (
    <SectionContainer
      id="evidence-accountability"
      className="overflow-hidden bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40 mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/pattern-bg.png"
          alt="Evidence and accountability pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative space-y-12 sm:space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left column: Narrative */}
          <div className="lg:col-span-6 space-y-7">
            <Reveal>
              <SectionHeader
                eyebrow={evidenceData.eyebrow}
                title={evidenceData.headline}
                description={evidenceData.subhead}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 pt-2">
                {narrativeParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-base sm:text-[17px] font-normal leading-[1.6] text-[#665F69]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="pt-2">
                <Link
                  href={auditLink.href}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {auditLink.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right column: Diagram */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="rounded-[26px] bg-white border border-[#D8CEDD] p-7 sm:p-9 shadow-lg space-y-6">
                {/* Header badge */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF3FF] flex items-center justify-center text-[#301153]">
                    <FileSearch className="w-5 h-5 stroke-[2]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#A64B25]">
                    {diagram.badge}
                  </span>
                </div>

                {/* Material action box */}
                <div className="rounded-[16px] bg-[#301153] p-6 text-white space-y-1.5 shadow-md">
                  <h4 className="text-xl sm:text-[25px] font-normal text-white">
                    {diagram.header.title}
                  </h4>
                  <p className="text-sm sm:text-base font-normal text-[#D9D0DF]">
                    {diagram.header.subtitle}
                  </p>
                </div>

                {/* 3 Context items */}
                <div className="space-y-4 pt-2">
                  {diagram.links.map((link, idx) => (
                    <div
                      key={idx}
                      className="border-l-2 border-[#D8CEDD] pl-5 py-1.5 space-y-1 transition-colors hover:border-[#BF6735]"
                    >
                      <h5 className="text-base sm:text-lg font-semibold text-[#18141B]">
                        {link.title}
                      </h5>
                      <p className="text-sm font-normal text-[#665F69]">
                        {link.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer note */}
                <p className="pt-2 text-xs sm:text-sm font-normal text-[#665F69] border-t border-[#D8CEDD]/60">
                  {diagram.footerNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scope note at bottom */}
        <Reveal delay={0.2}>
          <ScopeNotice
            title={scopeNotice.title}
            explanation={scopeNotice.explanation}
          />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
