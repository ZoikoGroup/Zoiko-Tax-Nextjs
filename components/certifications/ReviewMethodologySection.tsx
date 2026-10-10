"use client";

import React from "react";
import Image from "next/image";
import { REVIEW_METHODOLOGY_DATA as R } from "./certifications-data";
import { Reveal } from "./shared";

export default function ReviewMethodologySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#301153]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/certifications/review-methodology-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(48,17,83,0.8)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-20 lg:py-[104px] flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#F4A261]">{R.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-white">{R.title}</h2>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-lg bg-[#210B3C] p-5">
            <p className="text-sm leading-[1.6] text-[#D9D0DF]">{R.scopeNote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="flex flex-col sm:flex-row gap-3">
            {R.lifecycle.map((step, i) => (
              <div key={step} className="flex-1 rounded-2xl bg-[#49216C] px-4 py-5 flex items-center justify-between gap-2">
                <span className="text-base font-semibold text-white">{step}</span>
                {i < R.lifecycle.length - 1 && <span className="text-lg text-[#D9D0DF] hidden sm:inline">→</span>}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {R.practices.map((p) => (
              <div key={p.title} className="flex flex-col gap-2.5">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{p.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm leading-[1.6] text-[#D9D0DF]">{R.footnote}</p>
        </Reveal>
      </div>
    </section>
  );
}
