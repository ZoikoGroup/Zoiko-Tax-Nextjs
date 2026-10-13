import Image from "next/image";
import { IMAGE_BASE, PillButton, ROUTES } from "./shared";

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
        <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Confirm supported scope before planning delivery.
        </h2>
        <p className="text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
          Start with the governed capability-specific record. Research is not a basis for live delivery or customer
          access.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <PillButton label="View Current Coverage" href={ROUTES.verifyCoverage} />
          <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" arrow={false} />
        </div>
        <p className="pt-2 text-sm leading-5 text-zinc-300">
          Coverage verification and approved-destination guidance are shown above. Demo scope must be separately
          confirmed; it is not Research access.
        </p>
      </div>
    </section>
  );
}
