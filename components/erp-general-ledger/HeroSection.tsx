import Image from "next/image";
import { InfoIcon } from "./icons";

export default function HeroSection() {
  return (
    <section className="relative w-full flex justify-center items-start min-h-[770px] bg-[#F7F3ED] overflow-hidden">
      {/* Hero background image (1440x770 design fill) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/erp-general-ledger/Hero background image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right lg:object-top"
        />
        {/* Exact Figma Linear Gradient with soft violet shade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247, 243, 237, 1) 0%, rgba(247, 243, 237, 0.95) 20%, rgba(234, 223, 240, 0.91) 45%, rgba(234, 223, 240, 0.1) 85%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 pt-8 pb-16 flex flex-col justify-start items-start gap-9">
        <div className="relative z-10 self-stretch pt-4 flex justify-start items-start gap-14">
          <div className="w-[760px] max-w-full flex flex-col justify-start items-start gap-6">
            <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              DEVELOPERS · INTEGRATIONS · ERP &amp; GENERAL LEDGER
            </div>
            <h1 className="self-stretch justify-start text-[#18141B] text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-['Inter',sans-serif] leading-[1.08] tracking-tight">
              <span className="lg:whitespace-nowrap">Connect fiscal outcomes</span>
              <br className="hidden sm:inline" />
              <span className="lg:whitespace-nowrap">to finance with controlled</span>
              <br className="hidden sm:inline" />
              <span>accounting interfaces.</span>
            </h1>
            <p className="self-stretch max-w-[620px] justify-start text-[#665F69] text-base sm:text-lg lg:text-[18px] font-medium font-['Inter',sans-serif] leading-relaxed">
              <span className="lg:whitespace-nowrap">Bridge approved ZoikoTax fiscal outcomes into enterprise accounting and</span>
              <br className="hidden lg:inline" />
              <span className="lg:whitespace-nowrap">reconciliation workflows while preserving the ERP or general ledger as the</span>
              <br className="hidden lg:inline" />
              <span>finance system of record.</span>
            </p>
            <div className="self-stretch py-2 flex flex-wrap justify-start items-center gap-3">
              <div className="h-12 px-6 bg-[#BF6735] hover:bg-[#a85527] rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-start items-center gap-2.5 transition-all cursor-pointer">
                <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Open API Reference</span>
                <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
              </div>
              <div className="h-12 px-6 bg-white hover:bg-neutral-50 rounded-full outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex justify-start items-center gap-2.5 transition-all cursor-pointer">
                <span className="text-[#18141B] text-sm font-semibold font-['Inter',sans-serif]">Explore Integration Guides</span>
                <span className="text-[#D65A2C] text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
              </div>
              <div className="h-12 px-3 rounded-full flex justify-start items-center gap-1.5 cursor-pointer hover:underline">
                <span className="text-[#18141B] text-sm font-semibold font-['Inter',sans-serif]">Open Sandbox</span>
                <span className="text-[#D65A2C] text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
              </div>
            </div>
            <div className="self-stretch justify-start text-[#4B2375] text-xs sm:text-sm font-semibold font-['Inter',sans-serif] leading-5">
              Governed fiscal outcomes. Enterprise-owned accounting controls.
            </div>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Architecture guidance, not a posting contract
            </div>
            <p className="self-stretch justify-start text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="lg:whitespace-nowrap">This page explains integration architecture and control patterns. Exact journal structures, posting behavior, mappings, authentication, versions and</span>
              <br className="hidden lg:inline" />
              <span>reconciliation APIs remain governed by approved technical documentation.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
