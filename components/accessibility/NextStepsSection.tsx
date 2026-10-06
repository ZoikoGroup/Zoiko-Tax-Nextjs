import Image from "next/image";
import { IMAGE_BASE, PillButton, ROUTES } from "./shared";

const LINKS = [
  { label: "Security", href: ROUTES.security },
  { label: "Privacy", href: ROUTES.privacy },
];

export default function NextStepsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-violet-950">
      <Image
        src={`${IMAGE_BASE}/next-steps-bg.webp`}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-5 py-16 text-center sm:px-8 lg:px-20 lg:py-24">
        <span className="text-xs font-bold text-orange-300">CONTINUE WITH CLARITY</span>
        <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Start with the scope. Follow the evidence.
        </h2>
        <p className="max-w-[860px] text-base leading-7 text-zinc-300 sm:text-xl sm:leading-8">
          Review statement requirements and limitations, find reporting guidance, then explore the wider trust context.
          Accessibility information should never be gated by sales.
        </p>

        {/* Stacked, equal-width buttons on phones; a centered wrapping row from sm up. */}
        <div className="flex w-full flex-col gap-3 pt-2 *:justify-center sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <PillButton label="View accessibility statement" href="#statement" />
          <PillButton label="Read reporting guidance" href="#report" variant="dark" />
          <PillButton label="Trust Center" href={ROUTES.trustCenter} variant="dark" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2">
          {LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-base text-white hover:underline">
              {link.label} →
            </a>
          ))}
          <p className="w-full text-sm text-zinc-300 sm:w-auto">
            Considering the platform? Get a demo after your diligence.
          </p>
        </div>
      </div>
    </section>
  );
}
