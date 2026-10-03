import Image from "next/image";

export default function ConversionSection() {
  return (
    <section className="relative w-full flex justify-center items-center bg-[#181424] py-20 lg:py-28 overflow-hidden">
      {/* CTA background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/erp-general-ledger/Documentation and next steps.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#181424]/80" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-center items-center gap-6 text-center">
        <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
          CONTROLLED INTEGRATION STARTS WITH THE CONTRACT
        </div>
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] max-w-[900px]">
          Connect the architecture. Keep the accounting authority.
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg font-normal font-['Inter',sans-serif] leading-relaxed max-w-[800px]">
          Open the approved technical documentation for your supported interface. Confirm mapping responsibility, enterprise controls and Coverage before a consequential handoff.
        </p>
        <div className="pt-3 flex flex-wrap justify-center items-center gap-3">
          <div className="h-12 px-6 bg-[#BF6735] hover:bg-[#a85527] rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center gap-2.5 transition-all cursor-pointer">
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Open API Reference</span>
            <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
          <div className="h-12 px-6 bg-[#241D35] hover:bg-[#352750] rounded-full border border-[#3E3259] flex justify-center items-center gap-2.5 transition-all cursor-pointer">
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Explore Integration Guides</span>
            <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
