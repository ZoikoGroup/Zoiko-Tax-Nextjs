"use client";

import React from "react";
import Image from "next/image";

export default function CoverageSection() {
  const cards = [
    {
      title: "Pack Available",
      items: [
        "Capability is supported and activated in the market pack",
        "Rules, content, and obligations are governed and versioned",
        "Evidence and replay are preserved for every instruction",
      ],
    },
    {
      title: "Discovery Required",
      items: [
        "Capability is not yet activated for the selected market",
        "Configuration, data-residency, and integration readiness must be assessed",
        "Availability is scoped to the specific market pack and operating mode",
      ],
    },
    {
      title: "Supported Configuration",
      items: [
        "Capability is available with specific configuration or operating-mode constraints",
        "Rules and content are governed, but deployment choices are limited",
        "Evidence and replay are preserved within the supported scope",
      ],
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Coverage Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            COVERAGE &amp; AVAILABILITY TRUTH
          </div>
          <h2 className="self-stretch justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            Capability is activated through governed packs.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            Coverage is not universal. Each market pack is onboarded individually with jurisdiction-specific configuration, compliance validation, and readiness states.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-7 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-4"
            >
              <h3 className="justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
                {card.title}
              </h3>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className="self-stretch justify-start text-zinc-300 text-sm font-normal"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
