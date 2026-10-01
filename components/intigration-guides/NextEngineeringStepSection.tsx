import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NextEngineeringStepSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1D033BC2] font-sans text-white px-6 py-24 lg:px-12 text-center">
      {/* Background Image */}
      <Image
        src="/integration/5.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-40"
      />

      <div className="mx-auto max-w-4xl flex flex-col items-center">
        {/* Eyebrow */}
        <p className="text-xs font-bold uppercase tracking-wider text-[#D06236] mb-4">
          FROM ARCHITECTURE CONTEXT TO GOVERNED CONTRACT
        </p>

        {/* Main Title */}
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-tight mb-6">
          Take the next engineering step.
        </h1>

        {/* Description */}
        <p className="text-sm font-normal text-[#D6D3D1] max-w-2xl leading-relaxed mb-10">
          Read exact implementation documentation first. For customer-specific
          architecture or entitlement, move into controlled engagement.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#api-reference"
            className="flex items-center gap-2 rounded-full bg-[#D06236] px-6 py-3.5 text-xs font-semibold text-white shadow-lg hover:bg-[#b5522c] transition-colors"
          >
            Read API Reference
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#developer-docs"
            className="flex items-center gap-2 rounded-full bg-[#301153] border border-white/20 px-6 py-3.5 text-xs font-semibold text-white shadow-lg hover:bg-[#301153] transition-colors"
          >
            Explore related developer docs
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a
            href="#demo"
            className="flex items-center gap-2 rounded-full bg-[#301153] border border-white/20 px-6 py-3.5 text-xs font-semibold text-white shadow-lg hover:bg-[#301153] transition-colors"
          >
            Book a Demo
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Footer Note */}
        <div className="text-[11px] text-[#A8A29E] max-w-2xl leading-relaxed">
          Public guidance is not private configuration or a production contract.
          Credentials, entitlements and live Coverage remain separately
          governed. No instant activation is implied.
        </div>
      </div>
    </section>
  );
}
