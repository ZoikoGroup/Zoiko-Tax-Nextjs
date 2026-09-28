"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./shared";

const maySuggestItems = [
  "Summarize rule variations across markets",
  "Propose standard industry classifications",
  "Flag suspicious ledger transaction patterns",
  "Forecast obligations under model adjustments",
];

const willNeverItems = [
  "Commit monetary decisions without review",
  "Bypass required operator check gates",
  "Override or erase preserved transaction evidence",
  "File final compliance reports autonomously",
];

export default function AIBoundarySection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#160228] py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/platform-overview/AI Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-[#230842]/85 p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
              Advisory intelligence, never authoritative.
            </h2>

            <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {/* Column 1: AI MAY SUGGEST */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                  AI MAY SUGGEST
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm leading-relaxed text-zinc-200">
                  {maySuggestItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#F4A261] font-bold select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: AI WILL NEVER */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                  AI WILL NEVER
                </span>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm leading-relaxed text-zinc-200">
                  {willNeverItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF7A70] font-bold select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Proposition */}
            <div className="mt-8 sm:mt-10 border-t border-white/10 pt-5">
              <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-300">
                Proposition: AI assists; approved rules decide; evidence proves. Decision responsibility remains strictly human.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
