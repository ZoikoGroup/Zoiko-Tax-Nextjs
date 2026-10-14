"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

interface QuickPathItem {
  title: string;
  description: string;
  linkText: string;
  href: string;
}

const QUICK_PATHS: QuickPathItem[] = [
  {
    title: "Get started",
    description: "Understand core concepts and first steps.",
    linkText: "View guides",
    href: "/integration-guides",
  },
  {
    title: "Understand the platform",
    description: "Learn stable concepts, authority, evidence and workflow models.",
    linkText: "Explore platform",
    href: "/platform-overview",
  },
  {
    title: "Integrate",
    description: "Find implementation guidance.",
    linkText: "View integration docs",
    href: "/developer-overview",
  },
  {
    title: "Troubleshoot",
    description: "Resolve known issues safely.",
    linkText: "Find solutions",
    href: "/customer-support",
  },
];

export default function DocumentationQuickPaths() {
  return (
    <section
      className="w-full py-[90px] relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/documentation/quick-paths-bg.png')",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            Quick paths
          </h2>
        </Reveal>

        <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_PATHS.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <Link
                href={item.href}
                className="group flex flex-col justify-between h-full min-h-[214px] bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
              >
                <div>
                  <h3 className="text-[18px] font-bold leading-[28px] text-[#111827] font-['Inter',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="pt-2 pb-4 text-[14px] font-normal leading-[20px] text-[#4B5563] font-['Inter',sans-serif]">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4">
                  <span className="text-[14px] font-semibold leading-[20px] text-[#D97637] group-hover:text-[#bf6735] transition-colors inline-flex items-center gap-1 font-['Inter',sans-serif]">
                    <span>{item.linkText}</span>
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
