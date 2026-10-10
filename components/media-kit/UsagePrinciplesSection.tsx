"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, AuthorityNotice } from "./shared";
import { usageDoRules, usageDoNotRules } from "./types";

export default function UsagePrinciplesSection() {
  return (
    <SectionContainer id="usage-principles" hasPattern={true} className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Usage principles"
          title="Preserve the art. Preserve the meaning."
          description="Use the approved guidance for the specific asset and context. These principles do not grant permission."
        />
      </Reveal>

      {/* Do & Do Not Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* DO Card */}
        <Reveal delay={0.05}>
          <div className="h-full rounded-[26px] bg-white border border-[#D8CEDD] p-7 sm:p-9 space-y-7 shadow-xs">
            <h3 className="text-2xl sm:text-[28px] font-bold text-[#18141B] font-['Inter',sans-serif]">
              Do
            </h3>

            <div className="space-y-6">
              {usageDoRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5.5 h-5.5 relative shrink-0 mt-0.5">
                    <Image
                      src="/media-kit/icons/check.svg"
                      alt="Check"
                      width={22}
                      height={22}
                      className="w-5.5 h-5.5"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-[#18141B] font-['Inter',sans-serif]">
                      {rule.title}
                    </h4>
                    <p className="text-sm sm:text-base leading-[1.6] text-[#665F69]">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* DO NOT Card */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-[26px] bg-[#301153] p-7 sm:p-9 space-y-7 shadow-md">
            <h3 className="text-2xl sm:text-[28px] font-bold text-white font-['Inter',sans-serif]">
              Do not
            </h3>

            <div className="space-y-6">
              {usageDoNotRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-5.5 h-5.5 relative shrink-0 mt-0.5">
                    <Image
                      src="/media-kit/icons/x.svg"
                      alt="Do not"
                      width={22}
                      height={22}
                      className="w-5.5 h-5.5 invert opacity-80"
                    />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base sm:text-lg font-bold text-white font-['Inter',sans-serif]">
                      {rule.title}
                    </h4>
                    <p className="text-sm sm:text-base leading-[1.6] text-[#D9D0DF]">
                      {rule.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Authority Notice */}
      <Reveal delay={0.15}>
        <AuthorityNotice
          title="When the guidance does not answer your use case"
          description="Withhold publication and seek the governed brand or media approval for the exact asset and intended use. The contact route has not yet been published."
        />
      </Reveal>
    </SectionContainer>
  );
}
