"use client";

import React from "react";
import { BookOpen, CircleCheck } from "lucide-react";
import { START_HERE_DATA as S } from "./customer-support-data";
import { Reveal } from "./shared";

const ICONS = [CircleCheck, BookOpen];

export default function StartHereSection() {
  return (
    <section className="w-full bg-[#FAF3FF] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {S.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={card.title} delay={0.04 * i}>
                <div
                  className="h-full rounded-2xl bg-white p-8 flex flex-col"
                  style={{ border: `1px solid ${card.border}` }}
                >
                  <span
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon className="h-6 w-6" style={{ color: card.iconColor }} aria-hidden="true" />
                  </span>
                  <h3 className="pt-6 text-xl font-bold leading-[1.4] text-[#1E1B4B]">{card.title}</h3>
                  <p className="pt-3 text-base leading-[1.5] text-[#4B5563] flex-1">{card.description}</p>
                  <div className="pt-6 flex items-center gap-1 text-base font-semibold text-[#6B21A8]">
                    {card.action}
                    <span>→</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
