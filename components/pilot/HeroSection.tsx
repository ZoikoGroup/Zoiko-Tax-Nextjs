import Image from "next/image";
import { IMAGE_BASE, OUTBOUND_NOTE, PillButton, ROUTES } from "./shared";

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

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:py-20">
        <div className="flex w-full max-w-[760px] flex-col items-start gap-6">
          <span className="text-sm font-bold uppercase text-orange-600">Coverage Doctrine · Pilot</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
            Pilot means controlled, limited deployment.
          </h1>
          <p className="max-w-[700px] text-lg font-medium leading-7 text-neutral-600 sm:text-xl sm:leading-8">
            Pilot identifies a restricted deployment stage for a specifically defined ZoikoTax capability. It does not
            establish general availability or production readiness. Confirm the exact scope and current status before
            planning adoption.
          </p>
          <div className="flex flex-wrap items-start gap-3 py-1.5">
            <PillButton label="View Current Coverage" href={ROUTES.verifyCoverage} arrow={false} />
            <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" />
          </div>
          <p className="text-sm leading-5 text-stone-500">{OUTBOUND_NOTE}</p>
          <a
            href={ROUTES.stages}
            className="inline-flex h-11 items-center text-base font-semibold text-orange-800 underline hover:text-orange-900"
          >
            Compare Coverage Stages ↓
          </a>
        </div>
      </div>
    </section>
  );
}
