"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader } from "./shared";
import { capabilityRoutesData } from "./status-data";

export default function CapabilityCoverageLinksSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Current-scope routes"
          title="Verify Coverage by capability"
          description="Each route opens current scope for the named capability. A route is not itself an availability claim."
        />

        {/* Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilityRoutesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-[#D8CEDD] bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF3FF] text-[#301153]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#18141B]">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-[1.5] text-[#665F69]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={item.linkHref}
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
