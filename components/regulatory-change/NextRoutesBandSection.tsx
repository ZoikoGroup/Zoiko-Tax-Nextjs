"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { NEXT_ROUTES_DATA } from "./regulatory-change-data";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function NextRoutesBandSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/regulatory-change/next-routes-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 text-center">
        <div className="mx-auto max-w-[1020px] flex flex-col items-center gap-5">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-white">
              {NEXT_ROUTES_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF] max-w-[850px]">{NEXT_ROUTES_DATA.description}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              {NEXT_ROUTES_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label}>
                    <span className="inline-flex items-center gap-2">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={action.label} className="!bg-white/[0.04] !text-white !border-[#8B729F] hover:!bg-white/10">
                    <span className="inline-flex items-center gap-2">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                )
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
