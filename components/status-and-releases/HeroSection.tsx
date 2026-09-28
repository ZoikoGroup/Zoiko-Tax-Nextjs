"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  ShieldCheck,
  FileCheck,
  ScanSearch,
  ArrowLeftRight,
  CheckCircle2,
  Info,
} from "lucide-react";

export default function HeroSection() {
  const scrollToChanges = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("latest-changes");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage: `linear-gradient(96deg, rgba(234, 223, 240, 1) 45%, rgba(250, 240, 224, 0.22) 100%), url('/status-and-releases/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left copy column */}
          <div className="flex flex-col gap-6 max-w-full lg:max-w-[690px] z-10">
            {/* Eyebrow badge */}
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.06em] text-[#D65A2C]">
                COVERAGE STATUS & RELEASES
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-bold leading-[1.02] tracking-tight text-[#18141B] font-['Inter',sans-serif]">
              See what changed in ZoikoTax Coverage — and verify what is current.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl font-medium leading-[1.5] text-[#665F69]">
              Track governed public changes to capability readiness and pack/release context by market and scope. Status & Releases explains the chronology; Coverage Overview remains the source for current public availability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#latest-changes"
                onClick={scrollToChanges}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D65A2C] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c04d22]"
              >
                <span>Browse latest changes</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/about-us"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-[#FFFAFA] px-5 text-sm font-semibold text-[#18141B] transition hover:bg-[#F3EDF5]"
              >
                <span>Book a Demo</span>
                <Calendar className="h-4 w-4 text-[#665F69]" />
              </Link>

              <Link
                href="/coverage-overview"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-[#FFFAFA] px-5 text-sm font-semibold text-[#18141B] transition hover:bg-[#F3EDF5]"
              >
                <span>View Current Coverage</span>
                <ArrowRight className="h-4 w-4 text-[#665F69]" />
              </Link>

              <Link
                href="/coverage-overview"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-[#FFFAFA] px-5 text-sm font-semibold text-[#18141B] transition hover:bg-[#F3EDF5]"
              >
                <span>Country & Regulatory Packs</span>
                <ArrowRight className="h-4 w-4 text-[#665F69]" />
              </Link>
            </div>

            {/* Truth qualifier banner */}
            <div className="flex items-start gap-3 rounded-xl border border-[#D8CEDD] bg-white p-4 shadow-sm">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#301153] mt-0.5" />
              <p className="text-sm font-medium leading-[1.5] text-[#18141B]">
                Events publish only from authoritative coverage/release data. A release event applies only to the stated market, capability and scope.
              </p>
            </div>
          </div>

          {/* Right chronology visual */}
          <div className="w-full lg:w-auto lg:flex-1 max-w-[560px] z-10">
            <div className="rounded-[26px] bg-[#17052D] p-6 sm:p-8 shadow-[0px_6px_18px_0px_rgba(0,0,0,0.18)] flex flex-col gap-6 text-white border border-white/10">
              {/* Heading */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase tracking-wider text-[#FFF0E9]">
                    Governed chronology
                  </span>
                  <span className="text-sm text-[#D9D0DF]">
                    Read each event through its declared scope.
                  </span>
                </div>
                <span className="shrink-0 rounded-full border border-[#301153] bg-[#EEE2F5] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#301153]">
                  PUBLIC ROUTE
                </span>
              </div>

              {/* Divider */}
              <div className="h-[1px] w-full bg-white/15" />

              {/* Semantic timeline */}
              <div className="flex flex-col">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20">
                      <FileCheck className="h-4 w-4 text-[#FFF0E9]" />
                    </div>
                    <div className="h-8 w-[2px] bg-white/20" />
                  </div>
                  <div className="pt-0.5 flex flex-col gap-1 pb-2">
                    <span className="text-xs font-bold tracking-wider text-[#FFF0E9]">
                      01 · GOVERNED EVENT
                    </span>
                    <span className="text-base font-semibold leading-tight text-white">
                      Authoritative event record
                    </span>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20">
                      <ScanSearch className="h-4 w-4 text-[#FFF0E9]" />
                    </div>
                    <div className="h-8 w-[2px] bg-white/20" />
                  </div>
                  <div className="pt-0.5 flex flex-col gap-1 pb-2">
                    <span className="text-xs font-bold tracking-wider text-[#FFF0E9]">
                      02 · SCOPE
                    </span>
                    <span className="text-base font-semibold leading-tight text-white">
                      Market × capability × exact scope
                    </span>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20">
                      <ArrowLeftRight className="h-4 w-4 text-[#FFF0E9]" />
                    </div>
                    <div className="h-8 w-[2px] bg-white/20" />
                  </div>
                  <div className="pt-0.5 flex flex-col gap-1 pb-2">
                    <span className="text-xs font-bold tracking-wider text-[#FFF0E9]">
                      03 · STATE CHANGE
                    </span>
                    <span className="text-base font-semibold leading-tight text-white">
                      Prior state → event state
                    </span>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#236C55] text-white border border-[#236C55]">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="pt-0.5 flex flex-col gap-1">
                    <span className="text-xs font-bold tracking-wider text-[#FFF0E9]">
                      04 · CURRENT COVERAGE
                    </span>
                    <span className="text-base font-semibold leading-tight text-white">
                      Verify the current public truth
                    </span>
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.06] p-3.5 border border-white/10">
                <Info className="h-4 w-4 shrink-0 text-[#D9D0DF]" />
                <p className="text-xs font-normal leading-[1.45] text-[#D9D0DF]">
                  Chronology provides context. The current Coverage route resolves the state that applies now.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
