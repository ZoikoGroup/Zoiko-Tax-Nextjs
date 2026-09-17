import Image from "next/image";
import { Reveal, Section, bgImage } from "./shared";

const headquarters = [
  { label: "Global HQ", city: "Sacramento, California", country: "United States" },
  { label: "European HQ", city: "London W1W 5PF", country: "United Kingdom" },
];

export default function CompanySection() {
  return (
    <Section background="/about-us/pattern-company.webp" className="bg-white">
      <div className="flex flex-col items-center gap-12 text-center">
        <Reveal className="flex flex-col gap-4">
          <p className="text-sm font-bold uppercase text-menu-accent">The Company</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            ZoikoTax™ is a trading name of Zoiko Tech Inc.
          </h2>
        </Reveal>

        <Reveal className="w-full">
          {/* The card artwork has a wide aspect ratio, so narrow screens use a plain card instead of stretching it. */}
          <div className="relative isolate flex flex-col items-center overflow-hidden rounded-[28px] bg-mauve px-6 py-12 shadow-[0_8px_24px_0_rgba(0,0,0,0.06)] outline outline-1 -outline-offset-1 outline-line sm:px-16 sm:py-18 md:overflow-visible md:rounded-none md:bg-transparent md:shadow-none md:outline-0">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 hidden bg-[length:100%_100%] bg-no-repeat md:block"
              style={bgImage("/about-us/card-company-bg.webp")}
            />
            <Image src="/layout/zoikotax-logo.png" alt="ZoikoTax" width={176} height={29} className="h-7 w-auto" />
            <p className="mt-9 max-w-2xl text-base font-semibold text-[#5b4a6e] sm:text-lg">
              ZoikoTax™ is a trading name of Zoiko Tech Inc., a Zoiko Group company.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-[26px] text-ink-muted/80">
              ZoikoTax is being developed within the technology portfolio of Zoiko Group with the
              objective of providing enterprise-grade fiscal infrastructure for communications
              businesses.
            </p>
            <dl className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-6">
              {headquarters.map((hq) => (
                <div key={hq.label} className="flex flex-col gap-1">
                  <dt className="text-xs font-bold uppercase text-menu-accent/90">{hq.label}</dt>
                  <dd className="text-base text-ink/80">{hq.city}</dd>
                  <dd className="text-sm text-ink-muted/80">{hq.country}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
