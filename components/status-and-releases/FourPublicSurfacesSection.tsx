"use client";

import React from "react";
import Link from "next/link";
import { Link2 } from "lucide-react";
import { SectionContainer, SectionHeader, StatusBadge } from "./shared";
import { publicSurfacesData } from "./status-data";

export default function FourPublicSurfacesSection() {
  return (
    <SectionContainer patternBg className="bg-[#FAF8FA]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Information architecture"
          title="Four public surfaces, kept distinct"
          description="Each public route has one canonical job. Keeping them separate prevents chronology, pack lifecycle and product delivery from being mistaken for current Coverage."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {publicSurfacesData.map((item) => {
            const isHighlight = item.isCurrentSurface;

            return (
              <div
                key={item.title}
                className={
                  isHighlight
                    ? "flex flex-col justify-between gap-4 rounded-2xl bg-[#301153] p-5 sm:p-6 text-white border border-[#301153] shadow-md"
                    : "flex flex-col justify-between gap-4 rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 shadow-sm transition hover:shadow-md"
                }
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3
                      className={`text-xl font-bold ${
                        isHighlight ? "text-white" : "text-[#18141B]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {isHighlight && <StatusBadge label="THIS SURFACE" />}
                  </div>

                  <p
                    className={`text-sm font-normal leading-[1.5] ${
                      isHighlight ? "text-[#D9D0DF]" : "text-[#665F69]"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-2">
                  <div
                    className={`h-[1px] w-full ${
                      isHighlight ? "bg-white/15" : "bg-[#EAE2ED]"
                    }`}
                  />
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors group ${
                      isHighlight
                        ? "text-white hover:text-[#FFF0E9]"
                        : "text-[#301153] hover:text-[#D65A2C]"
                    }`}
                  >
                    <Link2 className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" />
                    <span>{item.route}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
