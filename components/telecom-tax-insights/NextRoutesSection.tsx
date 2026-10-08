"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { NEXT_ROUTES_DATA as N } from "./telecom-tax-insights-data";
import { Reveal } from "./shared";

export default function NextRoutesSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/telecom-tax-insights/next-routes-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-16 flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#F4A261]">{N.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-white max-w-[960px]">{N.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF] max-w-[960px]">{N.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Reveal delay={0.04}>
            <div className="flex flex-col gap-4">
              {N.evidenceRoutes.map((r) => (
                <div key={r.label} className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[#F4A261]">{r.label}</span>
                  <span className="text-xs text-[#D9D0DF]">{r.path}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col gap-4">
              {N.productRoutes.map((r) => (
                <div key={r.label} className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[#F4A261]">{r.label}</span>
                  <span className="text-xs text-[#D9D0DF]">{r.path}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-full lg:w-[290px] flex flex-col gap-4">
              <p className="text-sm leading-[1.6] text-[#D9D0DF]">{N.discussion.note}</p>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.38] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#18141B]">
                {N.discussion.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-xs text-[#D9D0DF]">{N.discussion.footnote}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
