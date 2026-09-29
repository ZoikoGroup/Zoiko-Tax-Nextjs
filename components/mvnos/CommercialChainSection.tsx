import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { Share2, Radio, Server, Network, Building2 } from "lucide-react";

export default function CommercialChainSection() {
  const contextRoles = [
    { title: "MVNO", icon: Building2 },
    { title: "Host / operator", icon: Building2 },
    { title: "Enabler", icon: Building2 },
    { title: "Reseller", icon: Building2 },
  ];

  const resolutionSteps = [
    {
      num: "01",
      title: "Legal entity",
      description: "Which entity is acting?",
      highlighted: false,
    },
    {
      num: "02",
      title: "Operating / commercial role",
      description: "MVNO, host/operator, enabler or reseller context",
      highlighted: false,
    },
    {
      num: "03",
      title: "Jurisdiction",
      description: "Which governed place inputs apply?",
      highlighted: false,
    },
    {
      num: "04",
      title: "Authority",
      description: "Which authority and obligation domain?",
      highlighted: false,
    },
    {
      num: "05",
      title: "Responsible party",
      description: "Who owns the governed downstream action?",
      highlighted: false,
    },
    {
      num: "06",
      title: "Evidence",
      description: "What facts, source, version and approval prove it?",
      highlighted: true,
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        {/* Section Heading */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Commercial chain &amp; responsibility
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Keep operator dependency, commercial role and fiscal responsibility distinct.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Model MVNO, host/operator, enabler and reseller context as related inputs. Role names alone do not establish legal responsibility; governed facts, jurisdiction, authority and approved responsibility decisions do.
          </p>
        </div>

        {/* Dark Container */}
        <div className="self-stretch p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-7 shadow-xl">
          {/* Left Column: Commercial Context */}
          <div className="w-full lg:w-64 shrink-0 flex flex-col justify-start items-start gap-3">
            <div className="justify-start text-orange-300 text-xs font-normal font-['Roboto_Mono'] tracking-wider">
              COMMERCIAL CONTEXT
            </div>

            {contextRoles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.title}
                  className="self-stretch p-3.5 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex items-center gap-2.5 transition-colors hover:bg-white/10"
                >
                  <Icon className="w-4 h-4 text-orange-300 shrink-0" strokeWidth={1.8} />
                  <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                    {role.title}
                  </span>
                </div>
              );
            })}

            <p className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4 pt-1">
              Role names describe context. They are never used alone as a legal or fiscal conclusion.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px self-stretch min-h-[380px] bg-white/10" />

          {/* Right Column: Governed Responsibility Resolution */}
          <div className="flex-1 w-full flex flex-col justify-start items-start gap-4">
            <div className="self-stretch flex flex-wrap justify-between items-center gap-3">
              <h3 className="justify-start text-white text-xl font-bold font-['Inter']">
                Governed responsibility resolution
              </h3>
              <div className="px-3.5 py-1.5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-start items-start">
                <span className="justify-start text-white text-xs font-semibold font-['Roboto_Mono']">
                  FIELD-LEVEL CONTRACTS: CONCEPTUAL
                </span>
              </div>
            </div>

            {/* 6 Cards Grid */}
            <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {resolutionSteps.map((step) => (
                <div
                  key={step.num}
                  className={`min-h-32 p-4 rounded-xl outline outline-1 outline-offset-[-1px] flex flex-col justify-start items-start gap-2.5 transition-all duration-200 ${
                    step.highlighted
                      ? "bg-fuchsia-900 outline-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.15)]"
                      : "bg-white/5 outline-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="justify-start text-orange-300 text-[10px] font-normal font-['Roboto_Mono']">
                    {step.num}
                  </div>
                  <div className="self-stretch justify-start text-white text-base font-bold font-['Inter']">
                    {step.title}
                  </div>
                  <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>

            <p className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5 pt-1">
              The visual shows a conceptual information contract—not a customer topology, vendor connector, contractual allocation or legal opinion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
