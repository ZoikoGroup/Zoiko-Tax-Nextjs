import Image from "next/image";
import { PillButton } from "../trust-center/shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/data-processing-residency/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fef9f9]/95 via-white/90 to-white/10" />
      </div>

      <div className="relative mx-auto flex min-h-[500px] w-full max-w-[1440px] flex-col items-start gap-7 px-5 pb-16 pt-14 sm:px-8 lg:min-h-[700px] lg:px-20 lg:pb-32 lg:pt-20">
        <div className="inline-flex w-full items-start gap-14">
          <div className="inline-flex w-full max-w-[800px] flex-col items-start gap-6">
            <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">TRUST · DATA PROCESSING & RESIDENCY</span>
            <h1 className="self-stretch text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
              Residency claims scoped to the data domain you can actually verify.
            </h1>
            <p className="self-stretch text-lg leading-7 text-stone-600 sm:text-xl lg:leading-8">
              Review ZoikoTax’s approved deployment, processing-location and residency controls without assuming every service, capability or customer has the same regional options.
            </p>
            <div className="inline-flex flex-wrap items-center gap-3">
              <PillButton label="View supported processing/residency scope" variant="primary" href="#processing-locations" />
              <PillButton label="Privacy & Data Protection" variant="secondary" href="/trust/privacy/" />
              <span className="ml-2 text-base font-semibold text-orange-600">Trust Center →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
