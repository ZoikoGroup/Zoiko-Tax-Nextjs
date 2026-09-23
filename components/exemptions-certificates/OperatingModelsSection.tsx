"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { operatingModelsData } from "./exemptions-data";
import { Layers } from "lucide-react";

export default function OperatingModelsSection() {
  return (
    <SectionContainer id="operating-models" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow={operatingModelsData.eyebrow}
          title={operatingModelsData.title}
          description={operatingModelsData.description}
        />
      </Reveal>

      {/* 3 Topologies Cards */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {operatingModelsData.topologies.map((model, idx) => (
          <Reveal key={model.tag} delay={idx * 0.08}>
            <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/40 hover:shadow-md">
              {/* Subtle background texture */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-[0.04]">
                <Image
                  src="/exemptions-certificates/model-card-bg.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-[#D65A2C] tracking-wider">
                  {model.tag}
                </span>
                <h3 className="mt-2.5 sm:mt-3 text-base sm:text-lg font-bold text-[#18141B]">
                  {model.title}
                </h3>
                <p className="mt-2 sm:mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#535055]">
                  {model.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Supported Integration Families */}
      <Reveal delay={0.2}>
        <div className="mt-8 sm:mt-14 rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2.5 border-b border-[#E8E4EC] pb-4">
            <Layers className="h-5 w-5 text-[#BF6735]" />
            <h4 className="text-sm sm:text-base font-bold text-[#18141B]">
              Supported Integration Families
            </h4>
          </div>

          <div className="mt-5 sm:mt-6 flex flex-wrap gap-2.5 sm:gap-3">
            {operatingModelsData.integrationFamilies.map((item, idx) => (
              <span
                key={idx}
                className="rounded-xl border border-[#D8CEDD] bg-[#FAF8FA] px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#18141B] shadow-2xs hover:border-[#D65A2C]/30 hover:bg-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 pt-4 border-t border-[#E8E4EC]">
            <Link
              href={operatingModelsData.ctaHref}
              className="text-xs sm:text-sm font-semibold text-[#1D033B] hover:text-[#D65A2C] transition-colors inline-block"
            >
              {operatingModelsData.ctaText}
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
