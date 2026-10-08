"use client";

import React from "react";
import { BookOpen, Mail, FileLock, KeyRound, CircleAlert, Info } from "lucide-react";
import { ACCESS_PRIVACY_DATA as A } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

const MODEL_ICONS = [BookOpen, Mail, FileLock, KeyRound];

export default function AccessPrivacySection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/guides-reports/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#A64B22]">{A.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{A.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{A.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {A.models.map((m, i) => {
            const Icon = MODEL_ICONS[i];
            return (
              <Reveal key={m.title} delay={0.03 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4 shadow-[0px_6px_20px_0px_rgba(48,17,83,0.04)]">
                  <Icon className="h-6 w-6 text-[#A64B22]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] leading-[1.3] text-[#18141B]">{m.title}</h3>
                  <p className="text-base leading-[1.65] text-[#665F69]">{m.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <Reveal className="flex-1 min-w-0 pt-2">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold text-[#A64B22]">{A.formGuidance.label}</span>
              <div className="text-2xl sm:text-[32px] leading-[1.2] text-[#18141B]">
                {A.formGuidance.title.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
              <p className="text-base leading-[1.65] text-[#665F69]">{A.formGuidance.description}</p>
              <div className="flex flex-col gap-[18px]">
                {A.formGuidance.rules.map((rule) => (
                  <div key={rule.title} className="flex flex-col gap-1.5">
                    <span className="text-base text-[#18141B]">{rule.title}</span>
                    <span className="text-sm leading-[1.65] text-[#665F69]">{rule.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="w-full lg:w-[548px] shrink-0">
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-5">
              <h3 className="text-xl sm:text-[22px] text-[#18141B]">{A.formSpecimen.title}</h3>
              <p className="text-sm leading-[1.65] text-[#665F69]">{A.formSpecimen.description}</p>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#18141B]">{A.formSpecimen.emailLabel}</span>
                <div className="rounded-[10px] border border-[#9B3535] bg-[#FFFAFA] p-3.5">
                  <span className="text-sm text-[#665F69]">Not entered · inactive</span>
                </div>
                <div className="flex items-start gap-2">
                  <CircleAlert className="h-4 w-4 shrink-0 mt-0.5 text-[#9B3535]" aria-hidden="true" />
                  <p className="flex-1 text-xs leading-[1.5] text-[#9B3535]">{A.formSpecimen.emailError}</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#18141B]">{A.formSpecimen.orgLabel}</span>
                <div className="rounded-[10px] border border-[#D8CEDD] bg-[#FFFAFA] p-3.5">
                  <span className="text-sm text-[#665F69]">Not entered · inactive</span>
                </div>
              </div>

              {A.formSpecimen.consents.map((c) => (
                <div key={c.title} className="flex gap-3">
                  <div className="h-[18px] w-[18px] shrink-0 rounded-[3px] border border-[#665F69] bg-white" />
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-sm font-semibold text-[#18141B]">{c.title}</span>
                    <span className="text-sm leading-[1.65] text-[#665F69]">{c.description}</span>
                  </div>
                </div>
              ))}

              <span className="inline-flex w-full items-center justify-center rounded-full bg-[#F4EDF8] p-4 text-sm font-semibold text-[#665F69]">
                {A.formSpecimen.actionLabel}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="w-full">
          <div className="rounded-2xl bg-[#FAEEE6] p-6 flex items-start gap-4">
            <Info className="h-[22px] w-[22px] shrink-0 text-[#A64B22]" aria-hidden="true" />
            <div className="flex flex-col gap-2">
              <p className="text-base text-[#18141B]">{A.providerFailureNotice.title}</p>
              <p className="text-sm leading-[1.65] text-[#665F69]">{A.providerFailureNotice.description}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
