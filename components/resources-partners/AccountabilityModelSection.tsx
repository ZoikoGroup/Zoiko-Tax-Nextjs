"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Info, ArrowUpRight } from "lucide-react";
import { Reveal } from "./shared";
import { accountabilityModelData } from "./types";

export default function AccountabilityModelSection() {
  const { matrix, notice, linearAlternative, verificationRoutes } = accountabilityModelData;

  return (
    <section className="relative w-full bg-[#1D033B] py-20 lg:py-[104px] text-white overflow-hidden border-b border-[#301153]">
      {/* Background Image with exact 88% #1D033B overlay matching Figma */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/resources-partners/accountability-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1D033B]/88" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20">
        <Reveal>
          <div className="space-y-10">
            {/* Section Heading */}
            <div className="space-y-3 max-w-4xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
                {accountabilityModelData.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.09] tracking-tight text-white font-['Inter',sans-serif]">
                {accountabilityModelData.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#D9D0DF]">
                {accountabilityModelData.introduction}
              </p>
            </div>

            {/* Responsibility Matrix Table */}
            <div className="rounded-[26px] border border-[#624675] overflow-hidden bg-[#24103D] shadow-xl">
              {/* Table Headers */}
              <div className="grid grid-cols-12 bg-[#301153] px-6 sm:px-8 py-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                <div className="col-span-12 md:col-span-3">Responsibility area</div>
                <div className="hidden md:block col-span-3">ZoikoTax</div>
                <div className="hidden md:block col-span-3">Partner</div>
                <div className="hidden md:block col-span-3">Customer</div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#624675]">
                {matrix.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 px-6 sm:px-8 py-6 text-sm sm:text-base gap-3 md:gap-0 items-start md:items-center hover:bg-[#2c1549] transition-colors"
                  >
                    <div className="col-span-12 md:col-span-3 font-semibold text-[#F4A261] md:pr-4">
                      {row.area}
                    </div>
                    <div className="col-span-12 md:col-span-3 text-[#D9D0DF] md:pr-4 leading-relaxed">
                      <span className="md:hidden text-xs uppercase font-bold text-white/50 block mb-1">
                        ZoikoTax:
                      </span>
                      {row.zoikoTax}
                    </div>
                    <div className="col-span-12 md:col-span-3 text-[#D9D0DF] md:pr-4 leading-relaxed">
                      <span className="md:hidden text-xs uppercase font-bold text-white/50 block mb-1">
                        Partner:
                      </span>
                      {row.partner}
                    </div>
                    <div className="col-span-12 md:col-span-3 text-[#D9D0DF] leading-relaxed">
                      <span className="md:hidden text-xs uppercase font-bold text-white/50 block mb-1">
                        Customer:
                      </span>
                      {row.customer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Notice */}
            <div className="rounded-[16px] border border-[#624675] bg-[#1D033B] p-5 flex items-start gap-3.5">
              <div className="shrink-0 text-[#F4A261] mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">
                  {notice.title}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-[#D9D0DF] leading-relaxed">
                  {notice.explanation}
                </p>
              </div>
            </div>

            {/* Linear Responsibility Alternative */}
            <div className="space-y-6 pt-2">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {linearAlternative.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-[#D9D0DF]">
                  {linearAlternative.context}
                </p>
              </div>

              <div className="space-y-5">
                {linearAlternative.areas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-7"
                  >
                    <span className="text-sm font-bold text-[#F4A261] sm:w-[194px] shrink-0">
                      {area.name}
                    </span>
                    <p className="text-xs sm:text-sm font-normal text-[#D9D0DF] leading-relaxed flex-1">
                      {area.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Routes */}
            <div className="flex flex-wrap items-center gap-8 pt-2">
              {verificationRoutes.map((route, idx) => (
                <Link
                  key={idx}
                  href={route.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F4A261] hover:text-[#f8b884] transition-colors group"
                >
                  <span className="group-hover:underline underline-offset-4">{route.label}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
