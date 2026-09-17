import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, buttonClasses } from "./shared";

export default function FinalCtaSection() {
  return (
    <section id="book-a-demo" className="relative isolate overflow-hidden bg-night">
      <Image
        src="/about-us/cta-arc.webp"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-top"
      />
      <Image
        src="/about-us/cta-bubble.webp"
        alt=""
        width={369}
        height={382}
        className="absolute left-1/2 top-1/2 -z-10 hidden w-80 -translate-x-1/2 -translate-y-[35%] opacity-80 md:block"
      />

      <Container className="flex min-h-[540px] flex-col items-center justify-center gap-10 py-20 text-center">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <p className="text-sm font-bold uppercase text-apricot">
            Build the next fiscal operating model
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            See what ZoikoTax could change in your telecom operation.
          </h2>
          <p className="text-base leading-8 text-snow sm:text-lg">
            Explore the operating model, governed capabilities and market-pack approach that fit
            your fiscal-compliance transformation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-3">
          <Link href="#book-a-demo" className={`${buttonClasses.primary} px-7 text-base`}>
            Book a Demo
          </Link>
          <Link
            href="/#platform"
            className="inline-flex h-13 items-center rounded-full bg-white px-7 text-base text-ink shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] transition-colors hover:bg-lilac"
          >
            Explore the Platform
          </Link>
          <Link
            href="/#coverage"
            className="inline-flex h-12 items-center px-4 text-base font-semibold text-white transition-colors hover:text-apricot"
          >
            View Current Coverage →
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
