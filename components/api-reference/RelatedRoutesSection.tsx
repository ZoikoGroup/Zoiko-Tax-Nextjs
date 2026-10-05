"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RELATED_DATA } from "./api-reference-data";
import { ICONS, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function RelatedRoutesSection() {
  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={RELATED_DATA.eyebrow} title={RELATED_DATA.title} description={RELATED_DATA.description} />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED_DATA.routes.map((route, idx) => {
            const Icon = ICONS[route.icon];
            return (
              <Reveal key={route.title} delay={0.03 * idx} className="h-full">
                <Link
                  href={route.href}
                  className="group h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3 transition-all hover:border-[#BF6735]/50 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.6} aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 text-[#D65A2C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-1 text-xl text-[#18141B]">{route.title}</h3>
                  <p className="text-sm leading-[22px] text-[#665F69]">{route.description}</p>
                  <span className="mt-auto pt-2 text-xs text-[#301153]">{route.path}</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
