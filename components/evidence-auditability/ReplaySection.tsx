"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { Check, X } from "lucide-react";
import { REPLAY_DATA } from "./evidence-auditability-data";
import { SectionContainer, PrimaryButton, Reveal } from "./shared";

export default function ReplaySection() {
  return (
    <div id="replay" className="relative w-full overflow-hidden bg-[rgba(29,3,59,0.9)]">
      <div className="absolute h-[644px] w-[1440px] top-[-20px] left-1/2 -translate-x-1/2 ml-[20px] opacity-28 pointer-events-none select-none" aria-hidden="true">
        <Image src="/evidence-auditability/replay-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-[13px] font-bold uppercase text-[#F4A261]">{REPLAY_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-extrabold leading-[1.08] tracking-tight text-white">
              {REPLAY_DATA.title}
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8">
          <Reveal delay={0.06} className="w-full lg:max-w-[684px]">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[16px] leading-[1.6] text-[#D9D0DF]">{REPLAY_DATA.description}</p>
              <div className="flex flex-col gap-2.5">
                {REPLAY_DATA.boundaryList.map((item) => (
                  <div key={item.text} className="flex items-start gap-2">
                    {item.ok ? (
                      <Check className="h-4 w-4 shrink-0 text-white mt-0.5" aria-hidden="true" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-white mt-0.5" aria-hidden="true" />
                    )}
                    <span className="text-[13px] text-white">{item.text}</span>
                  </div>
                ))}
              </div>
              <div>
                <PrimaryButton href="#" className="!bg-[#F4A261] !border-[#F4A261] !text-[#18141B] !shadow-none">
                  {REPLAY_DATA.cta}
                </PrimaryButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="w-full lg:max-w-[500px]">
            <div className="rounded-[16px] border border-white/15 bg-[#260047] p-[24px] space-y-[12px]">
              <h3 className="text-[14px] font-bold text-white">{REPLAY_DATA.statusCard.title}</h3>
              <div className="flex flex-wrap gap-2">
                {REPLAY_DATA.statusCard.statuses.map((status) => (
                  <span
                    key={status.label}
                    className={clsx(
                      "rounded px-3 py-1.5 text-xs font-semibold whitespace-nowrap",
                      status.active ? "bg-[#F4A261] text-[#18141B]" : "bg-[#3A0D66] text-white"
                    )}
                  >
                    {status.label}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-[1.4] text-[#D9D0DF]">{REPLAY_DATA.statusCard.note}</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </div>
  );
}
