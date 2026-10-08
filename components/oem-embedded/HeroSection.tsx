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
        <div 
          className="absolute inset-0" 
          style={{ background: "linear-gradient(90deg, rgba(247, 243, 237, 1) 0%, rgba(234, 223, 240, 0.91) 45%, rgba(234, 223, 240, 0.1) 100%)" }}
        />
      </div>

      <Container className="relative z-10 py-16 lg:py-24 flex flex-col justify-start items-start gap-10">
        <div className="w-full max-w-[760px] flex flex-col justify-start items-start gap-6">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            DEVELOPERS · INTEGRATIONS · OEM / EMBEDDED
          </span>
          <h1 className="self-stretch text-[rgba(24,20,27,1)] text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.05] tracking-tight font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Embed governed</span>
            <span className="block xl:whitespace-nowrap">ZoikoTax capabilities</span>
            <span className="block xl:whitespace-nowrap">without losing tenant</span>
            <span className="block xl:whitespace-nowrap">accountability.</span>
          </h1>
          <p className="self-stretch text-[rgba(102,95,105,1)] text-lg sm:text-xl lg:text-[18px] font-normal leading-relaxed font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Use approved partner provisioning and embedded integration patterns to</span>
            <span className="block xl:whitespace-nowrap">connect organizations, activate permitted capabilities and preserve clear</span>
            <span className="block xl:whitespace-nowrap">attribution, isolation and evidence.</span>
          </p>
          <div className="pt-2 flex flex-wrap justify-start items-center gap-3">
            <PrimaryButton href="/integration-guides">
              Explore Integration Guides
            </PrimaryButton>
            <SecondaryButton href="/integration-guides">
              Open API Reference
            </SecondaryButton>
            <Link
              href="/integration-guides"
              className="px-2 min-h-11 rounded-full inline-flex justify-start items-center gap-1 hover:underline cursor-pointer"
            >
              <span className="text-[rgba(214,90,44,1)] text-sm font-semibold font-['Inter',sans-serif]">
                Book a Demo ↗
              </span>
            </Link>
          </div>
        </div>

        <div className="w-[1280px] max-w-full min-h-[125px] p-6 lg:p-8 bg-[rgba(255,240,231,1)] rounded-[16px] flex flex-col sm:flex-row justify-start items-start gap-4">
          <Image
            src="/oem-embedded/info.svg"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0 mt-0.5"
          />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[rgba(24,20,27,1)] text-base font-bold font-['Inter',sans-serif]">
              Architecture is not a commercial grant
            </div>
            <p className="self-stretch text-[rgba(102,95,105,1)] text-[14px] sm:text-base font-normal leading-relaxed font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">This page explains public partner/embedded architecture. It does not grant reseller, white-label, branding, pricing, distribution or contractual rights. Those</span>
              <span className="block xl:whitespace-nowrap">require approved commercial/legal sources.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
