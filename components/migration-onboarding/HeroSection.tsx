"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const stages = [
    {
      num: "01",
      title: "Staged Profiling",
      desc: "Analyze baseline sources, entities & jurisdictions",
      circleBg: "bg-indigo-950",
      titleColor: "text-zinc-900",
    },
    {
      num: "02",
      title: "Semantic Mapping",
      desc: "Align products, exemptions & rules systematically",
      circleBg: "bg-indigo-950",
      titleColor: "text-zinc-900",
    },
    {
      num: "03",
      title: "Reconciliation",
      desc: "Verify transaction outputs against legacy engines",
      circleBg: "bg-indigo-950",
      titleColor: "text-zinc-900",
    },
    {
      num: "04",
      title: "Shadow Run",
      desc: "Execute live parallel testing without monetary impact",
      circleBg: "bg-orange-600",
      titleColor: "text-orange-600",
    },
    {
      num: "05",
      title: "Gated Cut Over",
      desc: "Sign-off contractually & transition authority safely",
      circleBg: "bg-amber-700",
      titleColor: "text-amber-700",
    },
  ];

  return (
    <section className="w-full relative bg-linear-173 from-rose-100 to-purple-50 flex flex-col justify-start items-start overflow-hidden">
      {/* Edge-to-edge background image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/migration-onboarding/Hero Background Image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover  "
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-20 flex flex-col justify-start items-start gap-12">
        <div className="w-full max-w-[800px] flex flex-col justify-start items-start gap-6">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            MIGRATION &amp; ONBOARDING
          </div>

          <h1 className="self-stretch justify-start text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold font-['Inter'] leading-tight lg:leading-[63px]">
            Migrate with evidence before authority changes.
          </h1>

          <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            ZoikoTax provides a governed operational model for evaluating transition readiness across telecom fiscal workflows. Profile current systems, map controlled semantics, reconcile source positions, run non-impact Shadow comparisons, and review independent gates before any authority transition.
          </p>

          <div className="flex flex-wrap justify-start items-center gap-3">
            <Link
              href="#book-a-demo"
              className="h-12 px-6 py-3 bg-amber-700 hover:bg-amber-800 transition-colors rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Book a Demo
              </span>
            </Link>

            <Link
              href="#shadow-assurance"
              className="h-12 px-6 py-3 bg-white hover:bg-neutral-50 transition-colors rounded-[999px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore Shadow Assurance
              </span>
            </Link>

            <Link
              href="/coverage"
              className="h-12 px-6 py-3 bg-white hover:bg-neutral-50 transition-colors rounded-[999px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                View Current Coverage &rarr;
              </span>
            </Link>
          </div>
        </div>

        {/* Transition Architecture Card */}
        <div className="w-full p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="justify-start text-orange-600 text-xs sm:text-sm font-bold font-['Inter'] uppercase tracking-wider">
            PRE-CUTOVER TRANSITION ARCHITECTURE &amp; STAGE CONTROLS
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6 lg:gap-0">
            {stages.map((stage, idx) => (
              <React.Fragment key={stage.num}>
                <div className={`flex-1 flex flex-col justify-start items-start gap-3 ${idx > 0 ? "lg:pl-4" : ""}`}>
                  <div className="inline-flex justify-start items-center gap-2">
                    <div className={`size-8 ${stage.circleBg} rounded-[999px] flex justify-center items-center shrink-0`}>
                      <span className="text-white text-xs font-bold font-['Roboto_Mono']">
                        {stage.num}
                      </span>
                    </div>
                    <div className={`text-base font-bold font-['Inter'] ${stage.titleColor}`}>
                      {stage.title}
                    </div>
                  </div>
                  <p className="self-stretch text-stone-500 text-xs font-normal font-['Inter'] leading-normal">
                    {stage.desc}
                  </p>
                </div>
                {idx < stages.length - 1 && (
                  <div className="hidden lg:block w-10 h-0 border-2 border-indigo-950 shrink-0 self-center mx-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
