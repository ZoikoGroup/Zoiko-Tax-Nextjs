import Image from "next/image";
import Link from "next/link";
import { Container, Reveal, buttonClasses } from "./shared";
import { heroContent } from "./home-data";

export default function HeroSection() {
  const { eyebrow, title, lead, body, footnote, actions } = heroContent;

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-stone-100 to-gray-200">
      <Image
        src="/home/hero-bg.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      {/* Keeps copy readable where it overlaps the image on narrow screens. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-stone-100 via-stone-100/70 via-55% to-stone-100/0 lg:via-stone-100/40"
      />

      <Container className="flex min-h-[640px] items-center py-16 lg:min-h-[770px] lg:py-20">
        <Reveal className="flex max-w-190 flex-col gap-6">
          <p className="text-xs font-bold uppercase text-menu-accent sm:text-sm">{eyebrow}</p>
          <h1 className="text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl lg:leading-[61.2px]">
            {title}
          </h1>
          <p className="max-w-175 text-lg font-medium leading-8 text-body sm:text-xl">
            {lead}
          </p>
          <p className="max-w-175 text-base font-medium leading-6 text-ink">{body}</p>
          <div className="flex flex-wrap gap-3 px-1 py-1.5">
            {actions.map((action) => (
              <Link key={action.label} href={action.href} className={buttonClasses[action.variant]}>
                {action.label}
              </Link>
            ))}
          </div>
          <p className="text-sm font-medium text-ink">{footnote}</p>
        </Reveal>
      </Container>
    </section>
  );
}
