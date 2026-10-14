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

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:py-16">
        <div className="flex w-full max-w-[760px] flex-col items-start gap-6">
          <span className="text-sm font-bold uppercase text-orange-600">Coverage Doctrine</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
            Research is exploration, not production coverage.
          </h1>
          <p className="max-w-[700px] text-lg font-medium leading-7 text-neutral-600 sm:text-xl sm:leading-8">
            Research is a stage of evaluation. It is not marketed as a production capability, and it does not guarantee
            a pilot, release, customer access, tax result, or geographic availability.
          </p>
          <div className="flex w-full max-w-[700px] flex-col gap-2.5 rounded-lg border-l-[3px] border-orange-600 bg-neutral-50/90 px-4 py-3">
            <p className="text-base font-bold text-zinc-900">Research — not production</p>
            <p className="text-base leading-6 text-stone-500">Research stage, not marketed as production</p>
          </div>
          <div className="flex flex-wrap items-start gap-3">
            <PillButton label="View Current Coverage" href={ROUTES.verifyCoverage} />
            <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" />
          </div>
          <p className="max-w-[670px] text-sm leading-5 text-zinc-900">
            Verify coverage in the section below. Demo conversations concern separately confirmed supported scope, not
            Research access.
          </p>
        </div>
      </div>
    </section>
  );
}
