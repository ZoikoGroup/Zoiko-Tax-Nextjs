"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PrimaryButton, Reveal } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative w-full bg-[#1D033B] py-20 lg:py-24 text-white">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 text-center">
        <Reveal>
          <div className="flex flex-col items-center gap-7">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white">
              Price the operating scope you actually need.
            </h2>

            <p className="max-w-3xl text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#D9D0DF]">
              Use the pricing model to clarify your scope, then bring the right commercial and technical context into an approved<br /> ZoikoTax evaluation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <PrimaryButton href="#demo">
                Book a Demo
              </PrimaryButton>

              <Link
                href="#model-at-a-glance"
                className="group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-white/30 bg-white px-[22px] text-sm font-semibold text-[#18141B] transition-all hover:bg-slate-100 hover:border-white active:scale-95"
              >
                <span>Explore pricing components</span>
                <Image
                  src="/pricing-plan/icons/arrow-right-dark.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
