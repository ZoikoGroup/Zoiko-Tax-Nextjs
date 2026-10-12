"use client";

import React from "react";
import Image from "next/image";
import { Reveal, PrimaryButton, SecondaryButton, AuthorityNotice } from "./shared";

export default function MediaKitIntroSection() {
  return (
    <section id="media-kit-intro" className="w-full">
      {/* 1. Media Kit Hero */}
      <div className="relative w-full min-h-[759px] flex flex-col justify-between overflow-hidden px-6 sm:px-12 lg:px-20 pt-20 sm:pt-24 lg:pt-[88px] pb-12 sm:pb-16 lg:pb-[64px]">
        {/* Background Image & Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: "url('/media-kit/hero-bg.png')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.1) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1440px] flex-1 flex flex-col justify-between">
          <Reveal>
            <div className="max-w-[760px] space-y-6">
              <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#A9421F]">
                RESOURCES · STAY UPDATED · MEDIA KIT
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold leading-[1.02] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
                Use current ZoikoTax brand assets with the right context, version and permission.
              </h1>

              <p className="max-w-[700px] text-lg sm:text-xl font-medium leading-[1.5] text-[#535055]">
                A governed public brand-asset and media-resource destination for journalists, analysts, event organizers, partners, agencies and internal communications teams.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-3.5">
                <PrimaryButton href="#asset-finder" icon="arrow-down">
                  Browse Approved Assets
                </PrimaryButton>
                <SecondaryButton href="#usage-principles">
                  Read Brand Guidance
                </SecondaryButton>
                <SecondaryButton href="#contact">
                  Contact Media
                </SecondaryButton>
              </div>

              {/* Status Note */}
              <p className="pt-2 max-w-[700px] text-xs sm:text-sm font-medium leading-[1.5] text-[#18141B]">
                Approval candidate · No current approved asset registry or download files supplied. Browse guidance below; media contact route is not yet published.
              </p>
            </div>
          </Reveal>

          {/* Bottom Illustration Label */}
          <div className="pt-12">
            <span className="text-xs font-normal leading-[1.5] text-[#665F69]">
              Homepage illustration · visual context only · not a downloadable media asset
            </span>
          </div>
        </div>
      </div>

      {/* 2. Direct Answer and Public Authority Notice */}
      <div className="w-full bg-[#FAF3FF] px-6 sm:px-12 lg:px-20 py-12 sm:py-14 lg:py-16 border-b border-[#D8CEDD]">
        <div className="mx-auto w-full max-w-[1440px]">
          <Reveal>
            <div className="space-y-4 max-w-4xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#A9421F]">
                DIRECT ANSWER
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-tight text-[#18141B] font-['Inter',sans-serif]">
                Logos, photos and brand guidelines.
              </h2>
              <p className="text-base sm:text-lg leading-[1.6] text-[#665F69]">
                Use this resource to find source-governed brand materials and their usage context. Reference previews are not approved downloads. Where source, currentness or rights are missing, the action stays unavailable.
              </p>
            </div>

            <AuthorityNotice
              title="Public authority notice"
              description="This page publishes only approved current information. It does not create rights, third-party relationships, product availability, contract terms, coverage, certification or operational promises that are not established by the owning source."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
