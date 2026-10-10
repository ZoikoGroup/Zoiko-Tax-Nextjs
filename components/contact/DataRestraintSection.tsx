"use client";

import React from "react";
import {
  Lock,
  AlertCircle,
  RotateCw,
  CheckCircle2,
  WifiOff,
  CloudOff,
  ShieldAlert,
  Copy,
  ChevronDown,
} from "lucide-react";
import { DATA_RESTRAINT_DATA } from "./contact-data";
import { Reveal } from "./shared";

const SPECIMEN_ICONS = {
  submitting: RotateCw,
  success: CheckCircle2,
  "network-failure": WifiOff,
  "destination-unavailable": CloudOff,
  "spam-check": ShieldAlert,
  "duplicate-request": Copy,
};

export default function DataRestraintSection() {
  const { sensitiveNotice, formAnatomy, stateAnatomy } = DATA_RESTRAINT_DATA;

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {DATA_RESTRAINT_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {DATA_RESTRAINT_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-3xl leading-relaxed mt-1">
              {DATA_RESTRAINT_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* Sensitive Information Banner */}
        <Reveal delay={0.12}>
          <div className="mt-7 sm:mt-8 rounded-xl bg-[#FFF6F0] border border-[#FADCCB] p-4 sm:p-5 flex items-start gap-3.5">
            <div className="w-7 h-7 rounded-lg bg-[#FFE8D9] flex items-center justify-center text-[#BF6735] shrink-0 mt-0.5">
              <Lock className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-[#18141B]">
                {sensitiveNotice.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-[#605C66] leading-relaxed mt-1">
                {sensitiveNotice.text}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Form Anatomy Container */}
        <Reveal delay={0.16}>
          <div className="mt-8 sm:mt-10 rounded-2xl border border-[#E5DFEA] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_2px_12px_rgba(40,10,60,0.03)]">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-[#F1E8F8] text-[#5B2A86]">
              {formAnatomy.badge}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] mt-3">
              {formAnatomy.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#605C66] mt-1.5 leading-relaxed max-w-3xl">
              {formAnatomy.description}
            </p>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Mock Disabled Form */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                {/* Field 1 */}
                <div>
                  <label className="block text-xs font-semibold text-[#18141B]">
                    Contact reason · select first
                  </label>
                  <div className="mt-1.5 w-full rounded-lg border border-[#D8CEDD] bg-[#FBF9FC] px-3.5 py-2.5 flex items-center justify-between text-xs sm:text-sm text-[#7A7582] cursor-not-allowed">
                    <span>No approved intake reason selected</span>
                    <ChevronDown className="w-4 h-4 text-[#7A7582]" />
                  </div>
                  <span className="block text-[11px] text-[#7A7582] mt-1 leading-normal">
                    Conditional fields only after a matching approved reason is validly chosen. Privacy, security and support may not route into general processes.
                  </span>
                </div>

                {/* Field 2 Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#18141B]">
                      Name · structural example
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="Name"
                      className="mt-1.5 w-full rounded-lg border border-[#D8CEDD] bg-[#FBF9FC] px-3.5 py-2.5 text-xs sm:text-sm text-[#7A7582] cursor-not-allowed placeholder-[#9D96A5]"
                    />
                    <span className="block text-[11px] text-[#7A7582] mt-1 leading-normal">
                      Not designed as a required field.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#18141B]">
                      Business email · structural example
                    </label>
                    <input
                      type="email"
                      disabled
                      placeholder="business-email"
                      className="mt-1.5 w-full rounded-lg border border-[#D8CEDD] bg-[#FBF9FC] px-3.5 py-2.5 text-xs sm:text-sm text-[#7A7582] cursor-not-allowed placeholder-[#9D96A5]"
                    />
                    <span className="block text-[11px] text-[#7A7582] mt-1 leading-normal">
                      Requirement depends on the approved schema.
                    </span>
                  </div>
                </div>

                {/* Field 3 */}
                <div>
                  <label className="block text-xs font-semibold text-[#18141B]">
                    Message · optional example
                  </label>
                  <textarea
                    rows={3}
                    disabled
                    placeholder="Brief, non-sensitive context only"
                    className="mt-1.5 w-full rounded-lg border border-[#D8CEDD] bg-[#FBF9FC] px-3.5 py-2.5 text-xs sm:text-sm text-[#7A7582] cursor-not-allowed resize-none placeholder-[#9D96A5]"
                  />
                  <span className="block text-[11px] text-[#7A7582] mt-1 leading-normal">
                    A source-approved maximum length is needed before use. Free text is a territory risk for sensitive data.
                  </span>
                </div>

                {/* Checkbox */}
                <div className="pt-1">
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      disabled
                      className="mt-0.5 rounded border-[#D8CEDD] text-[#BF6735] cursor-not-allowed"
                    />
                    <span className="text-xs text-[#18141B] font-medium leading-tight">
                      Optional marketing choice — wording requires approval
                    </span>
                  </div>
                  <span className="block text-[11px] text-[#7A7582] mt-1 pl-6 leading-normal">
                    Illustrative uncheck/check model feasible with submitting a contact request, done only under an actually approved consent model.
                  </span>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    disabled
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#EAE3F0] text-[#7A7582] text-xs sm:text-sm font-semibold cursor-not-allowed"
                  >
                    <Lock className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Submit unavailable · approval required</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Purple Guidance Box */}
              <div className="lg:col-span-5 h-full rounded-xl bg-[#F7F2FA] border border-[#E8DFEF] p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-[#301153]">
                    {formAnatomy.callout.title}
                  </h4>

                  <div className="mt-4 flex flex-col gap-3 text-xs sm:text-[13px] text-[#4A4550] leading-relaxed">
                    {formAnatomy.callout.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>

                <p className="mt-6 pt-4 border-t border-[#E8DFEF] text-xs sm:text-[13px] font-bold text-[#301153] leading-snug">
                  {formAnatomy.callout.bottomNotice}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* State Anatomy Sub-section */}
        <div className="mt-14 sm:mt-18 lg:mt-22">
          <div className="flex flex-col gap-1.5">
            <Reveal>
              <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] tracking-tight">
                {stateAnatomy.title}
              </h3>
            </Reveal>

            <Reveal delay={0.04}>
              <p className="text-xs sm:text-sm text-[#605C66] max-w-3xl leading-relaxed">
                {stateAnatomy.description}
              </p>
            </Reveal>
          </div>

          {/* Validation Error Specimen Card */}
          <Reveal delay={0.08}>
            <div className="mt-6 rounded-xl border border-[#F2B6A6] bg-white p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[#B83E26]">
                <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <h4 className="text-xs sm:text-sm font-bold">
                  {stateAnatomy.validationSpecimen.title}
                </h4>
              </div>

              <a
                href="#validation"
                onClick={(e) => e.preventDefault()}
                className="text-xs font-semibold text-[#B83E26] hover:underline block mt-2"
              >
                {stateAnatomy.validationSpecimen.fieldCheck}
              </a>

              <span className="block text-[11px] text-[#7A7582] mt-0.5">
                {stateAnatomy.validationSpecimen.summary}
              </span>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-[#18141B]">
                  {stateAnatomy.validationSpecimen.label}
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue={stateAnatomy.validationSpecimen.value}
                  className="mt-1 w-full max-w-md rounded-lg border border-[#B83E26] bg-[#FFF8F7] px-3.5 py-2 text-xs sm:text-sm text-[#18141B] cursor-not-allowed"
                />
                <span className="block text-xs font-semibold text-[#B83E26] mt-1.5">
                  {stateAnatomy.validationSpecimen.error}
                </span>
                <span className="block text-[11px] text-[#7A7582] mt-0.5">
                  {stateAnatomy.validationSpecimen.note}
                </span>
              </div>
            </div>
          </Reveal>

          {/* 6 Specimen Cards Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {stateAnatomy.states.map((st, idx) => {
              const Icon = SPECIMEN_ICONS[st.id as keyof typeof SPECIMEN_ICONS];
              return (
                <Reveal key={st.id} delay={0.04 * (idx % 3)}>
                  <div className="h-full rounded-xl border border-[#E9E2EE] bg-white p-4 sm:p-5 flex flex-col justify-between shadow-[0_1px_6px_rgba(40,10,60,0.02)]">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#301153]" aria-hidden="true" />
                          <h4 className="text-sm font-bold text-[#18141B]">
                            {st.title}
                          </h4>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#BF6735]">
                          SPECIMEN
                        </span>
                      </div>

                      <p className="mt-3 text-xs font-medium text-[#18141B]">
                        {st.status}
                      </p>

                      <p className="mt-1 text-[11px] sm:text-xs text-[#7A7582] leading-normal">
                        {st.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Bottom Purple Banner */}
          <Reveal delay={0.2}>
            <div className="mt-8 sm:mt-10 rounded-xl bg-[#F4ECF8] border border-[#E5DAEB] p-4 sm:p-5">
              <h4 className="text-xs sm:text-[13px] font-bold text-[#301153]">
                {stateAnatomy.bottomNotice.title}
              </h4>
              <p className="mt-1 text-[11px] sm:text-xs text-[#665F69] leading-relaxed">
                {stateAnatomy.bottomNotice.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
