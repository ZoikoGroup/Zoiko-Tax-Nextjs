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
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/oem-embedded/Branding attribution and commercial rights.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="06 / BRAND & COMMERCIAL AUTHORITY"
          title="Technical embedding is not a commercial permission."
          description="Keep the integration pattern separate from the rights to market, brand, distribute or sell it."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Technical pattern */}
          <div className="p-7 sm:p-9 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5">
            <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              TECHNICAL PATTERN
            </span>
            <div className="self-stretch text-zinc-900 text-3xl font-normal font-['Inter',sans-serif]">
              How an approved integration fits
            </div>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Partner-owned UI, organization context, approved APIs, permitted
              capabilities and evidence boundaries describe technical
              architecture.
            </p>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Entitlement and activation are governed decisions. Neither one
              defines branding or distribution rights.
            </p>
            <Link
              href="/integration-guides"
              className="px-5 py-3.5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-start items-center gap-3 hover:bg-neutral-50 transition-all cursor-pointer"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter',sans-serif]">
                Explore Integration Guides
              </span>
              <Image
                src="/oem-embedded/arrow-right.svg"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
            </Link>
          </div>

          {/* Commercial / legal / brand */}
          <div className="p-7 sm:p-9 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-5">
            <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              COMMERCIAL / LEGAL / BRAND SOURCES
            </span>
            <div className="self-stretch text-white text-3xl font-normal font-['Inter',sans-serif]">
              Which rights have been approved
            </div>
            <p className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
              ZoikoTax marks and attribution follow approved brand and contract
              sources. White-label rights are conditional, never implied; no
              “Powered by” rule is established here.
            </p>
            <p className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Resale, distribution, pricing, revenue share and partner tiers
              require separate approval. Technical documentation does not offer
              terms.
            </p>
            <Link
              href="/integration-guides"
              className="px-5 py-3.5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-500 inline-flex justify-start items-center gap-3 hover:bg-white/10 transition-all cursor-pointer"
            >
              <span className="text-white text-sm font-semibold font-['Inter',sans-serif]">
                Book a Demo
              </span>
              <ArrowRight className="size-4 text-white" />
            </Link>
          </div>
        </div>

        <Notice
          title="Qualification, not an offer of rights"
          body="Begin with technical diligence. Use Book a Demo for contextual commercial qualification; approved commercial, legal and brand owners determine the applicable rights."
        />
      </Container>
    </section>
  );
}
