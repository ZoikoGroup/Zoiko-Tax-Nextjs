"use client";

import React from "react";
import { LockKeyhole, ArrowRight, Archive, Link2Off, Shield, Accessibility } from "lucide-react";
import { APPLYING_DATA as A, CANDIDATE_CARE_DATA as C } from "./careers-data";
import { SectionContainer, Reveal } from "./shared";

export default function ApplyingSection() {
  return (
    <>
      <SectionContainer className="bg-white relative">
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/careers/pattern-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-10">
          <Reveal>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase text-[#D65A2C]">{A.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{A.title}</h2>
              <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{A.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div className="flex-1 flex flex-col gap-4">
                <span className="inline-flex w-fit items-center rounded-full bg-white/[0.07] border border-white/10 px-3.5 py-2 text-xs font-mono text-[#D9D0DF]">
                  {A.availability.badge}
                </span>
                <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.1] text-white">{A.availability.title}</h3>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{A.availability.description}</p>
              </div>
              <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-5">
                <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#EEE7F2] px-6 h-[50px] text-sm font-semibold text-[#766B7D]">
                  {A.availability.applyAction}
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{A.availability.nextStepNote}</p>
                <span className="inline-flex w-fit items-center gap-2.5 rounded-full bg-[#190A36] border border-white/10 px-6 h-[50px] text-sm font-semibold text-white">
                  {A.availability.viewRolesAction}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {A.recovery.map((r, i) => {
              const Icon = i === 0 ? Archive : Link2Off;
              return (
                <Reveal key={r.title} delay={0.03 * i}>
                  <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                    <Icon className="h-6 w-6 text-[#18141B]" aria-hidden="true" />
                    <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.25] text-[#18141B]">{r.title}</h3>
                    <p className="text-base leading-[1.6] text-[#665F69]">{r.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
              <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{A.statusExplanations.title}</h3>
              <p className="text-sm leading-[1.6] text-[#665F69]">{A.statusExplanations.description}</p>
              {A.statusExplanations.rows.map((row) => (
                <div key={row.status} className="border-b border-[#D8CEDD] py-3 flex flex-col sm:flex-row gap-1.5 sm:gap-6">
                  <span className="text-sm font-semibold text-[#18141B] sm:w-[220px] shrink-0">{row.status}</span>
                  <span className="flex-1 text-sm leading-[1.6] text-[#665F69]">{row.description}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{C.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{C.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {C.safeguards.map((s, i) => {
            const Icon = i === 0 ? Shield : Accessibility;
            return (
              <Reveal key={s.title} delay={0.03 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.25] text-[#18141B]">{s.title}</h3>
                  <p className="text-base leading-[1.6] text-[#665F69]">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Reveal>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-3">
              <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{C.navigation.title}</h3>
              {C.navigation.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-base leading-[1.6] text-[#665F69]" : "text-sm leading-[1.6] text-[#665F69]"}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-3">
              <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{C.measurement.title}</h3>
              {C.measurement.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-base leading-[1.6] text-[#665F69]" : "text-sm leading-[1.6] text-[#665F69]"}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}
