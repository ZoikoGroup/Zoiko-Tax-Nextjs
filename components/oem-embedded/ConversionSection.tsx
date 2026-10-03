import Image from "next/image";
import { Container, GhostDarkButton, PrimaryButton } from "./shared";

export default function ConversionSection() {
  return (
    <section className="relative w-full flex justify-center items-start overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/oem-embedded/Embedded.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <Container className="relative z-10 py-20 flex flex-col justify-start items-center gap-7">
        <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
          BUILD WITH CLEAR AUTHORITY
        </span>
        <h2 className="self-stretch text-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] lg:leading-[48.40px] tracking-tight font-['Inter',sans-serif]">
          Plan the integration. Preserve accountability.
        </h2>
        <p className="w-full max-w-[980px] text-center text-zinc-300 text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
          Explore the technical guides, confirm the exact scope and bring
          commercial questions to approved qualification. No signup or
          self-service grant is implied.
        </p>
        <div className="flex flex-wrap justify-center items-start gap-3">
          <PrimaryButton href="/integration-guides">
            Explore Integration Guides
          </PrimaryButton>
          <GhostDarkButton href="/integration-guides">
            Open API Reference
          </GhostDarkButton>
          <GhostDarkButton href="/integration-guides">
            Book a Demo
          </GhostDarkButton>
        </div>
        <p className="text-zinc-300 text-xs font-normal font-['Inter',sans-serif]">
          OEM / Embedded · /developers/integrations/oem-embedded/
        </p>
      </Container>
    </section>
  );
}
