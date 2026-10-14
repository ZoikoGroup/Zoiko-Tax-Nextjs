import Image from "next/image";
import { IMAGE_BASE, PillButton, ROUTES, RouteLink } from "./shared";

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

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center gap-10 px-5 py-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:pb-12 lg:pt-7">
        <div className="flex w-full max-w-[710px] flex-col items-start gap-6">
          <span className="text-sm font-bold uppercase text-orange-600">Offices &amp; Connect · Sales Inquiry</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
            Sales Inquiry
          </h1>
          <p className="max-w-[660px] text-lg font-medium leading-7 text-neutral-600 sm:text-xl sm:leading-8">
            Have a commercial question about evaluating ZoikoTax? Start here. If you want a product demo, use Book a
            Demo. For support, current service status, technical documentation, coverage or security information, use
            the specialist routes shown below.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <PillButton label="Start a sales inquiry" href={ROUTES.intake} arrow={false} />
            <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" />
          </div>
          <p className="text-sm leading-5 text-stone-500">
            Sales intake is not activated in this design. An approved workflow is required.
          </p>
          <div className="flex max-w-[660px] flex-col gap-2 border-t border-stone-300 pt-5">
            <p className="text-base font-bold leading-6 text-zinc-900">
              Sales Inquiry is for commercial evaluation questions.
            </p>
            <p className="text-base leading-6 text-stone-500">
              Demo requests use Book a Demo. Product or account help belongs with Customer Support. Coverage, Status and
              Trust remain separate authorities.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-neutral-50/90 px-5 py-4 outline -outline-offset-1 outline-zinc-300 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="text-base font-semibold text-zinc-900">Not a commercial question?</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:contents">
            <RouteLink label="Customer Support" href={ROUTES.support} />
            <RouteLink label="Documentation" href={ROUTES.documentation} />
            <RouteLink label="General Contact" href={ROUTES.contact} />
          </div>
        </div>
      </div>
    </section>
  );
}
