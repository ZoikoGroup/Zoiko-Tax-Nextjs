"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  Package,
  Handshake,
  User,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { TAXONOMY_SECTION_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

const TYPE_ICONS = {
  corporate: Building2,
  product: Package,
  partner: Handshake,
  leadership: User,
  trust: ShieldCheck,
  event: Calendar,
};

export default function TaxonomySection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background subtle diamond lattice pattern */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40" aria-hidden="true">
        <Image
          src="/wholesale-carriers-and-aggregators/white-bg.png"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {TAXONOMY_SECTION_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {TAXONOMY_SECTION_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {TAXONOMY_SECTION_DATA.description}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F3ECF7] text-[#4A154B]">
                {TAXONOMY_SECTION_DATA.badge}
              </span>
            </div>
          </Reveal>
        </div>

        {/* 6 Types Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TAXONOMY_SECTION_DATA.types.map((tp, idx) => {
            const Icon = TYPE_ICONS[tp.iconName];
            return (
              <Reveal key={tp.id} delay={0.05 * (idx % 3)}>
                <div className="h-full rounded-2xl border border-[#E9E2EE] bg-white/95 backdrop-blur-sm p-6 sm:p-7 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between hover:shadow-[0_6px_20px_rgba(40,10,60,0.05)] transition-all duration-200">
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#FFF6F0] flex items-center justify-center text-[#BF6735] shrink-0">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>

                    <h3 className="text-base font-bold text-[#18141B] mt-4">
                      {tp.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#605C66] leading-relaxed mt-2.5">
                      {tp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* 7th Type "Other" Full-width Card */}
        <Reveal delay={0.2}>
          <div className="mt-5 rounded-2xl bg-[#F7F2FA] border border-[#EADBEE] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <h3 className="text-sm sm:text-base font-bold text-[#18141B] shrink-0 min-w-[70px]">
              {TAXONOMY_SECTION_DATA.otherType.title}
            </h3>
            <p className="text-xs text-[#605C66] leading-relaxed">
              {TAXONOMY_SECTION_DATA.otherType.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
