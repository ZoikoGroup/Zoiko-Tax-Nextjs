import Image from "next/image";

export default function ConversionSection() {
  return (
    <section className="relative w-full flex justify-center items-center py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/erp-general-ledger/Documentation and next steps.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-center items-center gap-6 text-center">
        <div className="text-[rgba(244,162,97,1)] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
          CONTROLLED INTEGRATION STARTS WITH THE CONTRACT
        </div>
        
        <h2 className="text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.15] max-w-[1000px]">
          <span className="block xl:whitespace-nowrap">Connect the architecture. Keep the accounting</span>
          <span className="block xl:whitespace-nowrap">authority.</span>
        </h2>
        
        <p className="text-[rgba(217,208,223,1)] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
          <span className="block xl:whitespace-nowrap">Open the approved technical documentation for your supported interface. Confirm mapping responsibility, enterprise controls and</span>
          <span className="block xl:whitespace-nowrap">Coverage before a consequential handoff.</span>
        </p>

        <div className="pt-2 flex flex-wrap justify-center items-center gap-3.5">
          <div className="h-12 px-7 bg-[rgba(191,103,53,1)] hover:bg-[#a85527] rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] border border-[rgba(221,114,53,1)] flex justify-center items-center gap-2 transition-all cursor-pointer">
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Open API Reference</span>
            <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
          <div className="h-12 px-7 bg-[rgba(36,16,61,1)] hover:bg-[rgba(52,24,88,1)] rounded-full border border-[rgba(90,61,113,1)] flex justify-center items-center gap-2 transition-all cursor-pointer">
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">Explore Integration Guides</span>
            <span className="text-white text-base font-normal leading-none font-['Inter',sans-serif]">↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}
