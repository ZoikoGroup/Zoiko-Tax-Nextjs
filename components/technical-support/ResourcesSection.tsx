"use client";

import React from "react";
import Link from "next/link";
import { RESOURCES_DATA } from "./technical-support-data";
import { SectionContainer, Reveal } from "./shared";

export default function ResourcesSection() {
  return (
    <SectionContainer id="resources" className="bg-[#F4F0F8] py-16 sm:py-20 lg:py-[90px]">
      <div className="flex flex-col">
        <Reveal>
          <div className="max-w-[768px] mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold leading-9 text-[#1E1B4B] mb-3">
              {RESOURCES_DATA.heading}
            </h2>
            <p className="text-base sm:text-lg font-normal leading-7 text-[#4B5563]">
              {RESOURCES_DATA.description}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.05 * idx}>
              <Link
                href={card.href}
                className="group flex flex-col justify-between h-full bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#D97637]/50 rounded-xl p-6 sm:p-7 transition-all duration-200 hover:shadow-[0_8px_24px_rgba(30,27,75,0.06)]"
              >
                <div>
                  <h3 className="text-lg font-bold leading-7 text-[#111827] mb-2 group-hover:text-[#BF6735] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm font-normal leading-5 text-[#4B5563] mb-6">
                    {card.description}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-semibold text-[#D97637] group-hover:text-[#A8582A] transition-colors">
                    {card.actionText}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
