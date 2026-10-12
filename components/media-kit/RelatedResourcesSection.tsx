"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionContainer, SectionHeader, Reveal, PrimaryButton } from "./shared";
import { relatedResourcesData } from "./types";

export default function RelatedResourcesSection() {
  return (
    <div id="related-resources-wrapper" className="w-full">
      {/* 1. Related Resources Section */}
      <SectionContainer id="related-resources">
        <Reveal>
          <SectionHeader
            eyebrow="Related resources"
            title="Keep the source in view."
            description="Continue with related company context. Resource labels follow the existing navigation; no destination URLs are assumed."
          />
        </Reveal>

        {/* 5 Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {relatedResourcesData.map((item, idx) => (
            <Reveal key={item.title} delay={0.04 * idx}>
              <Link
                href={item.href}
                className="group h-full rounded-2xl bg-white border border-[#D8CEDD] p-6 flex flex-col justify-between gap-4 hover:border-[#BF6735] hover:shadow-xs transition-all duration-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-[#18141B] group-hover:text-[#BF6735] transition-colors font-['Inter',sans-serif]">
                      {item.title}
                    </h3>
                    <div className="w-5 h-5 relative shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <Image
                        src="/media-kit/icons/arrow-up-right.svg"
                        alt=""
                        width={20}
                        height={20}
                        className="w-5 h-5 opacity-70"
                      />
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-[1.6] text-[#665F69]">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#D8CEDD]/50">
                  <span className="text-xs font-normal text-[#665F69]">
                    Approved route required
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      {/* 2. Secondary Platform Invitation Banner */}
      <section className="w-full bg-[#1D033B] px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-[72px]">
        <div className="mx-auto w-full max-w-[1440px] text-center">
          <Reveal>
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold leading-[1.15] text-white font-['Inter',sans-serif]">
                See how ZoikoTax fits your telecom architecture.
              </h2>
              <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF]">
                Looking for platform information instead of media resources?
              </p>
              <div className="pt-2 flex justify-center">
                <PrimaryButton href="/contact">
                  Book a Demo
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
