import Image from "next/image";
import { NoticeCard, PillButton } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/trust-center-security/security-hero.png" // Placeholder background
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-100/95 via-gray-200/90 to-gray-200/10" />
      </div>

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1440px] flex-col items-start gap-7 px-5 pb-16 pt-14 sm:px-8 lg:min-h-[928px] lg:px-20 lg:pb-96 lg:pt-20">
        <div className="inline-flex w-full items-start gap-14">
          <div className="inline-flex w-full max-w-[740px] flex-col items-start gap-6">
            <span className="text-sm font-bold text-orange-600 uppercase">TRUST · TRUST CENTER</span>
            <h1 className="self-stretch text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
              Trust you can inspect, not just accept.
            </h1>
            <p className="self-stretch text-lg leading-7 text-stone-500 sm:text-xl lg:leading-8">
              Review ZoikoTax’s approved trust posture across security, privacy, data processing and residency, continuity, AI governance, evidence, accessibility and responsible disclosure—with controlled proof routes where available.
            </p>
            <div className="inline-flex flex-wrap items-start gap-3">
              <PillButton label="Explore Trust Domains" variant="primary" href="#domains" />
              <PillButton label="Evidence & Auditability" variant="secondary" href="/trust-center/evidence-auditability" />
            </div>
            <span className="text-base font-semibold text-orange-600">After diligence: Book a Demo → /demo/ · Optional, never an access gate.</span>
          </div>
        </div>

        <NoticeCard
          title="The Trust Center is a navigation and assurance surface, not a certification."
          description="A central, evidence-bound router for diligence—not a guarantee. Routes identify the right domain; they do not establish that a statement or artifact is available. Public statements and controlled documents remain authoritative only for their approved scope, date and source."
        />
      </div>
    </section>
  );
}
