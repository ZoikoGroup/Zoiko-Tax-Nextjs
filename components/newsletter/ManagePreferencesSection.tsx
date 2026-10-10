"use client";

import React from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import { MANAGE_PREFERENCES_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function ManagePreferencesSection() {
  const {
    eyebrow,
    title,
    description,
    formCard,
    rightCards,
    unsubscribeCard,
  } = MANAGE_PREFERENCES_DATA;

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Diamond lattice pattern watermark */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/wholesale-carriers-and-aggregators/white-bg.png"
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
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

        {/* Part 1: Manage Preferences (Grid with Left Form & Right Cards) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Form Card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-[#EADBEE] p-6 sm:p-8 shadow-xs">
                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#18141B] tracking-tight">
                    {formCard.title}
                  </h3>
                  <span className="bg-[#F0EAF5] text-[#5C5566] text-[10.5px] font-medium px-2.5 py-0.5 rounded-full">
                    {formCard.statusBadge}
                  </span>
                </div>

                {/* Sub-card: No preferences available */}
                <div className="bg-[#F5EFF8]/60 border border-[#EADBEE] rounded-xl p-4 mt-4">
                  <div className="text-[#230944]">
                    <Lock className="w-4 h-4 opacity-80" aria-hidden="true" />
                  </div>
                  <h4 className="text-xs font-bold text-[#18141B] mt-2">
                    {formCard.subCard.title}
                  </h4>
                  <p className="text-[11px] text-[#605C66] leading-relaxed mt-1">
                    {formCard.subCard.description}
                  </p>
                </div>

                {/* Topic Choices */}
                <div className="mt-5">
                  <span className="text-xs font-bold text-[#18141B] block">
                    {formCard.topicChoices.title}
                  </span>
                  <p className="text-[11px] text-[#605C66] leading-relaxed mt-1">
                    {formCard.topicChoices.description}
                  </p>
                </div>

                {/* Delivery Choices */}
                <div className="mt-5">
                  <span className="text-xs font-bold text-[#18141B] block">
                    {formCard.deliveryChoices.title}
                  </span>
                  <p className="text-[11px] text-[#605C66] leading-relaxed mt-1">
                    {formCard.deliveryChoices.description}
                  </p>
                </div>

                {/* Save Button */}
                <div className="mt-5">
                  <button
                    type="button"
                    disabled
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-[#EED8CC] text-[#8C3E18] border border-[#DEBAA4] cursor-not-allowed opacity-90 shadow-2xs"
                  >
                    <span>{formCard.buttonText}</span>
                    <Lock className="w-3 h-3 opacity-70" aria-hidden="true" />
                  </button>
                  <p className="text-[11px] text-[#7A7582] leading-relaxed mt-2">
                    {formCard.buttonNote}
                  </p>
                </div>

                {/* Bottom Links */}
                <div className="mt-7 pt-5 border-t border-[#EADBEE] grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {formCard.bottomLinks.map((item, idx) => (
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

          {/* Right Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Card 1: Dark Account Lookup Card */}
            <Reveal delay={0.12}>
              <div className="bg-[#240A42] text-white rounded-2xl p-6 sm:p-7 shadow-md">
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  {rightCards.accountLookupCard.title}
                </h4>
                <p className="text-xs text-[#D8CEE4] leading-relaxed mt-3">
                  {rightCards.accountLookupCard.description}
                </p>

                <div className="mt-5">
                  <button
                    type="button"
                    disabled
                    className="border border-white/30 text-white hover:bg-white/10 px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-not-allowed"
                  >
                    <span>{rightCards.accountLookupCard.buttonText}</span>
                    <Lock className="w-3 h-3 opacity-70" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Preferences Updated Specimen */}
            <Reveal delay={0.16}>
              <div className="bg-[#FAF5FD] border border-[#EADBEE] rounded-2xl p-6 shadow-2xs">
                <span className="text-[10px] font-bold text-[#BF6735] tracking-wider uppercase block">
                  {rightCards.preferencesUpdatedCard.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-[#18141B] tracking-tight mt-1">
                  {rightCards.preferencesUpdatedCard.title}
                </h4>
                <p className="text-xs text-[#605C66] leading-relaxed mt-2">
                  {rightCards.preferencesUpdatedCard.description}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Part 2: Unsubscribe Card */}
        <Reveal delay={0.2}>
          <div className="mt-10 sm:mt-12 rounded-2xl border border-[#EADBEE] bg-white/90 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Left Column */}
              <div className="flex-1 max-w-xl">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735] block">
                  {unsubscribeCard.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#18141B] tracking-tight mt-1">
                  {unsubscribeCard.title}
                </h3>
                <p className="text-xs text-[#605C66] leading-relaxed mt-2">
                  {unsubscribeCard.description}
                </p>

                <div className="mt-4">
                  <button
                    type="button"
                    disabled
                    className="bg-[#EFE8F4] text-[#5C5566] border border-[#D5CBDC] px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 cursor-not-allowed"
                  >
                    <span>{unsubscribeCard.buttonText}</span>
                    <Lock className="w-3 h-3 opacity-70" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Right Specimen Box */}
              <div className="w-full md:w-[42%] lg:w-[38%] shrink-0">
                <div className="bg-[#F9F4FC] border border-[#EADBEE] rounded-xl p-5">
                  <span className="text-[10px] font-bold text-[#BF6735] tracking-wider uppercase block">
                    {unsubscribeCard.specimen.tag}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-[#18141B] tracking-tight mt-1">
                    {unsubscribeCard.specimen.title}
                  </h4>
                  <p className="text-xs text-[#605C66] leading-relaxed mt-2">
                    {unsubscribeCard.specimen.description}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-[#7A7582] mt-5 pt-4 border-t border-[#F0E6F4] block">
              {unsubscribeCard.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
