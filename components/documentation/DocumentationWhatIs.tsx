"use client";

import React from "react";
import Reveal from "@/components/shared/Reveal";

export default function DocumentationWhatIs() {
  return (
    <section className="w-full bg-[#FAF3FF] border-b border-[#E5E7EB] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <div className="w-full bg-white border border-[#F3E8FF] rounded-2xl p-8 shadow-sm">
            {/* Heading 2 */}
            <h2 className="text-[24px] font-bold leading-[32px] text-[#1E1B4B] font-['Inter',sans-serif]">
              What is ZoikoTax Documentation?
            </h2>

            {/* Paragraph 1 */}
            <p className="pt-4 text-[16px] font-normal leading-[26px] text-[#374151] max-w-[896px] font-['Inter',sans-serif]">
              It is the public knowledge and implementation-routing layer for approved ZoikoTax concepts, workflows and guidance. It helps readers find current explanatory content and then reach the authoritative specialist source when the question concerns API contracts, live Coverage, service status, trust evidence or customer-specific support.
            </p>

            {/* Paragraph 2 */}
            <p className="pt-4 text-[14px] font-medium leading-[20px] text-[#4B5563] max-w-[1150px] font-['Inter',sans-serif]">
              Documentation explains approved product behavior and concepts; live availability, operational health and contractual technical details remain governed by their authoritative sources.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
