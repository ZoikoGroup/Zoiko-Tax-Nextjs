import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, buttonClasses } from "./shared";

export default function FinalCtaSection() {
  return (
    <section id="book-a-demo" className="relative isolate overflow-hidden bg-night">
      <Image
        src="/home/glass-lens.webp"
        alt=""
        width={744}
        height={419}
        sizes="744px"
        className="absolute left-1/2 top-0 -z-10 h-full w-186 max-w-none -translate-x-1/2 object-cover opacity-60"
      />

      <Container className="flex min-h-105 flex-col items-center justify-center gap-10 py-16 text-center lg:gap-16 lg:py-22">
        <Reveal className="flex max-w-281 flex-col gap-5">
          <p className="text-sm font-bold uppercase text-apricot">
            Ready to modernize telecom fiscal compliance?
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.0]">
            See how ZoikoTax fits your telecom architecture.
          </h2>
          <p className="text-lg font-semibold leading-8 text-snow sm:text-xl">
            Explore the operating model, governed capabilities and market-pack approach that fit
            your fiscal-compliance transformation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 py-1">
          <Link href="#book-a-demo" className={`${buttonClasses.primary} min-w-48`}>
            Book a Demo
          </Link>
          <Link
            href="#coverage"
            className="inline-flex h-12 min-w-48 items-center justify-center rounded-full bg-white px-5 text-sm text-plum-900 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] transition-colors hover:bg-lilac"
          >
            View Coverage
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
