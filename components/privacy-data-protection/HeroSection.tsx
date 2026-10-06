import Image from "next/image";
import { ArrowUpRightIcon, IMAGE_BASE, NoticeCard, PrimaryButton, TRUST_ROUTES } from "./shared";

const HERO_LINKS = [TRUST_ROUTES.residency, TRUST_ROUTES.trustCenter];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-stone-100">
      <Image
        src={`${IMAGE_BASE}/hero.webp`}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center gap-9 px-5 pb-16 pt-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:pt-7">
        <div className="flex w-full flex-col items-start gap-6">
          <span className="text-xs font-bold text-amber-700">TRUST · PRIVACY &amp; DATA PROTECTION</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[62.40px]">
            Privacy disclosures you can inspect and verify.
          </h1>
          <p className="text-base leading-7 text-neutral-600 sm:text-lg">
            Review approved ZoikoTax privacy, processing and data-protection disclosures, with direct routes to
            authoritative policies, processing terms, residency information and governed request channels.
          </p>
          <PrimaryButton label="View authoritative privacy documents" href="#documents" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {HERO_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:underline"
              >
                {link.label}
                <ArrowUpRightIcon className="size-3.5" />
              </a>
            ))}
          </div>
          <p className="text-xs text-stone-500">
            Primary action goes to the document index on this page; it is not a legal download.
          </p>
        </div>

        <NoticeCard
          title="Authority notice"
          description="Plain-language summaries are navigation aids. If a summary conflicts with an approved privacy notice, DPA or other operative legal source, the approved source controls. Do not invent rights, legal bases, roles, retention periods or transfer mechanisms."
        />
      </div>
    </section>
  );
}
