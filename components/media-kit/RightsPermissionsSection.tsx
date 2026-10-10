"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, AuthorityNotice } from "./shared";
import { rightsBoundariesData } from "./types";

export default function RightsPermissionsSection() {
  return (
    <SectionContainer id="rights-permissions" className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Rights & permissions"
          title="Access is not legal permission."
          description="A download, when available, provides a file. It does not independently establish trademark, copyright or other usage rights."
        />
      </Reveal>

      {/* 3 Guidance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rightsBoundariesData.map((item, idx) => (
          <Reveal key={item.title} delay={0.05 * idx}>
            <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] p-7 sm:p-8 flex flex-col justify-between space-y-5 hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
              <div className="space-y-4">
                <div className="w-6 h-6 relative shrink-0">
                  <Image
                    src={`/media-kit/icons/${item.icon}.svg`}
                    alt={item.title}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base leading-[1.6] text-[#665F69]">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Authority Notice */}
      <Reveal delay={0.2}>
        <AuthorityNotice
          title="Permission must stay with the asset"
          description="Check approved use, restrictions, credit, expiry and territory where applicable. If any rights information is unresolved, do not publish or substitute a file from another source; seek the approved next step."
        />
      </Reveal>
    </SectionContainer>
  );
}
