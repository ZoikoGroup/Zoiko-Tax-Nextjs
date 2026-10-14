"use client";

import React from "react";
import Image from "next/image";
import { SPECIALIST_BOUNDARIES_DATA } from "./united-kingdom-data";
import {
  SectionContainer,
  SectionHeading,
  IconArrowUpRight,
  IconCodeXml,
  IconShield,
  IconActivity,
  IconMessageCircle,
  IconLockKeyhole,
  IconMessagesSquare,
  Reveal,
} from "./shared";

const SPECIALIST_ICONS = [
  IconCodeXml,
  IconShield,
  IconActivity,
  IconMessageCircle,
  IconLockKeyhole,
  IconMessagesSquare,
];

export default function SpecialistBoundariesSection() {
  const sb = SPECIALIST_BOUNDARIES_DATA;

  return (
    <SectionContainer className="relative bg-[#FAF3FF] overflow-hidden">
      {/* Background Editorial Texture */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={sb.eyebrow}
            title={sb.title}
            description={sb.description}
          />
        </Reveal>

        {/* 6 Specialist Surfaces Cards in 2 rows of 3 */}
        <Reveal delay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sb.surfaces.map((item, idx) => {
              const IconComponent = SPECIALIST_ICONS[idx];
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-3.5 shadow-xs"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#301153]">
                    <IconComponent className="w-6 h-6 shrink-0" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-[22px] font-bold leading-[1.25em] text-[#18141B]">
                      {item.title}
                    </h3>
                    <span className="text-sm font-semibold leading-[1.5em] text-[#301153]">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-[15px] font-normal leading-[1.6em] text-[#665F69]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Office and Advice Boundaries Container */}
        <Reveal delay={0.1}>
          <div className="rounded-[26px] bg-[#301153] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-white shadow-xs">
            {sb.corporateAndAdvice.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h4 className="text-[21px] font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-base font-normal leading-[1.6em] text-[#D9D0DF]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Developer Handoff Row */}
        <Reveal delay={0.14}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="max-w-[790px] text-[15px] font-normal leading-[1.6em] text-[#665F69]">
              {sb.handoff.text}
            </p>
            <a
              href={sb.handoff.actionHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-[22px] py-[14px] text-sm font-semibold text-[#18141B] hover:bg-[#FAF8FA] hover:border-[#BF6735]/40 transition-all cursor-pointer whitespace-nowrap text-center active:scale-[0.98]"
            >
              <span>{sb.handoff.actionLabel}</span>
              <IconArrowUpRight className="w-4 h-4 shrink-0 stroke-[#18141B] text-[#18141B]" />
            </a>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
