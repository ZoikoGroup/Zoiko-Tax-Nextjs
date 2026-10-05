import Image from "next/image";
import { NoticeCard, PillButton } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/trust-center-security/security-hero.png"
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
            <span className="text-sm font-bold text-orange-600">TRUST · SECURITY</span>
            <h1 className="self-stretch text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
              Verified security controls, with evidence behind the claims.
            </h1>
            <p className="self-stretch text-lg leading-7 text-stone-500 sm:text-xl lg:leading-8">
              This page is for approved security architecture and control summaries, grounded in current,
              scoped sources. Sensitive assurance evidence belongs behind controlled access—not in a public
              architecture map.
            </p>
            <div className="inline-flex flex-wrap items-start gap-3">
              <PillButton label="Review Security Controls" variant="primary" href="#control-domains" />
              <PillButton label="Visit Trust Center" variant="secondary" href="/evidence-auditability" />
            </div>
            <span className="text-base font-semibold text-orange-600">Responsible Disclosure →</span>
            <p className="self-stretch text-sm leading-5 text-violet-950">
              Verified control inventory, certifications and current review dates: not supplied.
            </p>
          </div>
        </div>

        <NoticeCard
          title="Publication notice"
          description="Security statements on this page must come from current governed sources. Public summaries do not supersede signed agreements, scoped audit reports or controlled assurance evidence."
        />
      </div>
    </section>
  );
}
