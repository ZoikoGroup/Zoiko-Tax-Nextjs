import Image from "next/image";
import { IMAGE_BASE, OUTBOUND_NOTE, PillButton, ROUTES } from "./shared";

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
          Evaluate your exact capability and coverage scope.
        </h2>
        <p className="text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
          Confirm the current source and restrictions before planning adoption. A fit discussion is not Pilot
          authorization.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <PillButton label="View Current Coverage" href={ROUTES.verifyCoverage} arrow={false} />
          <PillButton label="Book a Demo" href={ROUTES.demo} variant="secondary" arrow={false} />
        </div>
        <p className="max-w-[380px] pt-2 text-sm leading-5 text-zinc-300">{OUTBOUND_NOTE}</p>
      </div>
    </section>
  );
}
