import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Container } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden bg-neutral-950">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/Enterprise migration evaluation.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.25)]" />
      </div>

      <Container className="relative z-10 py-20 lg:py-24 flex flex-col lg:flex-row justify-between lg:items-center gap-10 lg:gap-16">
        <div className="flex-1 flex flex-col justify-start items-start gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            QUALIFIED ENTERPRISE MIGRATION EVALUATION
          </span>
          <h2 className="self-stretch text-white text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight tracking-tight font-['Inter',sans-serif]">
            <span>Discuss the architecture you need to</span>
            <br />
            <span>govern.</span>
          </h2>
          <p className="self-stretch text-zinc-300 text-sm sm:text-base font-normal leading-relaxed font-['Inter',sans-serif]">
            <span className="block lg:whitespace-nowrap">
              Bring the evaluation scope and accountable teams—not confidential transaction details. Discuss coexistence, evidence and
            </span>
            <span className="block lg:whitespace-nowrap">
              readiness without assuming compatibility, Coverage or cutover approval.
            </span>
          </p>
        </div>

        <div className="shrink-0 flex flex-col justify-center items-center gap-3 self-center lg:self-auto lg:-translate-x-[35px]">
          <Link
            href="/integration-guides"
            className="h-12 px-6 bg-amber-700 hover:bg-[#9a4708] text-white rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex justify-center items-center gap-2.5 transition-all text-sm font-semibold font-['Inter',sans-serif]"
          >
            <span>Book a Demo</span>
            <ArrowUpRight className="size-4 text-white" />
          </Link>
          <p className="text-zinc-300 text-xs font-normal leading-5 font-['Inter',sans-serif] text-center">
            <span>Commercial conversation only. No</span>
            <br />
            <span>production authority is granted.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
