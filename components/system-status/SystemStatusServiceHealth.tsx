"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

interface ServiceItem {
  name: string;
  status: "Available" | "Degraded" | "Unknown";
  hasRelatedIncident?: boolean;
}

interface ServiceGroup {
  category: string;
  services: ServiceItem[];
}

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    category: "Core Platform",
    services: [
      { name: "Dashboard & Admin Console", status: "Available" },
      { name: "Authentication (SSO & Identity)", status: "Available" },
    ],
  },
  {
    category: "Integration & Delivery",
    services: [
      {
        name: "API Processing (North America)",
        status: "Degraded",
        hasRelatedIncident: true,
      },
      { name: "Webhooks & Event Delivery", status: "Available" },
    ],
  },
];

export default function SystemStatusServiceHealth() {
  return (
    <section
      id="service-health"
      className="w-full py-[90px] border-b border-[#E5E7EB] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/documentation/quick-paths-bg.png')",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            Service health
          </h2>
          <p className="pt-8 text-[16px] font-normal leading-[24px] text-[#4B5563] max-w-[768px] font-['Inter',sans-serif]">
            Registry-driven component states reflecting current public operational health. Missing or unverified data is explicitly marked as unknown.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="pt-8 w-full max-w-[1216px]">
            <div className="w-full bg-white border border-[#E5E7EB] rounded-2xl shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
              {SERVICE_GROUPS.map((group, groupIndex) => (
                <div key={group.category}>
                  {/* Category Header */}
                  <div
                    className={`py-4 px-6 bg-[#F9FAFB] border-b border-[#E5E7EB] ${
                      groupIndex > 0 ? "border-t" : ""
                    }`}
                  >
                    <h3 className="text-[16px] font-bold leading-[24px] text-[#111827] font-['Inter',sans-serif]">
                      {group.category}
                    </h3>
                  </div>

                  {/* Service Items */}
                  <div>
                    {group.services.map((service, itemIndex) => {
                      const isDegraded = service.status === "Degraded";
                      return (
                        <div
                          key={service.name}
                          className={`py-4 px-6 flex flex-wrap items-center justify-between gap-4 ${
                            itemIndex > 0 ? "border-t border-[#F3F4F6]" : ""
                          } ${isDegraded ? "bg-[rgba(255,251,235,0.3)]" : ""}`}
                        >
                          <div>
                            <span className="text-[16px] font-medium leading-[24px] text-[#1F2937] font-['Inter',sans-serif]">
                              {service.name}
                            </span>
                            {service.hasRelatedIncident && (
                              <div className="pt-1">
                                <Link
                                  href="#active-incidents"
                                  className="text-[12px] font-semibold leading-[16px] text-[#B45309] hover:underline inline-block font-['Inter',sans-serif]"
                                >
                                  View related incident
                                </Link>
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            {isDegraded ? (
                              <>
                                <Image
                                  src="/images/system-status/status-degraded.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="w-5 h-5"
                                />
                                <span className="text-[14px] font-bold leading-[20px] text-[#B45309] font-['Inter',sans-serif]">
                                  Degraded
                                </span>
                              </>
                            ) : (
                              <>
                                <Image
                                  src="/images/system-status/status-check.svg"
                                  alt=""
                                  width={20}
                                  height={20}
                                  className="w-5 h-5"
                                />
                                <span className="text-[14px] font-bold leading-[20px] text-[#15803D] font-['Inter',sans-serif]">
                                  Available
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
