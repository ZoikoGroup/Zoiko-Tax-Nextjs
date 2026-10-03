import Image from "next/image";
import {
  ArrowUpRight,
  Container,
  PrimaryButton,
  SecondaryButton,
} from "./shared";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden py-[25px]">
      {/* Hero background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/Hero (1).png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <Container className="relative z-10 pt-8 sm:pt-10 pb-12 sm:pb-14 flex flex-col justify-start items-start gap-8">
        <div className="w-full max-w-[964px] flex flex-col justify-start items-start gap-6">
          <span className="self-stretch text-orange-600 text-xs font-bold uppercase tracking-[0.08em] leading-5 font-['Inter',sans-serif]">
            DEVELOPERS · INTEGRATIONS · EXISTING TAX ENGINES
          </span>
          <h1 className="self-stretch text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.06] lg:leading-[61.20px] tracking-tight font-['Inter',sans-serif]">
            Migrate tax engines without<br className="hidden sm:inline" /> making cutover the first step.
          </h1>
          <p className="w-full max-w-[1050px] text-stone-500 text-lg sm:text-xl font-normal leading-relaxed lg:leading-8 font-['Inter',sans-serif]">
            <span className="lg:whitespace-nowrap">Use federated integration and Shadow Assurance patterns to compare ZoikoTax with an incumbent</span>
            <br className="hidden lg:inline" />
            <span>engine before governed production transition.</span>
          </p>
          <div className="self-stretch flex flex-col justify-start items-start gap-4 pt-2">
            <div className="flex flex-wrap justify-start items-center gap-3">
              <PrimaryButton href="/integration-guides">
                Explore Integration Guides
              </PrimaryButton>
              <SecondaryButton href="/integration-guides">
                Open API Reference
              </SecondaryButton>
            </div>
            <Link
              href="/sandbox"
              className="min-h-11 px-1 rounded-full inline-flex justify-start items-center gap-1.5 hover:underline cursor-pointer"
            >
              <span className="text-[#D65A2C] text-base font-semibold font-['Inter',sans-serif]">
                Open Sandbox
              </span>
              <ArrowUpRight className="size-4 text-[#D65A2C]" />
            </Link>
          </div>
        </div>

        <div className="w-full max-w-[1280px] p-6 bg-orange-50 rounded-lg border-l-[3px] border-amber-700 flex flex-col justify-start items-start gap-2">
          <p className="self-stretch text-stone-500 text-sm font-normal leading-5 font-['Inter',sans-serif]">
            This page explains coexistence and migration patterns. It does not certify compatibility with a named incumbent engine, guarantee equivalent outcomes, or define authoritative cutover<br className="hidden lg:inline" /> behavior beyond approved technical sources.
          </p>
        </div>
      </Container>
    </section>
  );
}
