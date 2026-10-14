"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GENERAL_CONTACT_RELATED_ROUTES_DATA } from "./general-contact-data";
import { EyebrowTag, SectionHeading, SectionDescription, Reveal } from "./shared";

export default function RelatedRoutesSection() {
  const { eyebrow, heading, description, bgImage, routes } =
    GENERAL_CONTACT_RELATED_ROUTES_DATA;

  return (
    <section className="relative w-full overflow-hidden bg-[#271740] py-16 sm:py-20 lg:py-[84px] text-white">
      {/* Background Graphic from Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        {/* Section Header */}
        <div className="max-w-[700px] mb-10 sm:mb-12">
          <Reveal>
            <EyebrowTag light>{eyebrow}</EyebrowTag>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionHeading light>{heading}</SectionHeading>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionDescription light>{description}</SectionDescription>
          </Reveal>
        </div>

        {/* 6 Related Route Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {routes.map((rt, i) => (
            <Reveal key={rt.title} delay={0.06 * (i + 1)}>
              <Link
                href={rt.href}
                className="group relative flex items-center justify-between rounded-2xl bg-white/[0.055] border border-white/[0.12] p-5 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.09] hover:border-white/[0.28] hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3.5 pr-2">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center shrink-0 border border-white/[0.1] transition-transform group-hover:scale-105">
                    <Image
                      src={rt.icon}
                      alt=""
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-extrabold text-white leading-[1.3] group-hover:text-[#F0B98A] transition-colors">
                      {rt.title}
                    </h3>
                    <p className="text-[13px] text-[#B6A8CF] leading-[1.4] mt-0.5">
                      {rt.detail}
                    </p>
                  </div>
                </div>

                <span className="text-[18px] text-white/70 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white shrink-0">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
