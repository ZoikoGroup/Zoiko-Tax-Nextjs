import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { CONTAINER, PrimaryButton, SecondaryButton, Reveal } from "./shared";
import { heroData } from "./compliance-filing-data";

/** Figma 233:9534 (desktop only — the 390px mobile frame has no breadcrumb row). */
function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="hidden bg-[#faf3ff] lg:block">
      <ol className={clsx(CONTAINER, "flex items-center gap-2 pt-6 font-manrope text-[13px] leading-[normal] whitespace-nowrap")}>
        {heroData.breadcrumbs.map((crumb, idx) => {
          const last = idx === heroData.breadcrumbs.length - 1;
          return (
            <li key={crumb} className="flex items-center gap-2">
              <span className={last ? "font-semibold text-[#bf6735]" : "font-normal text-[#665f69]"}>{crumb}</span>
              {!last && <span className="font-normal text-[#665f69]">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function HeroSection() {
  return (
    <>
      <Breadcrumbs />
      <section className="relative w-full overflow-hidden bg-[linear-gradient(to_bottom,#faf3ff,rgba(247,236,254,0.8))] pt-8 pb-12 lg:bg-[linear-gradient(-86.13deg,rgba(239,191,175,0.19)_37.214%,rgba(243,213,215,0.595)_47.262%,rgb(247,236,254)_57.309%)] lg:pt-16 lg:pb-[88px]">
        {/* Figma 233:9541 — office photo at 20% opacity */}
        <div className="pointer-events-none absolute inset-0 hidden opacity-20 lg:block">
          <Image src="/compliance-filing/hero-office-desktop.webp" alt="" fill priority sizes="100vw" className="object-cover" />
        </div>
        {/* Figma 233:10478 — mobile crop of the same scene at 20% opacity */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20 lg:hidden">
          <Image
            src="/compliance-filing/hero-office-mobile.webp"
            alt=""
            width={1024}
            height={1024}
            priority
            className="absolute top-0 left-[-163.12%] h-full w-[263.16%] max-w-none object-cover"
          />
        </div>

        <div className={CONTAINER}>
          <Reveal>
            <div className="flex w-full flex-col items-start gap-4 lg:w-[680px] lg:gap-6">
              <p className="font-manrope text-[12px] font-bold uppercase leading-[normal] text-[#bf6735] lg:text-[14px]">
                {heroData.eyebrow}
              </p>

              <h1 className="font-sora text-[30px] font-extrabold leading-[1.1] text-[#18141b] lg:text-[54px] lg:leading-[1.05]">
                {heroData.title}
              </h1>

              <p className="font-manrope text-[14px] font-normal leading-[1.5] text-[#535055] lg:text-[18px]">
                <span className="lg:hidden">{heroData.subtitleMobile}</span>
                <span className="hidden lg:inline">{heroData.subtitle}</span>
              </p>

              <p className="font-manrope text-[13px] font-normal leading-[1.5] text-[#18141b] lg:text-[14px]">
                {heroData.secondary}
              </p>

              <div className="flex w-full flex-col items-stretch gap-[10px] pt-2 lg:w-auto lg:flex-row lg:items-start lg:gap-3">
                <PrimaryButton href="#demo" className="w-full shadow-none lg:w-auto lg:shadow-[inset_0px_-2px_4px_0px_#fdcfbe,inset_0px_3px_4px_0px_#ffdfd3]">
                  Book a Demo
                </PrimaryButton>
                <SecondaryButton href="#coverage" className="w-full shadow-none lg:w-auto lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]">
                  View Current Coverage
                </SecondaryButton>
                <SecondaryButton
                  href="/regulatory-obligations"
                  className="w-full text-[13px] shadow-none lg:w-auto lg:text-[14px] lg:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.09)]"
                >
                  Explore Regulatory Obligations →
                </SecondaryButton>
              </div>

              <p className="font-manrope text-[11px] font-normal leading-[1.4] text-[#665f69] lg:text-[12px] lg:leading-[normal]">
                {heroData.disclosure}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
