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

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:py-20">
        <div className="flex w-full max-w-[714px] flex-col items-start gap-6">
          <span className="text-sm font-bold uppercase text-orange-600">Coverage Doctrine · Validation</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
            Validation means formal assessment, not production availability.
          </h1>
          <p className="text-lg leading-7 text-stone-500 sm:text-xl sm:leading-8">
            Validation is the stage in which a defined ZoikoTax capability or market scope is under formal validation.
            It does not establish production approval, deployment eligibility or a release date. Check the current
            coverage record for the specific capability and jurisdiction.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <PillButton label="View Current Coverage" href={ROUTES.verifyCoverage} />
            <a href={ROUTES.states} className="text-sm font-semibold text-zinc-900 hover:underline">
              Compare Coverage States
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
