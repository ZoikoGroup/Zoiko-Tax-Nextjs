"use client";

import React from "react";
import Image from "next/image";

export default function LifecycleSection() {
  const stages = [
    { num: "01", title: "Inherit", desc: "Liability state locked" },
    { num: "02", title: "Prepare", desc: "Draft instruction built" },
    { num: "03", title: "Validate", desc: "Readiness criteria met" },
    { num: "04", title: "Review", desc: "Dual signatures validated" },
    { num: "05", title: "Approve", desc: "Irreversible state lock" },
    { num: "06", title: "Hand off", desc: "Structured package out" },
    { num: "07", title: "Observe", desc: "Handoff acknowledgement" },
    { num: "08", title: "Resolve", desc: "Handle manual exceptions" },
    { num: "09", title: "Reconcile", desc: "Filing match verify" },
    { num: "10", title: "Prove", desc: "Durable replay signed" },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Lifecycle Background Image.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            THE REMITTANCE LIFECYCLE
          </div>
          <h2 className="justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            Ten Stages of Controlled Handoff
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            Instead of a single &quot;Pay Now&quot; trigger, ZoikoTax implements a rigorous state machine from determination output up to verified bank clearance.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="p-4 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2"
            >
              <div className="justify-start text-orange-300 text-xs font-bold">
                {stage.num}
              </div>
              <div className="justify-start text-neutral-50 text-base font-semibold">
                {stage.title}
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-xs font-normal">
                {stage.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
