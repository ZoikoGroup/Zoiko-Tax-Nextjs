"use client";

import React from "react";
import Image from "next/image";

const rows = [
  { label: "Environment", desc: "Non-production only. No specific URL, region or topology is supplied." },
  { label: "Access", desc: "Separately governed. Public guidance does not create instant entitlement." },
  { label: "Authentication", desc: "Use authoritative docs. No authentication method or protocol is implied." },
  { label: "Credentials", desc: "Placeholders only. No issuance, key or certificate claim." },
  { label: "Provisioning", desc: "No provisioning time or access delivery promise is supplied." },
  { label: "Quotas & limits", desc: "Omitted unless verified in the authoritative contract." },
  { label: "Availability", desc: "No SLA, uptime promise or production parity is asserted." },
];

export default function EnvironmentSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Diamond Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[url('/status-and-releases/pattern-bg.png')] bg-repeat bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            ENVIRONMENT, ACCESS &amp; AUTHENTICATION
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Know where public guidance stops.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            The exact environment and access contract owns these details. This page deliberately does not fill in what has not been supplied.
          </p>
        </div>

        {/* Table Box */}
        <div className="w-full px-6 sm:px-8 py-2 bg-[#FAF3FF] rounded-3xl border border-[#D8CEDD] flex flex-col items-start shadow-sm">
          {rows.map((row) => (
            <div
              key={row.label}
              className="w-full py-4 border-b border-[#D8CEDD] last:border-b-0 flex flex-col sm:flex-row items-start gap-2 sm:gap-8"
            >
              <span className="w-48 sm:w-56 lg:w-64 shrink-0 font-bold text-sm sm:text-base text-[#18141B] font-['Inter',sans-serif]">
                {row.label}
              </span>
              <p className="flex-1 text-sm sm:text-base text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                {row.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Lock Disclaimer Note */}
        <div className="w-full flex items-start sm:items-center gap-3.5">
          <div className="w-5 h-5 shrink-0 relative mt-0.5 sm:mt-0">
            <Image
              src="/sandbox/lock-keyhole.png"
              alt=""
              width={20}
              height={20}
              className="w-full h-full object-contain"
            />
          </div>
          <p className="flex-1 text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Restricted and unavailable messages preserve public docs and never reveal private account, environment or incident state. Retention, support and promotion mechanics remain governed; none are promised here.
          </p>
        </div>
      </div>
    </section>
  );
}
