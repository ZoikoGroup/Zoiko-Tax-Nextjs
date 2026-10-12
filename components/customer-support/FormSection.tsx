"use client";

import React from "react";
import { ChevronDown, TriangleAlert } from "lucide-react";
import { FORM_DATA as F } from "./customer-support-data";
import { Reveal, PrimaryButton } from "./shared";

export default function FormSection() {
  return (
    <section className="relative w-full border-b border-[#F3E8FF] py-24">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/customer-support/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-[896px] px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold leading-[1.2] text-[#1E1B4B] max-w-[832px]">{F.title}</h2>
            <p className="pt-4 text-base leading-[1.5] text-[#4B5563]">{F.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="mt-10 flex gap-4 rounded-tr-xl rounded-br-xl border-l-4 border-[#F59E0B] bg-[#FFFBEB] p-6">
            <TriangleAlert className="h-6 w-6 shrink-0 text-[#D97706]" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <h4 className="text-sm font-bold text-[#78350F]">{F.warning.title}</h4>
              <p className="text-sm leading-[1.43] text-[#92400E]">
                {F.warning.before}
                <span className="font-semibold underline">{F.warning.link}</span>
                {F.warning.after}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 rounded-2xl border border-[#E5E7EB] bg-white p-8 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#374151]">{F.fields.topic.label}</span>
                <div className="flex items-center justify-between rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] h-[45px] px-5">
                  <span className="text-sm text-[#111827]">{F.fields.topic.placeholder}</span>
                  <ChevronDown className="h-2.5 w-2.5 text-[#111827]" aria-hidden="true" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#374151]">{F.fields.product.label}</span>
                <div className="flex items-center justify-between rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] h-[45px] px-5">
                  <span className="text-sm text-[#111827]">{F.fields.product.placeholder}</span>
                  <ChevronDown className="h-2.5 w-2.5 text-[#111827]" aria-hidden="true" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#374151]">{F.fields.email.label}</span>
                <div className="h-[46px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB]" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#374151]">{F.fields.account.label}</span>
                <div className="flex items-center h-[46px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4">
                  <span className="text-sm text-[#9CA3AF]">{F.fields.account.placeholder}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#374151]">{F.fields.summary.label}</span>
              <div className="flex items-center h-[46px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4">
                <span className="text-sm text-[#9CA3AF]">{F.fields.summary.placeholder}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#374151]">{F.fields.details.label}</span>
              <div className="min-h-[126px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3">
                <span className="text-sm leading-[1.43] text-[#9CA3AF]">{F.fields.details.placeholder}</span>
              </div>
            </div>

            <div className="border-t border-[#F3F4F6] pt-4 flex justify-end">
              <PrimaryButton>{F.submit}</PrimaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
