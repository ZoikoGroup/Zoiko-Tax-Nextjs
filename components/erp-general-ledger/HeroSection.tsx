import Image from "next/image";
import { InfoIcon } from "./icons";

export default function HeroSection() {
  return (
    <div className="relative self-stretch px-20 pt-8 pb-20 bg-purple-50 flex flex-col justify-center items-start gap-10 overflow-hidden">
      {/* Hero background image (1440x770 design fill) */}
      <Image
        src="/erp-general-ledger/Hero background image.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="relative self-stretch pt-6 pb-2 flex justify-start items-start gap-14 overflow-hidden">
        <div className="w-[760px] max-w-full inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5">DEVELOPERS · INTEGRATIONS · ERP &amp; GENERAL LEDGER</div>
          <h1 className="self-stretch justify-start text-zinc-900 text-6xl font-bold font-['Inter'] leading-[62.40px]">Connect fiscal outcomes to finance with controlled accounting interfaces.</h1>
          <p className="self-stretch justify-start text-stone-500 text-xl font-medium font-['Inter'] leading-8">Bridge approved ZoikoTax fiscal outcomes into enterprise accounting and reconciliation workflows while preserving the ERP or general ledger as the finance system of record.</p>
          <div className="self-stretch py-2 flex flex-wrap justify-start items-start gap-3 overflow-hidden">
            <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
              <div className="justify-start text-white text-sm font-semibold font-['Inter']">Open API Reference</div>
              <div className="justify-start text-white text-lg font-normal font-['Inter']">↗</div>
            </div>
            <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Explore Integration Guides</div>
              <div className="justify-start text-orange-600 text-lg font-normal font-['Inter']">↗</div>
            </div>
            <div className="h-12 px-5 rounded-[999px] flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:underline">
              <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Open Sandbox</div>
              <div className="justify-start text-orange-600 text-lg font-normal font-['Inter']">↗</div>
            </div>
          </div>
          <div className="self-stretch justify-start text-violet-950 text-sm font-semibold font-['Inter'] leading-5">Governed fiscal outcomes. Enterprise-owned accounting controls.</div>
        </div>
      </div>
      <div className="relative w-full max-w-[854px] p-6 bg-orange-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex justify-start items-start gap-4 overflow-hidden">
        <InfoIcon className="size-6 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Architecture guidance, not a posting contract</div>
          <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
            <span className="lg:whitespace-nowrap">This page explains integration architecture and control patterns. Exact journal structures, posting behavior, mappings, authentication, versions and</span>
            <br className="hidden lg:inline" />
            <span>reconciliation APIs remain governed by approved technical documentation.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
