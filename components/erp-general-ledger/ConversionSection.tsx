import Image from "next/image";

export default function ConversionSection() {
  return (
    <div className="relative self-stretch bg-slate-900/75 flex flex-col justify-start items-start overflow-hidden">
      {/* CTA background image */}
      <Image
        src="/erp-general-ledger/Documentation and next steps.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative self-stretch px-40 py-20 flex flex-col justify-start items-center gap-6 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">CONTROLLED INTEGRATION STARTS WITH THE CONTRACT</div>
        <h2 className="self-stretch text-center justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Connect the architecture. Keep the accounting authority.</h2>
        <p className="self-stretch text-center justify-start text-zinc-300 text-lg font-normal font-['Inter'] leading-7">Open the approved technical documentation for your supported interface. Confirm mapping responsibility, enterprise controls and Coverage before a consequential handoff.</p>
        <div className="pt-3 flex flex-wrap justify-center items-start gap-3 overflow-hidden">
          <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
            <div className="justify-start text-white text-sm font-semibold font-['Inter']">Open API Reference</div>
            <div className="justify-start text-white text-lg font-normal font-['Inter']">↗</div>
          </div>
          <div className="h-12 px-5 bg-indigo-950 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-indigo-900 transition-colors cursor-pointer">
            <div className="justify-start text-white text-sm font-semibold font-['Inter']">Explore Integration Guides</div>
            <div className="justify-start text-white text-lg font-normal font-['Inter']">↗</div>
          </div>
        </div>
      </div>
    </div>
  );
}
