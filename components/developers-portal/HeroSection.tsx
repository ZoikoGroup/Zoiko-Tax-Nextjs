import Image from "next/image";
import { Compass } from "lucide-react";
import { SOURCES } from "./data";
import { IMAGE_BASE, PillButton } from "./shared";

export default function HeroSection() {
  return (
    <>
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

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[770px] lg:px-20 lg:pb-16 lg:pt-9">
          <div className="flex w-full max-w-[760px] flex-col items-start gap-6">
            <span className="text-sm font-bold uppercase text-orange-600">Developers - Developer Portal</span>
            <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[61.20px]">
              Build with ZoikoTax from the right source of truth.
            </h1>
            <p className="max-w-[700px] text-lg font-medium leading-7 text-neutral-600 sm:text-xl sm:leading-8">
              Explore source-governed resources for APIs, SDKs, events, batch workflows, implementation guides, sandbox
              testing and enterprise integration paths.
            </p>
            <p className="text-base font-medium leading-6 text-zinc-900">
              Exact production contracts remain governed by their owning technical sources.
            </p>
            <div className="flex flex-wrap items-start gap-3">
              <PillButton label="Explore Developer Resources" href="#resources" />
              <PillButton label="Open API Reference" href={SOURCES.api.href} variant="secondary" />
            </div>
            <a href="#book-a-demo" className="text-sm text-stone-500 hover:text-zinc-900 hover:underline">
              Discuss enterprise fit: Book a Demo →
            </a>
          </div>
        </div>
      </section>

      <section className="w-full bg-purple-50">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-12 sm:px-8 lg:flex-row lg:gap-10 lg:px-20">
          <div className="flex flex-col gap-3.5 lg:w-72 lg:shrink-0">
            <Compass aria-hidden="true" className="size-5 text-orange-300" strokeWidth={1.6} />
            <h2 className="text-2xl font-bold leading-8 text-zinc-900 sm:text-3xl">
              A public gateway. Not a runtime console.
            </h2>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <p className="text-lg leading-8 text-zinc-900 sm:text-xl">
              Developer Portal is a public discovery and implementation-orientation surface. It does not by itself issue
              credentials, create environments, establish entitlements, or prove production availability.
            </p>
            <p className="text-sm leading-5 text-stone-500">
              Developer Overview and Developer Portal share the existing /developers/ authority. Resources remain owned
              by their canonical technical sources.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
