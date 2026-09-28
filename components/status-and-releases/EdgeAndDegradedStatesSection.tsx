"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader } from "./shared";
import { edgeStatesData } from "./status-data";

export default function EdgeAndDegradedStatesSection() {
  const handleAction = (href: string, e: React.MouseEvent) => {
    if (href === "#") {
      e.preventDefault();
      const el = document.getElementById("latest-changes");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SectionContainer patternBg className="bg-[#FAF8FA]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Defensive UX"
          title="Edge and degraded states"
          description="The chronology must state uncertainty directly. No results does not mean no Coverage, and stale chronology must not be silently presented as current."
        />

        {/* Edge States Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {edgeStatesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-[#EAE2ED] bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FAF3FF] text-[#301153]">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#18141B]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm font-normal leading-[1.5] text-[#665F69]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-1">
                  <Link
                    href={item.linkHref}
                    onClick={(e) => handleAction(item.linkHref, e)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#301153] hover:text-[#D65A2C] transition-colors group"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
