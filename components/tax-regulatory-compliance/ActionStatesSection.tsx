"use client";

import React from "react";
import Image from "next/image";
import {
  Info,
  Clock,
  AlertCircle,
  Ban,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

export default function ActionStatesSection() {
  const states = [
    {
      badgeBg: "bg-slate-600/20",
      icon: Info,
      iconColor: "text-slate-400",
      title: "Information",
      desc: "Context is available; no workflow action is currently assigned.",
    },
    {
      badgeBg: "bg-yellow-700/20",
      icon: Clock,
      iconColor: "text-yellow-500",
      title: "Review required",
      desc: "A human or governed system must assess the item.",
    },
    {
      badgeBg: "bg-orange-600/20",
      icon: AlertCircle,
      iconColor: "text-orange-500",
      title: "Action required",
      desc: "A supported workflow has an explicit next action and owner.",
    },
    {
      badgeBg: "bg-pink-800/20",
      icon: Ban,
      iconColor: "text-pink-400",
      title: "Blocked",
      desc: "Required facts, approval, dependency or authority prevent progress.",
    },
    {
      badgeBg: "bg-stone-500/20",
      icon: HelpCircle,
      iconColor: "text-stone-400",
      title: "Unsupported / unavailable",
      desc: "The requested capability or jurisdiction is not available in current scope.",
    },
    {
      badgeBg: "bg-teal-800/20",
      icon: CheckCircle2,
      iconColor: "text-teal-400",
      title: "Completed workflow event",
      desc: "A defined workflow step completed with retained context; this is not a legal-compliance claim.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image & Overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/tax-regulatory-compliance/Regulatory action states.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-14">
        {/* Left Column */}
        <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-4 shrink-0">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            REGULATORY OBLIGATIONS
          </div>
          <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[48.40px]">
            Action states that say what the team actually knows.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed sm:leading-7">
            Every state uses text and an icon — never color alone. States describe workflow position, support and uncertainty; they do not imply “legally compliant.”
          </p>
        </div>

        {/* Right Column: 6 Action States */}
        <div className="flex-1 w-full flex flex-col justify-start items-start gap-2.5">
          {states.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="self-stretch p-4 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/10 flex items-center gap-3.5 transition-colors hover:bg-white/10"
              >
                <div
                  className={`size-9 ${st.badgeBg} rounded-[10px] flex justify-center items-center shrink-0`}
                >
                  <Icon className={`size-4 ${st.iconColor}`} />
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="justify-start text-white text-base font-bold font-['Inter']">
                    {st.title}
                  </div>
                  <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">
                    {st.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
