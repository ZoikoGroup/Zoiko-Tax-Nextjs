"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import {
  LIFECYCLE_STAGES,
  CAPABILITY_BOUNDARIES,
} from "./country-regulatorypacks-data";

export default function ActivationModelSection() {
  return (
    <SectionContainer className="bg-[#301153] text-white">
      <Reveal>
        <div className="flex flex-col gap-10 sm:gap-12">
          {/* Section Heading */}
          <SectionHeader
            dark
            eyebrow="Activation model"
            title="Content is governed. Capabilities are activated."
            description="A pack organizes jurisdiction content and activation. It does not automatically enable all six capabilities."
            className="mb-0"
          />

          {/* Conceptual Lifecycle Card */}
          <div className="rounded-[26px] border border-white/20 bg-white/5 p-6 sm:p-8 lg:p-10 flex flex-col gap-6 shadow-md backdrop-blur-xs">
            <span className="text-[13px] font-bold text-[#F4A261] uppercase tracking-wider font-['Inter',sans-serif]">
              CONCEPTUAL PUBLIC LIFECYCLE · NOT A MARKET STATUS
            </span>

            {/* Lifecycle Stages with Arrows */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {LIFECYCLE_STAGES.map((stage, idx) => (
                <div key={stage.id} className="flex items-center gap-3 w-full">
                  <div
                    className={`flex-1 rounded-[10px] p-5 text-center flex items-center justify-center min-h-[72px] transition ${
                      stage.isLast
                        ? "bg-[#755095] text-white shadow-sm"
                        : "bg-white/5 border border-white/10 text-white"
                    }`}
                  >
                    <span className="text-lg sm:text-[20px] font-semibold tracking-tight font-['Inter',sans-serif]">
                      {stage.name}
                    </span>
                  </div>

                  {!stage.isLast && (
                    <div className="hidden md:flex items-center text-[#D9D0DF]/70 shrink-0">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-[15px] text-[#D9D0DF] leading-relaxed pt-2 font-['Inter',sans-serif]">
              This explains readiness concepts, not a fixed sequence, schedule or deadline. Each capability is reviewed independently; a pack may contain mixed states, and readiness can be suspended or withdrawn.
            </p>
          </div>

          {/* Capability Boundaries Subsection */}
          <div className="flex flex-col gap-8 pt-4">
            <h3 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight font-['Inter',sans-serif]">
              What each capability does—and does not imply
            </h3>

            {/* 6 Capability Boundary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {CAPABILITY_BOUNDARIES.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7 flex flex-col gap-3 hover:bg-white/[0.08] transition-colors"
                >
                  <h4 className="text-lg sm:text-[20px] font-semibold text-white font-['Inter',sans-serif]">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#D9D0DF] leading-[1.55] font-['Inter',sans-serif]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
