import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer, Reveal } from "./shared";

export default function ExemptionsSection() {
  return (
    <SectionContainer className="bg-[#FAF8FA]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Copy & Link */}
        <div className="lg:col-span-6">
          <Reveal>
            <div className="flex flex-col gap-5">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
                EXEMPTION GATEWAY
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold leading-[1.15] tracking-tight text-[#18141B]">
                Determinations respect validated exemption evidence—not informal overrides.
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#535055]">
                Informal manual exclusions degrade audit defensibility. ZoikoTax demands a
                cryptographically valid, active exemption certificate present within the secure
                digital locker before bypassing any standard regulatory fee line.
              </p>

              <div className="pt-2">
                <Link
                  href="#exemptions"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#D65A2C] transition-colors hover:text-[#BF6735]"
                >
                  <span>Explore Exemptions & Certificates</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Gate Mockup */}
        <div className="lg:col-span-6">
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-[#D8CEDD] bg-white p-7 sm:p-8 shadow-[0_4px_16px_0_rgba(0,0,0,0.03)]">
              <h3 className="text-lg font-bold text-[#18141B]">
                Active Gate Comparison
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                {/* Blocked Gate */}
                <div className="rounded-xl border border-[#E6C4C0] bg-[#FDF3EE] p-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                    [GATE: BLOCKED]
                  </span>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#535055]">
                    No valid exemption cert found for State of California. Reverting to standard taxable calculation branch.
                  </p>
                </div>

                {/* Active Gate */}
                <div className="rounded-xl border border-[#C0E6D5] bg-[#EEFDF6] p-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#26735B]">
                    [GATE: ACTIVE]
                  </span>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#535055]">
                    Active certificate #CA-90210-A validated. Exemption applied under code SEC-501c3. Levy bypassed.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}
