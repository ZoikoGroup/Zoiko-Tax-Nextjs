import { Reveal, Section, SectionIntro, StaggerGroup, StaggerItem } from "./shared";
import { trustPrinciples } from "./home-data";

export default function TrustArchitectureSection() {
  return (
    <Section id="trust" background="/home/trust-architecture-bg.webp" className="bg-[#3a1d5c]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro
            tone="dark"
            eyebrow="Trust architecture"
            title="Control is an architectural property—not a badge."
            description="A disciplined foundation for sensitive fiscal operations."
          />
        </Reveal>

        <StaggerGroup className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPrinciples.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="flex h-full flex-col gap-3 rounded-xl bg-[#2b0a4f]/95 p-5 outline outline-1 -outline-offset-1 outline-white/10">
                <Icon aria-hidden className="size-6 text-apricot" strokeWidth={1.75} />
                <h3 className="text-lg leading-6 text-white">{title}</h3>
                <p className="text-xs leading-5 text-white/70">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
