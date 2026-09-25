"use client";

import React from "react";
import Image from "next/image";

export default function TrustSection() {
  const cards = [
    {
      title: "Tenant Data Isolation",
      desc: "Tenant and legal-entity boundaries are designed to isolate scoped data and access according to governed controls.",
    },
    {
      title: "Local Data Residency",
      desc: "Data processing and residency requirements are evaluated against approved deployment and contractual scope; no universal regional promise is implied.",
    },
    {
      title: "Protected Credentials",
      desc: "Credentials and service access follow approved secret-management, authorization, and least-privilege controls; exact implementation remains security-governed.",
    },
  ];

  return (
    <section className="w-full relative bg-indigo-950 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/migration-onboarding/Trust Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase">
            Trust Architecture
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Secure-by-Design Compliance Architecture
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Security, privacy, retention, and isolation controls are described only within approved implementation and policy scope.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 bg-violet-950/90 border border-violet-900/50 rounded-2xl flex flex-col justify-start items-start gap-3 backdrop-blur-sm shadow-md"
            >
              <h3 className="justify-start text-white text-lg font-bold font-['Inter']">
                {card.title}
              </h3>
              <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
