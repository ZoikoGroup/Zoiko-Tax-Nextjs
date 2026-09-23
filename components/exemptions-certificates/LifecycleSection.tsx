"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader, Reveal } from "./shared";
import { lifecycleData } from "./exemptions-data";
import { Clock } from "lucide-react";

export default function LifecycleSection() {
  return (
    <section id="lifecycle" className="relative overflow-hidden bg-[#1D033B] py-12 sm:py-16 lg:py-24 text-white">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.27]">
        <Image
          src="/exemptions-certificates/lifecycle-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            dark
            eyebrow={lifecycleData.eyebrow}
            title={lifecycleData.title}
            description={lifecycleData.description}
          />
        </Reveal>

        {/* 6 Steps Horizontal Flow */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {lifecycleData.steps.map((step, idx) => (
            <Reveal key={step.num} delay={idx * 0.04}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/50 hover:bg-white/10">
                <div>
                  <span className="font-mono text-xs font-bold text-[#D65A2C]">
                    {step.num}
                  </span>
                  <h3 className="mt-2.5 sm:mt-3 text-sm font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/70">
                    {step.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Attention & Expiry Action Queue Mockup */}
        <Reveal delay={0.2}>
          <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#301153]/80 p-4 sm:p-6 md:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-[#D65A2C]" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {lifecycleData.queueTitle}
                </h3>
              </div>
              <span className="self-start sm:self-auto rounded-full bg-[#D65A2C]/20 px-2.5 py-0.5 text-xs font-medium text-[#FF9A52] border border-[#D65A2C]/30">
                2 Items Require Attention
              </span>
            </div>

            <div className="mt-5 sm:mt-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[650px] sm:min-w-[700px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-[#260047] text-xs font-bold text-white/90">
                    <th className="py-3 px-3 sm:px-4">Reason Code</th>
                    <th className="py-3 px-3 sm:px-4">Subject Entity</th>
                    <th className="py-3 px-3 sm:px-4">Reference ID</th>
                    <th className="py-3 px-3 sm:px-4">Trigger Date</th>
                    <th className="py-3 px-3 sm:px-4">Current Scope</th>
                    <th className="py-3 px-3 sm:px-4">Required Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs">
                  {lifecycleData.queueItems.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3.5 px-3 sm:px-4 font-semibold text-[#FF9A52] whitespace-nowrap">
                        {item.code}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 font-medium text-white">
                        {item.entity}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 font-mono text-white/80 whitespace-nowrap">
                        {item.ref}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-white/70 whitespace-nowrap">
                        {item.date}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-white/80">
                        {item.scope}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 whitespace-nowrap">
                        <button
                          type="button"
                          className="font-semibold text-[#D65A2C] hover:text-[#ff9a52] transition-colors"
                        >
                          {item.action} →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="sm:hidden flex items-center justify-end text-[11px] text-white/60 mt-2.5 font-medium">
              <span>← Scroll horizontally to view table →</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
