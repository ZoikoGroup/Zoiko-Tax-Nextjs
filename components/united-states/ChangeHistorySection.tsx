"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CHANGE_HISTORY_DATA as C } from "./united-states-data";
import { Reveal } from "./shared";

export default function ChangeHistorySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/united-states/change-history-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,3,39,0.94)] via-50% via-[rgba(18,3,39,0.84)] to-[rgba(18,3,39,0.62)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px] flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-14">
          <Reveal className="flex-1">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-[#F4A261]">{C.eyebrow}</span>
                <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{C.title}</h2>
              </div>
              <p className="text-lg sm:text-[20px] leading-[1.55] text-[#D9D0DF]">{C.description}</p>
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-[360px] shrink-0" delay={0.04}>
            <div className="rounded-2xl bg-[#301153] p-7 flex flex-col gap-5">
              <p className="text-sm text-[#D9D0DF]">{C.latestState.label}</p>
              <p className="text-2xl font-bold text-white">{C.latestState.value}</p>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/[0.33] bg-white/5 px-[22px] h-[50px] text-sm font-semibold text-white">
                {C.latestState.action}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {C.rules.map((r) => (
              <div key={r.title} className="border-t border-white/20 pt-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{r.title}</h3>
                <p className="text-[15px] leading-[1.55] text-[#D9D0DF]">{r.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm leading-[1.5] text-[#D9D0DF]">{C.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
