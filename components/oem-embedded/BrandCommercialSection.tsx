import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";
import Link from "next/link";

function ArrowRight({ className = "size-4" }: { className?: string }) {
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

export default function BrandCommercialSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-white overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-50">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            06 / BRAND & COMMERCIAL AUTHORITY
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Technical embedding is not a commercial permission.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Keep the integration pattern separate from the rights to market, brand, distribute or sell it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Technical pattern */}
          <div className="p-8 sm:p-8 bg-white rounded-[26px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-4">
              <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
                TECHNICAL PATTERN
              </span>
              <div className="self-stretch text-[rgba(24,20,27,1)] text-[28px] leading-[1.2] font-normal font-['Inter',sans-serif]">
                How an approved integration fits
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Partner-owned UI, organization context, approved APIs, permitted</span>
                <span className="block xl:whitespace-nowrap">capabilities and evidence boundaries describe technical architecture.</span>
              </p>
              <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Entitlement and activation are governed decisions. Neither one defines</span>
                <span className="block xl:whitespace-nowrap">branding or distribution rights.</span>
              </p>
            </div>
            
            <Link
              href="/integration-guides"
              className="px-5 py-3.5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex justify-start items-center gap-3 hover:bg-neutral-50 transition-all cursor-pointer mt-1"
            >
              <span className="text-[rgba(24,20,27,1)] text-[15px] font-semibold font-['Inter',sans-serif]">
                Explore Integration Guides
              </span>
              <Image
                src="/oem-embedded/arrow-right.svg"
                alt=""
                width={16}
                height={16}
                className="size-4 opacity-70"
              />
            </Link>
          </div>

          {/* Commercial / legal / brand */}
          <div className="p-8 sm:p-8 bg-[rgba(48,17,83,1)] rounded-[26px] outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-4">
              <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
                COMMERCIAL / LEGAL / BRAND SOURCES
              </span>
              <div className="self-stretch text-white text-[28px] leading-[1.2] font-normal font-['Inter',sans-serif]">
                Which rights have been approved
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">ZoikoTax marks and attribution follow approved brand and contract</span>
                <span className="block xl:whitespace-nowrap">sources. White-label rights are conditional, never implied; no &quot;Powered</span>
                <span className="block xl:whitespace-nowrap">by&quot; rule is established here.</span>
              </p>
              <p className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Resale, distribution, pricing, revenue share and partner tiers require</span>
                <span className="block xl:whitespace-nowrap">separate approval. Technical documentation does not offer terms.</span>
              </p>
            </div>

            <Link
              href="/integration-guides"
              className="px-5 py-3.5 bg-[rgba(255,255,255,0.04)] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] inline-flex justify-start items-center gap-3 hover:bg-white/10 transition-all cursor-pointer mt-1"
            >
              <span className="text-white text-[15px] font-semibold font-['Inter',sans-serif]">
                Book a Demo
              </span>
              <ArrowRight className="size-4 text-white opacity-90" />
            </Link>
          </div>
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">Qualification, not an offer of rights</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Begin with technical diligence. Use Book a Demo for contextual commercial qualification; approved commercial, legal and brand owners determine the</span>
              <span className="block xl:whitespace-nowrap">applicable rights.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
