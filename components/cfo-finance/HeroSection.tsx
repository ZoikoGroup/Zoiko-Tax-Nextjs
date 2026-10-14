import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { DemoButton, IMAGE_BASE, ROUTES } from "./shared";

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

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 pb-16 pt-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:pt-8">
        <div className="flex w-full max-w-[724px] flex-col items-start gap-5">
          <span className="text-sm font-bold uppercase text-orange-600">CFO &amp; Finance</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:leading-[55.12px]">
            Connect liability, recovery and reconciliation — with evidence.
          </h1>
          <p className="text-base leading-7 text-stone-500 sm:text-lg">
            ZoikoTax connects governed telecom fiscal outcomes with liability, recovery, accrual, filing/remittance
            positions, reconciliation, accounting-control outputs and replayable evidence — without replacing the
            customer ERP or general ledger.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <DemoButton />
            <a
              href={ROUTES.platform}
              className="inline-flex items-center rounded-[999px] bg-white/70 px-6 py-3.5 text-sm font-bold text-violet-950 outline -outline-offset-1 outline-zinc-400 transition-colors hover:bg-white"
            >
              Explore the Platform
            </a>
            <a href={ROUTES.coverage} className="text-sm font-bold text-violet-950 hover:underline">
              View Current Coverage →
            </a>
          </div>
          <div className="flex items-start gap-3 rounded-[10px] bg-white/60 p-3.5 outline -outline-offset-1 outline-white sm:items-center">
            <BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-orange-600" strokeWidth={2} />
            <p className="flex-1 text-xs font-semibold leading-5 text-zinc-900">
              Evidence by design: preserve the source, rule/version, facts, approvals and position lineage behind
              consequential finance-control outcomes.
            </p>
          </div>
          <p className="text-xs leading-4 text-stone-500">
            Availability varies by jurisdiction and capability; current production scope is governed through approved
            country and regulatory packs.
          </p>
        </div>
      </div>
    </section>
  );
}
