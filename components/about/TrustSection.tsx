import Link from "next/link";
import {
  IconCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  introDescription,
} from "./shared";
import { trustControls } from "./about-data";

export default function TrustSection() {
  return (
    <Section
      id="trust"
      background="/about-us/trust-bg.webp"
      className="bg-[#3b1a5c] bg-blend-soft-light"
    >
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            tone="dark"
            eyebrow="Trust architecture"
            title="Built for consequential decisions."
            description="A disciplined foundation for sensitive fiscal operations."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <StaggerGroup className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
          {trustControls.map((control) => (
            <StaggerItem key={control.title}>
              <IconCard
                {...control}
                className="rounded-2xl bg-plum-950/95 p-7 outline outline-1 -outline-offset-1 outline-white/10"
                iconBoxClassName="size-11 rounded-[10px] bg-white/10"
                iconClassName="size-5 text-apricot"
                titleClassName="mt-6 text-lg font-semibold text-white"
                descriptionClassName="mt-3 text-[13px] leading-[21px] text-white/75"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="flex justify-center">
          <Link
            href="#"
            className="inline-flex h-13 items-center rounded-full bg-white px-7 text-base font-semibold text-plum-900 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] transition-colors hover:bg-lilac"
          >
            Visit the Trust Center →
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
