"use client";

import React from "react";
import Link from "next/link";
import { Reveal } from "./shared";

const topicsColumn1 = [
  { id: "overview", num: "01", label: "Overview", href: "#overview" },
  { id: "platform-subscription", num: "02", label: "Platform Subscription", href: "#price-drivers" },
  { id: "usage-volume", num: "03", label: "Usage & Volume", href: "#price-drivers" },
  { id: "tax-determination", num: "04", label: "Tax Determination", href: "#price-drivers" },
  { id: "filing-compliance", num: "05", label: "Filing & Compliance", href: "#price-drivers" },
  { id: "regulatory-data", num: "06", label: "Regulatory Data", href: "#price-drivers" },
  { id: "developer-api", num: "07", label: "Developer & API", href: "#price-drivers" },
];

const topicsColumn2 = [
  { id: "custom-enterprise", num: "08", label: "Custom & Enterprise", href: "#price-drivers" },
  { id: "included-services", num: "09", label: "Included Services", href: "#quote-components" },
  { id: "add-ons", num: "10", label: "Add-ons", href: "#quote-components" },
  { id: "implementation", num: "11", label: "Implementation", href: "#quote-components" },
  { id: "support-plans", num: "12", label: "Support Plans", href: "#quote-components" },
  { id: "discounts-commitments", num: "13", label: "Discounts & Commitments", href: "#commercial-terms" },
  { id: "regional-currency", num: "14", label: "Regional & Currency", href: "#commercial-terms" },
];

const topicsColumn3 = [
  { id: "estimator", num: "15", label: "Estimator", href: "#estimator" },
  { id: "faqs", num: "16", label: "FAQs", href: "#faqs" },
  { id: "terms-billing", num: "17", label: "Terms & Billing", href: "#commercial-terms" },
  { id: "nonprofit-public-sector", num: "18", label: "Nonprofit & Public Sector", href: "#special-programs" },
  { id: "telecom-ecosystem", num: "19", label: "Telecom Ecosystem", href: "#special-programs" },
  { id: "legacy-migration", num: "20", label: "Legacy & Migration", href: "#special-programs" },
  { id: "pricing-for-startups", num: "21", label: "Pricing for Startups", href: "#special-programs" },
];

export default function PricingPlanMenuSection() {
  return (
    <section
      id="overview"
      className="relative w-full bg-[#FFFAFA] bg-cover bg-center py-7 sm:py-8"
      style={{ backgroundImage: `url('/pricing-plan/Menu-Background-Image.png')` }}
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px]">
        <Reveal>
          <div className="flex flex-col gap-5">
            {/* Menu Header */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-xl font-bold tracking-tight text-[#301153]">
                  Pricing Plan
                </h2>
                <span className="text-sm font-normal text-[#665F69]">
                  Transparent & predictable
                </span>
              </div>
              <span className="text-[13px] font-normal text-[#665F69]">
                Topics on this page · no separate pricing destinations
              </span>
            </div>

            {/* Menu Topics Grid (3 columns) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {/* Column 1 */}
              <div className="flex flex-col">
                {topicsColumn1.map((item) => (
                  <Link
                    key={item.num}
                    href={item.href}
                    className="group flex h-8 items-center gap-3 transition-colors hover:translate-x-0.5"
                  >
                    <span className="font-mono text-[11px] font-normal text-[#665F69] group-hover:text-[#BF6735]">
                      {item.num}
                    </span>
                    <span className="text-sm font-normal text-[#18141B] group-hover:text-[#BF6735]">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col">
                {topicsColumn2.map((item) => (
                  <Link
                    key={item.num}
                    href={item.href}
                    className="group flex h-8 items-center gap-3 transition-colors hover:translate-x-0.5"
                  >
                    <span className="font-mono text-[11px] font-normal text-[#665F69] group-hover:text-[#BF6735]">
                      {item.num}
                    </span>
                    <span className="text-sm font-normal text-[#18141B] group-hover:text-[#BF6735]">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col">
                {topicsColumn3.map((item) => (
                  <Link
                    key={item.num}
                    href={item.href}
                    className="group flex h-8 items-center gap-3 transition-colors hover:translate-x-0.5"
                  >
                    <span className="font-mono text-[11px] font-normal text-[#665F69] group-hover:text-[#BF6735]">
                      {item.num}
                    </span>
                    <span className="text-sm font-normal text-[#18141B] group-hover:text-[#BF6735]">
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Reading guide note */}
            <p className="text-sm leading-[1.55] text-[#665F69]">
              Reading guide only: separate destinations, the Pricing Plan root and Overview route are not established.
            </p>

            {/* Public pricing boundary callout */}
            <div className="rounded-[10px] bg-[#F0E7F6] px-4 py-3">
              <p className="text-sm font-medium leading-[1.5] text-[#301153]">
                Exact public pricing is not established for this scope. Review the pricing drivers and request an approved quote for your requirements.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
