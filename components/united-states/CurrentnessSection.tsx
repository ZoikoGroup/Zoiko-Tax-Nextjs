"use client";

import React from "react";
import { CircleMinus, FileSearch } from "lucide-react";
import { CURRENTNESS_DATA as C } from "./united-states-data";
import { Reveal } from "./shared";

export default function CurrentnessSection() {
  return (
    <section className="relative w-full bg-white border-t border-b border-[#D8CEDD] py-12 sm:py-16">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/united-states/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] flex flex-col gap-7">
        <Reveal>
          <div className="flex flex-col sm:flex-row gap-7 items-start">
            <span className="shrink-0 rounded-2xl bg-[#F1E8F5] p-3.5">
              <FileSearch className="h-7 w-7 text-[#301153]" aria-hidden="true" />
            </span>
            <div className="flex-1 flex flex-col gap-3">
              <h2 className="text-2xl sm:text-[28px] font-bold leading-[1.1] text-[#18141B]">{C.title}</h2>
              <p className="text-base leading-[1.55] text-[#665F69]">{C.description}</p>
            </div>
            <span className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-[#D8CEDD] bg-[#F5F1F6] px-3 py-2.5">
              <CircleMinus className="h-4 w-4 text-[#665F69]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#18141B]">{C.badge}</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="border-t border-[#D8CEDD] pt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {C.fields.map((f) => (
              <div key={f.label} className="flex flex-col gap-2">
                <span className="text-[13px] text-[#665F69]">{f.label}</span>
                <span className="text-base font-semibold text-[#18141B]">{f.value}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
