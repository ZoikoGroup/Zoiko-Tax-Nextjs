"use client";

import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { GitPullRequestArrow } from "lucide-react";
import { BG, CONTRACT_DATA } from "./developer-overview-data";
import { ArrowLink, ICONS, Reveal, SectionHeader } from "./shared";

export default function ContractSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2A1840]">
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image src={BG.contract} alt="" fill className="object-cover" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 md:py-24 flex flex-col gap-10">
        <Reveal>
          <SectionHeader dark eyebrow={CONTRACT_DATA.eyebrow} title={CONTRACT_DATA.title} description={CONTRACT_DATA.description} />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {CONTRACT_DATA.modes.map((mode, idx) => (
            <Reveal key={mode.title} delay={0.04 * idx} className="h-full">
              <div
                className={clsx(
                  "h-full rounded-3xl border p-6 sm:p-8 flex flex-col gap-4",
                  mode.highlight ? "bg-[#3B1A5C]/95 border-[#8E7AA3]" : "bg-[#200A38]/95 border-[#6B5B7B]"
                )}
              >
                <span className="text-xs font-bold uppercase text-[#F4A261]">{mode.tag}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{mode.title}</h3>
                <p className="text-base leading-6 text-[#D9D0DF]">{mode.description}</p>
                <p className="mt-auto text-sm font-semibold text-[#D9D0DF]">{mode.flow}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTRACT_DATA.principles.map((p, idx) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={p.title} delay={0.04 * idx} className="h-full">
                <div className="h-full pt-6 border-t border-[#5A4A6B] flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#F4A261]" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-white">{p.title}</h3>
                  <p className="text-sm leading-5 text-[#D9D0DF]">{p.description}</p>
                  {p.link && (
                    <div className="pt-2 flex flex-col gap-[5px]">
                      <ArrowLink dark href={p.link.href}>
                        {p.link.label}
                      </ArrowLink>
                      <span className="text-xs leading-4 text-[#D9D0DF]">{p.path}</span>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <div className="w-full rounded-2xl border border-[#6B5B7B] bg-white/5 p-5 sm:p-6 flex items-start gap-4">
            <GitPullRequestArrow className="h-6 w-6 shrink-0 text-[#F4A261]" strokeWidth={1.7} aria-hidden="true" />
            <div className="flex-1 flex flex-col gap-1.5">
              <span className="text-xs font-bold uppercase text-[#F4A261]">{CONTRACT_DATA.shadow.tag}</span>
              <p className="text-base leading-6 text-[#E9E1EF]">{CONTRACT_DATA.shadow.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
