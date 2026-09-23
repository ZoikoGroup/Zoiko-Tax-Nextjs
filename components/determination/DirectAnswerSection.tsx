import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { directAnswerData } from "./determination-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] py-20 sm:py-24">
      {/* Header */}
      <Reveal>
        <div className="flex flex-col gap-3.5 max-w-5xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
            {directAnswerData.eyebrow}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
            {directAnswerData.title}
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
            {directAnswerData.description}
          </p>
        </div>
      </Reveal>

      {/* Grid Comparison */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
        {/* Tax Determination IS - Seamless on section background */}
        <Reveal delay={0.1}>
          <div className="flex h-full flex-col p-7 sm:p-8">
            <h3 className="text-lg font-bold text-[#18141B]">
              Tax Determination IS
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-[#535055]">
              {directAnswerData.isList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Tax Determination IS NOT - Light warm apricot tint card */}
        <Reveal delay={0.2}>
          <div className="flex h-full flex-col rounded-2xl bg-[#FBF0EC] p-7 sm:p-8">
            <h3 className="text-lg font-bold text-[#D65A2C]">
              Tax Determination IS NOT
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-[#535055]">
              {directAnswerData.isNotList.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
