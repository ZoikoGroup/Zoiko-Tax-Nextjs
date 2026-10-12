"use client";

import React from "react";
import Image from "next/image";
import { CLOSING_DATA as C } from "./customer-support-data";
import { Reveal, PrimaryButton } from "./shared";

export default function ClosingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#220847]">
      {/* Background team photo with rich purple overlay matching Figma */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/customer-support/closing-team-photo.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#220847]/80 backdrop-brightness-95" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-20 md:py-24 lg:py-28 flex flex-col items-center text-center">
        <Reveal className="w-full flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.25] text-white tracking-tight">
            {C.title}
          </h2>
        </Reveal>

        <Reveal delay={0.04} className="w-full flex justify-center">
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base leading-relaxed text-[#E9DFEE] max-w-[640px]">
            {C.description}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="w-full flex justify-center">
          <div className="mt-6 sm:mt-7">
            <PrimaryButton
              href="#intent-router"
              className="px-8 sm:px-10 py-3 sm:py-3.5 text-sm sm:text-base font-semibold"
            >
              {C.action}
            </PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
