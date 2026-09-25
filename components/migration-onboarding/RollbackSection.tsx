"use client";

import React from "react";
import Image from "next/image";

export default function RollbackSection() {
  const cards = [
    {
      title: "INTEGRATION FAILURE",
      desc: "API timeouts or batch transmission errors trigger immediate transaction queues. If unresolved, the system falls back to active legacy lanes.",
    },
    {
      title: "EVIDENCE GAP TRIGGER",
      desc: "Cutover remains blocked when required evidence is missing, restricted, conflicted, or unavailable; the interface shows the blocker without inferring compliance.",
    },
    {
      title: "AUDIT VARIANCE SPIKE",
      desc: "Anomalies exceeding predefined threshold values during Shadow testing alert operational owners and hold authority transfer.",
    },
  ];

  return (
    <section className="w-full relative bg-gradient-to-r from-slate-900/90 via-indigo-950/80 to-indigo-950/70 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/migration-onboarding/Rollback Failure.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center  mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase">
            Rollback Safeguards
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Fail-Safe &amp; Rollback Protocols
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            System anomalies, unexpected discrepancies, or validation failures trigger automatic fallback processes.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 bg-violet-950/90 border border-violet-900/50 rounded-2xl flex flex-col justify-start items-start gap-3 backdrop-blur-sm shadow-md"
            >
              <div className="justify-start text-orange-300 text-base font-bold font-['Inter']">
                {card.title}
              </div>
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
