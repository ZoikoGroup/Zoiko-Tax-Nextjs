import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(250,243,255,1)]">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/about-us/AI Governance hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#faf3ff]/80 via-[#faf3ff]/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-12 px-5 pb-16 pt-14 sm:px-8 lg:px-20 lg:pb-20 lg:pt-20">
        <div className="flex w-full max-w-[900px] flex-col items-start gap-6">
          <span className="text-sm font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
            TRUST · AI GOVERNANCE
          </span>
          <h1 className="text-4xl font-bold leading-tight text-[rgba(24,20,27,1)] sm:text-5xl lg:text-6xl lg:leading-[61.2px]">
            AI assistance governed by explicit authority boundaries.
          </h1>
          <p className="max-w-[770px] text-lg leading-8 text-[rgba(102,95,105,1)] sm:text-xl">
            Understand the role of approved AI assistance, the governance of its scope and the evidence required to support public claims. Assistance is not autonomous fiscal authority.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#evidence"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-[rgba(191,103,53,1)] border border-[rgba(221,114,53,1)] px-6 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            >
              View AI governance evidence
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/trust-center/evidence-auditability"
              className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white border border-[rgba(216,206,221,1)] px-6 text-sm font-semibold text-[rgba(24,20,27,1)] hover:bg-slate-50 transition-colors"
            >
              Evidence & Auditability
              <ArrowRight className="w-4 h-4 text-[rgba(24,20,27,1)]" />
            </Link>
          </div>
        </div>

        {/* Notice Card */}
        <div className="w-full rounded-2xl bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)] p-6 flex items-start gap-4">
          <Info className="w-5 h-5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1.5">
            <h4 className="text-base font-semibold text-[rgba(24,20,27,1)]">
              Assistance is not authority
            </h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[rgba(102,95,105,1)]">
              AI may assist analysis, classification, investigation or explanation only within approved scopes. Authoritative fiscal actions remain subject to governed controls and approved authority boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
