import Image from "next/image";
import { IMAGE_BASE, PillButton, ROUTES } from "./shared";

const LINKS = [
  { label: "Shadow Assurance", href: ROUTES.shadowAssurance },
  { label: "Reconciliation", href: ROUTES.reconciliation },
  { label: "Evidence & Replay", href: ROUTES.evidence },
  { label: "Coverage", href: ROUTES.coverage },
  { label: "Trust Center", href: ROUTES.trustCenter },
  { label: "Platform Overview", href: ROUTES.platform },
  { label: "Tax & Regulatory Compliance", href: ROUTES.taxRegulatory },
  { label: "CFO & Finance", href: ROUTES.cfoFinance },
];

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1f0a3a]">
      <Image
        src={`${IMAGE_BASE}/cta-bg.webp`}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 py-16 text-center sm:px-8 lg:px-20 lg:py-24">
        <span className="text-sm font-bold uppercase text-orange-300">See the control path</span>
        <h2 className="max-w-[1000px] text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          See how ZoikoTax turns fiscal discrepancies into governed, replayable evidence.
        </h2>
        <p className="max-w-[800px] text-base leading-7 text-zinc-300">
          Explore a Revenue Assurance architecture that preserves source context, review boundaries and uncertainty
          from comparison through reconciliation.
        </p>
        <div className="pt-2">
          <PillButton label="Book a Demo" href={ROUTES.demo} />
        </div>
        <nav aria-label="Related pages" className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-zinc-200 underline hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
