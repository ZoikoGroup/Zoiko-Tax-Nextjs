import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ComplexitySection() {
  const topCards = [
    {
      number: "01",
      title: "Operating-model variation",
      description:
        "Full, light and hybrid labels describe patterns; they do not, by themselves, decide tax, regulatory, filing or legal responsibility.",
    },
    {
      number: "02",
      title: "Service classification",
      description:
        "Voice, messaging, data, access, digital and bundled services can require different governed treatment.",
    },
    {
      number: "03",
      title: "Host / operator dependency",
      description:
        "Host relationships shape which network, usage and settlement facts are available—not the legal conclusion.",
    },
  ];

  const bottomCards = [
    {
      number: "04",
      title: "Downstream obligations",
      description:
        "Duties flow from governed jurisdiction, authority and responsibility outcomes, not model shorthand.",
    },
    {
      number: "05",
      title: "Auditability",
      description:
        "Historical outcomes need commercial-chain context, sources, versions, approvals and end-to-end lineage.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            MVNO fiscal complexity
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            MVNO fiscal responsibility is more<br/> than a host-network assumption.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-lg font-normal font-['Inter'] leading-7 sm:leading-8">
            The operating model is context. A governed outcome still depends on what was sold, which facts are available, the commercial chain, legal entities, jurisdiction, authority and assigned responsibility.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          {/* Top Row: 3 purple-100 cards */}
          <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4">
            {topCards.map((card) => (
              <div
                key={card.number}
                className="flex-1 min-h-44 p-6 bg-purple-100 rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-3.5 transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                  {card.number}
                </div>
                <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                  {card.title}
                </h3>
                <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 white cards */}
          <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
            {bottomCards.map((card) => (
              <div
                key={card.number}
                className="flex-1 min-h-44 p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-3.5 transition-transform hover:-translate-y-0.5 duration-200"
              >
                <div className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                  {card.number}
                </div>
                <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
                  {card.title}
                </h3>
                <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
