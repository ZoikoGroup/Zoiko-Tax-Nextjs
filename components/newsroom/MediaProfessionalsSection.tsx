"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import { MEDIA_PROFESSIONALS_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function MediaProfessionalsSection() {
  const { mediaResources, deskInfo } = MEDIA_PROFESSIONALS_DATA;

  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {MEDIA_PROFESSIONALS_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {MEDIA_PROFESSIONALS_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {MEDIA_PROFESSIONALS_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Media Resources */}
          <div className="lg:col-span-7">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-[#E9E2EE] bg-white p-6 sm:p-8 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-[#FFF6F0] flex items-center justify-center text-[#BF6735]">
                    <FileText className="w-4 h-4" aria-hidden="true" />
                  </div>

                  <h3 className="text-xl font-bold text-[#18141B] mt-4">
                    {mediaResources.title}
                  </h3>

                  <div className="mt-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#F3ECF7] text-[#4A154B]">
                      {mediaResources.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#605C66] mt-3 leading-relaxed">
                    {mediaResources.description}
                  </p>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C25E30] block mt-5">
                    {mediaResources.requirementsTag}
                  </span>

                  {/* Requirements List */}
                  <div className="mt-3 border-t border-[#F0EAF4]">
                    {mediaResources.rows.map((row, i) => (
                      <div
                        key={i}
                        className="border-b border-[#F0EAF4] py-2.5 flex flex-col sm:flex-row text-xs gap-1 sm:gap-4"
                      >
                        <span className="font-bold text-[#18141B] sm:w-44 shrink-0">
                          {row.key}
                        </span>
                        <span className="text-[#605C66] flex-1">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 pt-4 border-t border-[#F0EAF4] text-[11px] text-[#7A7582] leading-relaxed">
                  {mediaResources.bottomNote}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Card: Desk Information (Dark) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.08} className="h-full">
              <div className="h-full rounded-2xl border border-[#4C2177] bg-[#1C0636] p-6 sm:p-8 shadow-xl flex flex-col justify-between text-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4A261] block">
                    {deskInfo.tag}
                  </span>

                  <h3 className="text-xl font-bold text-white mt-1.5">
                    {deskInfo.title}
                  </h3>

                  <div className="mt-2.5">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-[#3E1B64] text-[#EADBEE] border border-[#5A2C8F]">
                      {deskInfo.badge}
                    </span>
                  </div>

                  <p className="text-xs text-[#D8CEDD] mt-3 leading-relaxed">
                    {deskInfo.description}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={deskInfo.button.href}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-[#BF6735] hover:bg-[#A85324] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                    >
                      <span>{deskInfo.button.label}</span>
                    </Link>
                  </div>

                  <p className="text-[11px] text-[#A89CB5] mt-3 leading-relaxed">
                    {deskInfo.guidance}
                  </p>
                </div>

                {/* Security reports notice */}
                <div className="mt-6 pt-5 border-t border-[#3E1B64]">
                  <h4 className="text-xs font-bold text-white">
                    {deskInfo.securityNotice.title}
                  </h4>
                  <Link
                    href={deskInfo.securityNotice.link.href}
                    className="text-xs font-semibold text-[#F4A261] hover:underline block mt-1"
                  >
                    {deskInfo.securityNotice.link.label}
                  </Link>
                  <span className="text-[10px] text-[#8E7E9E] font-mono block mt-0.5">
                    {deskInfo.securityNotice.link.path}
                  </span>
                  <p className="text-[11px] text-[#A89CB5] mt-2 leading-relaxed">
                    {deskInfo.securityNotice.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
