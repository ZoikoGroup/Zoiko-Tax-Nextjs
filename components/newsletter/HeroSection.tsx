"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import { HERO_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function HeroSection() {
  const { breadcrumb, title, description, backgroundImage, actions, statusNote, boundaryCard } =
    HERO_DATA;

  return (
    <section className="relative isolate w-full overflow-hidden min-h-[660px] lg:min-h-[740px] flex items-center bg-[#F6F0EC]">
      {/* Background Hero Image */}
      <div className="absolute inset-0 -z-20 pointer-events-none select-none">
        <Image
          src={backgroundImage}
          alt="Choose ZoikoTax updates"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[78%_center] lg:object-right-center"
        />
      </div>

      {/* Light gradient overlay ensuring crisp contrast on left while keeping subject vivid */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-[#FBF8F6] via-[#FBF8F6]/90 via-55% to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-t from-[#FBF8F6]/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* Breadcrumb / Eyebrow */}
          <Reveal>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {breadcrumb}
            </span>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.04}>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#18141B] tracking-tight leading-[1.12]">
              {title}
            </h1>
          </Reveal>

          {/* Subheading */}
          <Reveal delay={0.08}>
            <p className="mt-4 text-sm sm:text-base text-[#55505C] leading-relaxed max-w-xl">
              {description}
            </p>
          </Reveal>

          {/* Action Pills */}
          <Reveal delay={0.12}>
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {actions.map((act, idx) => (
                <Link
                  key={idx}
                  href={act.href}
                  className={
                    act.variant === "copper"
                      ? "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#EED8CC] hover:bg-[#E5C7B7] text-[#8C3E18] border border-[#DEBAA4] transition-colors shadow-2xs"
                      : "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 hover:bg-white text-[#4A4550] border border-[#DDD3E4] transition-colors shadow-2xs backdrop-blur-xs"
                  }
                >
                  <span>{act.label}</span>
                  {act.locked && <Lock className="w-3 h-3 opacity-70" aria-hidden="true" />}
                </Link>
              ))}
            </div>
          </Reveal>

          {/* Subscriptions unavailable notice */}
          <Reveal delay={0.15}>
            <p className="mt-4 text-[11px] sm:text-xs text-[#6B6472] font-medium leading-relaxed max-w-xl">
              {statusNote}
            </p>
          </Reveal>

          {/* Public Information Boundary card */}
          <Reveal delay={0.18}>
            <div className="mt-5 sm:mt-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EFE8F3] p-5 sm:p-6 shadow-[0_4px_24px_rgba(40,10,60,0.06)] max-w-xl">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#2A0B4D] block">
                {boundaryCard.tag}
              </span>
              <p className="text-xs text-[#55505C] leading-relaxed mt-2">
                {boundaryCard.text}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
