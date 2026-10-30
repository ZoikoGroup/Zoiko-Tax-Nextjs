"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GENERAL_CONTACT_REASON_ROUTER_DATA, RouteCard } from "./general-contact-data";
import {
  SectionContainer,
  EyebrowTag,
  SectionHeading,
  SectionDescription,
  Reveal,
} from "./shared";

function RouteCardItem({ card }: { card: RouteCard }) {
  return (
    <Link
      href={card.href}
      className="group relative flex flex-col justify-between rounded-2xl bg-white border border-[#E7E0F1] p-[22px] transition-all duration-200 hover:-translate-y-1 hover:border-[#D9743E] hover:shadow-[0_12px_28px_rgba(29,21,38,0.06)]"
    >
      <div>
        {/* Icon Container */}
        <div className="w-11 h-11 rounded-xl bg-[#FAF7FC] border border-[#EFE9F6] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#ECE5FB]">
          <Image
            src={card.icon}
            alt=""
            width={22}
            height={22}
            className="w-[22px] h-[22px] object-contain transition-transform group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-extrabold text-[#1D1526] leading-[1.3] mb-2 group-hover:text-[#D9743E] transition-colors">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-[14px] font-normal text-[#5C5468] leading-[1.5]">
          {card.description}
        </p>
      </div>

      {/* Footer Tag & Arrow */}
      <div className="mt-5 flex items-center justify-between pt-3 border-t border-[#F3EEF8]">
        <span className="text-[13px] font-semibold text-[#5A3CC6] font-mono group-hover:text-[#D9743E] transition-colors">
          {card.badge}
        </span>
        <span className="text-[15px] font-semibold text-[#5A3CC6] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#D9743E]">
          →
        </span>
      </div>
    </Link>
  );
}

export default function ReasonRouterSection() {
  const {
    eyebrow,
    heading,
    description,
    priorityTag,
    priorityRoutes,
    moreSpecialistTag,
    moreSpecialistRoutes,
    fallbackBanner,
    routingRule,
  } = GENERAL_CONTACT_REASON_ROUTER_DATA;

  return (
    <SectionContainer id="contact-reasons" className="py-16 sm:py-20 lg:py-[84px] bg-white">
      {/* Header */}
      <div className="max-w-[700px] mb-10 sm:mb-12">
        <Reveal>
          <EyebrowTag>{eyebrow}</EyebrowTag>
        </Reveal>
        <Reveal delay={0.06}>
          <SectionHeading>{heading}</SectionHeading>
        </Reveal>
        <Reveal delay={0.12}>
          <SectionDescription>{description}</SectionDescription>
        </Reveal>
      </div>

      {/* Priority Routes Group */}
      <Reveal delay={0.15}>
        <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
          <span className="inline-flex items-center text-[11px] font-bold tracking-[0.66px] uppercase px-3 py-1 rounded-full bg-[#ECE5FB] text-[#D97637]">
            {priorityTag}
          </span>
          <div className="h-[1px] flex-1 bg-[#E7E0F1]" />
        </div>
      </Reveal>

      {/* Priority Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-12">
        {priorityRoutes.map((card, i) => (
          <Reveal key={card.id} delay={0.05 * (i + 1)}>
            <RouteCardItem card={card} />
          </Reveal>
        ))}
      </div>

      {/* More Specialist Routes Group */}
      <Reveal delay={0.15}>
        <div className="flex items-center gap-3.5 mb-5 sm:mb-6">
          <span className="inline-flex items-center text-[11px] font-bold tracking-[0.66px] uppercase px-3 py-1 rounded-full bg-[#ECE5FB] text-[#D97637]">
            {moreSpecialistTag}
          </span>
          <div className="h-[1px] flex-1 bg-[#E7E0F1]" />
        </div>
      </Reveal>

      {/* Specialist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 sm:mb-12">
        {moreSpecialistRoutes.map((card, i) => (
          <Reveal key={card.id} delay={0.05 * (i + 1)}>
            <RouteCardItem card={card} />
          </Reveal>
        ))}
      </div>

      {/* Fallback Banner (Banner 1) */}
      <Reveal delay={0.2}>
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2B1A47] to-[#3A2460] p-7 sm:p-8 lg:p-[30px] text-white shadow-lg flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-6">
          <div className="max-w-[850px]">
            <span className="inline-block rounded-full bg-[#F0B98A]/15 px-3 py-1 text-[11px] font-bold tracking-wider uppercase text-[#F0B98A] mb-3">
              {fallbackBanner.tag}
            </span>
            <h3 className="text-xl sm:text-[20px] font-extrabold text-white mb-2">
              {fallbackBanner.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-[#B6A8CF]">
              {fallbackBanner.textPrefix}
              <code className="bg-white/10 px-1.5 py-0.5 rounded text-[#F0B98A] font-mono text-[13px]">
                {fallbackBanner.code}
              </code>
              {fallbackBanner.textSuffix}
            </p>
          </div>
          <a
            href={fallbackBanner.buttonHref}
            className="inline-flex items-center justify-center self-start lg:self-center shrink-0 rounded-full bg-[#BF6735] border border-[#DD7235] px-6 py-3 text-[15px] font-semibold text-white shadow-[inset_0_3px_4px_rgba(255,223,211,0.5),inset_0_-2px_4px_rgba(180,80,30,0.3)] hover:bg-[#A8582A] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            {fallbackBanner.buttonText}
          </a>
        </div>
      </Reveal>

      {/* Routing Rule Banner (Banner 2) */}
      <Reveal delay={0.25}>
        <div className="rounded-xl bg-white border border-[#D9743E] p-5 sm:p-[22px] flex items-start sm:items-center gap-3.5 shadow-sm">
          <div className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0 flex items-center justify-center">
            <Image
              src="/general-contact/icon-general-contact-card.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 text-[#D9743E]"
            />
          </div>
          <div>
            <span className="text-[14px] font-bold text-[#1D1526] mr-2">
              {routingRule.title}:
            </span>
            <span className="text-[14px] font-normal text-[#5C5468] leading-[1.5]">
              {routingRule.text}
            </span>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
