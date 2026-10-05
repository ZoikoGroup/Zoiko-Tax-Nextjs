import Image from "next/image";
import { ArrowRightIcon, ArrowRightPngIcon, ArrowUpRightPngIcon, InfoIcon } from "./icons";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-[770px] bg-[#FAF7F0] flex justify-center items-start overflow-hidden">
      {/* Hero background image (1440x770 design fill) */}
      <Image
        src="/e-invoicing-networks/Hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F0] via-[#FAF7F0]/90 to-transparent" />
      
      <div className="relative z-10 w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 pt-16 pb-12 flex flex-col justify-start items-start gap-9">
        <div className="relative justify-start text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter'] uppercase tracking-wide">
          DEVELOPERS · INTEGRATIONS · E-INVOICING NETWORKS
        </div>
        <div className="relative self-stretch inline-flex justify-start items-start gap-14 overflow-hidden">
          <div className="w-[853px] max-w-full inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
            <h1 className="self-stretch justify-start text-zinc-900 text-5xl lg:text-6xl font-bold font-['Inter'] leading-[1.08] tracking-tight">
              <span className="block">Connect governed fiscal</span>
              <span className="block">documents to supported</span>
              <span className="block">networks and authorities.</span>
            </h1>
            <p className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">
              Build on approved adapter architecture for invoice-related workflows. Production support varies by country, network and capability—and must be verified in Coverage.
            </p>
            <div className="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
              <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-start items-center gap-2 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
                <div className="justify-start text-white text-sm font-semibold font-['Inter']">Open API Reference</div>
                <span className="text-white text-base leading-none select-none">↗</span>
              </div>
              <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Explore Integration Guides</div>
                <span className="text-amber-700 text-base leading-none select-none">↗</span>
              </div>
            </div>
            <div className="min-h-11 inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer hover:underline">
              <div className="justify-start text-orange-600 text-sm font-semibold font-['Inter']">View Current Coverage</div>
              <ArrowRightIcon className="size-4 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="relative self-stretch p-6 bg-[rgba(255,240,230,1)] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
          <InfoIcon className="size-5 shrink-0" />
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
            <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Public patterns. Exact contracts remain source-governed.</div>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">This page explains public adapter patterns. Exact network/authority contracts, document formats, credentials, status mappings and production availability remain governed by approved technical and coverage sources.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
