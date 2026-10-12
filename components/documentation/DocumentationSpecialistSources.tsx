"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

interface SpecialistSource {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const SOURCES: SpecialistSource[] = [
  {
    title: "Developers",
    description:
      "For authoritative API, SDK, webhook, batch and integration contracts, use Developers.",
    linkText: "Go to Developers",
    href: "/developer-overview",
  },
  {
    title: "Coverage",
    description:
      "For current market and capability availability, use Coverage.",
    linkText: "View Coverage",
    href: "/coverage-overview",
  },
  {
    title: "Trust",
    description:
      "For current security, privacy, residency and evidence information, use Trust.",
    linkText: "Review Trust center",
    href: "/trust-center",
  },
  {
    title: "System Status",
    description:
      "For current service health and incidents, use System Status.",
    linkText: "Check System Status",
    href: "/status-and-releases",
  },
  {
    title: "Customer Support",
    description:
      "Still need help? Use Customer Support for the appropriate next step.",
    linkText: "Contact Support",
    href: "/customer-support",
  },
];

export default function DocumentationSpecialistSources() {
  return (
    <section className="relative w-full bg-[#1E1B4B] overflow-hidden py-24 min-h-[692px] flex flex-col justify-center">
      {/* Background image layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/documentation/tech-bg.png"
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(30, 27, 75, 1) 0%, rgba(30, 27, 75, 0.95) 50%, rgba(46, 16, 101, 0.9) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-white font-['Inter',sans-serif]">
            Specialist Sources
          </h2>
          <p className="pt-4 text-[18px] font-normal leading-[28px] text-[#C7D2FE] max-w-[672px] font-['Inter',sans-serif]">
            Start with the documentation. Follow the source that owns the truth.
          </p>
        </Reveal>

        {/* Grid of sources */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOURCES.map((source, index) => (
            <Reveal key={source.title} delay={index * 0.06}>
              <div className="flex flex-col justify-between h-full min-h-[174px] p-6 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl transition-transform hover:-translate-y-1">
                <div>
                  <h3 className="text-[18px] font-bold leading-[28px] text-white font-['Inter',sans-serif]">
                    {source.title}
                  </h3>
                  <p className="pt-2 text-[14px] font-normal leading-[20px] text-[#C7D2FE] max-w-[340px] font-['Inter',sans-serif]">
                    {source.description}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href={source.href}
                    className="group/link text-[14px] font-semibold leading-[20px] text-white hover:text-[#C7D2FE] inline-flex items-center gap-1.5 transition-colors font-['Inter',sans-serif]"
                  >
                    <span>{source.linkText}</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3.33334 8H12.6667M12.6667 8L8.66668 4M12.6667 8L8.66668 12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
