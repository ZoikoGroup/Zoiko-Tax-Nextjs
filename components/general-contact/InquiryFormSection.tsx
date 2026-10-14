"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GENERAL_CONTACT_FORM_DATA } from "./general-contact-data";
import { EyebrowTag, SectionContainer, Reveal } from "./shared";

export default function InquiryFormSection() {
  const {
    eyebrow,
    heading,
    description,
    bgImage,
    prohibitedItemsTitle,
    prohibitedItems,
    capabilityNote,
    formCard,
  } = GENERAL_CONTACT_FORM_DATA;

  const [reason, setReason] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Work Email, Message).");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section
      id="general-form"
      className="relative w-full overflow-hidden bg-[#FAF7FC] py-16 sm:py-20 lg:py-[84px]"
    >
      {/* Background Graphic from Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Context & Data Restraint Rules */}
          <div className="lg:col-span-5 flex flex-col pt-2">
            <Reveal>
              <EyebrowTag>{eyebrow}</EyebrowTag>
            </Reveal>

            <Reveal delay={0.06}>
              <h2 className="text-3xl sm:text-[33.6px] font-extrabold leading-[1.15] text-[#1D1526] mb-3">
                {heading}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="text-[15px] sm:text-[16px] font-normal leading-[26px] text-[#5C5468] mb-6">
                {description}
              </p>
            </Reveal>

            {/* Prohibited Items Card */}
            <Reveal delay={0.18}>
              <div className="rounded-2xl bg-[#FFF6F4] border border-[#FAD6CD] p-5 sm:p-6 mb-5">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                    <Image
                      src="/general-contact/icon-alert-triangle.svg"
                      alt=""
                      width={18}
                      height={18}
                      className="w-[18px] h-[18px] text-[#842A1C]"
                    />
                  </div>
                  <h3 className="text-[14px] font-bold text-[#842A1C]">
                    {prohibitedItemsTitle}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {prohibitedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13.5px] text-[#5C5468] leading-[1.45]">
                      <span className="text-[#842A1C] font-bold select-none">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Capability Note */}
            <Reveal delay={0.24}>
              <p className="text-[13px] font-bold text-[#5C5468] leading-[21px] pl-1">
                {capabilityNote}
              </p>
            </Reveal>
          </div>

          {/* Right Column: General Inquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-[20px] bg-white border border-[#E7E0F1] p-6 sm:p-8 lg:p-[32px] shadow-sm">
                {/* Form Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <h3 className="text-[19.2px] font-extrabold text-[#1D1526]">
                    {formCard.title}
                  </h3>
                  <span className="inline-flex items-center text-[11px] font-bold tracking-[0.66px] uppercase px-3 py-1 rounded-full bg-[#ECE5FB] text-[#5A3CC6]">
                    {formCard.stateBadge}
                  </span>
                </div>

                <p className="text-[13.5px] text-[#5C5468] leading-[1.5] mb-6">
                  {formCard.subtitle}
                </p>

                {status === "success" ? (
                  <div className="rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-[17px] font-extrabold text-[#15803D] mb-2">
                      Your general inquiry was received.
                    </h4>
                    <p className="text-[13.5px] text-[#166534] max-w-[420px] mx-auto leading-relaxed mb-5">
                      This confirmation does not establish a response time, priority, support entitlement or commercial commitment. Safe input has been preserved.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setMessage("");
                      }}
                      className="inline-flex items-center justify-center rounded-full bg-[#BF6735] text-white text-[14px] font-semibold px-6 py-2.5 hover:bg-[#A8582A] transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {status === "error" && (
                      <div className="rounded-lg bg-[#FEF2F2] border border-[#FECACA] p-3 text-[13px] text-[#B91C1C]">
                        {errorMessage}
                      </div>
                    )}

                    {/* Field 1: Reason · optional */}
                    <div>
                      <label className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5">
                        {formCard.reasonLabel}
                      </label>
                      <div className="relative">
                        <select
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          className="w-full appearance-none rounded-xl bg-white border border-[#E7E0F1] px-4 py-2.5 text-[15px] text-[#1D1526] focus:border-[#D9743E] focus:outline-none transition-colors pr-10 cursor-pointer"
                        >
                          <option value="">{formCard.reasonPlaceholder}</option>
                          {formCard.reasonOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
                          <Image
                            src="/general-contact/icon-select-chevron.svg"
                            alt=""
                            width={10}
                            height={6}
                            className="w-2.5 h-1.5 text-[#1D1526]"
                          />
                        </div>
                      </div>
                      <p className="text-[12px] text-[#8A8198] mt-1.5">
                        {formCard.reasonHelp}
                      </p>
                    </div>

                    {/* 2-Column: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5">
                          {formCard.nameLabel} <span className="text-[#D9743E]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={formCard.namePlaceholder}
                          className="w-full rounded-xl bg-white border border-[#E7E0F1] px-4 py-2.5 text-[15px] text-[#1D1526] placeholder-[#9CA3AF] focus:border-[#D9743E] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5">
                          {formCard.emailLabel} <span className="text-[#D9743E]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={formCard.emailPlaceholder}
                          className="w-full rounded-xl bg-white border border-[#E7E0F1] px-4 py-2.5 text-[15px] text-[#1D1526] placeholder-[#9CA3AF] focus:border-[#D9743E] focus:outline-none transition-colors"
                        />
                        <p className="text-[12px] text-[#8A8198] mt-1.5 leading-[1.35]">
                          {formCard.emailHelp}
                        </p>
                      </div>
                    </div>

                    {/* 2-Column: Organization & Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5">
                          {formCard.orgLabel}
                        </label>
                        <input
                          type="text"
                          value={organization}
                          onChange={(e) => setOrganization(e.target.value)}
                          placeholder={formCard.orgPlaceholder}
                          className="w-full rounded-xl bg-white border border-[#E7E0F1] px-4 py-2.5 text-[15px] text-[#1D1526] placeholder-[#9CA3AF] focus:border-[#D9743E] focus:outline-none transition-colors"
                        />
                        <p className="text-[12px] text-[#8A8198] mt-1.5">
                          {formCard.orgHelp}
                        </p>
                      </div>

                      <div>
                        <label className="block text-[13.5px] font-semibold text-[#1D1526] mb-1.5">
                          {formCard.countryLabel}
                        </label>
                        <div className="relative">
                          <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full appearance-none rounded-xl bg-white border border-[#E7E0F1] px-4 py-2.5 text-[15px] text-[#1D1526] focus:border-[#D9743E] focus:outline-none transition-colors pr-10 cursor-pointer"
                          >
                            <option value="">{formCard.countryPlaceholder}</option>
                            {formCard.countryOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2">
                            <Image
                              src="/general-contact/icon-select-chevron.svg"
                              alt=""
                              width={10}
                              height={6}
                              className="w-2.5 h-1.5 text-[#1D1526]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Field: Message */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-[13.5px] font-semibold text-[#1D1526]">
                          {formCard.messageLabel} <span className="text-[#D9743E]">*</span>
                        </label>
                        <span className="text-[12px] text-[#8A8198]">
                          {message.length} / {formCard.messageMaxLength}
                        </span>
                      </div>
                      <textarea
                        required
                        rows={4}
                        maxLength={formCard.messageMaxLength}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={formCard.messagePlaceholder}
                        className="w-full rounded-xl bg-white border border-[#E7E0F1] p-4 text-[15px] text-[#1D1526] placeholder-[#9CA3AF] focus:border-[#D9743E] focus:outline-none transition-colors resize-y min-h-[110px]"
                      />
                    </div>

                    {/* Marketing Consent Box */}
                    <div className="rounded-xl bg-[#F4F0F8] border border-[#E7E0F1] p-3.5 sm:p-4 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="marketing-consent"
                        checked={marketingConsent}
                        onChange={(e) => setMarketingConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded text-[#5A3CC6] border-[#D1D5DB] focus:ring-[#5A3CC6] cursor-pointer"
                      />
                      <label
                        htmlFor="marketing-consent"
                        className="text-[13px] text-[#5C5468] leading-[1.45] cursor-pointer select-none"
                      >
                        {formCard.consentText}
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center font-semibold text-[15px] leading-none text-white bg-[#BF6735] border border-[#DD7235] rounded-full py-3.5 transition-all duration-200 hover:bg-[#A8582A] active:scale-[0.98] cursor-pointer shadow-[inset_0_3px_4px_rgba(255,223,211,0.5),inset_0_-2px_4px_rgba(180,80,30,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending inquiry…" : formCard.submitButtonText}
                    </button>

                    {/* Notice */}
                    <p className="text-[12.5px] text-[#8A8198] text-center leading-[1.45] pt-1">
                      {formCard.notice}
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
