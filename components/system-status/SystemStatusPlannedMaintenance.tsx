"use client";

import React from "react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

interface HistoryItem {
  title: string;
  date: string;
  resolution: string;
}

const INCIDENT_HISTORY: HistoryItem[] = [
  {
    title: "Dashboard loading delays",
    date: "Oct 02, 2026",
    resolution: "Resolved — Root cause mitigated successfully.",
  },
  {
    title: "European endpoint packet loss",
    date: "Sep 28, 2026",
    resolution: "Resolved — Upstream transit provider issue.",
  },
];

export default function SystemStatusPlannedMaintenance() {
  return (
    <section className="w-full bg-[#FAF3FF] border-b border-[#E5E7EB] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Planned Maintenance Column */}
          <Reveal>
            <div className="flex flex-col h-full">
              <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
                Planned maintenance
              </h2>

              <div className="pt-8 flex-1">
                <div className="p-6 bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl">
                  <h3 className="text-[18px] font-bold leading-[28px] text-[#1E3A8A] font-['Inter',sans-serif]">
                    Database Cluster Upgrade
                  </h3>
                  <p className="pt-2 text-[14px] font-medium leading-[20px] text-[#1E40AF] font-['Inter',sans-serif]">
                    Window: Oct 20, 2026, 02:00 - 04:00 IST
                  </p>
                  <p className="pt-4 text-[16px] font-normal leading-[24px] text-[#1E3A8A] font-['Inter',sans-serif]">
                    Routine maintenance on reporting clusters. We expect up to 5 minutes of unavailability for historical exports. No impact expected for core ingestion.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Incident History Column */}
          <Reveal delay={0.08}>
            <div className="flex flex-col h-full">
              <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
                Incident history
              </h2>

              <div className="pt-8 flex flex-col gap-4">
                {INCIDENT_HISTORY.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-[16px] font-bold leading-[24px] text-[#111827] font-['Inter',sans-serif]">
                        {item.title}
                      </h3>
                      <span className="text-[12px] font-semibold leading-[16px] text-[#6B7280] font-['Inter',sans-serif]">
                        {item.date}
                      </span>
                    </div>
                    <p className="pt-2 text-[14px] font-normal leading-[20px] text-[#4B5563] font-['Inter',sans-serif]">
                      {item.resolution}
                    </p>
                  </div>
                ))}

                <div className="pt-2">
                  <Link
                    href="#history"
                    className="group text-[14px] font-semibold leading-[20px] text-[#D97637] hover:text-[#bf6735] inline-flex items-center gap-1 font-['Inter',sans-serif]"
                  >
                    <span>View full history</span>
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
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
