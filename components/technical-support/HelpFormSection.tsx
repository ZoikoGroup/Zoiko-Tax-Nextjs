"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HELP_FORM_DATA } from "./technical-support-data";
import { PrimaryButton, Reveal } from "./shared";

export default function HelpFormSection() {
  const [issueType, setIssueType] = useState("");
  const [environment, setEnvironment] = useState("");
  const [service, setService] = useState("");
  const [issueSummary, setIssueSummary] = useState("");
  const [reproduceSteps, setReproduceSteps] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="get-help" className="relative w-full overflow-hidden bg-[#1E1B4B] py-16 sm:py-20 lg:py-[96px]">
      {/* Background: 15% opacity infrastructure image + Figma linear gradient overlay */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <picture>
          <source srcSet="/technical-support/tech-infrastructure-bg.webp" type="image/webp" />
          <Image
            src="/technical-support/tech-infrastructure-bg.png"
            alt=""
            fill
            className="object-cover opacity-15"
          />
        </picture>
        {/* Figma Linear Gradient: [1E1B4B (100%) -> 1E1B4B (95%) -> 2E1065 (90%)] */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(30, 27, 75, 1) 0%, rgba(30, 27, 75, 0.95) 50%, rgba(46, 16, 101, 0.90) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[896px] px-4 sm:px-8">
        {/* Section Heading & Subtitle */}
        <Reveal>
          <div className="text-left mb-8 sm:mb-10 max-w-[832px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold leading-9 text-white mb-2">
              {HELP_FORM_DATA.heading}
            </h2>
            <p className="text-base sm:text-lg font-normal leading-7 text-[#C7D2FE]">
              {HELP_FORM_DATA.description}
            </p>
          </div>
        </Reveal>

        {/* Form Container: 832px width, rounded-2xl, 40px padding */}
        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="max-w-[832px] mx-auto bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] flex flex-col gap-6"
          >
            {/* Warning Alert Banner */}
            <div className="bg-[#FFFBEB] border-l-4 border-[#F59E0B] rounded-r-lg p-4 sm:p-5 flex items-start gap-3.5">
              <div className="shrink-0 mt-0.5">
                <Image
                  src="/technical-support/alert-triangle.svg"
                  alt="Warning"
                  width={20}
                  height={18}
                  className="w-5 h-[18px]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#78350F]">
                  {HELP_FORM_DATA.sensitiveDataAlert.title}
                </h4>
                <p className="text-xs sm:text-sm font-normal leading-[1.625] text-[#92400E]">
                  {HELP_FORM_DATA.sensitiveDataAlert.description}
                </p>
              </div>
            </div>

            {/* Issue Type Dropdown */}
            <div className="flex flex-col gap-2">
              <label htmlFor="issue-type" className="text-sm font-bold leading-5 text-[#111827]">
                {HELP_FORM_DATA.fields.issueType.label}
              </label>
              <div className="relative">
                <select
                  id="issue-type"
                  required
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full h-12 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 pr-10 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#BF6735] focus:border-transparent transition appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    {HELP_FORM_DATA.fields.issueType.placeholder}
                  </option>
                  {HELP_FORM_DATA.fields.issueType.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Image
                    src="/technical-support/chevron-down.svg"
                    alt=""
                    width={8}
                    height={4}
                    className="w-2.5 h-1.5 opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Environment & Capability / Service (2 columns on md/lg, gap-6) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Environment */}
              <div className="flex flex-col gap-2">
                <label htmlFor="environment" className="text-sm font-bold leading-5 text-[#111827]">
                  {HELP_FORM_DATA.fields.environment.label}
                </label>
                <div className="relative">
                  <select
                    id="environment"
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                    className="w-full h-12 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 pr-10 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#BF6735] focus:border-transparent transition appearance-none cursor-pointer"
                  >
                    <option value="">
                      {HELP_FORM_DATA.fields.environment.placeholder}
                    </option>
                    {HELP_FORM_DATA.fields.environment.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image
                      src="/technical-support/chevron-down.svg"
                      alt=""
                      width={8}
                      height={4}
                      className="w-2.5 h-1.5 opacity-80"
                    />
                  </div>
                </div>
              </div>

              {/* Capability / Service */}
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-sm font-bold leading-5 text-[#111827]">
                  {HELP_FORM_DATA.fields.service.label}
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-12 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 pr-10 text-base text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#BF6735] focus:border-transparent transition appearance-none cursor-pointer"
                  >
                    <option value="">
                      {HELP_FORM_DATA.fields.service.placeholder}
                    </option>
                    {HELP_FORM_DATA.fields.service.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Image
                      src="/technical-support/chevron-down.svg"
                      alt=""
                      width={8}
                      height={4}
                      className="w-2.5 h-1.5 opacity-80"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Issue Summary */}
            <div className="flex flex-col gap-2">
              <label htmlFor="issue-summary" className="text-sm font-bold leading-5 text-[#111827]">
                {HELP_FORM_DATA.fields.issueSummary.label}
              </label>
              <input
                id="issue-summary"
                type="text"
                required
                value={issueSummary}
                onChange={(e) => setIssueSummary(e.target.value)}
                placeholder={HELP_FORM_DATA.fields.issueSummary.placeholder}
                className="w-full h-12 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg px-4 text-base text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#BF6735] focus:border-transparent transition"
              />
            </div>

            {/* Steps to Reproduce & Observed Result */}
            <div className="flex flex-col gap-2">
              <label htmlFor="reproduce-steps" className="text-sm font-bold leading-5 text-[#111827]">
                {HELP_FORM_DATA.fields.reproduceSteps.label}
              </label>
              <textarea
                id="reproduce-steps"
                required
                rows={5}
                value={reproduceSteps}
                onChange={(e) => setReproduceSteps(e.target.value)}
                placeholder={HELP_FORM_DATA.fields.reproduceSteps.placeholder}
                className="w-full min-h-[146px] bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg p-4 text-base leading-6 text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#BF6735] focus:border-transparent transition resize-y"
              />
            </div>

            {/* Interactive Feedback */}
            {submitted && (
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                Redirecting to authorized organizational authentication gateway...
              </div>
            )}

            {/* Form Footer */}
            <div className="border-t border-[#E5E7EB] pt-8 mt-2 flex flex-col sm:flex-row items-center justify-between gap-5">
              <p className="text-xs font-normal leading-4 text-[#6B7280] max-w-[475px] text-center sm:text-left">
                {HELP_FORM_DATA.footerNote}
              </p>
              <div className="shrink-0 w-full sm:w-auto">
                <PrimaryButton
                  type="submit"
                  className="w-full sm:w-auto min-w-[242px] h-[54px] text-base"
                >
                  {HELP_FORM_DATA.submitButtonText}
                </PrimaryButton>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
