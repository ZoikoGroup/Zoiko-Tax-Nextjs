"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PARTNERSHIP_FORM_DATA } from "./partnerships-data";
import { SectionContainer, EyebrowTag, SectionHeading, SectionDescription, PillBadge, Reveal } from "./shared";

export default function PartnershipInquirySection() {
  const { gateBox, warningBox, form } = PARTNERSHIP_FORM_DATA;

  const [intent, setIntent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [website, setWebsite] = useState("");
  const [context, setContext] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent || !name || !email || !organization) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Partnership intent, Name, Work email, Organization).");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  return (
    <SectionContainer id="explore-partnership" className="py-[90px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Context, Gate & Warning (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <Reveal delay={0.05}>
              <EyebrowTag>{PARTNERSHIP_FORM_DATA.eyebrow}</EyebrowTag>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading className="!text-[33.6px] !leading-[37px]">
                {PARTNERSHIP_FORM_DATA.title}
              </SectionHeading>
            </Reveal>
            <Reveal delay={0.15}>
              <SectionDescription className="!text-[16px] !leading-[26px]">
                {PARTNERSHIP_FORM_DATA.description}
              </SectionDescription>
            </Reveal>
          </div>

          {/* Render Gate Callout */}
          <Reveal delay={0.2}>
            <div className="flex items-start gap-3.5 bg-[#EFEAFC] border border-[#DDD2F7] rounded-[14px] p-4 sm:p-5">
              <div className="flex-shrink-0 mt-0.5">
                <Image
                  src={`/partnerships/${gateBox.iconName}`}
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                />
              </div>
              <p className="text-[13px] leading-[21px] text-[#1D1526]">
                <strong className="font-bold">{gateBox.title} </strong>
                {gateBox.text.replace(gateBox.title, "").trim()}
              </p>
            </div>
          </Reveal>

          {/* Keep This Out Warning Box */}
          <Reveal delay={0.25}>
            <div className="bg-[#F7EDE4] border border-[#EFD9C6] rounded-[14px] p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src={`/partnerships/${warningBox.iconName}`}
                  alt=""
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px]"
                />
                <h4 className="text-[14px] font-bold text-[#C35D29]">
                  {warningBox.title}
                </h4>
              </div>
              <ul className="space-y-1.5 pl-1 mb-4">
                {warningBox.bullets.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-[13.5px] leading-[22px] text-[#5C5468]"
                  >
                    <span className="text-[#C35D29] text-base leading-none">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-[13px] font-bold leading-[21px] text-[#5C5468] pt-3 border-t border-[#EFD9C6]/60">
                {warningBox.footer}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Partnership Request Form (7 cols on lg) */}
        <div className="lg:col-span-7">
          <Reveal delay={0.2}>
            <div className="bg-white border border-[#E7E0F1] rounded-[20px] p-6 sm:p-8 lg:p-9 shadow-[0_20px_50px_rgba(29,21,38,0.06)]">
              {/* Form Title & State Pill */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                <h3 className="text-[19.2px] font-extrabold text-[#1D1526]">
                  {form.title}
                </h3>
                <PillBadge variant="purple">{form.stateBadge}</PillBadge>
              </div>
              <p className="text-[13.5px] leading-[22px] text-[#5C5468] mb-6">
                {form.subtitle}
              </p>

              {status === "success" ? (
                <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-6 text-center my-6">
                  <div className="w-12 h-12 bg-[#DCFCE7] text-[#16A34A] rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-[#166534] mb-2">
                    Partnership Request Received
                  </h4>
                  <p className="text-sm text-[#15803D] mb-4">
                    Any next step is subject to the approved review process; this confirmation does not create partner status or rights.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setContext("");
                    }}
                    className="text-xs font-semibold text-[#166534] underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === "error" && (
                    <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-lg p-3 text-sm text-[#B91C1C]">
                      {errorMessage}
                    </div>
                  )}

                  {/* Partnership Intent (Dropdown) */}
                  <div>
                    <label
                      htmlFor="intent-select"
                      className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5"
                    >
                      {form.intentLabel} <span className="text-[#C0392B]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="intent-select"
                        value={intent}
                        onChange={(e) => setIntent(e.target.value)}
                        required
                        className="w-full h-[47px] appearance-none bg-white border border-[#E7E0F1] hover:border-[#D1D5DB] focus:border-[#BF6735] focus:ring-1 focus:ring-[#BF6735] rounded-[10px] px-4 pr-10 text-[15px] text-[#1D1526] outline-none transition-colors"
                      >
                        <option value="" disabled>
                          {form.intentPlaceholder}
                        </option>
                        {form.intentOptions.map((opt, idx) => (
                          <option key={idx} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5">
                        <Image
                          src="/partnerships/icon-chevron-down.svg"
                          alt=""
                          width={10}
                          height={6}
                          className="w-2.5 h-1.5"
                        />
                      </div>
                    </div>
                    <p className="text-[12px] text-[#8A8198] mt-1.5">
                      {form.intentHelper}
                    </p>
                  </div>

                  {/* Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="partner-name"
                        className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5"
                      >
                        {form.nameLabel} <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        id="partner-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={form.namePlaceholder}
                        required
                        className="w-full h-[45px] bg-white border border-[#E7E0F1] hover:border-[#D1D5DB] focus:border-[#BF6735] focus:ring-1 focus:ring-[#BF6735] rounded-[10px] px-4 text-[15px] text-[#1D1526] placeholder-[#757575] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="partner-email"
                        className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5"
                      >
                        {form.emailLabel} <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        id="partner-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={form.emailPlaceholder}
                        required
                        className="w-full h-[45px] bg-white border border-[#E7E0F1] hover:border-[#D1D5DB] focus:border-[#BF6735] focus:ring-1 focus:ring-[#BF6735] rounded-[10px] px-4 text-[15px] text-[#1D1526] placeholder-[#757575] outline-none transition-colors"
                      />
                      <p className="text-[12px] text-[#8A8198] mt-1">
                        {form.emailHelper}
                      </p>
                    </div>
                  </div>

                  {/* Organization & Website/Region */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="partner-org"
                        className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5"
                      >
                        {form.orgLabel} <span className="text-[#C0392B]">*</span>
                      </label>
                      <input
                        id="partner-org"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder={form.orgPlaceholder}
                        required
                        className="w-full h-[45px] bg-white border border-[#E7E0F1] hover:border-[#D1D5DB] focus:border-[#BF6735] focus:ring-1 focus:ring-[#BF6735] rounded-[10px] px-4 text-[15px] text-[#1D1526] placeholder-[#757575] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="partner-website"
                        className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5"
                      >
                        {form.websiteLabel}
                      </label>
                      <input
                        id="partner-website"
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder={form.websitePlaceholder}
                        className="w-full h-[45px] bg-white border border-[#E7E0F1] hover:border-[#D1D5DB] focus:border-[#BF6735] focus:ring-1 focus:ring-[#BF6735] rounded-[10px] px-4 text-[15px] text-[#1D1526] placeholder-[#757575] outline-none transition-colors"
                      />
                      <p className="text-[12px] text-[#8A8198] mt-1">
                        {form.websiteHelper}
                      </p>
                    </div>
                  </div>

                  {/* Context (Textarea) */}
                  <div>
                    <label
                      htmlFor="partner-context"
                      className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5"
                    >
                      {form.contextLabel}
                    </label>
                    <textarea
                      id="partner-context"
                      rows={3}
                      value={context}
                      maxLength={form.contextMaxChars}
                      onChange={(e) => setContext(e.target.value)}
                      placeholder={form.contextPlaceholder}
                      className="w-full bg-white border border-[#E7E0F1] hover:border-[#D1D5DB] focus:border-[#BF6735] focus:ring-1 focus:ring-[#BF6735] rounded-[10px] p-3.5 text-[15px] text-[#1D1526] placeholder-[#757575] outline-none transition-colors resize-y"
                    />
                    <div className="text-right text-[12px] text-[#8A8198] mt-1">
                      {context.length} / {form.contextMaxChars}
                    </div>
                  </div>

                  {/* Marketing Consent Box */}
                  <div className="flex items-start gap-3 bg-[#F4F0F8] border border-[#E7E0F1] rounded-[12px] p-4">
                    <input
                      id="marketing-consent"
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={(e) => setMarketingConsent(e.target.checked)}
                      className="mt-0.5 w-[18px] h-[18px] rounded accent-[#5A3CC6] cursor-pointer"
                    />
                    <label
                      htmlFor="marketing-consent"
                      className="text-[13px] leading-[21px] text-[#5C5468] cursor-pointer select-none"
                    >
                      {form.marketingConsentLabel}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full h-[47px] inline-flex items-center justify-center font-semibold text-[15px] text-white bg-[#BF6735] hover:bg-[#A8582A] border border-[#DD7235] rounded-full transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-60"
                    >
                      {status === "submitting"
                        ? "Sending your request…"
                        : form.submitButtonLabel}
                    </button>
                  </div>

                  {/* Form Footer Legal Notice */}
                  <p className="text-[12.5px] leading-[21px] text-[#8A8198] text-center">
                    By sending, you agree to the handling described in our{" "}
                    <Link
                      href="/privacy-data-protection"
                      className="text-[#C35D29] hover:underline"
                    >
                      Privacy Notice
                    </Link>
                    . A receipt does not create partner status, acceptance or rights.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
