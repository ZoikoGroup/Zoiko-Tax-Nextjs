"use client";

import React from "react";
import Image from "next/image";
import { UserRound, Users } from "lucide-react";
import { SPEAKERS_DATA as S } from "./events-data";
import { Reveal } from "./shared";

export default function SpeakersSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1d033b]">
      <div className="absolute inset-0 blur-[1px]" aria-hidden="true">
        <Image src="/events/speakers-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.8)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#F4A261]">{S.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{S.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{S.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal delay={0.04}>
            <div className="h-full rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col gap-6">
              <UserRound className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
              <h3 className="text-2xl sm:text-[32px] font-bold text-white">{S.governance.title}</h3>
              <span className="inline-flex w-fit items-center rounded-full bg-white/[0.08] border border-white/[0.19] px-3 py-1.5 text-xs font-mono text-[#D9D0DF]">
                {S.governance.badge}
              </span>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{S.governance.description}</p>
              <div className="flex flex-col gap-3.5 pt-2 text-sm text-[#D9D0DF]">
                {S.governance.fields.map((f) => (
                  <p key={f.label}>
                    {f.label} · {f.value}
                  </p>
                ))}
              </div>
              <p className="text-sm leading-[1.6] text-[#D9D0DF]">{S.governance.footnote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[26px] bg-white/[0.04] border border-white/[0.15] p-7 sm:p-9 flex flex-col gap-6">
              <Users className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
              <h3 className="text-2xl sm:text-[32px] font-bold text-white">{S.attribution.title}</h3>
              <div className="flex flex-col gap-4">
                {S.attribution.roles.map((role) => (
                  <div key={role.label} className="flex flex-col gap-1.5">
                    <span className="text-base font-bold text-[#F4A261]">{role.label}</span>
                    <p className="text-sm leading-[1.6] text-[#D9D0DF]">{role.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{S.attribution.footnote}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
