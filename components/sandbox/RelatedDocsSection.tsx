"use client";

import React from "react";
import Image from "next/image";

const docs = [
  {
    icon: "/sandbox/compass.png",
    title: "Developer Overview",
    desc: "Start with the governed integration landscape.",
    link: "/developers/ ↗",
    href: "/developers/",
  },
  {
    icon: "/sandbox/book-open (2).png",
    title: "API Reference",
    desc: "Exact syntax, versions and error semantics.",
    link: "/developers/api/ ↗",
    href: "/developers/api/",
  },
  {
    icon: "/sandbox/blocks.png",
    title: "SDKs",
    desc: "Documented packages and compatibility.",
    link: "/developers/sdks/ ↗",
    href: "/developers/sdks/",
  },
  {
    icon: "/sandbox/workflow.png",
    title: "Webhooks & Events",
    desc: "Authoritative delivery and event semantics.",
    link: "/developers/webhooks-events/ ↗",
    href: "/developers/webhooks-events/",
  },
  {
    icon: "/sandbox/layers (1).png",
    title: "Bulk & Batch",
    desc: "Contract-owned processing behavior.",
    link: "/developers/bulk-batch/ ↗",
    href: "/developers/bulk-batch/",
  },
  {
    icon: "/sandbox/route (1).png",
    title: "Integration Guides",
    desc: "Implementation patterns and prerequisites.",
    link: "/developers/integration-guides/ ↗",
    href: "/developers/integration-guides/",
  },
  {
    icon: "/sandbox/history.png",
    title: "API Changelog",
    desc: "Source-owned changes and version context.",
    link: "/developers/changelog/ ↗",
    href: "/developers/changelog/",
  },
  {
    icon: "/sandbox/globe.png",
    title: "Coverage",
    desc: "Verify production capability separately.",
    link: "/coverage/ ↗",
    href: "/coverage/",
  },
  {
    icon: "/sandbox/shield-check (1).png",
    title: "Trust",
    desc: "Security and governance context.",
    link: "/trust/ ↗",
    href: "/trust/",
  },
];

export default function RelatedDocsSection() {
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
            RELATED DOCS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            The exact contract belongs in the docs.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Use distinct authoritative destinations for syntax, versions, compatibility, errors and event semantics. Sandbox guidance does not replace them.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <div
              key={doc.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-start gap-3.5">
                <div className="w-6 h-6 relative">
                  <Image
                    src={doc.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {doc.title}
                </h3>
                <p className="text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                  {doc.desc}
                </p>
              </div>

              <a
                href={doc.href}
                className="text-sm font-semibold text-[#D65A2C] font-mono hover:underline pt-2"
              >
                {doc.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
