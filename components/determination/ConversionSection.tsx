import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative overflow-hidden bg-[#100031] py-20 sm:py-28 text-white">
      {/* Background Image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.32]">
        <Image
          src="/determination/conversion-bg.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-5">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              GOVERNED TELECOM TAX DETERMINATION
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-white max-w-3xl">
              See how ZoikoTax could fit your determination architecture.
            </h2>

            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[#D9D0DF]">
              Explore how our governed fact models, clean telecom classifications, and deep situs parameters build reproducible compliance outcomes.
            </p>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <PrimaryButton href="#demo">Book a Demo</PrimaryButton>
              <SecondaryButton href="#coverage">View Current Coverage</SecondaryButton>
              <SecondaryButton href="#developer">Explore Developers Portal</SecondaryButton>
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-xs text-white/70">
              No public calculator available • No fabricated rates • No universal support claims
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
