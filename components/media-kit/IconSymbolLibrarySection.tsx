"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StatusPill, UnavailableButton } from "./shared";

const utilityIcons = [
  { name: "search", label: "Search" },
  { name: "camera", label: "Camera" },
  { name: "download", label: "Download" },
  { name: "info", label: "Info" },
];

export default function IconSymbolLibrarySection() {
  return (
    <SectionContainer id="icon-symbol-library" className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Icon / symbol library"
          title="A mark needs its own source of truth."
          description="Brand symbols and product marks require a controlled asset record. They are not interchangeable with interface icons."
        />
      </Reveal>

      {/* 2 Guidance Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Brand & Product Marks */}
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] p-8 sm:p-9 flex flex-col justify-between space-y-6 hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
            <div className="space-y-4">
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/media-kit/icons/shield-question.svg"
                  alt="Brand mark"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                Brand & product marks
              </h3>

              <StatusPill text="UNAVAILABLE · REGISTRY MISSING" />

              <p className="text-base leading-[1.6] text-[#665F69]">
                No governed symbol registry is supplied. The approved mark, product association, usage scope and rights must be confirmed before any file is offered.
              </p>
            </div>

            <div className="pt-2">
              <UnavailableButton label="Download unavailable" />
            </div>
          </div>
        </Reveal>

        {/* Card 2: UI icons are not brand assets */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] p-8 sm:p-9 flex flex-col justify-between space-y-6 hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
            <div className="space-y-5">
              <div className="w-6 h-6 relative shrink-0">
                <Image
                  src="/media-kit/icons/mouse-pointer-2.svg"
                  alt="UI icons"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                UI icons are not brand assets
              </h3>

              {/* Utility Icon Examples */}
              <div className="flex items-center gap-4 py-2">
                {utilityIcons.map((icon) => (
                  <div
                    key={icon.name}
                    className="w-12 h-12 rounded-xl bg-[#FAF3FF] border border-[#D8CEDD] flex items-center justify-center hover:bg-[#F3EEF7] transition-colors"
                    title={icon.label}
                  >
                    <Image
                      src={`/media-kit/icons/${icon.name}.svg`}
                      alt={icon.label}
                      width={22}
                      height={22}
                      className="w-5.5 h-5.5 opacity-80"
                    />
                  </div>
                ))}
              </div>

              <p className="text-base leading-[1.6] text-[#665F69]">
                These interface symbols help you search, read and understand availability. Their appearance here does not make them licensed downloadable ZoikoTax marks or approved artwork for publication.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
