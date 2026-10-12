import Image from "next/image";
import { DemoButton, IMAGE_BASE, ROUTES } from "./shared";

const LINKS = [
  { label: "Platform", href: ROUTES.platform },
  { label: "Coverage", href: ROUTES.coverage },
  { label: "Reconciliation", href: ROUTES.reconciliation },
  { label: "Evidence & Replay", href: ROUTES.evidence },
  { label: "Trust Center", href: ROUTES.trustCenter },
  { label: "Developers", href: ROUTES.developers },
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
        <span className="text-sm font-bold uppercase text-orange-300">
          See the finance-control chain in your architecture
        </span>
        <h2 className="max-w-[760px] text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[52px]">
          Connect liability, recovery and reconciliation — and keep the evidence that explains why.
        </h2>
        <p className="max-w-[820px] text-base leading-7 text-zinc-300">
          Review your current fiscal positions, finance-system boundaries, reconciliation states and evidence needs
          with a capability-specific ZoikoTax walkthrough.
        </p>
        <div className="pt-2">
          <DemoButton />
        </div>
        <nav aria-label="Related pages" className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-2">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-semibold text-zinc-200 hover:text-white hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
