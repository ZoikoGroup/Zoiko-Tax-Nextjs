import Image from "next/image";
import { IMAGE_BASE, NoticeCard, PillButton, ROUTES } from "./shared";

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
      <div aria-hidden="true" className="absolute inset-0 bg-stone-100/70 lg:hidden" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col justify-center gap-10 px-5 pb-14 pt-12 sm:px-8 lg:min-h-[804px] lg:gap-12 lg:px-20 lg:pt-8">
        <div className="flex w-full max-w-[744px] flex-col items-start gap-6">
          <span className="text-sm font-bold text-amber-700">TRUST · ACCESSIBILITY</span>
          <h1 className="text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[62.40px]">
            Accessibility you can evaluate, not just assume.
          </h1>
          <p className="text-lg leading-7 text-stone-500 sm:text-xl sm:leading-8">
            Start with the statement. Check its scope. Understand limitations and the evidence behind each claim.
          </p>
          <p className="text-base leading-7 text-stone-500">
            This page explains accessibility design requirements and where approved product evidence belongs. An
            approved conformance statement, evaluated scope and known-limitations inventory are not supplied in this
            view.
          </p>
          <div className="flex flex-wrap items-start gap-3">
            <PillButton label="View accessibility statement" href="#statement" />
            <PillButton label="Report an accessibility issue" href="#report" variant="secondary" />
          </div>
          <a href={ROUTES.trustCenter} className="text-base font-semibold text-violet-950 hover:underline">
            Explore the Trust Center →
          </a>
        </div>

        <NoticeCard title="A design target is not a conformance claim.">
          Accessibility design goals, implementation requirements, test results, formal conformance statements and
          legal-compliance claims are different. Production copy must identify which type of statement is being made
          and its exact approved scope.
        </NoticeCard>
      </div>
    </section>
  );
}
