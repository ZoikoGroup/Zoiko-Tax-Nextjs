"use client";

import React from "react";
import { SectionContainer } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-col items-start gap-3.5">
          <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            Direct answer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:leading-10 font-bold text-[#18141B] font-['Inter',sans-serif]">
            What is Bulk &amp; Batch?
          </h2>
        </div>
        <p className="text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">
          Bulk &amp; Batch is the public ZoikoTax documentation surface for high-volume asynchronous
          ingestion and export patterns. It explains the governed job lifecycle, validation, partial
          results, result retrieval, idempotency and failure-handling concepts without inventing
          production endpoints, limits, schemas, queue behavior or SLAs.
        </p>
      </div>
    </SectionContainer>
  );
}
