import Image from "next/image";
import { IMAGE_BASE, PillButton, ROUTES } from "./shared";

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
      {/* Extra wash on small screens, where the copy sits over the busy right side of the photo. */}
      <div aria-hidden="true" className="absolute inset-0 bg-stone-100/75 lg:hidden" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 pb-16 pt-14 sm:px-8 lg:min-h-[860px] lg:px-20 lg:pt-7">
        <div className="flex w-full max-w-[1009px] flex-col items-start gap-5">
          <span className="text-sm font-bold uppercase text-orange-600">Revenue Assurance</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:leading-[54.08px]">
            Find fiscal discrepancies before they become unexplained outcomes.
          </h1>
          <p className="text-base font-medium leading-7 text-stone-500 sm:text-lg">
            ZoikoTax helps Revenue Assurance teams identify missing tax/fees, classification anomalies and
            reconciliation breaks by connecting governed comparison, investigation, reconciliation and replayable
            evidence across the telecom fiscal lifecycle.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton label="Book a Demo" href={ROUTES.demo} />
            <PillButton label="Explore Shadow Assurance" href={ROUTES.shadowAssurance} variant="secondary" />
            <a href={ROUTES.coverage} className="text-sm font-semibold text-violet-950 hover:underline">
              View Current Coverage →
            </a>
          </div>
          <p className="text-sm font-medium leading-5 text-zinc-900">
            Compare governed observations without changing production billing or filing, surface cross-stage
            variances, and preserve the source/version context behind consequential outcomes.
          </p>
          <p className="text-xs leading-4 text-stone-500">
            A discrepancy is an investigation signal, not independent proof of error or legal correctness;
            availability varies by jurisdiction and capability.
          </p>
        </div>
      </div>
    </section>
  );
}
