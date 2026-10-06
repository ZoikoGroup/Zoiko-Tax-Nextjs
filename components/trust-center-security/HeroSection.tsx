import Image from "next/image";
import { ArrowIcon, NoticeCard, PillButton } from "./shared";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(247,243,237,1)]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/trust-center-security/security-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,243,237,0.98)] via-[rgba(247,243,237,0.92)] via-45% to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1440px] flex-col items-start gap-7 px-5 pb-0 pt-14 sm:px-8 lg:min-h-[928px] lg:px-20 lg:pb-[164px] lg:pt-20">
        <div className="inline-flex w-full items-start gap-14">
          <div className="inline-flex w-full max-w-[740px] flex-col items-start gap-6">
            <span className="text-sm font-bold text-[rgba(214,90,44,1)]">TRUST · SECURITY</span>
            <h1 className="self-stretch text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
              Verified security
              <br className="hidden sm:inline" />
              controls, with evidence
              <br className="hidden sm:inline" />
              behind the claims.
            </h1>
            <p className="self-stretch text-base sm:text-lg leading-7 text-[rgba(102,95,105,1)] lg:text-xl lg:leading-8">
              This page is for approved security architecture and control summaries,
              <br className="hidden sm:inline" />
              grounded in current, scoped sources. Sensitive assurance evidence belongs
              <br className="hidden sm:inline" />
              behind controlled access—not in a public architecture map.
            </p>
            <div className="inline-flex flex-wrap items-start gap-3">
              <PillButton label="Review Security Controls" variant="primary" href="#control-domains" />
              <PillButton label="Visit Trust Center" variant="secondary" href="/evidence-auditability" />
            </div>
            <a href="#" className="inline-flex items-center gap-1.5 text-base font-semibold text-[rgba(214,90,44,1)] hover:underline">
              Responsible Disclosure
              <ArrowIcon />
            </a>
            <p className="self-stretch text-sm leading-5 text-[rgba(48,17,83,1)] font-medium">
              Verified control inventory, certifications and current review dates: not supplied.
            </p>
          </div>
        </div>

        <NoticeCard
          className="w-full max-w-[1280px] min-h-[121px] justify-center"
          title="Publication notice"
          description={
            <p className="text-sm leading-6 text-[rgba(102,95,105,1)]">
              Security statements on this page must come from current governed sources. Public summaries do not supersede signed agreements, scoped audit reports or controlled
              <br className="hidden sm:inline" />
              assurance evidence.
            </p>
          }
        />
      </div>
    </section>
  );
}
