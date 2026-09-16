import { Reveal, Section, SectionIntro, StaggerGroup, StaggerItem, bgImage } from "./shared";
import { integrationPrinciples, integrations } from "./home-data";

export default function IntegrationsSection() {
  return (
    <Section id="developers" background="/home/pattern-integrations.webp" className="bg-white">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro eyebrow="Integrations" title="Fit the architecture you already operate." />
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map(({ label, icon: Icon }) => (
            <StaggerItem key={label}>
              <div
                className="flex h-full min-h-28 flex-col gap-3 rounded-2xl bg-[length:100%_100%] bg-no-repeat p-4"
                style={bgImage("/home/card-integration-bg.webp")}
              >
                <span className="flex size-8 items-center justify-center rounded-[10px] bg-lilac">
                  <Icon aria-hidden className="size-4 text-menu-accent" strokeWidth={2} />
                </span>
                <span className="text-sm text-ink">{label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <div className="flex flex-col gap-8 rounded-3xl bg-plum-900 p-6 sm:p-10 lg:flex-row lg:gap-12">
            <div className="flex flex-1 flex-col gap-4">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Built for controlled integration.
              </h2>
              <p className="text-base leading-6 text-lilac-400">{integrationPrinciples}</p>
            </div>
            <div className="flex flex-col gap-3.5 rounded-2xl bg-ink p-6 lg:w-120">
              <p className="font-mono text-xs text-apricot">ILLUSTRATIVE EXAMPLE</p>
              <pre className="overflow-x-auto font-mono text-xs leading-6 text-lilac-200">
                {`request = {
  intent: "determine",
  facts: "governed payload",
  evidence: "required"
}`}
              </pre>
              <p className="text-xs text-lilac-400">
                Non-committing example. No real endpoint or credentials.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
