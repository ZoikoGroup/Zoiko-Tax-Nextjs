"use client";

import React from "react";
import clsx from "clsx";
import { SUPPORT_NEEDS_DATA as S } from "./customer-support-data";
import { Reveal } from "./shared";

const BADGE_STYLES = {
  purple: "bg-[#F3E8FF] text-[#6B21A8]",
  blue: "bg-[#DBEAFE] text-[#1E40AF]",
  gray: "bg-[#F3F4F6] text-[#374151]",
  orange: "bg-[#FFEDD5] text-[#9A3412]",
  green: "bg-[#DCFCE7] text-[#166534]",
};

export default function SupportNeedsSection() {
  return (
    <section id="intent-router" className="relative w-full py-[90px] scroll-mt-12">
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

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-bold leading-[1.2] text-[#1E1B4B]">{S.title}</h2>
            <p className="pt-3 text-base leading-[1.5] text-[#4B5563]">{S.description}</p>
          </div>
        </Reveal>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {S.cards.map((card, i) => (
            <Reveal key={card.title} delay={0.02 * i}>
              <div className="h-full rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex flex-col">
                <h3 className="text-lg font-bold text-[#111827]">{card.title}</h3>
                <p className="pt-2 pb-4 text-sm leading-[1.43] text-[#4B5563] flex-1">{card.description}</p>
                <span
                  className={clsx(
                    "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                    BADGE_STYLES[card.badgeStyle]
                  )}
                >
                  {card.badge}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
