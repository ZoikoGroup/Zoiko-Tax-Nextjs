"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

interface HandoffItem {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const HANDOFF_ITEMS: HandoffItem[] = [
  {
    title: "Developer handoff",
    description:
      "For API, webhook, batch and integration-specific technical guidance, use Developers/Documentation. Any developer status view should reference the same canonical incident and service-health authority.",
    linkText: "Go to Developers",
    href: "/developer-overview",
  },
  {
    title: "Security handoff",
    description:
      "Found a potential security vulnerability? Use Responsible Disclosure. System Status is for operational availability and approved incident communication.",
    linkText: "Responsible Disclosure",
    href: "/responsible-disclosure",
  },
  {
    title: "Coverage handoff",
    description:
      "Current service health does not establish market or capability availability. Use Coverage for governed availability.",
    linkText: "View Coverage",
    href: "/coverage-overview",
  },
];

export default function SystemStatusTroubleHandoff() {
  return (
    <section className="relative w-full bg-[#1E1B4B] overflow-hidden py-24 min-h-[750px] flex flex-col justify-center">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/documentation/tech-bg.png"
          alt=""
          fill
          className="object-cover opacity-20"
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
          <div className="max-w-[768px]">
            <h2 className="text-[30px] font-bold leading-[36px] text-white font-['Inter',sans-serif]">
              Still having trouble?
            </h2>
            <p className="pt-4 text-[18px] font-normal leading-[29.25px] text-[#E0E7FF] font-['Inter',sans-serif]">
              If your issue is not reflected in the current public status, use Customer Support for account-specific help. The absence of a public incident does not by itself confirm that an individual account, transaction or workflow is unaffected.
            </p>
            <div className="pt-8">
              <Link
                href="/customer-support"
                style={{
                  backgroundColor: "rgba(191, 103, 53, 1)",
                  borderColor: "rgba(191, 103, 53, 1)",
                }}
                className="inline-flex items-center justify-center py-[15px] px-6 hover:opacity-95 active:opacity-90 border text-white font-bold text-[16px] leading-[24px] text-center rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1)] transition-all cursor-pointer font-['Inter',sans-serif]"
              >
                Contact Customer Support
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Handoff Grid */}
        <div className="mt-12 pt-12 border-t border-[rgba(99,102,241,0.3)] grid grid-cols-1 md:grid-cols-3 gap-6">
          {HANDOFF_ITEMS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="flex flex-col justify-between h-full min-h-[230px] p-6 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl transition-transform hover:-translate-y-1">
                <div>
                  <h3 className="text-[18px] font-bold leading-[28px] text-white font-['Inter',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="pt-3 text-[14px] font-normal leading-[20px] text-[#C7D2FE] font-['Inter',sans-serif]">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6">
                  <Link
                    href={item.href}
                    className="group/link text-[14px] font-semibold leading-[20px] text-white hover:text-[#C7D2FE] inline-flex items-center gap-1.5 transition-colors font-['Inter',sans-serif]"
                  >
                    <span>{item.linkText}</span>
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
