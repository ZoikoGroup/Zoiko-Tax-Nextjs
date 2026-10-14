import Image from "next/image";
import { SOURCES } from "./data";
import { IMAGE_BASE, PillButton } from "./shared";

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
        <span className="text-sm font-bold uppercase text-orange-300">Developers · Next step</span>
        <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Choose your task. Open the right source.
        </h2>
        <p className="text-base leading-7 text-zinc-300 sm:text-lg">
          Explore technical resources directly. For an enterprise-fit discussion, Book a Demo.
        </p>
        <div className="flex w-full flex-col items-stretch gap-3 pt-2 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center [&>a]:justify-center">
          <PillButton label="Explore Developer Resources" href="#resources" />
          <PillButton label="Open API Reference" href={SOURCES.api.href} variant="ghost" />
          <PillButton label="Book a Demo" href="#book-a-demo" variant="ghost" />
        </div>
      </div>
    </section>
  );
}
