"use client";

import React from "react";
import Image from "next/image";
import {
  Layers,
  Unlink,
  MapPin,
  FileSearch,
  GitBranch,
  Network,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { problemData } from "./types";

const iconMap = {
  Layers,
  Unlink,
  MapPin,
  FileSearch,
  GitBranch,
};

export default function ProblemContextSection() {
  return (
    <SectionContainer
      id="problem-context"
      className="overflow-hidden border-b border-[#D8CEDD] bg-[#FAF3FF]"
    >
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40 mix-blend-multiply"
        aria-hidden="true"
      >
        <Image
          src="/resources-about/pattern-bg.png"
          alt="Geometric structural pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={problemData.eyebrow}
            title={problemData.headline}
            description={problemData.subhead}
          />
        </Reveal>

        {/* 5 Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {problemData.cards.map((card, idx) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] || Layers;
            return (
              <Reveal key={card.id} delay={0.06 * idx}>
                <div className="h-full flex flex-col justify-between rounded-[16px] border border-[#D8CEDD] bg-white p-6 shadow-xs hover:border-[#BF6735] hover:shadow-md transition-all duration-200">
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF3FF] flex items-center justify-center text-[#301153]">
                      <Icon className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg sm:text-[21px] font-normal leading-[1.2] text-[#18141B]">
                      {card.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm sm:text-[15px] font-normal leading-[1.55] text-[#665F69]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Context statement banner */}
        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 rounded-[16px] bg-[#301153] px-6 sm:px-8 py-5 sm:py-6 shadow-md border border-[#4E2A6E]">
            <div className="shrink-0 p-2.5 rounded-xl bg-white/10 text-[#F4A261]">
              <Network className="w-7 h-7 stroke-[1.8]" />
            </div>
            <p className="text-base sm:text-[19px] font-medium leading-[1.5] text-white">
              {problemData.statement}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
