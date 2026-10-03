"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RELATED_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, ICONS } from "./shared";

export default function RelatedRoutesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader eyebrow={RELATED_DATA.eyebrow} title={RELATED_DATA.title} description={RELATED_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_DATA.primary.map((route, idx) => {
            const Icon = ICONS[route.icon];
            return (
              <Reveal key={route.title} delay={0.04 * idx} className="h-full">
                <Link
                  href={route.href}
                  className="group h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4 transition-all hover:border-[#BF6735]/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="h-7 w-7 text-[#D65A2C]" strokeWidth={1.5} aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-[#D65A2C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#18141B]">{route.title}</h3>
                  <p className="text-[15px] leading-6 text-[#665F69]">{route.description}</p>
                  <span className="mt-auto text-xs text-[#665F69]">{route.path}</span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_DATA.secondary.map((route, idx) => (
            <Reveal key={route.title} delay={0.04 * idx} className="h-full">
              <Link
                href={route.href}
                className="h-full rounded-2xl bg-[#F1E8F8] p-6 flex flex-col gap-3 transition-colors hover:bg-[#EADDF4]"
              >
                <h3 className="text-xl font-semibold text-[#18141B]">{route.title}</h3>
                <p className="text-[15px] leading-6 text-[#665F69]">{route.description}</p>
                <span className="mt-auto text-xs text-[#665F69]">{route.path}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
