"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  GitFork,
  Globe,
  Code,
  ShieldCheck,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { ecosystemData } from "./types";

const iconMap = {
  Layers,
  GitFork,
  Globe,
  Code,
  ShieldCheck,
  BookOpen,
};

export default function PlatformEcosystemSection() {
  return (
    <SectionContainer
      id="platform-ecosystem"
      className="bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      <div className="space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={ecosystemData.eyebrow}
            title={ecosystemData.headline}
            description={ecosystemData.subhead}
          />
        </Reveal>

        {/* 6 Ecosystem cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {ecosystemData.cards.map((card, idx) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Layers;
            return (
              <Reveal key={card.title} delay={0.06 * idx}>
                <div className="h-full flex flex-col justify-between rounded-[16px] border border-[#D8CEDD] bg-white p-7 shadow-xs hover:border-[#BF6735] hover:shadow-md transition-all duration-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF3FF] flex items-center justify-center text-[#301153]">
                        <Icon className="w-6 h-6 stroke-[1.8]" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#A64B25]">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-[23px] font-normal leading-[1.2] text-[#18141B]">
                      {card.title}
                    </h3>

                    <p className="text-sm sm:text-[16px] font-normal leading-[1.55] text-[#665F69]">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#D8CEDD]/50 mt-6">
                    <Link
                      href={card.linkHref}
                      className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#A64B25] hover:text-[#843719] transition-colors group"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {card.linkText}
                      </span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom footer note */}
        <Reveal delay={0.3}>
          <div className="pt-4 text-center">
            <p className="text-sm sm:text-[15px] font-normal leading-[1.5] text-[#665F69]">
              {ecosystemData.footerNote}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
