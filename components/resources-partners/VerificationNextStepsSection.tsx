"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Globe,
  ShieldCheck,
  Building2,
  Newspaper,
  MessageCircle,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { verificationNextStepsData } from "./types";

export default function VerificationNextStepsSection() {
  const { routes, conversion } = verificationNextStepsData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code-2":
        return <Code2 className="w-6 h-6 text-[#D65A2C]" />;
      case "globe-2":
        return <Globe className="w-6 h-6 text-[#D65A2C]" />;
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-[#D65A2C]" />;
      case "building-2":
        return <Building2 className="w-6 h-6 text-[#D65A2C]" />;
      case "newspaper":
        return <Newspaper className="w-6 h-6 text-[#D65A2C]" />;
      case "message-circle":
      default:
        return <MessageCircle className="w-6 h-6 text-[#D65A2C]" />;
    }
  };

  const getResolvedHref = (path: string) => {
    if (path.includes("coverage")) return "/coverage-overview";
    if (path.includes("about") || path.includes("trust") || path.includes("newsroom")) return "/about-us";
    if (path.includes("contact")) return "/contact";
    if (path.includes("developers")) return "/developers";
    return path;
  };

  return (
    <div className="w-full">
      {/* Part 1: Verification Routes */}
      <SectionContainer className="relative overflow-hidden bg-[#FAF3FF] border-b border-[#D8CEDD]">
        {/* Pattern Background matching Figma asset 6f3d71f3... */}
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-40"
          aria-hidden="true"
        >
          <Image
            src="/resources-partners/pattern-bg.png"
            alt="Verification routes pattern background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative">
          <Reveal>
            <div className="space-y-10 sm:space-y-12">
              {/* Section Heading */}
              <SectionHeader
                eyebrow={verificationNextStepsData.eyebrow}
                title={verificationNextStepsData.title}
                description={verificationNextStepsData.introduction}
              />

              {/* 6 Source Route Cards - Exact Figma node 1222:6639 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {routes.map((route, idx) => {
                  const href = getResolvedHref(route.path);

                  return (
                    <Link
                      key={idx}
                      href={href}
                      className="rounded-[16px] border border-[#D8CEDD] bg-[#F4EDF8] p-6 shadow-2xs hover:bg-[#EEE4F6] hover:border-[#BF6735] hover:shadow-xs transition-all duration-200 group flex flex-col justify-between gap-4"
                    >
                      <div className="space-y-4">
                        <div className="w-6 h-6 flex items-center justify-center">
                          {getIcon(route.iconName)}
                        </div>

                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D65A2C]">
                            <span className="group-hover:underline underline-offset-4 font-['Inter',sans-serif]">
                              {route.label}
                            </span>
                            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>
                          <p className="text-[15px] font-normal leading-[1.5] text-[#665F69] font-['Inter',sans-serif]">
                            {route.purpose}
                          </p>
                        </div>
                      </div>

                      <span className="text-[12px] font-medium text-[#665F69] font-['Inter',sans-serif]">
                        {route.path}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Part 2: Contextual Platform Next Step Conversion Banner */}
      <section className="relative w-full overflow-hidden bg-[#1D033B] py-16 sm:py-20 lg:py-24 text-white">
        {/* Background Image from Figma asset e8c94705 with exact 81% overlay */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <Image
            src="/resources-partners/conversion-bg.png"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1D033B]/81" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Eyebrow */}
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#F4A261]">
                {conversion.eyebrow}
              </span>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] tracking-tight text-white font-['Inter',sans-serif]">
                {conversion.title}
              </h2>

              {/* Explanation */}
              <p className="text-base sm:text-lg lg:text-[19px] font-normal leading-relaxed text-[#D9D0DF]">
                {conversion.explanation}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  href={conversion.primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#BF6735] px-7 py-3.5 text-sm font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1),inset_0px_-2px_4px_0px_rgba(253,207,190,1)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>{conversion.primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={conversion.secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4E2A6E] bg-[#301153] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#3d166b] hover:border-[#F4A261] transition-all duration-200 active:scale-[0.98] cursor-pointer"
                >
                  <span>{conversion.secondaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>

              {/* Demo Route Specifier */}
              <p className="text-xs font-mono text-[#D9D0DF]/70 pt-2">
                {conversion.demoRoute}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
