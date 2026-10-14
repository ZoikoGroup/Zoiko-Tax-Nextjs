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
      {/* On narrow screens the crop lands on bright parts of the photo, so darken it for legible text. */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#1f0a3a]/70 lg:hidden" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 py-16 text-center sm:px-8 lg:px-20 lg:py-24">
        <span className="text-sm font-bold uppercase text-orange-300">The right next step</span>
        <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Choose the route that fits your question.
        </h2>
        <p className="max-w-[780px] text-base leading-7 text-zinc-300 sm:text-lg">
          See the product, explore the documentation or ask a general question. Sales is not the universal inbox for
          support, status or security.
        </p>
        <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center [&>a]:justify-center">
          <PillButton label="Book a Demo" href={ROUTES.demo} />
          <PillButton label="Documentation" href={ROUTES.documentation} variant="ghost" />
          <PillButton label="General Contact" href={ROUTES.contact} variant="ghost" />
        </div>
      </div>
    </section>
  );
}
