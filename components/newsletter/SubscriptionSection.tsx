"use client";

import React, { useState } from "react";
import { Lock, Languages } from "lucide-react";
import { SUBSCRIPTION_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function SubscriptionSection() {
  const { eyebrow, title, description, form, sidebar } = SUBSCRIPTION_DATA;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {description}
            </p>
          </Reveal>
        </div>

        {/* Two-Column Grid: Form on left, Specimen Cards on right */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Subscription Form Card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-[#EADBEE] p-6 sm:p-8 shadow-xs">
                {/* Form Header */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#18141B] tracking-tight">
                    {form.title}
                  </h3>
                  <span className="bg-[#F0EAF5] text-[#5C5566] text-[10.5px] font-medium px-2.5 py-0.5 rounded-full">
                    {form.statusBadge}
                  </span>
                </div>

                {/* Email Input */}
                <div className="mt-5">
                  <label className="text-xs font-semibold text-[#18141B] block">
                    {form.emailLabel}
                  </label>
                  <input
                    type="email"
                    disabled
                    placeholder={form.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5CBDC] text-xs sm:text-sm bg-[#FCFBFE] text-[#18141B] placeholder-[#8A8492] mt-1.5 focus:outline-none cursor-not-allowed"
                  />
                  <p className="text-[11px] text-[#7A7582] mt-1.5 leading-normal">
                    {form.emailHelper}
                  </p>
                </div>

                {/* Topic Preferences Box */}
                <div className="bg-[#F5EFF8]/60 border border-[#EADBEE] rounded-xl p-4 mt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#18141B]">
                      {form.topicPreferences.title}
                    </span>
                    <span className="text-[10.5px] text-[#7A7582] font-semibold">
                      {form.topicPreferences.badge}
                    </span>
                  </div>
                  <h4 className="text-xs font-semibold text-[#3D1460] mt-1.5">
                    {form.topicPreferences.subtitle}
                  </h4>
                  <p className="text-[11px] text-[#605C66] leading-relaxed mt-1">
                    {form.topicPreferences.description}
                  </p>
                </div>

                {/* Consent Checkbox */}
                <div className="mt-5">
                  <span className="bg-[#EFE8F4] text-[#655972] text-[10px] font-medium px-2 py-0.5 rounded-xs inline-block">
                    {form.consent.badge}
                  </span>

                  <label
                    onClick={() => setIsChecked(!isChecked)}
                    className="flex items-start gap-2.5 mt-2.5 cursor-pointer select-none"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#BF6735] focus:ring-[#BF6735]"
                    />
                    <span className="text-xs text-[#28242D] leading-snug">
                      {form.consent.checkboxText}
                    </span>
                  </label>

                  <p className="text-[10.5px] sm:text-[11px] text-[#7A7582] leading-relaxed mt-2">
                    {form.consent.disclaimer}
                  </p>
                </div>

                {/* Privacy Destination */}
                <div className="mt-4">
                  <span className="text-xs font-bold text-[#18141B] block">
                    {form.privacy.label}
                  </span>
                  <span className="text-[11px] text-[#7A7582] font-mono mt-0.5 block">
                    {form.privacy.status}
                  </span>
                </div>

                {/* Submit Action */}
                <div className="mt-4">
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-[#EED8CC] text-[#8C3E18] border border-[#DEBAA4] cursor-not-allowed opacity-90 shadow-2xs"
                  >
                    <span>{form.buttonText}</span>
                    <Lock className="w-3 h-3 opacity-70" aria-hidden="true" />
                  </button>
                  <p className="text-[11px] text-[#7A7582] leading-relaxed mt-2">
                    {form.buttonNote}
                  </p>
                </div>

                {/* Bottom Links */}
                <div className="mt-7 pt-5 border-t border-[#EADBEE] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {form.bottomLinks.map((item, idx) => (
                    <div key={idx}>
                      <span className="text-xs font-bold text-[#18141B] underline decoration-[#BF6735] underline-offset-2 cursor-default block">
                        {item.label}
                      </span>
                      <span className="text-[10.5px] text-[#7A7582] font-mono mt-0.5 block">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Specimen / Context Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Card 1: Region & Language */}
            <Reveal delay={0.12}>
              <div className="bg-[#240A42] text-white rounded-2xl p-6 shadow-md">
                <div className="text-[#F39A62]">
                  <Languages className="w-5 h-5" aria-hidden="true" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mt-2.5">
                  {sidebar.regionLanguageCard.title}
                </h4>
                <span className="mt-2 bg-[#3A1468] text-[#D8CEE4] text-[10px] font-medium px-2.5 py-0.5 rounded-full inline-block">
                  {sidebar.regionLanguageCard.badge}
                </span>
                <p className="text-xs text-[#D8CEE4] leading-relaxed mt-3">
                  {sidebar.regionLanguageCard.description}
                </p>
              </div>
            </Reveal>

            {/* Card 2: Consent Before Submission */}
            <Reveal delay={0.16}>
              <div className="bg-white border border-[#EADBEE] rounded-2xl p-6 shadow-2xs">
                <h4 className="text-sm sm:text-base font-bold text-[#18141B] tracking-tight">
                  {sidebar.consentCard.title}
                </h4>
                <p className="text-xs text-[#605C66] leading-relaxed mt-2">
                  {sidebar.consentCard.description}
                </p>
              </div>
            </Reveal>

            {/* Card 3: Example State - Invalid Email */}
            <Reveal delay={0.2}>
              <div className="bg-white border border-[#EADBEE] rounded-2xl p-6 shadow-2xs">
                <span className="text-[10px] font-bold text-[#BF6735] tracking-wider uppercase block">
                  {sidebar.invalidEmailCard.tag}
                </span>
                <label className="text-xs font-semibold text-[#18141B] mt-2 block">
                  {sidebar.invalidEmailCard.label}
                </label>
                <div className="mt-1 px-3.5 py-2 rounded-lg border border-[#C2410C]/80 bg-[#FFF9F6] text-xs text-[#605C66]">
                  {sidebar.invalidEmailCard.inputValue}
                </div>
                <span className="text-[11px] text-[#C2410C] font-medium mt-1.5 block">
                  {sidebar.invalidEmailCard.errorMessage}
                </span>
                <p className="text-xs text-[#605C66] leading-relaxed mt-2.5">
                  {sidebar.invalidEmailCard.description}
                </p>
              </div>
            </Reveal>

            {/* Card 4: Example State - Conditional */}
            <Reveal delay={0.24}>
              <div className="bg-[#F7F2FA] border border-[#EADBEE] rounded-2xl p-6 shadow-2xs">
                <span className="text-[10px] font-bold text-[#BF6735] tracking-wider uppercase block">
                  {sidebar.conditionalCard.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#18141B] tracking-tight mt-1">
                  {sidebar.conditionalCard.title}
                </h4>
                <p className="text-xs text-[#605C66] leading-relaxed mt-2">
                  {sidebar.conditionalCard.description}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
