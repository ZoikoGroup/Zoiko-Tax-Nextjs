import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, buttonClasses } from "./shared";
import { heroContent } from "./about-data";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-stone-100 to-gray-200">
      <Image
        src="/about-us/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      {/* Keeps copy readable where it overlaps the image on narrow screens. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-100 via-stone-100/70 via-55% to-stone-100/0 lg:via-stone-100/30"
      />

      <Container className="flex min-h-[640px] items-center py-16 lg:min-h-[770px] lg:py-20">
        <Reveal className="flex max-w-190 flex-col gap-7">
          <p className="text-xs font-bold uppercase text-menu-accent">{heroContent.eyebrow}</p>
          <h1 className="text-[2rem] font-bold leading-[1.1] text-ink min-[400px]:text-4xl sm:text-5xl lg:text-6xl lg:leading-[60.32px]">
            {heroContent.title}
          </h1>
          <p className="max-w-170 text-base leading-7 text-stone-900 sm:text-lg">
            {heroContent.body}
          </p>
          <div className="flex flex-wrap items-center gap-3 py-2">
            <Link href="/#platform" className={`${buttonClasses.primary} px-6 text-base font-semibold`}>
              Explore the Platform
            </Link>
            <Link href="/#coverage" className={`${buttonClasses.secondary} text-base font-medium`}>
              View Current Coverage
            </Link>
            <Link
              href="#book-a-demo"
              className="inline-flex h-12 items-center px-4 text-base font-semibold text-yellow-950 transition-colors hover:text-copper"
            >
              Book a Demo →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
