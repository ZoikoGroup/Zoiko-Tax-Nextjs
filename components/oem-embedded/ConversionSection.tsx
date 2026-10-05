import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

function ArrowRightWhite({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.33594 8.00021H12.6703M8.00314 12.6674L12.6703 8.00021L8.00314 3.33301"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ConversionSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(24,20,27,1)] overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/oem-embedded/Docs first conversion.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col justify-start items-center gap-7">
        <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
          BUILD WITH CLEAR AUTHORITY
        </span>
        <h2 className="self-stretch text-center text-white text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
          Plan the integration. Preserve accountability.
        </h2>
        <p className="w-full max-w-[980px] text-center text-[rgba(217,208,223,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
          <span className="block xl:whitespace-nowrap">Explore the technical guides, confirm the exact scope and bring commercial questions to approved</span>
          <span className="block xl:whitespace-nowrap">qualification. No signup or self-service grant is implied.</span>
        </p>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <Link
            href="/integration-guides"
            className="h-[47px] px-5 bg-[rgba(214,90,44,1)] hover:bg-[#b8481e] rounded-[999px] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer"
          >
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
              Explore Integration Guides
            </span>
            <ArrowRightWhite className="size-4 text-white" />
          </Link>
          <Link
            href="/sdks"
            className="h-[47px] px-5 bg-[rgba(255,255,255,0.04)] hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer"
          >
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
              Open API Reference
            </span>
            <ArrowRightWhite className="size-4 text-white" />
          </Link>
          <Link
            href="/agreement-review-signing"
            className="h-[47px] px-5 bg-[rgba(255,255,255,0.04)] hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer"
          >
            <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
              Book a Demo
            </span>
            <ArrowRightWhite className="size-4 text-white" />
          </Link>
        </div>
        <p className="text-[rgba(217,208,223,0.7)] text-xs font-normal font-['Inter',sans-serif]">
          OEM / Embedded · /developers/integrations/oem-embedded/
        </p>
      </Container>
    </section>
  );
}
