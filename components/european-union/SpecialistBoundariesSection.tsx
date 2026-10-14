"use client";

import React from "react";
import { SPECIALIST_BOUNDARIES_DATA } from "./european-union-data";
import { SectionContainer, SectionHeading, Reveal } from "./shared";

export default function SpecialistBoundariesSection() {
  const sb = SPECIALIST_BOUNDARIES_DATA;

  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={sb.eyebrow}
            title={sb.title}
            description={sb.description}
          />
        </Reveal>

        {/* Specialist Directory */}
        <Reveal delay={0.06}>
          <div className="rounded-2xl border border-[#D8CEDD] bg-white divide-y divide-[#D8CEDD] overflow-hidden shadow-xs">
            {sb.surfaces.map((s) => (
              <div
                key={s.title}
                className="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-[#FAF8FC]/50 transition-colors"
              >
                <div className="md:col-span-4 flex flex-col gap-1">
                  <h4 className="text-lg font-bold text-[#301153]">
                    {s.title}
                  </h4>
                  <span className="text-sm font-normal text-[#665F69]">
                    {s.role}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base font-normal leading-[1.6em] text-[#665F69]">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Professional Boundary Container */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl bg-[#FAF3FF] p-6 sm:p-7 flex flex-col gap-3 shadow-xs">
            <h4 className="text-lg font-semibold text-[#18141B]">
              {sb.professionalBoundary.title}
            </h4>
            <p className="text-sm font-normal leading-[1.6em] text-[#665F69]">
              {sb.professionalBoundary.description}
            </p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
