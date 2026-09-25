"use client";

import React from "react";
import { TAX_BILLING_INTERLOCK_DATA } from "./reconciliation-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function TaxBillingInterlockSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA] border-b border-[#D8CEDD]/60"
      style={{
        backgroundImage: "url('/reconciliation/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={TAX_BILLING_INTERLOCK_DATA.eyebrow}
          title={TAX_BILLING_INTERLOCK_DATA.title}
          description={TAX_BILLING_INTERLOCK_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08} className="mt-10 sm:mt-12">
        <div className="rounded-[20px] border border-[#D8CEDD] bg-[#FAF3FF] p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
            {TAX_BILLING_INTERLOCK_DATA.items.map((item, idx) => (
              <React.Fragment key={item.title}>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-[17px] font-bold text-[#18141B] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-[13px] font-normal text-[#665F69] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx < TAX_BILLING_INTERLOCK_DATA.items.length - 1 && (
                  <>
                    {/* Desktop Right Arrow */}
                    <div className="hidden md:flex items-center justify-center shrink-0 px-2 lg:px-4 text-[#D65A2C]">
                      <svg
                        width="32"
                        height="20"
                        viewBox="0 0 32 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-4 text-[#D65A2C]"
                      >
                        <path
                          d="M3 10H29M29 10L20 3M29 10L20 17"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Mobile Down Arrow */}
                    <div className="flex md:hidden justify-center w-full py-1 text-[#D65A2C]">
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-5"
                      >
                        <path
                          d="M8 1V17M8 17L1 10M8 17L15 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
