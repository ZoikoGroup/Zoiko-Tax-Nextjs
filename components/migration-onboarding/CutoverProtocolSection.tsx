"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CutoverProtocolSection() {
  const mandates = [
    {
      num: "1.",
      title: "Frozen State Lock:",
      desc: "Freeze baseline rules and source transactions prior to transition window.",
    },
    {
      num: "2.",
      title: "Event Sequence Sync:",
      desc: "Define precise first and last authoritative transaction timestamps.",
    },
    {
      num: "3.",
      title: "Duplicate Prevention Checks:",
      desc: "Ensure zero transaction processing overlap exists between systems.",
    },
    {
      num: "4.",
      title: "Post-Cutover Audit Run:",
      desc: "Deliver immediate verification reports to audit logging lines.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Authority Handover
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Operational Cutover Transition Contract
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Transition of fiscal authority is executed as a binding protocol. There are no unilateral &apos;Go Live&apos; buttons.
          </p>
        </div>

        <div className="self-stretch flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-8 lg:gap-12">
          {/* Left Column Mandates */}
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-zinc-900 text-xl font-bold font-['Inter']">
              THE CUTOVER PROTOCOL MANDATES:
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {mandates.map((item) => (
                <div key={item.num} className="justify-start text-base font-['Inter'] leading-relaxed">
                  <span className="text-stone-500 font-normal mr-1">{item.num} </span>
                  <span className="text-zinc-900 font-semibold">{item.title}</span>
                  <span className="text-stone-500 font-normal"> {item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sign-off Card */}
          <div className="w-full lg:w-96 p-6 sm:p-8 bg-neutral-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm shrink-0">
            <div className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
              MIGRATION SIGN-OFF VERDICT
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">
                TRANSITION CONTROLLER HASH
              </div>
              <div className="justify-start text-zinc-900 text-xs font-normal font-['Roboto_Mono'] break-all">
                0x9B4F045CF789C85D64608602...
              </div>
            </div>

            <button
              type="button"
              className="w-full h-12 px-6 py-3 bg-indigo-950 hover:bg-indigo-900 transition-colors rounded-[999px] outline outline-1 outline-offset-[-1px] outline-violet-950 flex justify-center items-center cursor-pointer"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Generate Cutover Contract Pack
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
