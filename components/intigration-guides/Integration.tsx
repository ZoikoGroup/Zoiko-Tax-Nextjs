import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Integration() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F5F3F0] to-[#EBE7E2] font-sans">
      <Image
        src="/integration/1.png"
        alt="Server room background"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right opacity-50"
      />
      {/* Gradient overlay to ensure text readability */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5F3F0] via-[#F5F3F0]/80 via-55% to-[#F5F3F0]/10 lg:via-[#F5F3F0]/60"
      />

      <div className="mx-auto flex max-w-7xl items-center px-6 py-16 lg:min-h-[770px] lg:px-12 lg:py-20">
        <div className="flex max-w-6xl flex-col gap-6">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236] sm:text-sm">
            DEVELOPERS • INTEGRATION GUIDES
          </p>
          <h1 className="text-4xl max-w-xl font-bold tracking-tight text-[#1C1917] sm:text-5xl lg:text-[56px] lg:leading-[61.2px]">
            Design ZoikoTax integrations with governed implementation patterns.
          </h1>
          <p className="max-w-[650px] text-base font-normal leading-[28px] text-[#57534E] sm:text-lg">
            Use source-safe architecture guides to understand integration
            context, conceptual sequences, responsibility boundaries, failure
            behavior and evidence handoffs before moving into exact API, sandbox
            or contractual implementation details.
          </p>

          <div className="flex flex-wrap items-center gap-3 py-1">
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-[#D06236] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B5522B]"
            >
              Browse Integration Guides
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1C1917] shadow-sm ring-1 ring-inset ring-[#D6D3D1] transition-colors hover:bg-[#F5F5F4]"
            >
              Read API Reference
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="#"
              className="inline-flex items-center gap-1.5 px-3 py-3 text-sm font-semibold text-[#D65A2C] transition-colors hover:text-[#D06236]"
            >
              Open Sandbox
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="text-xs max-w-xl font-medium leading-[20px] text-[#78716C] sm:text-sm">
            Public guidance explains approved patterns. Exact production
            contracts, credentials, entitlements and live Coverage remain
            separately governed.
          </p>
        </div>
      </div>
    </section>
  );
}
