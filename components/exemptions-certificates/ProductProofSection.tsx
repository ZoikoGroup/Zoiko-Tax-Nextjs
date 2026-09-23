"use client";

import React, { useState } from "react";
import { SectionContainer, SectionHeader, StatusBadge, Reveal } from "./shared";
import { productProofData } from "./exemptions-data";
import { Search, Filter, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ProductProofSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterState, setFilterState] = useState("all");

  const filteredItems = productProofData.table.filter((item) => {
    const matchesSearch =
      item.ref.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.scope.toLowerCase().includes(searchQuery.toLowerCase());
    if (filterState === "all") return matchesSearch;
    return matchesSearch && item.stateType === filterState;
  });

  return (
    <SectionContainer id="product-proof" className="bg-white">
      <Reveal>
        <SectionHeader
          eyebrow={productProofData.eyebrow}
          title={productProofData.title}
          description={productProofData.description}
        />
      </Reveal>

      {/* Main Evidence Registry Table Card */}
      <Reveal delay={0.1}>
        <div className="mt-8 sm:mt-12 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D8CEDD] bg-white p-4 sm:p-6 md:p-8 shadow-[0_12px_24px_0_rgba(0,0,0,0.03)]">
          {/* Header Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E8E4EC] pb-5 sm:pb-6">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#18141B]">
                Exemption Evidence Registry
              </h3>
              <StatusBadge status="REPRESENTATIVE INTERFACE" />
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#665F69]" />
                <input
                  type="text"
                  placeholder="Search reference or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-[#D8CEDD] bg-[#FAF8FA] py-2 pl-9 pr-3 text-xs sm:text-sm text-[#18141B] placeholder:text-[#665F69] focus:border-[#D65A2C] focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between sm:justify-start gap-1.5 rounded-lg border border-[#D8CEDD] bg-[#FAF8FA] px-3 py-2 text-xs sm:text-sm font-medium text-[#18141B]">
                <div className="flex items-center gap-1.5">
                  <Filter className="h-3.5 w-3.5 text-[#665F69]" />
                  <span className="text-xs text-[#665F69] sm:hidden">Filter:</span>
                </div>
                <select
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                  className="bg-transparent focus:outline-none cursor-pointer text-xs sm:text-sm"
                >
                  <option value="all">Filter: All States</option>
                  <option value="ready">Ready for Use</option>
                  <option value="review">Needs Review</option>
                  <option value="expired">Expired</option>
                </select>
              </div>
            </div>
          </div>

          {/* Warning Banner */}
          <div className="mt-5 sm:mt-6 flex items-start sm:items-center gap-2.5 sm:gap-3 rounded-xl border border-[#FCA5A5] bg-[#FEF2F2] p-3.5 sm:p-4 text-xs sm:text-sm font-medium text-[#BF3535]">
            <AlertCircle className="h-4 w-4 shrink-0 text-[#BF3535] mt-0.5 sm:mt-0" />
            <span className="leading-relaxed">{productProofData.warningNotice}</span>
          </div>

          {/* Table Container with Horizontal Touch Scroll */}
          <div className="mt-5 sm:mt-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[740px] text-left text-sm">
              <thead>
                <tr className="border-b border-[#D8CEDD] bg-[#F7F3ED] text-xs font-bold text-[#18141B]">
                  <th className="py-3 px-3.5 sm:px-4">Reference</th>
                  <th className="py-3 px-3.5 sm:px-4">Subject/Entity</th>
                  <th className="py-3 px-3.5 sm:px-4">Category</th>
                  <th className="py-3 px-3.5 sm:px-4">Scope</th>
                  <th className="py-3 px-3.5 sm:px-4">Effective Period</th>
                  <th className="py-3 px-3.5 sm:px-4">Review State</th>
                  <th className="py-3 px-3.5 sm:px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E4EC]">
                {filteredItems.map((row) => (
                  <tr
                    key={row.ref}
                    className="hover:bg-[#FAF8FA] transition-colors"
                  >
                    <td className="py-3.5 px-3.5 sm:px-4 font-mono text-xs font-bold text-[#18141B] whitespace-nowrap">
                      {row.ref}
                    </td>
                    <td className="py-3.5 px-3.5 sm:px-4 font-semibold text-[#18141B]">
                      {row.entity}
                    </td>
                    <td className="py-3.5 px-3.5 sm:px-4 text-xs text-[#535055]">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-3.5 sm:px-4 text-xs text-[#535055]">
                      {row.scope}
                    </td>
                    <td className="py-3.5 px-3.5 sm:px-4 text-xs font-mono text-[#535055] whitespace-nowrap">
                      {row.period}
                    </td>
                    <td className="py-3.5 px-3.5 sm:px-4">
                      <StatusBadge status={row.reviewState} />
                    </td>
                    <td className="py-3.5 px-3.5 sm:px-4">
                      <button
                        type="button"
                        className="text-xs font-semibold text-[#D65A2C] hover:underline whitespace-nowrap"
                      >
                        {row.action}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sm:hidden flex items-center justify-end text-[11px] text-[#665F69] mt-2.5 font-medium">
            <span>← Scroll horizontally to view table →</span>
          </div>
        </div>
      </Reveal>

      {/* Detail Record & Context Explanation */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Left: Metadata Record Card */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-5 sm:p-8 shadow-sm">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2 border-b border-[#E8E4EC] pb-4">
                <h4 className="text-base font-bold text-[#18141B]">
                  {productProofData.detailCard.title}
                </h4>
                <span className="font-mono text-xs font-semibold text-[#665F69] bg-white px-2.5 py-1 rounded-md border border-[#D8CEDD] self-start xs:self-auto">
                  ID: {productProofData.detailCard.id}
                </span>
              </div>

              <div className="mt-5 space-y-3 sm:space-y-3.5">
                {productProofData.detailCard.fields.map((field, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 rounded-lg bg-white p-3 border border-[#E8E4EC] text-xs"
                  >
                    <span className="text-[#665F69] font-medium">
                      {field.label}
                    </span>
                    <span className="font-semibold text-[#18141B] font-mono break-all sm:break-normal">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: Explanation Copy */}
        <div className="lg:col-span-6">
          <Reveal delay={0.2}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-[#18141B] font-serif break-words">
                {productProofData.detailText.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#535055]">
                {productProofData.detailText.body}
              </p>

              <div className="mt-1 sm:mt-2 space-y-2.5 sm:space-y-3">
                {productProofData.detailText.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start sm:items-center gap-2.5 sm:gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#26735B] mt-0.5 sm:mt-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#18141B] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
