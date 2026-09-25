import React from "react";
import Image from "next/image";
import { PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { BANNER_DATA, IMAGES } from "./iot-m2m-satellite-data";

export default function BannerSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1D033B] py-16 text-center sm:py-20 lg:min-h-[380px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image src={IMAGES.banner} alt="" fill sizes="100vw" className="object-cover" />
      </div>

      <div className="relative mx-auto flex max-w-[800px] flex-col items-center gap-4 px-4 sm:px-8">
        <Reveal>
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{BANNER_DATA.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-3xl font-normal leading-[1.15] text-white sm:text-4xl lg:text-[44px]">
            {BANNER_DATA.title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-base text-[#E5E1EA]">{BANNER_DATA.description}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="flex w-full flex-col gap-3 pt-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            {BANNER_DATA.actions.map((action) =>
              action.variant === "primary" ? (
                <PrimaryButton key={action.label} href={action.href}>
                  {action.label}
                </PrimaryButton>
              ) : (
                <SecondaryButton key={action.label} href={action.href}>
                  {action.label}
                </SecondaryButton>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
