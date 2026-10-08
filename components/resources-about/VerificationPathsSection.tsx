"use client";

import React from "react";
import Link from "next/link";
import { Globe, Code, Shield, ArrowUpRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal, ScopeNotice } from "./shared";
import { verificationData } from "./types";

const iconMap = {
  Globe,
  Code,
  Shield,
};

export default function VerificationPathsSection() {
  const { primarySources, trustDirectory, scopeNotice } = verificationData;

  return (
    <SectionContainer
      id="verification-paths"
      className="bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      <div className="space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={verificationData.eyebrow}
            title={verificationData.headline}
            description={verificationData.subhead}
          />
        </Reveal>

        {/* 3 Primary verification source cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {primarySources.map((source, idx) => {
            const Icon = iconMap[source.icon as keyof typeof iconMap] || Globe;
            return (
              <Reveal key={source.title} delay={0.06 * idx}>
                <div className="h-full flex flex-col justify-between rounded-[16px] border border-[#D8CEDD] bg-white p-7 shadow-xs hover:border-[#BF6735] hover:shadow-md transition-all duration-200">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF3FF] flex items-center justify-center text-[#301153]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-xl sm:text-[23px] font-normal leading-[1.2] text-[#18141B]">
                      {source.title}
                    </h3>

                    <p className="text-sm sm:text-[16px] font-normal leading-[1.55] text-[#665F69]">
                      {source.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#D8CEDD]/60 mt-6">
                    <Link
                      href={source.linkHref}
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {source.linkText}
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Trust source directory card */}
        <Reveal delay={0.2}>
          <div className="rounded-[26px] bg-white border border-[#D8CEDD] p-6 sm:p-9 shadow-md space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pb-4">
              <h3 className="text-xl sm:text-[23px] font-normal text-[#18141B]">
                {trustDirectory.title}
              </h3>
              <span className="text-xs sm:text-sm font-normal text-[#665F69]">
                {trustDirectory.subtitle}
              </span>
            </div>

            <div className="divide-y divide-[#D8CEDD]">
              {trustDirectory.routes.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-3 group"
                >
                  <span className="md:w-56 text-base sm:text-lg font-semibold text-[#18141B]">
                    {item.topic}
                  </span>
                  <p className="flex-1 text-sm sm:text-[15px] font-normal text-[#665F69]">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group-hover:underline underline-offset-4"
                  >
                    <span>{item.route}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Scope note */}
        <Reveal delay={0.25}>
          <ScopeNotice
            title={scopeNotice.title}
            explanation={scopeNotice.explanation}
          />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
