"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

export default function DocumentationHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Functional search or interaction
      console.log("Searching documentation for:", searchQuery);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden border-b border-[#F3E8FF] min-h-[830px] lg:h-[830px] flex flex-col justify-center py-16 lg:py-0"
      style={{
        backgroundColor: "#F7F3ED",
        backgroundImage: `linear-gradient(90deg, rgba(247, 243, 237, 0.97) 0%, rgba(234, 223, 240, 0.85) 54%, rgba(234, 223, 240, 0.1) 100%), url('/images/documentation/Section.png')`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "0 0, right top",
        backgroundSize: "100% 100%, auto 100%",
      }}
    >

      {/* Content Container */}
      <div className="relative mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <div className="w-full max-w-[896px] flex flex-col">
          {/* Eyebrow / Kicker */}
          <Reveal delay={0}>
            <p className="text-[14px] font-bold leading-[20px] tracking-[0.1em] text-[#D97637] uppercase font-['Inter',sans-serif]">
              SUPPORT & STATUS · DOCUMENTATION
            </p>
          </Reveal>

          {/* Heading 1 */}
          <Reveal delay={0.05}>
            <h1
              className="pt-4 text-[36px] sm:text-[48px] lg:text-[60px] font-extrabold leading-[60px] tracking-[-0.01em] font-['Inter',sans-serif]"
              style={{ color: "rgba(30, 27, 75, 1)" }}
            >
              Find the right ZoikoTax<br className="hidden sm:inline" />{" "}
              documentation — with scope<br className="hidden sm:inline" />{" "}
              and next step clear.
            </h1>
          </Reveal>

          {/* Subheading paragraph */}
          <Reveal delay={0.1}>
            <p className="pt-6 text-[18px] font-normal leading-[29.25px] text-[#374151] max-w-[768px] font-['Inter',sans-serif]">
              Browse source-governed product and implementation documentation, then move to Developers, Coverage, Trust, System Status or Customer Support when that specialist source owns the answer.
            </p>
          </Reveal>

          {/* Search Bar Container */}
          <Reveal delay={0.15}>
            <div className="pt-10 w-full max-w-[896px]">
              <form
                onSubmit={handleSearch}
                className="w-full max-w-[690px] flex items-center p-1 bg-white border border-[#D1D5DB] rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-shadow focus-within:ring-2 focus-within:ring-[#BF6735]/30 focus-within:border-[#BF6735]"
              >
                {/* Search Icon */}
                <div className="pl-4 pr-1 shrink-0 flex items-center justify-center">
                  <Image
                    src="/images/documentation/search-icon.svg"
                    alt=""
                    width={19}
                    height={24}
                    className="w-[18.2px] h-[24px]"
                  />
                </div>

                {/* Input Field */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documentation..."
                  className="flex-1 w-full px-3 py-3 text-[16px] text-[#111827] placeholder-[#9CA3AF] bg-transparent outline-none font-normal font-['Inter',sans-serif]"
                />

                {/* Search Button */}
                <button
                  type="submit"
                  style={{
                    backgroundColor: "rgba(191, 103, 53, 1)",
                    borderColor: "rgba(191, 103, 53, 1)",
                  }}
                  className="shrink-0 w-[116px] py-[15px] px-6 hover:opacity-95 active:opacity-90 border text-white font-bold text-[16px] leading-[24px] text-center rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1)] transition-all cursor-pointer font-['Inter',sans-serif]"
                >
                  Search
                </button>
              </form>
            </div>
          </Reveal>

          {/* Disclaimer text */}
          <Reveal delay={0.2}>
            <p className="pt-6 text-[14px] font-normal leading-[20px] text-[#4B5563] max-w-[672px] font-['Inter',sans-serif]">
              Search published ZoikoTax documentation. Live availability, service health and contractual API details remain governed by their specialist sources.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
