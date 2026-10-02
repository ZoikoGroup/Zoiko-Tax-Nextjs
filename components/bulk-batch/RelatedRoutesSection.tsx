"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer, SectionHeader } from "./shared";
import { ROUTE_CARDS } from "./types";

export default function RelatedRoutesSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="11 / RELATED DEVELOPER ROUTES"
          title="Continue with the source that owns the truth."
          description="Documentation first. Related routes clarify contracts, compatibility, notifications, non-production use and independent coverage or access boundaries."
        />

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ROUTE_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group flex-1 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-[#D8CEDD] flex flex-col justify-between gap-3 transition-all duration-200 hover:outline-[#BF6735] hover:shadow-sm"
            >
              <div className="flex flex-col items-start gap-2">
                <div className="flex w-full items-start justify-between">
                  <span className="text-lg font-bold text-[#18141B] font-['Inter',sans-serif]">{card.title}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#D65A2C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                </div>
                <p className="text-sm leading-6 text-[#665F69] font-['Inter',sans-serif]">{card.description}</p>
              </div>
              <span className="text-xs font-semibold text-[#D65A2C] font-['Inter',sans-serif]">{card.href}</span>
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
