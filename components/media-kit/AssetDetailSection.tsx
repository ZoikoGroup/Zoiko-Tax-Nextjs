"use client";

import React from "react";
import Image from "next/image";
import { SectionContainer, SectionHeader, Reveal, StatusPill, UnavailableButton, SecondaryButton } from "./shared";
import { assetMetadataFields } from "./types";

export default function AssetDetailSection() {
  return (
    <SectionContainer id="asset-detail" className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Asset detail"
          title="See the context before the file."
          description="An unapproved sample reference shows the information an asset needs. None of the missing metadata below is presented as verified."
        />
      </Reveal>

      {/* Reference Asset Detail Split Card */}
      <Reveal delay={0.1}>
        <div className="rounded-[26px] bg-white border border-[#D8CEDD] p-6 sm:p-8 lg:p-9 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Accessible Asset Preview */}
            <div className="lg:col-span-5 space-y-5">
              {/* Logo Preview Box */}
              <div className="w-full h-[260px] sm:h-[284px] rounded-2xl bg-[#FFFAFA] border border-[#D8CEDD] flex items-center justify-center p-6 sm:p-8">
                <div className="relative w-[340px] h-[55px] max-w-full">
                  <Image
                    src="/media-kit/zoikotax-logo.png"
                    alt="ZoikoTax wordmark reference preview"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <StatusPill text="UNAPPROVED REFERENCE" />
                <h3 className="text-base sm:text-lg font-semibold text-[#18141B] font-['Inter',sans-serif]">
                  Reference preview · approval required
                </h3>
                <p className="text-sm sm:text-base leading-[1.6] text-[#665F69]">
                  The preview is accessible visual context, not an approved file. It is not certified current and does not establish usage rights.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <UnavailableButton label="Download unavailable" />
                <SecondaryButton href="#contact">
                  Contact Media
                </SecondaryButton>
              </div>

              <p className="text-xs sm:text-sm leading-[1.6] text-[#665F69] pt-1">
                Safe next step: seek the governed record and permission once the media contact route is published.
              </p>
            </div>

            {/* Right Column: Asset Metadata Table */}
            <div className="lg:col-span-7 space-y-4">
              <div className="divide-y divide-[#D8CEDD]/60 border border-[#D8CEDD]/60 rounded-xl overflow-hidden bg-[#FAF6FC]/30">
                {assetMetadataFields.map((field) => (
                  <div
                    key={field.label}
                    className="px-4.5 py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-4"
                  >
                    <span className="w-full sm:w-[180px] shrink-0 text-xs sm:text-sm font-semibold text-[#18141B]">
                      {field.label}
                    </span>
                    <span className="flex-1 text-xs sm:text-sm leading-[1.5] text-[#665F69]">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Download Withheld Notice */}
              <div className="rounded-xl bg-[#FAF3FF] border border-[#D8CEDD] p-5 space-y-1.5">
                <span className="block font-mono text-xs font-bold tracking-wider text-[#301153] uppercase">
                  DOWNLOAD WITHHELD
                </span>
                <p className="text-xs sm:text-sm leading-[1.6] text-[#665F69]">
                  Source approval, currentness, actual file format and rights must be established together before a download action can become available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
