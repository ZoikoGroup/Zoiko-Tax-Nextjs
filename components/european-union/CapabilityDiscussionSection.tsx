"use client";

import React from "react";
import Image from "next/image";
import { DISCUSSION_DATA } from "./european-union-data";
import {
  PrimaryPillButton,
  SecondaryDarkPillButton,
  Reveal,
} from "./shared";

export default function CapabilityDiscussionSection() {
  const d = DISCUSSION_DATA;

  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B]">
      {/* Background consultation photo & gradient overlay */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/european-union/discussion-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(29, 3, 59, 0.96) 0%, rgba(29, 3, 59, 0.88) 65%, rgba(29, 3, 59, 0.61) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-16 sm:py-20 lg:py-[88px] flex flex-col gap-7">
        <Reveal>
          <div className="max-w-[880px] flex flex-col gap-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.1em] tracking-tight text-white">
              {d.title}
            </h2>
            <p className="text-lg sm:text-[20px] font-normal leading-[1.5em] text-[#D9D0DF]">
              Bring your European Union capability and scope questions to a commercial discussion. Public<br />
              readiness remains available without booking a demo.
            </p>
            <p className="text-sm font-normal leading-[1.5em] text-[#D9D0DF]">
              {d.footnote}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <PrimaryPillButton href={d.actions[0].href} showIcon>
              {d.actions[0].label}
            </PrimaryPillButton>
            <SecondaryDarkPillButton href={d.actions[1].href} showIcon>
              {d.actions[1].label}
            </SecondaryDarkPillButton>
            <SecondaryDarkPillButton href={d.actions[2].href} showIcon>
              {d.actions[2].label}
            </SecondaryDarkPillButton>
            <SecondaryDarkPillButton href={d.actions[3].href} showIcon>
              {d.actions[3].label}
            </SecondaryDarkPillButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
