"use client";

import React from "react";
import Image from "next/image";
import { DEVELOPER_DATA } from "./e-invoicing-data";
import { SectionHeader, Reveal } from "./shared";

export default function DeveloperSection() {
  return (
    <section id="developers" className="relative w-full overflow-hidden bg-[#1D033B] py-16 sm:py-20 lg:py-24 text-white">
      {/* Developer background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-28">
        <Image
          src="/e-invoicing-ctc/developer-bg.png"
          alt="Developer abstract grid"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow={DEVELOPER_DATA.eyebrow}
          title={DEVELOPER_DATA.title}
          description={DEVELOPER_DATA.description}
          dark
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Guarantees */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={0.05}>
              <h3 className="text-2xl font-bold text-[#FFF8F5]">
                Developer Guarantees
              </h3>
              <ul className="space-y-4 mt-5">
                {DEVELOPER_DATA.guarantees.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-[#D8CEDD] leading-relaxed"
                  >
                    <span className="text-[#F4A261] font-bold text-lg select-none shrink-0 leading-none mt-1">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Illustrative Code Block */}
          <div className="lg:col-span-6">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-[#14091F] p-6 sm:p-7 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261] block mb-4">
                  ILLUSTRATIVE MAPPING PAYLOAD
                </span>
                <pre className="font-mono text-xs sm:text-sm text-[#E9DDF1] leading-relaxed overflow-x-auto p-4 rounded-xl bg-black/40 border border-white/5">
                  <code>{DEVELOPER_DATA.codeSnippet}</code>
                </pre>
                <p className="text-xs text-[#BFAFC8] mt-4">
                  Non-committing. Sandbox endpoints simulated.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
