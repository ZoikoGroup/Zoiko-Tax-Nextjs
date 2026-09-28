"use client";

import React from "react";
import Image from "next/image";
import {
  TriangleAlert,
  LoaderCircle,
  DatabaseZap,
  SearchX,
  Rows3,
  CircleHelp,
  ClockAlert,
  GitCompareArrows,
  Unplug,
  PauseCircle,
  ArchiveX,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { DEGRADED_STATES } from "./coverage-data";

const ICON_MAP = {
  "loader-circle": LoaderCircle,
  "database-zap": DatabaseZap,
  "search-x": SearchX,
  "rows-3": Rows3,
  "circle-help": CircleHelp,
  "clock-alert": ClockAlert,
  "git-compare-arrows": GitCompareArrows,
  unplug: Unplug,
  "pause-circle": PauseCircle,
  "archive-x": ArchiveX,
};

export default function DegradedStatesSection() {
  const handleScrollToExplorer = () => {
    const el = document.getElementById("coverage-explorer");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <div className="space-y-8 sm:space-y-10">
            {/* Header */}
            <SectionHeader
              eyebrow="SAFE FAILURE BEHAVIOR"
              title="Edge and degraded states stay truthful"
              description="The registry must remain useful when evidence is incomplete, unavailable or in conflict. No results does not mean no Coverage, and unavailable data must never fall back to stale marketing claims."
            />

            {/* Safety Notice Banner */}
            <div className="rounded-[16px] border border-[#E9B8C1] bg-[#FBE8EB] p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-[42px] h-[42px] rounded-[10px] bg-white flex items-center justify-center text-[#9B2C3B] shrink-0 shadow-2xs">
                <TriangleAlert className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-[17px] font-bold text-[#18141B]">
                  Absence and uncertainty are first-class states
                </h3>
                <p className="text-xs sm:text-sm font-normal text-[#4E4852] leading-[1.5]">
                  A filtered empty view is not proof of no Coverage. A failed or stale source is not permission to restate an older claim as current truth.
                </p>
              </div>
            </div>

            {/* 10 Degraded State Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {DEGRADED_STATES.map((card) => {
                const IconComponent = ICON_MAP[card.iconName];
                return (
                  <div
                    key={card.title}
                    className="rounded-[16px] border border-[#DDD2E2] bg-[#FAF7FC]/90 backdrop-blur-xs p-5 shadow-2xs flex flex-col justify-between gap-3 hover:border-[#BF6735]/40 transition-colors"
                  >
                    <div className="space-y-2.5">
                      <div className="w-[38px] h-[38px] rounded-[9px] bg-[#EEE3F6] flex items-center justify-center text-[#5A2388] shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      <h4 className="text-sm sm:text-[15px] font-bold text-[#18141B]">
                        {card.title}
                      </h4>

                      <p className="text-xs sm:text-[13px] font-normal leading-[1.5] text-[#4E4852]">
                        {card.description}
                      </p>
                    </div>

                    {card.actionText && (
                      <button
                        type="button"
                        onClick={handleScrollToExplorer}
                        className="text-left text-xs font-bold text-[#5A2388] hover:text-[#431868] transition-colors cursor-pointer pt-1"
                      >
                        {card.actionText}
                      </button>
                    )}
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
