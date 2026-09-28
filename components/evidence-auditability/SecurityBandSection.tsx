"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SECURITY_BAND_DATA } from "./evidence-auditability-data";
import { SectionContainer, Reveal } from "./shared";

export default function SecurityBandSection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#1D033B]">
      <div className="absolute inset-0 opacity-29 pointer-events-none select-none" aria-hidden="true">
        <Image src="/evidence-auditability/security-band-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] font-bold uppercase text-[#F4A261]">{SECURITY_BAND_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold leading-[1.1] text-white">
              {SECURITY_BAND_DATA.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-center">
          <Reveal delay={0.06}>
            <div className="flex flex-col gap-4">
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{SECURITY_BAND_DATA.paragraph1}</p>
              <p className="text-[13px] leading-[1.4] text-[#D9D0DF]">{SECURITY_BAND_DATA.paragraph2}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-xl border border-white/15 bg-[#260047] p-5 space-y-2.5">
              <span className="text-xs font-bold uppercase text-[#F4A261]">{SECURITY_BAND_DATA.policiesTitle}</span>
              <ul className="flex flex-col gap-2">
                {SECURITY_BAND_DATA.policies.map((policy) => (
                  <li key={policy} className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3 shrink-0 text-white" aria-hidden="true" />
                    <span className="text-[13px] text-white underline underline-offset-2">{policy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </div>
  );
}
