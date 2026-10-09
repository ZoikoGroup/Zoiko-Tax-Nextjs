"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquare,
  LifeBuoy,
  ShieldCheck,
  FileText,
  Handshake,
  Briefcase,
  ShieldAlert,
  Flag,
  ArrowUpRight,
} from "lucide-react";
import { INTENT_SECTION_DATA, type IntentCardItem } from "./contact-data";
import { Reveal } from "./shared";

const ICON_MAP = {
  message: MessageSquare,
  support: LifeBuoy,
  privacy: ShieldCheck,
  press: FileText,
  partners: Handshake,
  careers: Briefcase,
  security: ShieldAlert,
  general: Flag,
};

export default function IntentSection() {
  return (
    <section id="intent-directory" className="w-full bg-[#FAF3FF] py-14 sm:py-18 lg:py-22">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {INTENT_SECTION_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {INTENT_SECTION_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-3xl leading-relaxed mt-1">
              {INTENT_SECTION_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* Legend / Status bar */}
        <Reveal delay={0.12}>
          <div className="mt-6 w-full rounded-xl bg-[#F3ECF7] border border-[#EADBEE] px-4 py-2.5 sm:px-5 sm:py-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            {INTENT_SECTION_DATA.legend.map((item, idx) => (
              <span
                key={idx}
                className={item.tone === "available" ? "font-bold text-[#301153]" : "text-[#665F69]"}
              >
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* 8 Intent Cards Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {INTENT_SECTION_DATA.cards.map((card: IntentCardItem, idx: number) => {
            const IconComponent = ICON_MAP[card.iconName];
            return (
              <Reveal key={card.id} delay={0.05 * (idx % 4)}>
                <div className="h-full bg-white rounded-2xl border border-[#E9E2EE] p-5 sm:p-7 flex flex-col justify-between shadow-[0_2px_10px_rgba(40,10,60,0.02)] hover:shadow-[0_6px_24px_rgba(40,10,60,0.06)] transition-all duration-200">
                  {/* Top content */}
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF6F0] flex items-center justify-center text-[#2A1B3B] shrink-0">
                        <IconComponent className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#18141B]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="mt-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] sm:text-xs font-medium bg-[#F3ECF7] text-[#301153]">
                        {card.badge}
                      </span>
                    </div>

                    <p className="mt-3.5 text-xs sm:text-[13.5px] text-[#4A4550] leading-relaxed">
                      {card.description}
                    </p>

                    <p className="mt-2.5 text-[11px] sm:text-xs text-[#7A7582] leading-normal">
                      {card.subtext}
                    </p>
                  </div>

                  {/* Bottom metadata and action */}
                  <div className="mt-5 pt-4 border-t border-[#F0EAF4]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A7582] block">
                      REQUIRED ACCOUNTABLE DOMAIN · NOT AN ASSIGNED CONTACT
                    </span>
                    <span className="text-xs font-semibold text-[#18141B] mt-1 block">
                      {card.accountableDomain}
                    </span>

                    {card.action ? (
                      <div className="mt-3">
                        <Link
                          href={card.action.href}
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#BF6735] hover:text-[#9A421E] transition-colors"
                        >
                          <span>{card.action.label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                        <span className="text-[11px] text-[#7A7582] font-mono block mt-0.5">
                          {card.action.path}
                        </span>
                      </div>
                    ) : (
                      <div className="mt-3">
                        <span className="text-xs text-[#7A7582] font-medium block">
                          {card.unavailableNotice}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom Disclaimer */}
        <Reveal delay={0.2}>
          <p className="mt-8 sm:mt-12 text-[11px] sm:text-xs text-[#7A7582] text-center max-w-4xl mx-auto leading-relaxed">
            {INTENT_SECTION_DATA.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
