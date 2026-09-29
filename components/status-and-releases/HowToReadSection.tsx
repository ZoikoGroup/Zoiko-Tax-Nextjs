"use client";

import React from "react";
import { SectionContainer, SectionHeader } from "./shared";
import { readingDimensions, timeLabels } from "./status-data";

export default function HowToReadSection() {
  return (
    <SectionContainer patternBg className="bg-[#FAF8FA]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Reading model"
          title="How to read Status & Releases"
          description="Read all five dimensions together. A state without its scope, time basis and proof route is incomplete."
        />

        {/* 5 Dimensions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {readingDimensions.map((dim) => {
            const Icon = dim.icon;
            return (
              <div
                key={dim.num}
                className="flex flex-col gap-4 rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FAF3FF] text-[#301153]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-[#D65A2C]">
                    {dim.num}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#18141B]">
                    {dim.name}
                  </h3>
                  <p className="text-sm font-normal leading-[1.55] text-[#665F69]">
                    {dim.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Time Labels Banner */}
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-7 rounded-2xl bg-[#301153] p-6 sm:p-7 text-white shadow-sm border border-purple-900/30">
          {timeLabels.map((item, index) => (
            <div key={item.label} className="flex-1 flex flex-col gap-1.5">
              <span className="text-sm font-bold uppercase tracking-wider text-[#FFF0E9]">
                {item.label}
              </span>
              <p className="text-sm font-normal leading-[1.45] text-white/90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
