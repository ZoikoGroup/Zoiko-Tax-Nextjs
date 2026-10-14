"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTING_MATRIX_DATA } from "./partnerships-data";
import { SectionContainer, EyebrowTag, SectionHeading, SectionDescription, PillBadge, Reveal } from "./shared";

export default function RoutingMatrixSection() {
  return (
    <SectionContainer id="routing-matrix" className="py-[90px] bg-white">
      {/* Section Header */}
      <div className="max-w-[720px] mb-10 sm:mb-12">
        <Reveal delay={0.05}>
          <EyebrowTag>{ROUTING_MATRIX_DATA.eyebrow}</EyebrowTag>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading>{ROUTING_MATRIX_DATA.title}</SectionHeading>
        </Reveal>
        <Reveal delay={0.15}>
          <SectionDescription>{ROUTING_MATRIX_DATA.description}</SectionDescription>
        </Reveal>
      </div>

      {/* Routing Matrix Subheading / Divider Bar */}
      <Reveal delay={0.2}>
        <div className="flex items-center gap-4 mb-8">
          <PillBadge variant="purple">{ROUTING_MATRIX_DATA.badge}</PillBadge>
          <div className="flex-1 h-[1px] bg-[#E7E0F1]" aria-hidden="true" />
        </div>
      </Reveal>

      {/* 8 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
        {ROUTING_MATRIX_DATA.cards.map((card, idx) => (
          <Reveal key={idx} delay={0.05 * (idx + 1)}>
            <Link
              href={card.href}
              className="group relative flex flex-col justify-between h-full bg-white border border-[#E7E0F1] hover:border-[#D9743E] rounded-2xl p-6 transition-all duration-200 hover:shadow-md cursor-pointer"
            >
              {/* Card Header: Icon & optional Gated badge */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#F7EDE4] flex items-center justify-center transition-transform group-hover:scale-105">
                    <Image
                      src={`/partnerships/${card.iconName}`}
                      alt=""
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px]"
                    />
                  </div>
                  {card.gated && (
                    <span className="text-[10px] font-bold text-[#5A3CC6] bg-[#ECE5FB] px-2.5 py-0.5 rounded-full">
                      Gated
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="text-[16.32px] font-extrabold text-[#1D1526] leading-snug mb-2 group-hover:text-[#BF6735] transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[13.5px] leading-[20px] text-[#5C5468] mb-6">
                  {card.description}
                </p>
              </div>

              {/* Card Footer: Routing link & Arrow */}
              <div className="pt-2 flex items-center justify-between border-t border-transparent group-hover:border-[#F4F0F8] transition-colors">
                <div className="flex items-center flex-wrap gap-1.5 text-[12.5px]">
                  {card.routePrefix && (
                    <span className="font-semibold text-[#C35D29]">
                      {card.routePrefix}
                    </span>
                  )}
                  {card.routeCode && (
                    <code className="text-[11.5px] font-mono font-bold text-[#5C5468] bg-[#F4F0F8] px-2 py-0.5 rounded-[5px]">
                      {card.routeCode}
                    </code>
                  )}
                  {card.routeSuffix && (
                    <span className="font-semibold text-[#C35D29]">
                      {card.routeSuffix}
                    </span>
                  )}
                  {card.linkText && (
                    <span className="font-semibold text-[#C35D29]">
                      {card.linkText}
                    </span>
                  )}
                </div>
                <span className="text-[#D9743E] font-semibold text-[14px] transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Production Doctrine Banner */}
      <Reveal delay={0.3}>
        <div className="flex items-start gap-4 sm:gap-5 bg-white border border-[#D9743E] rounded-[14px] p-6 sm:p-7 shadow-sm">
          <div className="flex-shrink-0 mt-0.5 w-5 h-5">
            <Image
              src={`/partnerships/${ROUTING_MATRIX_DATA.doctrine.iconName}`}
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 text-[#C35D29]"
            />
          </div>
          <div>
            <h4 className="text-[14px] font-bold text-[#1D1526] leading-none mb-2">
              {ROUTING_MATRIX_DATA.doctrine.title}
            </h4>
            <p className="text-[14px] leading-[23px] text-[#5C5468]">
              {ROUTING_MATRIX_DATA.doctrine.description}
            </p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
