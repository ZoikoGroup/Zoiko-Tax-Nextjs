import Image from "next/image";
import { Container, PrimaryButton, SecondaryButton } from "./shared";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center items-start min-h-[770px] overflow-hidden">
      {/* Hero background image + Figma gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/oem-embedded/Hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-gray-200/90 to-gray-200/10" />
      </div>

      <Container className="relative z-10 py-16 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-[760px] flex flex-col justify-start items-start gap-6">
          <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
            DEVELOPERS · INTEGRATIONS · OEM / EMBEDDED
          </span>
          <h1 className="self-stretch text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] lg:leading-[61.20px] tracking-tight font-['Inter',sans-serif]">
            Embed governed ZoikoTax capabilities without losing tenant
            accountability.
          </h1>
          <p className="self-stretch text-stone-500 text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
            Use approved partner provisioning and embedded integration patterns
            to connect organizations, activate permitted capabilities and
            preserve clear attribution, isolation and evidence.
          </p>
          <div className="flex flex-wrap justify-start items-center gap-3">
            <PrimaryButton href="/integration-guides">
              Explore Integration Guides
            </PrimaryButton>
            <SecondaryButton href="/integration-guides">
              Open API Reference
            </SecondaryButton>
            <Link
              href="/integration-guides"
              className="px-1 min-h-11 rounded-full inline-flex justify-start items-center gap-1 hover:underline cursor-pointer"
            >
              <span className="text-orange-600 text-sm font-normal font-['Inter',sans-serif]">
                Book a Demo ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[1280px] p-6 bg-orange-50 rounded-2xl flex flex-col sm:flex-row justify-start items-start gap-4">
          <Image
            src="/oem-embedded/info.svg"
            alt=""
            width={22}
            height={22}
            className="size-5 shrink-0 mt-0.5"
          />
          <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
            <div className="self-stretch text-zinc-900 text-base font-bold font-['Inter',sans-serif]">
              Architecture is not a commercial grant
            </div>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              This page explains public partner/embedded architecture. It does
              not grant reseller, white-label, branding, pricing, distribution
              or contractual rights. Those require approved commercial/legal
              sources.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
