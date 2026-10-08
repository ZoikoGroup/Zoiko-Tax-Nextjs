"use client";

import React from "react";
import Image from "next/image";
import { FolderSearch, Search, ChevronDown, RotateCcw } from "lucide-react";
import { SectionContainer, SectionHeader, ContextualLink, Reveal } from "./shared";
import { registryDiscoveryData } from "./types";

export default function RegistryDiscoverySection() {
  return (
    <SectionContainer className="relative overflow-hidden bg-white border-b border-[#D8CEDD]">
      {/* Pattern Background matching Figma asset 6f3d71f3... */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
        aria-hidden="true"
      >
        <Image
          src="/resources-partners/pattern-bg.png"
          alt="Registry discovery pattern background"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative">
        <Reveal>
          <div className="space-y-12">
            {/* Section Heading */}
            <SectionHeader
              eyebrow={registryDiscoveryData.eyebrow}
              title={registryDiscoveryData.title}
              description={registryDiscoveryData.introduction}
            />

            {/* Live Registry Empty State */}
            <div className="rounded-2xl border border-[#DFD3E7] bg-[#F4EDF8] p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#DFD3E7] flex items-center justify-center shrink-0 shadow-xs">
                <FolderSearch className="w-8 h-8 text-[#301153]" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                  {registryDiscoveryData.emptyState.title}
                </h3>
                <p className="text-sm sm:text-base font-medium leading-relaxed text-[#665F69]">
                  {registryDiscoveryData.emptyState.explanation}
                </p>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                  {registryDiscoveryData.emptyState.safeRoutes.map((route, idx) => (
                    <ContextualLink key={idx} label={route.label} href={route.href} />
                  ))}
                </div>
              </div>
            </div>

            {/* Discovery Pattern Specimen */}
            <div className="rounded-2xl border border-[#E0D5E6] bg-white p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
              {/* Specimen Heading */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F0EAF4] pb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                    {registryDiscoveryData.specimen.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#665F69] mt-1">
                    {registryDiscoveryData.specimen.explanation}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#F4EDF8] text-[#301153] border border-[#DFD3E7] tracking-wider shrink-0 self-start sm:self-auto">
                  {registryDiscoveryData.specimen.statusBadge}
                </span>
              </div>

              {/* Search and Sort Specimen Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Search */}
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#18141B]">
                    Search partners
                  </label>
                  <div className="relative flex items-center rounded-xl border border-[#D8CEDD] bg-[#FAFAFB] px-3.5 py-3 shadow-2xs">
                    <Search className="w-4 h-4 text-[#665F69] shrink-0 mr-2.5" />
                    <input
                      type="text"
                      disabled
                      placeholder="Name, approved capability, integration or region"
                      className="w-full bg-transparent text-sm text-[#18141B] placeholder-[#665F69] cursor-not-allowed outline-none"
                    />
                  </div>
                </div>

                {/* Sort */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#18141B]">
                    Sort
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-[#D8CEDD] bg-[#FAFAFB] px-3.5 py-3 shadow-2xs cursor-not-allowed">
                    <span className="text-sm font-medium text-[#665F69]">
                      Source-required ordering
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#665F69]" />
                  </div>
                </div>
              </div>

              {/* Discovery Filters Specimen */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Filter 1 */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#18141B]">
                    Relationship type
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-[#D8CEDD] bg-[#FAFAFB] px-3.5 py-3 shadow-2xs cursor-not-allowed">
                    <span className="text-sm font-medium text-[#665F69]">
                      Technology / Implementation / Ecosystem
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#665F69]" />
                  </div>
                </div>

                {/* Filter 2 */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#18141B]">
                    Canonical capability
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-[#D8CEDD] bg-[#FAFAFB] px-3.5 py-3 shadow-2xs cursor-not-allowed">
                    <span className="text-sm font-medium text-[#665F69]">
                      Approved vocabulary required
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#665F69]" />
                  </div>
                </div>

                {/* Filter 3 */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#18141B]">
                    Approved service region
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-[#D8CEDD] bg-[#FAFAFB] px-3.5 py-3 shadow-2xs cursor-not-allowed">
                    <span className="text-sm font-medium text-[#665F69]">
                      Source required · No regions listed
                    </span>
                    <ChevronDown className="w-4 h-4 text-[#665F69]" />
                  </div>
                </div>
              </div>

              {/* Ordering guidance & Reset */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 text-xs text-[#665F69] border-t border-[#F0EAF4]">
                <p className="max-w-xl font-medium leading-relaxed">
                  {registryDiscoveryData.specimen.sortRules}
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#665F69] opacity-70">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset filters · Inactive</span>
                </div>
              </div>

              {/* No-Results Specimen Card */}
              <div className="rounded-xl border border-[#E8DEC8] bg-[#F7F3ED] p-5 space-y-1.5">
                <h4 className="text-sm sm:text-base font-bold text-[#18141B]">
                  {registryDiscoveryData.specimen.noResults.title}
                </h4>
                <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#665F69]">
                  {registryDiscoveryData.specimen.noResults.guidance}
                </p>
              </div>

              {/* Accessible pattern guidance */}
              <p className="text-xs font-medium text-[#665F69] leading-relaxed pt-2">
                {registryDiscoveryData.specimen.accessibleGuidance}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
