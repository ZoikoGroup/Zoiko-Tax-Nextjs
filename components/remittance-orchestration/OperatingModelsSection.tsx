"use client";

import React from "react";
import Image from "next/image";

export default function OperatingModelsSection() {
  const models = [
    {
      num: "01",
      title: "Native Full-Stack",
      desc: "Deploy natively where supported and activate governed fiscal capabilities end-to-end.",
    },
    {
      num: "02",
      title: "Federated",
      desc: "Coordinate obligations while incumbent engines continue monetary determination.",
    },
    {
      num: "03",
      title: "Shadow Assurance",
      desc: "Compare outcomes before governed cutover without impacting production paths.",
    },
  ];

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 relative bg-indigo-950 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/remittance-orchestration/Operating Models Background Image.png"
          alt=""
          fill
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-300 text-sm font-bold font-['Sora']">
            OPERATING MODELS
          </div>
          <h2 className="self-stretch justify-start text-neutral-50 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
            Deploy where supported, coexist where needed.
          </h2>
          <p className="self-stretch justify-start text-zinc-300 text-lg sm:text-xl font-medium  leading-8">
            Remittance Orchestration supports multiple operating models so you can modernize fiscal compliance without forcing a single deployment path.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m) => (
            <div
              key={m.num}
              className="p-6 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-3"
            >
              <div className="justify-start text-orange-300 text-xs font-bold">
                {m.num}
              </div>
              <div className="self-stretch justify-start text-neutral-50 text-xl font-semibold font-['Sora'] leading-6">
                {m.title}
              </div>
              <div className="self-stretch justify-start text-zinc-300 text-xs font-normal leading-relaxed">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
