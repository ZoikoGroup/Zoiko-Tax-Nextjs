import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function NextStepsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-us/Assurance next steps.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.6)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-24 flex flex-col items-center gap-12 sm:gap-14">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center w-full">
          <span className="text-xs font-bold uppercase tracking-wider text-[rgba(244,162,97,1)]">
            ASSURANCE FIRST
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-white lg:leading-[47.52px] w-full max-w-none text-center">
            Start with the domain. Continue with the source.
          </h2>
          <p className="max-w-[1060px] text-base sm:text-lg lg:text-xl font-normal leading-8 text-[rgba(217,208,223,1)]">
            Explore the relevant scope and evidence pathway before a commercial conversation. Public trust information is<br className="hidden md:block" />
            never a demo prerequisite or a paywall.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#domains"
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[rgba(191,103,53,1)] border border-[rgba(221,114,53,1)] px-7 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Explore Trust Domains
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/trust-center/evidence-auditability"
            className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/40 bg-white/5 px-7 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Evidence & Auditability
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bottom 2 columns */}
        <div className="w-full pt-10 border-t border-white/15 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal text-[rgba(217,208,223,1)]">
              Reporting a suspected vulnerability? Keep it separate from procurement.
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="/trust-center/responsible-disclosure"
                className="flex items-center justify-between w-full group"
              >
                <span className="text-base font-semibold text-[rgba(244,162,97,1)] group-hover:opacity-80 transition-opacity">
                  Responsible Disclosure
                </span>
                <ArrowUpRight
                  className="w-[18px] h-[18px] text-[rgba(244,162,97,1)] group-hover:opacity-80 transition-opacity shrink-0"
                  strokeWidth={2}
                />
              </Link>
              <div className="text-xs text-[rgba(217,208,223,0.7)]">
                /trust/responsible-disclosure/
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <p className="text-sm font-normal text-[rgba(217,208,223,1)]">
              After diligence, explore whether ZoikoTax fits your architecture.
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="/demo"
                className="flex items-center justify-between w-full group"
              >
                <span className="text-base font-semibold text-[rgba(244,162,97,1)] group-hover:opacity-80 transition-opacity">
                  Book a Demo · Optional
                </span>
                <ArrowUpRight
                  className="w-[18px] h-[18px] text-[rgba(244,162,97,1)] group-hover:opacity-80 transition-opacity shrink-0"
                  strokeWidth={2}
                />
              </Link>
              <div className="text-xs text-[rgba(217,208,223,0.7)]">
                /demo/
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
