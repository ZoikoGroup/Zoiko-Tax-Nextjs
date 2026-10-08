"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Receipt,
  Landmark,
  Calculator,
  FileCheck,
  Database,
  Boxes,
  ArrowUpRight,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { integrationData } from "./types";

const iconMap = {
  Receipt,
  Landmark,
  Calculator,
  FileCheck,
  Database,
  Boxes,
};

export default function IntegrationCoexistenceSection() {
  const { patterns, pathways } = integrationData;

  return (
    <SectionContainer
      id="integration-coexistence"
      className="overflow-hidden bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40 mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/pattern-bg.png"
          alt="Integration patterns geometric background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={integrationData.eyebrow}
            title={integrationData.headline}
            description={integrationData.subhead}
          />
        </Reveal>

        {/* 6 Integration cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {patterns.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Receipt;
            return (
              <Reveal key={item.id} delay={0.06 * idx}>
                <div className="h-full flex flex-col rounded-[16px] border border-[#D8CEDD] bg-white p-7 shadow-xs hover:border-[#BF6735] hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF3FF] flex items-center justify-center text-[#301153] mb-5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl sm:text-[23px] font-normal leading-[1.2] text-[#18141B] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-[16px] font-normal leading-[1.55] text-[#665F69]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Developer pathways callout box */}
        <Reveal delay={0.2}>
          <div className="rounded-[26px] bg-[#301153] p-7 sm:p-10 lg:p-12 shadow-2xl border border-[#4E2A6E] flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 lg:gap-12 text-white">
            <div className="space-y-5 max-w-[620px]">
              <h3 className="text-2xl sm:text-[30px] font-normal leading-[1.15] text-white">
                {pathways.title}
              </h3>
              <p className="text-sm sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
                {pathways.description}
              </p>
              <div>
                <Link
                  href={pathways.linkHref}
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F4A261] hover:text-[#f8b884] transition-colors group"
                >
                  <span className="group-hover:underline underline-offset-4">
                    {pathways.linkText}
                  </span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            {/* Implementation source right box */}
            <div className="w-full lg:w-[400px] shrink-0 rounded-[16px] bg-[#14091F] p-6 sm:p-7 border border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#F4A261]">
                {pathways.sourceBox.badge}
              </span>
              <div className="text-lg font-semibold text-white">
                {pathways.sourceBox.path}
              </div>
              <p className="text-sm sm:text-[15px] font-normal leading-[1.7] text-[#D9D0DF]/90 pt-1 border-t border-white/10">
                {pathways.sourceBox.items}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
