"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, PrimaryButton, Reveal } from "./shared";

const journeySteps = [
  {
    num: "01",
    title: "Understand the model",
    desc: "Review the dimensions and authority boundaries.",
  },
  {
    num: "02",
    title: "Optional scope summary",
    desc: "Clarify public intent and keep unknowns visible.",
  },
  {
    num: "03",
    title: "Voluntary handoff",
    desc: "Choose to discuss scope in an approved evaluation.",
  },
  {
    num: "04",
    title: "Commercial validation",
    desc: "Confirm applicable sources, scope and terms.",
  },
  {
    num: "05",
    title: "Authoritative quote / order",
    desc: "Use approved documents for final commitments.",
  },
];

export default function CustomerPathsSection() {
  return (
    <SectionContainer id="customer-paths" className="bg-[#1D033B] text-white">
      <Reveal>
        <SectionHeader
          eyebrow="From clarity to commercial authority"
          title="A considered path to a quote."
          description="Understanding the model comes first. A scope summary is optional; it is never a lead gate or a commercial commitment."
          dark
          className="mb-10"
        />
      </Reveal>

      {/* 5-step Horizontal Journey matching Figma node #1484:16435 */}
      <Reveal>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 mb-12">
          {journeySteps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col gap-3 rounded-[16px] bg-[#301153] p-5 transition-all hover:bg-[#3d1868]"
            >
              <span className="font-mono text-base font-bold text-[#F4A261]">
                {step.num}
              </span>
              <h3 className="text-base font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm font-normal leading-[1.5] text-[#D9D0DF]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Evaluation Context & Existing Customer Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Left Column: Photograph */}
        <div className="lg:col-span-4 flex justify-center">
          <Reveal className="w-full h-full max-w-[388px]">
            <div className="relative h-[480px] sm:h-[505px] w-full overflow-hidden rounded-[26px] shadow-xl">
              <Image
                src="/pricing-plan/Professional-Scope-Rendered.png"
                alt="Professional scope discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 388px"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#14091F]/80 p-4 sm:p-5 backdrop-blur-sm">
                <p className="text-xs font-normal text-white/90">
                  Illustrative evaluation context · not customer evidence
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Two Cards matching Figma node #1484:16461 */}
        <div className="lg:col-span-8 flex flex-col justify-between gap-6">
          <Reveal>
            {/* Prospective Evaluation Card */}
            <div className="flex flex-col gap-4 rounded-[16px] bg-[#301153] p-7 shadow-md">
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white">
                Evaluating ZoikoTax?
              </h3>
              <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
                Bring the scope and open questions into an approved evaluation. Book a Demo is a voluntary handoff—not an instant quote or a promised response time. No sensitive inputs or bundled marketing consent are part of this page.
              </p>
              <div>
                <PrimaryButton href="#demo">
                  Book a Demo
                </PrimaryButton>
              </div>
            </div>
          </Reveal>

          <Reveal>
            {/* Existing Customer Path Card matching Figma node #1484:16469 */}
            <div className="flex flex-col gap-4 rounded-[16px] border border-white/[0.15] bg-[#14091F] p-7">
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-white">
                Already a customer?
              </h3>
              <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
                Expansion, contraction, support-level changes, country additions, migration and renewal belong in the approved account channel when one exists. Your applicable agreement remains authoritative; a new-logo sales funnel should not replace that route.
              </p>
              <p className="text-sm font-normal leading-[1.5] text-[#F4A261]">
                Approved account channel unavailable here. Use the account route established in your agreement; no login or contact endpoint is invented.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
