"use client";

import React from "react";
import Image from "next/image";
import { Cable, ListChecks } from "lucide-react";
import { SectionContainer, SectionHeader, ContextualLink, ScopeNotice, Reveal } from "./shared";
import { technologyScopeData } from "./types";

export default function TechnologyScopeSection() {
  const { techRole, implementationRole, notice } = technologyScopeData;

  return (
    <SectionContainer className="relative overflow-hidden bg-white border-b border-[#D8CEDD]">
      {/* Pattern Background matching Figma asset 6f3d71f3... */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        aria-hidden="true"
      >
        <Image
          src="/resources-partners/pattern-bg.png"
          alt="Technology and implementation scope pattern background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="space-y-12">
            {/* Section Heading */}
            <SectionHeader
              eyebrow={technologyScopeData.eyebrow}
              title={technologyScopeData.title}
              description={technologyScopeData.introduction}
            />

            {/* Role Comparison (2 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Technology Integration */}
              <div className="rounded-2xl border border-[#E0D5E6] bg-white p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F4EDF8] flex items-center justify-center border border-[#DFD3E7]">
                    <Cable className="w-6 h-6 text-[#301153]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                      {techRole.title}
                    </h3>
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-[#665F69]">
                      {techRole.introduction}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {techRole.fields.map((f, idx) => (
                      <div key={idx} className="space-y-1 border-t border-[#F0EAF4] pt-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                          {f.label}
                        </span>
                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#665F69]">
                          {f.guidance}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EAF4]">
                  <ContextualLink label={techRole.link.label} href={techRole.link.href} />
                </div>
              </div>

              {/* Implementation Delivery */}
              <div className="rounded-2xl border border-[#E0D5E6] bg-white p-6 sm:p-8 lg:p-9 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-xl bg-[#F4EDF8] flex items-center justify-center border border-[#DFD3E7]">
                    <ListChecks className="w-6 h-6 text-[#301153]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                      {implementationRole.title}
                    </h3>
                    <p className="text-sm sm:text-base font-normal leading-relaxed text-[#665F69]">
                      {implementationRole.introduction}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {implementationRole.fields.map((f, idx) => (
                      <div key={idx} className="space-y-1 border-t border-[#F0EAF4] pt-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                          {f.label}
                        </span>
                        <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#665F69]">
                          {f.guidance}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EAF4]">
                  <ContextualLink
                    label={implementationRole.link.label}
                    href={implementationRole.link.href}
                  />
                </div>
              </div>
            </div>

            {/* Scope Notice */}
            <ScopeNotice title={notice.title} explanation={notice.explanation} />
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
