"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RELATED_ROUTES_DATA } from "./partnerships-data";
import { SectionContainer, EyebrowTag, SectionHeading, SectionDescription, Reveal } from "./shared";

export default function RelatedRoutesSection() {
  return (
    <SectionContainer id="related-routes" className="relative py-[90px] bg-[#271740] overflow-hidden">
      {/* Background Dark Constellation Texture */}
      <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true">
        <picture>
          <source srcSet="/partnerships/related-routes-bg.webp" type="image/webp" />
          <Image
            src="/partnerships/related-routes-bg.png"
            alt=""
            fill
            className="object-cover opacity-60 mix-blend-screen"
          />
        </picture>
        {/* Figma Linear Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(25, 16, 47, 0.50) 0%, rgba(25, 16, 47, 0.80) 100%)",
          }}
        />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14">
          <Reveal delay={0.05}>
            <EyebrowTag light>{RELATED_ROUTES_DATA.eyebrow}</EyebrowTag>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading light>{RELATED_ROUTES_DATA.title}</SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionDescription light>
              {RELATED_ROUTES_DATA.description}
            </SectionDescription>
          </Reveal>
        </div>

        {/* 6 Routes Cards Grid: 3 cols with 16px gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {RELATED_ROUTES_DATA.routes.map((route, idx) => (
            <Reveal key={idx} delay={0.05 * (idx + 1)}>
              <Link
                href={route.href}
                className="group flex items-center justify-between gap-4 bg-white/[0.055] hover:bg-white/[0.09] border border-white/[0.12] hover:border-[#F0B98A]/50 rounded-[16px] p-5 transition-all duration-200 cursor-pointer min-h-[107px]"
              >
                <div className="flex items-center gap-3.5">
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-[10px] bg-[#F0B98A]/[0.16] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
                    <Image
                      src={`/partnerships/${route.iconName}`}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </div>

                  {/* Text Details */}
                  <div>
                    <h4 className="text-[16px] font-extrabold text-white leading-tight mb-1 group-hover:text-[#F0B98A] transition-colors">
                      {route.title}
                    </h4>
                    <p className="text-[13px] leading-[20px] text-[#B6A8CF]">
                      {route.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right Arrow */}
                <span className="text-[#F0B98A] text-base font-normal transition-transform group-hover:translate-x-1 flex-shrink-0">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
