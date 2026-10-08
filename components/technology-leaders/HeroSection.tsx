import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ActionButtons, Reveal } from "./shared";
import { HERO_DATA, IMAGES } from "./tech-data";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#EADFEE] xl:min-h-[745px]">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-40 lg:opacity-100"
        />
      </div>

      <div className="relative mx-auto flex max-w-[1440px] px-4 py-14 sm:px-8 sm:py-20 lg:px-20 xl:min-h-[745px] xl:items-center">
        <div className="flex max-w-[903px] flex-col gap-6">
          <Reveal>
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{HERO_DATA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-[34px] font-bold leading-[1.1] tracking-tight text-[#18141B] sm:text-5xl sm:leading-[1.05]">
              {HERO_DATA.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-base leading-6 text-[#5F5862]">{HERO_DATA.description}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-xs leading-5 text-[#6E6772]">{HERO_DATA.qualifier}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <ActionButtons actions={HERO_DATA.actions} className="pt-3" />
          </Reveal>
          <Reveal delay={0.24}>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs" aria-label="Related pages">
              {HERO_DATA.links.map((link, idx) => (
                <React.Fragment key={link.label}>
                  {idx > 0 && (
                    <span className="text-[#6E6772]" aria-hidden="true">
                      •
                    </span>
                  )}
                  <Link href={link.href} className="font-medium text-[#D65A2C] hover:underline">
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
